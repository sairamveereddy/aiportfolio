param(
  [int]$Port = 4173
)

$StaticRoot = Join-Path (Get-Location).Path "public"
$Root = if (Test-Path -LiteralPath $StaticRoot -PathType Container) {
  $StaticRoot
} else {
  (Get-Location).Path
}
$Prefix = "http://localhost:$Port/"

$ContentTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".txt" = "text/plain; charset=utf-8"
}

$Listener = [System.Net.HttpListener]::new()
$Listener.Prefixes.Add($Prefix)
$Listener.Start()

Write-Host "Portfolio site running at $Prefix"
Write-Host "Press Ctrl+C to stop."

try {
  while ($Listener.IsListening) {
    $Context = $Listener.GetContext()
    $RequestPath = [System.Uri]::UnescapeDataString($Context.Request.Url.AbsolutePath)
    if ($RequestPath -eq "/") {
      $RequestPath = "/index.html"
    }

    $RelativePath = $RequestPath.TrimStart("/") -replace "/", [System.IO.Path]::DirectorySeparatorChar
    $FilePath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($Root, $RelativePath))
    $Response = $Context.Response

    if (-not $FilePath.StartsWith($Root) -or -not (Test-Path -LiteralPath $FilePath -PathType Leaf)) {
      $Bytes = [System.Text.Encoding]::UTF8.GetBytes("Not found")
      $Response.StatusCode = 404
      $Response.ContentType = "text/plain; charset=utf-8"
      $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
      $Response.Close()
      continue
    }

    $Extension = [System.IO.Path]::GetExtension($FilePath)
    $Response.ContentType = if ($ContentTypes.ContainsKey($Extension)) {
      $ContentTypes[$Extension]
    } else {
      "application/octet-stream"
    }

    $Bytes = [System.IO.File]::ReadAllBytes($FilePath)
    $Response.ContentLength64 = $Bytes.Length
    $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
    $Response.Close()
  }
} finally {
  $Listener.Stop()
  $Listener.Close()
}
