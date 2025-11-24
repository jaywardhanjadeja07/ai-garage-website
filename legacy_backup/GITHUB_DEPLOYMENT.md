# Deploy GarageAI Website to GitHub Pages - Step by Step

## Prerequisites
✅ GitHub account created
✅ Website files in `website/` folder

## Step 1: Create New Repository on GitHub

1. Go to: https://github.com/new
2. **Repository name**: `garageai-website`
3. **Description**: "Official website for GarageAI - Smart Vehicle Diagnostics"
4. **Public** (must be public for free GitHub Pages)
5. **Do NOT** initialize with README
6. Click **Create repository**

## Step 2: Upload Files to GitHub

### Option A: Using Git (Command Line)

Open PowerShell in the website folder and run:

```powershell
# Navigate to website folder
cd "C:\Users\Shreeram\Desktop\AI Garage App\website"

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial website deployment"

# Set main branch
git branch -M main

# Add your GitHub repository (REPLACE YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/garageai-website.git

# Push to GitHub
git push -u origin main
```

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username!

### Option B: Using GitHub Website (Drag & Drop)

If you don't have Git installed:

1. Go to your repository: `https://github.com/YOUR_USERNAME/garageai-website`
2. Click **"uploading an existing file"**
3. Drag all files from `website/` folder:
   - index.html
   - privacy.html
   - styles.css
   - script.js
   - README.md
4. Click **"Commit changes"**

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: Select `main`
   - **Folder**: Select `/ (root)`
5. Click **Save**

## Step 4: Wait for Deployment

- GitHub will build and deploy your site (takes 2-5 minutes)
- You'll see a message: "Your site is live at https://YOUR_USERNAME.github.io/garageai-website/"

## Step 5: Get Your Privacy Policy URL

Your privacy policy URL will be:
```
https://YOUR_USERNAME.github.io/garageai-website/privacy.html
```

**Use this URL** when submitting to Google Play Store!

## Step 6: Update Contact Information

Before it goes live, update your contact info:

1. Go to your repository
2. Click on `index.html`
3. Click the pencil icon (Edit)
4. Find and replace:
   - `support@garageai.com` → your actual email
   - `[Your Business Address]` → your address
   - `[Your Contact Number]` → your phone
5. Click **Commit changes**

6. Repeat for `privacy.html`

## Step 7: Test Your Website

Visit: `https://YOUR_USERNAME.github.io/garageai-website/`

Check:
- ✅ Landing page loads correctly
- ✅ Navigation works
- ✅ Privacy policy link works
- ✅ All sections display properly

---

## Troubleshooting

### "404 - Page not found"
- Wait 5 more minutes, GitHub Pages can take time
- Check Settings > Pages shows "Your site is published"
- Ensure branch is set to `main`

### "Files not showing"
- Make sure you uploaded files to root directory
- Don't upload the whole `website` folder, upload the FILES inside it

### "Permission denied"
- You may need to authenticate Git
- Use: `git config --global user.email "your@email.com"`
- Use: `git config --global user.name "Your Name"`

---

## Quick Reference

**Your Website**: `https://YOUR_USERNAME.github.io/garageai-website/`
**Privacy Policy**: `https://YOUR_USERNAME.github.io/garageai-website/privacy.html`

**Repository**: `https://github.com/YOUR_USERNAME/garageai-website`

---

## Update Website Later

To make changes:

1. Edit files locally in `website/` folder
2. Run:
   ```powershell
   cd "C:\Users\Shreeram\Desktop\AI Garage App\website"
   git add .
   git commit -m "Update website"
   git push
   ```
3. Changes will appear in 1-2 minutes!

---

## Next Steps After Deployment

1. ✅ Copy your privacy policy URL
2. ✅ Use it in Google Play Console
3. ✅ Test all links and pages
4. ✅ Share your website with others!

Good luck! 🚀
