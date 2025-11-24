@echo off
echo ================================================
echo   GarageAI Website - GitHub Pages Setup
echo ================================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo [OK] Git is installed
echo.

REM Configure Git
echo Step 1: Configure Git
echo -------------------
set /p USERNAME="Enter your GitHub username: "
set /p EMAIL="Enter your email: "

git config --global user.name "%USERNAME%"
git config --global user.email "%EMAIL%"

echo [OK] Git configured
echo.

REM Navigate to website folder
echo Step 2: Preparing website files
echo -------------------
cd /d "%~dp0"
if not exist "index.html" (
    echo [ERROR] index.html not found!
    echo Please run this script from the website folder
    pause
    exit /b 1
)

echo [OK] Files found
echo.

REM Initialize Git repository
echo Step 3: Initialize Git repository
echo -------------------
if exist ".git" (
    echo [INFO] Git repository already exists
) else (
    git init
    echo [OK] Git repository initialized
)
echo.

REM Add files
echo Step 4: Adding files
echo -------------------
git add .
echo [OK] Files added
echo.

REM Commit
echo Step 5: Committing files
echo -------------------
git commit -m "Initial GarageAI website deployment"
echo [OK] Files committed
echo.

REM Set main branch
echo Step 6: Setting main branch
echo -------------------
git branch -M main
echo [OK] Main branch set
echo.

REM Add remote
echo Step 7: Connect to GitHub
echo -------------------
set /p REPO="Enter your repository name (e.g., garageai-website): "
set REMOTE_URL=https://github.com/%USERNAME%/%REPO%.git

git remote remove origin 2>nul
git remote add origin %REMOTE_URL%
echo [OK] Remote repository added: %REMOTE_URL%
echo.

REM Push to GitHub
echo Step 8: Pushing to GitHub
echo -------------------
echo This will upload your website to GitHub...
echo You may be asked to authenticate.
echo.
pause

git push -u origin main

if errorlevel 1 (
    echo.
    echo [ERROR] Push failed!
    echo.
    echo Possible reasons:
    echo 1. Repository doesn't exist - Create it at: https://github.com/new
    echo 2. Authentication failed - Check your credentials
    echo 3. Remote already has different content
    echo.
    echo Try: git push -u origin main --force
    pause
    exit /b 1
)

echo.
echo ================================================
echo   SUCCESS! Your website is uploaded!
echo ================================================
echo.
echo Next steps:
echo 1. Go to: https://github.com/%USERNAME%/%REPO%
echo 2. Click Settings ^> Pages
echo 3. Set Source to "main" branch
echo 4. Save and wait 2-5 minutes
echo.
echo Your website will be live at:
echo https://%USERNAME%.github.io/%REPO%/
echo.
echo Privacy Policy URL:
echo https://%USERNAME%.github.io/%REPO%/privacy.html
echo.
pause
