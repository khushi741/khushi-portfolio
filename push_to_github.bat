@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
echo ========================================================
echo 🚀 Pushing Khushi Nayak's AI Portfolio to GitHub...
echo Target: https://github.com/khushi741/khushi-portfolio.git
echo ========================================================
git push -u origin main
if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo ✅ SUCCESS! Your portfolio code has been pushed to GitHub:
    echo    https://github.com/khushi741/khushi-portfolio
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo ⚠️  Could not push. Please ensure:
    echo 1. You created the empty repository on GitHub:
    echo    https://github.com/new (Name: khushi-portfolio)
    echo 2. You are logged into GitHub in your browser/terminal.
    echo ========================================================
)
pause
