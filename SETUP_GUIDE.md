# Portfolio Setup Guide

Complete this checklist before deploying your portfolio to production.

## ✅ Pre-Launch Checklist

### 1. Add Personal Assets

#### Profile Image
- [ ] Place your profile photo at `src/assets/profile.jpg`
- Recommended: Square image, 500x500px minimum
- Supported formats: `.jpg`, `.png`

Example:
```
src/assets/profile.jpg
```

#### Certificate Images
- [ ] Create folder `src/assets/certificates/` if it doesn't exist
- [ ] Add your certificate images (`.jpg`, `.png`, `.jpeg`)

Required filenames (or update `src/components/Certificates.jsx` to match your images):
```
src/assets/certificates/design_process.jpg
src/assets/certificates/UserExperience.jpg
src/assets/certificates/UX_research.jpg
src/assets/certificates/wireframes.jpg
src/assets/certificates/iT_Support.jpg
```

If you have different certificate names, edit the `certs` array in `src/components/Certificates.jsx` and update the filename in each object's `image: getImage('your-filename.jpg')` line.

### 2. Update Content

#### Hero Section (`src/components/Hero.jsx`)
- [ ] Verify name: `JOSHUA G. ESCALA`
- [ ] Verify title: Update if needed
- [ ] Update tagline: Replace the motivational quote

#### Contact Section (`src/components/Contact.jsx`)
- [ ] Update location (currently "Cebu City")
- [ ] Update phone number (currently "09602071099")
- [ ] Update email address
- [ ] Update GitHub URL
- [ ] Update LinkedIn URL

#### About Section (`src/components/ProfileSummary.jsx`)
- [ ] Update bio/introduction text
- [ ] Add/remove skill badges as needed

#### Services Section (`src/components/Services.jsx`)
- [ ] Update service descriptions
- [ ] Verify service icons

#### Education & Experience (`src/components/EducationExperience.jsx`)
- [ ] Add your actual education history (replace sample items)
- [ ] Add your work experience (replace sample items)

#### Projects Section (`src/components/Projects.jsx`)
- [ ] Add your real projects
- [ ] Update project titles, descriptions, tech tags
- [ ] Replace placeholder links with actual GitHub URLs and live demo links

### 3. Customize Theme (Optional)

Edit `src/index.css` and update the CSS variables under `:root`:

```css
:root {
  --bg: #0f172a;           /* Dark blue background */
  --surface: #0b1220;      /* Card/section background */
  --text: #e6eef8;         /* Light text color */
  --accent: #2563eb;       /* Primary blue (buttons, links) */
  --accent-2: #93c5fd;     /* Secondary blue (headings) */
  --muted: #94a3b8;        /* Muted text color */
}
```

### 4. Test Locally

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in browser
# Verify:
# ✓ Profile image displays in hero section
# ✓ Certificate images display in grid
# ✓ Navigation links scroll smoothly
# ✓ Mobile menu works on small screens
# ✓ All animations play smoothly
# ✓ Contact form validates correctly
# ✓ Links point to correct destinations
```

### 5. Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview

# Verify at http://localhost:4173:
# ✓ All pages load
# ✓ Images display correctly
# ✓ Performance is good
# ✓ No console errors
```

### 6. Configure Meta Tags

Edit `index.html` to update:
- `<title>`: Your portfolio title
- `<meta name="description">`: Your tagline
- `<meta name="author">`: Your name
- Favicon (optional)

Example:
```html
<title>Joshua G. Escala - Web Developer Portfolio</title>
<meta name="description" content="Professional portfolio of Joshua G. Escala, a full-stack web developer specializing in React, Node.js, and UI/UX design.">
<meta name="author" content="Joshua G. Escala">
```

### 7. Deploy to Hosting

Choose one of these popular options:

#### Option A: Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"
7. Your site is live! Updates deploy on push.

#### Option B: Netlify
1. Push code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

#### Option C: AWS S3 + CloudFront
1. Run `npm run build`
2. Upload `dist/` folder to S3 bucket
3. Configure CloudFront distribution
4. Point domain to CloudFront

#### Option D: GitHub Pages
1. Add to `vite.config.js`: `base: '/repository-name/'` (if not root)
2. Run `npm run build`
3. Push `dist/` folder to `gh-pages` branch
4. Enable in repository settings: Settings → Pages → Deploy from branch → gh-pages
5. Your site is live at `username.github.io/repository-name`

### 8. Post-Launch

- [ ] Test the live deployment on mobile and desktop
- [ ] Check that all links work
- [ ] Verify images load correctly
- [ ] Test contact form
- [ ] Check Google PageSpeed: [pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Share on LinkedIn and social media

## 📝 Notes

- **Contact Form**: Currently client-side only. To enable email sending, integrate with a backend or service like:
  - Formspree: [formspree.io](https://formspree.io)
  - EmailJS: [emailjs.com](https://emailjs.com)
  - Netlify Forms: [netlify.com/form-handling](https://netlify.com/file-handling)

- **Certificate Images**: If filenames don't match, the component displays a blue placeholder. This is intentional—images are optional.

- **Responsive Design**: Site is mobile-first and fully responsive. Test on actual devices, not just browser DevTools.

- **Performance**: Optimize images before adding:
  - Use [TinyPNG](https://tinypng.com) to compress
  - Resize to ~800px width for web
  - Use WebP format for modern browsers

## 🆘 Troubleshooting

**Images not showing:**
- Verify filenames match exactly (case-sensitive)
- Ensure images are in `src/assets/` or `src/assets/certificates/`
- Restart `npm run dev` after adding new images

**Build fails:**
- Run `npm install` to update dependencies
- Delete `node_modules/` and run `npm install` again
- Check terminal for error messages

**Site not updating after deployment:**
- Clear browser cache (Ctrl+Shift+Del)
- Check that files were deployed to correct directory
- Verify domain DNS settings
- Wait 5-10 minutes for CDN cache to clear

## 📞 Need Help?

Refer to:
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Framer Motion Documentation](https://www.framer.com/motion)

Good luck! 🚀
