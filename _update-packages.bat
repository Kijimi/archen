@echo off
setlocal
echo This will update the bot's packages. Though rare, it can break backwards compatibility so make sure to read changes to the updated packages.\n
:PROMPT
SET /P AREYOUSURE=Are you sure you want to update? y/[n]
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END

echo Updating packages, please do not close this terminal...

npm update && npm ci

:END
endlocal