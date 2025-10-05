# 🌟 Daffa Aditya Pratama - Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-orange?style=for-the-badge" alt="License">
</div>

<p align="center">
  <strong>Ultra-Premium Enterprise-Level Portfolio Website</strong><br>
  Modern Green Theme | Fully Responsive | Production-Ready
</p>

---

## ✨ Overview

This is a **masterpiece portfolio website** built with cutting-edge web technologies, featuring a modern green aesthetic inspired by top-tier companies like OpenAI, Stripe, Vercel, and Apple. The website showcases skills, projects, awards, and experience with stunning animations and interactions.

**Live Demo:** Open `index.html` in your browser or deploy to your favorite hosting platform!

---

## 🎯 Features

### 🎨 **Design & UI**
- **Modern Green Theme** - Soothing mint, emerald, and lime color palette
- **Dark Mode Aesthetic** - Professional dark background with vibrant green accents
- **Glass Morphism** - Frosted glass effects with backdrop blur
- **Gradient Overlays** - Smooth color transitions and glows
- **Responsive Design** - Mobile-first approach, perfect on all devices
- **Custom Cursor** - Interactive dot and outline cursor (desktop only)

### 🚀 **Animations & Effects**
- **Particles.js Background** - Interactive animated particles with grab/push effects
- **Scroll Animations** - AOS (Animate On Scroll) with fade, slide, zoom effects
- **Typed.js Effect** - Auto-typing role descriptions
- **Vanilla Tilt** - 3D card tilt effects with glare
- **Counter Animations** - Smooth number counting on scroll
- **Progress Bars** - Circular SVG progress indicators
- **Loading Screen** - Professional loading animation with progress bar

### 💼 **Sections**
1. **Hero** - Animated introduction with profile card and stats
2. **About** - Personal introduction with geometric shapes
3. **Skills** - Flip cards with progress indicators (JavaScript, Python, HTML/CSS, AI/ML, Arduino)
4. **Awards** - Trophy showcase with glow effects (OTN, Best Non-Academic, Force of 46)
5. **Projects** - Filterable project grid (Ligazone 3, OSPK47, Modern Stack)
6. **Experience** - Vertical timeline with education history
7. **Contact** - Social media grid and contact form with validation
8. **Footer** - Copyright and social links

### ⚡ **Interactions**
- **Smooth Scrolling** - Animated scroll to sections
- **Filter System** - Dynamic filtering for skills and projects
- **Form Validation** - Real-time validation with error messages
- **Modal Windows** - Project detail popups
- **Hamburger Menu** - Mobile navigation with slide animation
- **Active Link Detection** - Highlights current section in navigation
- **Scroll to Top** - Quick return button appears after scrolling

### 🔧 **Performance**
- **Lazy Loading** - Images load on demand
- **Connection-Aware** - Reduces quality on slow connections
- **Service Worker Ready** - PWA support structure
- **Performance Monitoring** - Built-in metrics tracking
- **Debounced/Throttled Events** - Optimized scroll and resize handlers
- **Intersection Observer** - Efficient scroll animations

---

## 🛠️ Tech Stack

### **Core Technologies**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Vanilla JS, no frameworks needed

### **CSS Frameworks & Libraries**
| Library | Version | Purpose | CDN |
|---------|---------|---------|-----|
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework | `unpkg.com/tailwindcss` |
| **Bootstrap** | 5.3.2 | UI components | `cdn.jsdelivr.net/npm/bootstrap` |
| **Font Awesome** | 6.5.1 | Icon library | `cdnjs.cloudflare.com/ajax/libs/font-awesome` |

### **JavaScript Libraries**
| Library | Version | Purpose | CDN |
|---------|---------|---------|-----|
| **Particles.js** | 2.0.0 | Animated background | `cdn.jsdelivr.net/particles.js` |
| **AOS** | 2.3.4 | Scroll animations | `unpkg.com/aos` |
| **Typed.js** | 2.0.12 | Typing animation | `cdn.jsdelivr.net/npm/typed.js` |
| **Vanilla Tilt** | 1.8.1 | 3D tilt effect | `cdn.jsdelivr.net/npm/vanilla-tilt` |

### **Fonts**
- **Inter** (300-900 weights) - Body text
- **Montserrat** (700) - Display headings
- Google Fonts CDN

---

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML file (all sections)
├── css/
│   ├── variables.css       # Design tokens & CSS custom properties
│   ├── base.css           # Reset, foundation, utilities
│   ├── typography.css     # Text styles & heading hierarchy
│   ├── components.css     # Buttons, cards, forms, modals
│   ├── layout.css         # Section layouts & grids
│   ├── animations.css     # Keyframes & motion effects
│   └── responsive.css     # Media queries & mobile styles
├── js/
│   ├── config.js          # Global configuration
│   ├── utils.js           # Utility functions
│   ├── particles-config.js # Particles.js setup
│   ├── animations.js      # Animation controllers
│   ├── interactions.js    # User interactions
│   └── main.js            # Application orchestrator
└── README.md              # This file
```

### **File Breakdown**

#### **CSS Files** (Total: ~18,000 tokens)
1. **variables.css** (1,823 tokens)
   - 200+ CSS custom properties
   - Color system, spacing, typography scales
   - Animation timings, z-index layers

2. **base.css** (1,857 tokens)
   - Modern CSS reset
   - Custom scrollbar, selection, focus styles
   - Loading screen, custom cursor

3. **typography.css** (1,502 tokens)
   - Responsive heading sizes with `clamp()`
   - Gradient text, shimmer effects
   - Section headers, link animations

4. **components.css** (3,303 tokens)
   - Buttons, cards, navigation
   - Forms, modals, filters
   - Progress bars, badges

5. **layout.css** (2,947 tokens)
   - Hero, About, Skills layouts
   - Awards, Projects, Timeline
   - Contact, Footer grids

6. **animations.css** (3,472 tokens)
   - 40+ keyframe animations
   - Fade, scale, slide, rotate
   - Pulse, shimmer, confetti, ripple

7. **responsive.css** (3,189 tokens)
   - Mobile (<768px)
   - Tablet (768-1023px)
   - Desktop (1024px+)
   - Print styles, reduced-motion

#### **JavaScript Files** (Total: ~10,000 tokens)
1. **config.js** (~500 tokens)
   - Personal information
   - Social media links
   - Library configurations
   - Skills & projects data

2. **utils.js** (~500 tokens)
   - 40+ utility functions
   - Debounce, throttle, scroll helpers
   - Validation, storage, device detection

3. **particles-config.js** (~300 tokens)
   - Particles.js initialization
   - Control methods (pause/resume/destroy)

4. **animations.js** (~800 tokens)
   - AOS initialization
   - Counter animations
   - Progress bars, timeline
   - Confetti, ripple effects

5. **interactions.js** (~4,500 tokens)
   - Navigation with scroll effect
   - Typed.js effect
   - Tilt effects
   - Filter system
   - Custom cursor
   - Scroll to top
   - Contact form validation
   - Modal management
   - Smooth scroll

6. **main.js** (~3,500 tokens)
   - Application orchestrator
   - Module initialization
   - Performance monitoring
   - Keyboard shortcuts
   - Connection handling
   - Service worker setup

---

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!
- Internet connection (for CDN resources)

### **Installation**

#### **Option 1: Direct Run (Simplest)**
```bash
# Clone or download this repository
git clone https://github.com/daffaaditya/portfolio.git
cd portfolio

# Open in browser
open index.html
# Or just double-click index.html
```

#### **Option 2: Local Server (Recommended)**
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

---

## 🌐 Deployment

### **GitHub Pages** (Free & Easy)
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select branch (main) and folder (root)
4. Save and wait ~1 minute
5. Visit: `https://yourusername.github.io/portfolio`

### **Netlify** (Drag & Drop)
1. Visit [netlify.com](https://netlify.com)
2. Drag portfolio folder to deploy
3. Done! Auto HTTPS and CDN

### **Vercel** (CLI or GitHub)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### **Custom Domain**
1. Buy domain (Namecheap, GoDaddy, etc.)
2. Point DNS to hosting provider
3. Update CNAME records
4. Wait for DNS propagation (24-48 hours)

---

## ⚙️ Configuration

### **Personal Information**
Edit `js/config.js`:

```javascript
const CONFIG = Object.freeze({
  personal: {
    name: 'Your Name',
    role: 'Your Role',
    email: 'your@email.com',
    bio: 'Your bio...'
  },
  
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    // ... other social links
  }
});
```

### **Colors**
Edit `css/variables.css`:

```css
:root {
  /* Change primary color */
  --color-primary: #10b981; /* Your color */
  --color-primary-light: #34d399;
  --color-primary-dark: #059669;
}
```

### **Content**
Edit `index.html` sections:
- Hero text and stats
- About section content
- Skills percentages
- Awards descriptions
- Project details
- Education timeline
- Contact information

---

## 🎨 Customization Guide

### **Change Theme Color**
1. Open `css/variables.css`
2. Find `:root` section
3. Change `--color-primary` values
4. Recommended tools: [coolors.co](https://coolors.co), [color.adobe.com](https://color.adobe.com)

### **Add New Section**
1. Add HTML section in `index.html`
2. Create layout styles in `css/layout.css`
3. Add animations in `css/animations.css`
4. Add responsive styles in `css/responsive.css`

### **Modify Animations**
- **Speed**: Edit `--transition-duration` in `variables.css`
- **Effects**: Modify keyframes in `animations.css`
- **AOS Settings**: Edit `CONFIG.aos` in `js/config.js`

### **Add New Project**
Edit `js/config.js`:

```javascript
projects: [
  {
    id: 4,
    title: 'New Project',
    description: 'Project description',
    image: 'path/to/image.jpg',
    tech: ['React', 'Node.js'],
    category: 'fullstack',
    link: 'https://project-url.com',
    github: 'https://github.com/user/repo',
    featured: false
  }
]
```

---

## 🧪 Testing

### **Manual Testing Checklist**
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test form validation (empty fields, invalid email)
- [ ] Test all navigation links
- [ ] Test smooth scrolling
- [ ] Test filter buttons (All, Frontend, Backend, Fullstack)
- [ ] Test modal open/close
- [ ] Test scroll-to-top button
- [ ] Test hamburger menu (mobile)
- [ ] Test all social media links
- [ ] Verify animations trigger on scroll
- [ ] Check loading screen appearance
- [ ] Test keyboard shortcuts (ESC, Ctrl+/)

### **Performance Testing**
```bash
# Lighthouse audit (Chrome DevTools)
# Open DevTools > Lighthouse > Generate Report
# Aim for 90+ scores across all categories
```

### **Accessibility Testing**
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast sufficient
- [ ] Alt text on images
- [ ] ARIA labels where needed
- [ ] Screen reader compatible

---

## 📊 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully Supported |
| Firefox | Latest | ✅ Fully Supported |
| Safari | Latest | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |
| Opera | Latest | ✅ Fully Supported |
| IE 11 | - | ❌ Not Supported |

**Mobile:**
- ✅ iOS Safari 12+
- ✅ Android Chrome 90+
- ✅ Samsung Internet 14+

---

## 🔧 Troubleshooting

### **Particles not showing**
- Check browser console for errors
- Verify particles.js CDN loaded
- Ensure `#particles-js` element exists in HTML

### **Animations not working**
- Check if AOS library loaded
- Verify `data-aos` attributes in HTML
- Try disabling browser extensions

### **Custom cursor not visible**
- Only works on desktop (>1024px)
- Check if JavaScript loaded without errors
- Try different browser

### **Form submission not working**
- Currently demo only (no backend)
- To add real submission: integrate with Formspree, Netlify Forms, or custom backend

### **Images not loading**
- Update image paths in HTML
- Ensure images exist in project folder
- Check file extensions match

---

## 🚀 Performance Optimization

### **Current Optimizations**
- ✅ Lazy loading images
- ✅ Debounced scroll events
- ✅ Throttled resize events
- ✅ Connection-aware loading
- ✅ Efficient animations (GPU-accelerated)
- ✅ Minimal reflows/repaints
- ✅ Code splitting (separate CSS/JS files)

### **Additional Recommendations**
1. **Optimize Images**
   - Use WebP format
   - Compress with TinyPNG/Squoosh
   - Use responsive images (`<picture>` element)

2. **Enable Caching**
   - Add service worker (sw.js included)
   - Set cache headers on server

3. **Minify Assets**
   ```bash
   # CSS
   npx csso css/style.css -o css/style.min.css
   
   # JavaScript
   npx terser js/main.js -o js/main.min.js
   ```

4. **Use CDN**
   - All libraries already on CDN
   - Consider Cloudflare for static assets

---

## 📝 Credits & Attribution

### **Developer**
- **Daffa Aditya Pratama** - Full Stack Developer & AI Enthusiast
- Email: daffaaditya@daffadev.my.id
- GitHub: [@daffaaditya](https://github.com/daffaaditya)

### **Libraries & Resources**
- [Particles.js](https://vincentgarreau.com/particles.js/) by Vincent Garreau
- [AOS](https://michalsnik.github.io/aos/) by Michał Sajnóg
- [Typed.js](https://mattboldt.com/demos/typed-js/) by Matt Boldt
- [Vanilla Tilt](https://micku7zu.github.io/vanilla-tilt.js/) by Șandor Sergiu
- [Tailwind CSS](https://tailwindcss.com/) by Tailwind Labs
- [Bootstrap](https://getbootstrap.com/) by Twitter
- [Font Awesome](https://fontawesome.com/) by Fonticons
- [Google Fonts](https://fonts.google.com/) - Inter & Montserrat

### **Inspiration**
- OpenAI - Modern UI design
- Stripe - Payment page aesthetics
- Vercel - Developer experience
- Apple - Product page layouts

---

## 📜 License

MIT License

Copyright (c) 2025 Daffa Aditya Pratama

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📞 Contact & Support

**Need help or have questions?**

- 📧 Email: daffaaditya@daffadev.my.id
- 💼 LinkedIn: [Daffa Aditya](https://linkedin.com/in/daffaaditya)
- 🐙 GitHub: [@daffaaditya](https://github.com/daffaaditya)
- 📺 YouTube: [@daffaaditya](https://youtube.com/@daffaaditya)

---

## 🎉 Acknowledgments

Special thanks to:
- The open-source community for amazing libraries
- GitHub for free hosting
- All contributors and supporters

---

<div align="center">
  <p>Made with 💚 by Daffa Aditya Pratama</p>
  <p>
    <a href="#-overview">Back to Top ↑</a>
  </p>
</div>

---

## 📚 Additional Resources

### **Learning Resources**
- [MDN Web Docs](https://developer.mozilla.org/) - Web technologies reference
- [CSS-Tricks](https://css-tricks.com/) - CSS guides and tutorials
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial
- [Web.dev](https://web.dev/) - Google's web development best practices

### **Design Resources**
- [Dribbble](https://dribbble.com/) - Design inspiration
- [Behance](https://behance.net/) - Portfolio examples
- [Awwwards](https://awwwards.com/) - Award-winning websites
- [Coolors](https://coolors.co/) - Color scheme generator

### **Tools**
- [Can I Use](https://caniuse.com/) - Browser compatibility checker
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit
- [WebPageTest](https://webpagetest.org/) - Website speed test
- [GTmetrix](https://gtmetrix.com/) - Performance analysis

---

**Version:** 1.0.0  
**Last Updated:** January 2025  
**Status:** ✅ Production Ready
