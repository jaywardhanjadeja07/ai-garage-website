@echo off
echo ========================================
echo  GarageAI - GitHub Pages Deployment
echo ========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo Initializing Git repository...
    git init
)

REM Build the website
echo Building website for production...
call npm run build

if errorlevel 1 (
    echo Build failed! Please check for errors.
    pause
    exit /b 1
)

echo.
echo Build successful!
echo.

REM Add and commit dist folder
echo Preparing deployment files...
git add dist -f
git commit -m "Deploy to GitHub Pages - %date% %time%"

REM Check if gh-pages branch exists
git rev-parse --verify gh-pages >nul 2>&1
if errorlevel 1 (
    echo Creating gh-pages branch...
    git subtree split --prefix dist -b gh-pages
) else (
    echo Updating gh-pages branch...
)

REM Deploy to GitHub Pages
echo.
echo Deploying to GitHub Pages...
git push origin `git subtree split --prefix dist main`:gh-pages --force

if errorlevel 1 (
    echo.
    echo ========================================
    echo  First Time Setup Required
    echo ========================================
    echo.
    echo Please run these commands first:
    echo.
    echo 1. Create a GitHub repository
    echo 2. Run: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
    echo 3. Run: git push -u origin main
    echo 4. Then run this script again
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo  Deployment Successful!
echo ========================================
echo.
echo Your website will be live at:
echo https://YOUR_USERNAME.github.io/YOUR_REPO/
echo.
echo Note: It may take 2-5 minutes for changes to appear.
echo.
echo Don't forget to:
echo 1. Go to GitHub repo Settings - Pages
echo 2. Set Source to: gh-pages branch
echo 3. Click Save
echo.
pause
