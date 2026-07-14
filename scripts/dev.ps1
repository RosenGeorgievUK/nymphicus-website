param(
    [Alias("p")]
    [int]$Port = 3000,
    [switch]$Clean,
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$NextArgs
)

# npm run dev -- -p 3001 may pass "-p" as a PowerShell switch; read port from remaining args.
if ($Port -eq 3000 -and $NextArgs.Count -gt 0) {
    for ($i = 0; $i -lt $NextArgs.Count; $i++) {
        $arg = $NextArgs[$i]
        if (($arg -eq "-p" -or $arg -eq "--port") -and $i + 1 -lt $NextArgs.Count) {
            $maybePort = $NextArgs[$i + 1]
            if ($maybePort -match '^\d+$') {
                $Port = [int]$maybePort
                break
            }
        }
        if ($arg -match '^--port=(\d+)$') {
            $Port = [int]$Matches[1]
            break
        }
    }
}

$killedListener = $false

function Stop-NextDevProcesses {
    param([int]$ExceptPid = 0)
    Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" -ErrorAction SilentlyContinue |
        Where-Object { $_.CommandLine -match "next dev" -and $_.ProcessId -ne $ExceptPid } |
        ForEach-Object {
            Write-Host "Stopping Next.js dev process $($_.ProcessId)..."
            Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue
            $script:killedListener = $true
        }
}

# Stop every running Next.js dev server so only one writes to .next
Stop-NextDevProcesses

$connections = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
if ($connections) {
  $pids = $connections | Select-Object -ExpandProperty OwningProcess -Unique | Where-Object { $_ -gt 0 }
  foreach ($procId in $pids) {
    Write-Host "Stopping process $procId on port $Port..."
    Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
    $killedListener = $true
  }
  Start-Sleep -Seconds 1
}

# Fallback: netstat in case Get-NetTCPConnection misses listeners
$netstatPids = netstat -ano | Select-String "LISTENING" | Select-String ":$Port\s" | ForEach-Object {
    ($_ -split '\s+')[-1]
} | Where-Object { $_ -match '^\d+$' -and [int]$_ -gt 0 } | Select-Object -Unique

foreach ($procId in $netstatPids) {
    if (-not (Get-Process -Id $procId -ErrorAction SilentlyContinue)) { continue }
    Write-Host "Stopping process $procId on port $Port (netstat)..."
    Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
    $killedListener = $true
}

# Also free the default port if we're on an alternate (avoids two servers sharing .next)
if ($Port -ne 3000) {
    $defaultPortPids = netstat -ano | Select-String "LISTENING" | Select-String ":3000\s" | ForEach-Object {
        ($_ -split '\s+')[-1]
    } | Where-Object { $_ -match '^\d+$' -and [int]$_ -gt 0 } | Select-Object -Unique
    foreach ($procId in $defaultPortPids) {
        if (-not (Get-Process -Id $procId -ErrorAction SilentlyContinue)) { continue }
        Write-Host "Stopping process $procId on port 3000..."
        Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
        $killedListener = $true
    }
}

# Always clear .next before dev — prevents stale webpack chunk errors on Windows.
if (Test-Path ".next") {
    Write-Host "Clearing .next cache..."
    Remove-Item -Recurse -Force ".next"
}

Write-Host "Starting Next.js on port $Port..."
& npx next dev -p $Port
