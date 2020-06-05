Set WshShell = CreateObject("WScript.Shell") 
WshShell.Run chr(34) & "server.bat" & Chr(34), 0
WshShell.Run chr(34) & "front.bat" & Chr(34), 0
Set WshShell = Nothing