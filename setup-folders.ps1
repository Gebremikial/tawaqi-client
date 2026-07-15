$root = $PSScriptRoot
$dirs = @(
  "src/assets",
  "src/components",
  "src/features/auth",
  "src/features/feed",
  "src/features/profile",
  "src/features/jobs",
  "src/features/connections",
  "src/features/messages",
  "src/features/notifications",
  "src/features/search",
  "src/features/analytics",
  "src/features/admin",
  "src/hooks",
  "src/lib",
  "src/store",
  "src/types"
)

foreach ($dir in $dirs) {
  $fullPath = Join-Path $root $dir
  New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
}

Write-Host "Created folders successfully."
