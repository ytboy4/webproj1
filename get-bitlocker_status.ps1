$obj = manage-bde -status c:
$protection = $obj[11]

Set-ItemProperty -Path HKLM:Software\Centrastage -Name "custom8" -Value $protection