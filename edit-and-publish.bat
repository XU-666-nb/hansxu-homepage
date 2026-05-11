@echo off
cd /d "E:\个人主页"

git status --short > "%TEMP%\homepage_git_status.txt"
for %%A in ("%TEMP%\homepage_git_status.txt") do set STATUS_SIZE=%%~zA

if "%STATUS_SIZE%"=="0" (
  echo No changes to publish.
  del "%TEMP%\homepage_git_status.txt" >nul 2>nul
  pause
  exit /b 0
)

del "%TEMP%\homepage_git_status.txt" >nul 2>nul

git add .
git commit -m "Update homepage content"
git push

echo.
echo Homepage published successfully.
pause
