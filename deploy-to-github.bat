@echo off
echo Deploying to GitHub Pages...

:: Build the project
call npm run build

:: Navigate to build output
cd dist

:: Initialize git and commit
git init
git add -A
git commit -m "deploy"

:: Push to gh-pages branch (force)
:: NOTE: User needs to set remote first manually if not set, or we assume origin exists?
:: Actually, dist is a fresh git repo, so we need to add remote.
:: Since I don't know the remote URL, I will just echo instructions.

echo.
echo Build complete in 'dist' folder.
echo To deploy, run the following commands inside 'dist' folder:
echo.
echo git init
echo git add -A
echo git commit -m "deploy"
echo git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
echo.
pause
