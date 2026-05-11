@echo off
cd /d "%~dp0"

git add .
git commit -m "Update homepage content"
git push

echo.
echo Homepage published successfully.
pause
