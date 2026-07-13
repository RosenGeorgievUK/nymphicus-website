# Sync MCP registry icons from platform CDN fallbacks (_icons.py) into public/branding/mcp-icons/
$ErrorActionPreference = "Continue"
$dest = Join-Path $PSScriptRoot "..\public\branding\mcp-icons"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$icons = [ordered]@{
  "hubspot.png"      = "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png"
  "intercom.png"     = "https://www.google.com/s2/favicons?domain=intercom.com&sz=128"
  "stripe.png"       = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s"
  "notion.png"       = "https://www.google.com/s2/favicons?domain=notion.so&sz=128"
  "gmail.png"        = "https://www.google.com/s2/favicons?domain=mail.google.com&sz=128"
  "google-drive.png" = "https://www.google.com/s2/favicons?domain=drive.google.com&sz=128"
  "shopify.png"      = "https://www.google.com/s2/favicons?domain=shopify.com&sz=128"
  "zapier.png"       = "https://www.google.com/s2/favicons?domain=zapier.com&sz=128"
  "cloudflare.png"   = "https://www.google.com/s2/favicons?domain=cloudflare.com&sz=128"
}

foreach ($entry in $icons.GetEnumerator()) {
  $out = Join-Path $dest $entry.Key
  if (Test-Path $out) {
    Write-Host "Skip $($entry.Key) (exists)"
    continue
  }
  Write-Host "Downloading $($entry.Key)..."
  try {
    Invoke-WebRequest -Uri $entry.Value -OutFile $out -UseBasicParsing
    Start-Sleep -Milliseconds 400
  } catch {
    Write-Warning "Failed $($entry.Key): $_"
  }
}

Write-Host "Done."
