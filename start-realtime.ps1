param(
  [string]$OpenAIKey = $env:OPENAI_API_KEY,
  [int]$Port = 4174
)

if (-not $OpenAIKey) {
  Write-Host "Missing OpenAI API key." -ForegroundColor Yellow
  Write-Host "Run this with:"
  Write-Host '.\start-realtime.ps1 -OpenAIKey "sk-your-real-key-here"'
  exit 1
}

$env:OPENAI_API_KEY = $OpenAIKey
$env:PORT = "$Port"

Write-Host "Starting realtime voice portfolio on http://localhost:$Port" -ForegroundColor Green
Write-Host "Keep this PowerShell window open while testing."
npm run dev
