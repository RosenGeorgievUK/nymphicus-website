param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$NextArgs
)

$port = 3000

foreach ($arg in $NextArgs) {
    if ($arg -eq "-p" -or $arg -eq "--port") {
        continue
    }
    if ($arg -match '^\d+$' -and $NextArgs -contains "-p") {
        $port = [int]$arg
        break
    }
}

$connections = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
if ($connections) {
    $pids = $connections | Select-Object -ExpandProperty OwningProcess -Unique | Where-Object { $_ -gt 0 }
    foreach ($procId in $pids) {
        Write-Host "Stopping process $procId on port $port..."
        Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
    }
    Start-Sleep -Seconds 1
}

# Fallback: netstat in case Get-NetTCPConnection misses listeners
$netstatPids = netstat -ano | Select-String "LISTENING" | Select-String ":$port\s" | ForEach-Object {
    ($_ -split '\s+')[-1]
} | Where-Object { $_ -match '^\d+$' -and [int]$_ -gt 0 } | Select-Object -Unique

foreach ($procId in $netstatPids) {
    if (-not (Get-Process -Id $procId -ErrorAction SilentlyContinue)) { continue }
    Write-Host "Stopping process $procId on port $port (netstat)..."
    Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
}

if ($NextArgs.Count -gt 0) {
    & npx next dev @NextArgs
} else {
    & npx next dev -p $port
}
