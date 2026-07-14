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

$connections = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
if ($connections) {
    $pids = $connections | Select-Object -ExpandProperty OwningProcess -Unique | Where-Object { $_ -gt 0 }
    foreach ($procId in $pids) {
        Write-Host "Stopping process $procId on port $Port..."
        Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
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
}

if ($Clean -and (Test-Path ".next")) {
    Write-Host "Clearing .next cache..."
    Remove-Item -Recurse -Force ".next"
}

Write-Host "Starting Next.js on port $Port..."
& npx next dev -p $Port
