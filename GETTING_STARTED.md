## 🚀 Quick Start Guide

Welcome! Here's how to get your portfolio up and running in minutes.

### Step 1: Setup
```bash
# Clone or download the repository
git clone https://github.com/daffaaditya/portfolio.git
cd portfolio
```

### Step 2: Customize Your Content

#### Update Personal Information
Edit `js/config.js`:
```javascript
personal: {
  name: 'Your Name',
  role: 'Your Role',
  email: 'your@email.com',
  bio: 'Your bio text...'
}
```

#### Update Social Links
In `js/config.js`:
```javascript
social: {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  // ... other social links
}
```

#### Update Skills
In `js/config.js`, modify the `skills` array:
```javascript
skills: [
  {
    id: 1,
    name: 'JavaScript',
    category: 'frontend',
    level: 90, // Percentage
    icon: 'fab fa-js',
    description: 'Your description'
  }
]
```

#### Update Projects
In `js/config.js`, modify the `projects` array:
```javascript
projects: [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    image: 'path/to/image.jpg',
    tech: ['React', 'Node.js'],
    category: 'fullstack',
    link: 'https://project-url.com',
    github: 'https://github.com/user/repo',
    featured: true
  }
]
```

### Step 3: Generate Favicon
```bash
# Open favicon generator in browser
open favicon-generator.html

# Click to download different sizes:
# - 16x16 (standard favicon)
# - 32x32 (standard favicon)
# - 192x192 (Android icon)
# - 512x512 (iOS icon)

# Save as:
# - favicon.ico (in root)
# - favicon.png (192x192 for manifest)
# - favicon-512.png (512x512 for manifest)
```

### Step 4: Update Meta Tags
Edit `index.html` head section:
```html
<!-- Update these meta tags -->
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="your,keywords,here">

<!-- Open Graph (for social media) -->
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name - Portfolio">
<meta name="twitter:description" content="Your description">
<meta name="twitter:image" content="https://yourdomain.com/twitter-image.jpg">
```

### Step 5: Test Locally
```bash
# Option 1: Python (simplest)
python3 -m http.server 8000

# Option 2: Node.js
npx http-server -p 8000

# Option 3: PHP
php -S localhost:8000

# Then open: http://localhost:8000
```

### Step 6: Deploy

#### GitHub Pages (Free)
```bash
# 1. Create GitHub repository
# 2. Push code
git add .
git commit -m "Initial commit"
git push origin main

# 3. Enable GitHub Pages
# Go to: Settings > Pages
# Source: Deploy from branch
# Branch: main, folder: / (root)
# Save

# Your site will be live at:
# https://yourusername.github.io/portfolio
```

#### Netlify (Easiest)
```bash
# 1. Visit netlify.com
# 2. Drag & drop portfolio folder
# 3. Done! Site is live with auto HTTPS

# Or use CLI:
npm install -g netlify-cli
netlify deploy
# Follow prompts
netlify deploy --prod
```

#### Vercel (CLI)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod

# Your site will be live at:
# https://yourproject.vercel.app
```

### Step 7: Custom Domain (Optional)

#### Point Domain to GitHub Pages
1. Buy domain (Namecheap, GoDaddy, etc.)
2. Add CNAME file to repository:
```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```
3. Add DNS records:
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Name: www
Value: yourusername.github.io
```

#### Point Domain to Netlify
1. Go to Domain Settings in Netlify
2. Add custom domain
3. Update DNS records (provided by Netlify)

#### Point Domain to Vercel
1. Go to Project Settings > Domains
2. Add domain
3. Update DNS records (provided by Vercel)

---

## 🎨 Customization Tips

### Change Theme Color
Edit `css/variables.css`:
```css
:root {
  /* Primary color - change these */
  --color-primary: #10b981; /* Main green */
  --color-primary-light: #34d399;
  --color-primary-dark: #059669;
  
  /* Try different colors:
  Blue: #3b82f6
  Purple: #8b5cf6
  Red: #ef4444
  Orange: #f59e0b
  */
}
```

### Adjust Animation Speed
Edit `css/variables.css`:
```css
:root {
  /* Make animations faster/slower */
  --transition-duration: 0.3s; /* Decrease for faster */
  --transition-duration-slow: 0.5s;
}
```

### Disable Particles
Edit `js/config.js`:
```javascript
particles: {
  enabled: false // Change to false
}
```

### Change Fonts
Edit `index.html` head section:
```html
<!-- Replace Google Fonts link -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap">

<!-- Then update CSS -->
```
Edit `css/variables.css`:
```css
:root {
  --font-body: 'YourFont', sans-serif;
  --font-heading: 'YourFont', sans-serif;
}
```

---

## ✅ Pre-Launch Checklist

Before deploying, make sure:

- [ ] Updated personal information in `config.js`
- [ ] Replaced placeholder images with real ones
- [ ] Updated all social media links
- [ ] Generated and added favicon
- [ ] Updated meta tags in `index.html`
- [ ] Created Open Graph image (1200x630px)
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on mobile devices
- [ ] All links work correctly
- [ ] Form validation works
- [ ] No console errors in DevTools
- [ ] Ran Lighthouse audit (score 90+)
- [ ] Updated `robots.txt` with your domain
- [ ] Created and added sitemap.xml
- [ ] Tested loading speed
- [ ] Checked spelling and grammar

---

## 🐛 Troubleshooting

### Particles not showing?
- Check browser console for errors
- Verify particles.js CDN is loaded
- Try disabling browser extensions
- Check if JavaScript is enabled

### Animations not working?
- Clear browser cache
- Check if AOS library loaded
- Verify `data-aos` attributes exist
- Try different browser

### Form not submitting?
- Currently demo only (no backend)
- To add real submission:
  1. Sign up for Formspree/Netlify Forms
  2. Update form action URL
  3. Add backend endpoint

### Images not loading?
- Check file paths are correct
- Verify images exist in project
- Check file permissions
- Try absolute URLs

---

## 📚 Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Particles.js Docs](https://vincentgarreau.com/particles.js/)
- [AOS Documentation](https://michalsnik.github.io/aos/)
- [Typed.js Examples](https://mattboldt.com/demos/typed-js/)

---

## 💡 Pro Tips

1. **Optimize Images**: Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
2. **Test Performance**: Use [PageSpeed Insights](https://pagespeed.web.dev/)
3. **Check Mobile**: Use browser DevTools responsive mode
4. **SEO**: Add proper meta tags and structured data
5. **Analytics**: Add Google Analytics or Plausible
6. **Monitor**: Use Uptime Robot for status monitoring
7. **Backup**: Keep regular backups of your code

---

## 🎉 You're Done!

Your portfolio is now live! Share it with:
- LinkedIn profile
- GitHub README
- Twitter bio
- Email signature
- Resume/CV

**Need help?** Contact: daffaaditya@daffadev.my.id

---

Made with 💚 by Daffa Aditya Pratama
