# GarageAI Website

A modern, responsive website for the GarageAI mobile application.

## Files

- **index.html** - Main landing page with hero section, features, and download links
- **privacy.html** - Privacy policy page (required for Play Store)
- **styles.css** - Modern dark theme styling with gradients and animations
- **script.js** - Interactive features and smooth scrolling

## Features

✨ **Modern Design**
- Dark theme with neon blue and purple gradients
- Smooth animations and transitions
- Responsive layout for all devices

🎨 **Sections**
- Hero with call-to-action
- Features showcase (6 key features)
- App download section
- Privacy policy link
- Contact information
- Professional footer

📱 **Mobile Responsive**
- Optimized for phones, tablets, and desktops
- Touch-friendly navigation
- Adaptive layouts

## How to Use

### 1. Local Testing

Simply open `index.html` in your web browser:
```bash
# In the website directory
start index.html  # Windows
```

Or use a local server:
```bash
# With Python
python -m http.server 8000

# With Node.js http-server
npx http-server
```

Then visit: `http://localhost:8000`

### 2. Deploy to Hosting

Upload all files to your web hosting service:

#### Option A: GitHub Pages (Free)
1. Create a new repository on GitHub
2. Upload all website files
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be at `https://yourusername.github.io/repo-name`

#### Option B: Netlify (Free)
1. Go to https://www.netlify.com
2. Drag and drop the `website` folder
3. Get instant URL like `https://your-site.netlify.app`

#### Option C: Vercel (Free)
1. Go to https://vercel.com
2. Import the `website` folder
3. Deploy with one click

### 3. Custom Domain (Optional)

After deploying, you can add a custom domain:
1. Buy a domain (e.g., garageai.com)
2. Point DNS to your hosting service
3. Update in hosting settings

## Update Contact Information

Before deploying, update these placeholders in `privacy.html` and `index.html`:

```html
<!-- Replace these -->
support@garageai.com → your actual email
[Your Business Address] → your actual address
[Your Contact Number] → your actual phone
```

## Privacy Policy URL

Once deployed, your privacy policy will be at:
```
https://your-domain.com/privacy.html
```

Use this URL when submitting to Google Play Store!

## Color Scheme

```css
Primary: #00d4ff (Cyan Blue)
Secondary: #7c3aed (Purple)
Background: #0a0a0f (Dark)
Cards: #1a1a24 (Dark Gray)
```

## Browser Support

- Chrome/Edge ✅
- Firefox ✅
- Safari ✅
- Mobile browsers ✅

## Tips

1. **Before deploying**: Test on multiple devices and browsers
2. **SEO**: Update meta descriptions with your actual content
3. **Analytics**: Add Google Analytics if you want visitor tracking
4. **Performance**: All images are SVG for fast loading

## Need Help?

For free hosting questions:
- GitHub Pages: https://pages.github.com
- Netlify: https://docs.netlify.com
- Vercel: https://vercel.com/docs

---

**Note**: Remember to update the Google Play Store link in `index.html` once your app is published!
