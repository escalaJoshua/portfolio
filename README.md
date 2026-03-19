# Joshua G. Escala — Professional Portfolio

A modern, responsive portfolio website built with **React**, **Vite**, and **Framer Motion**. Features a dark theme with blue highlights, smooth animations, and a fully functional contact form.

## 🚀 Features

- **Dark theme** with blue accent colors and smooth transitions
- **Responsive design** (mobile-first, optimized for all screen sizes)
- **Sticky navigation** with smooth scrolling between sections
- **Animated sections** using Framer Motion
- **Contact form** with validation
- **Certificate showcase** with image gallery
- **Project portfolio** with tech stack tags
- **Timeline** for education and experience
- **Professional footer** with quick links

## 📁 Project Structure

```
src/
  assets/
    certificates/        # Certificate images go here
    profile.jpg         # Hero section profile image
    react.svg
  components/
    Navbar.jsx         # Sticky navigation
    Hero.jsx           # Hero section with CTA buttons
    ProfileSummary.jsx # Skills and bio
    Services.jsx       # Services offered
    EducationExperience.jsx  # Timeline
    Certificates.jsx   # Certificate grid
    Projects.jsx       # Project showcase
    Contact.jsx        # Contact form with validation
    Footer.jsx         # Footer with links
    Button.jsx         # Reusable button component
    *.module.css       # Component-scoped styles
  pages/
    Home.jsx           # Main page (assembles all sections)
  App.jsx              # Router and layout
  main.jsx             # React entry point with BrowserRouter
  index.css            # Global styles and CSS variables
  App.css              # App-level styles
```

## 🛠️ Tech Stack

- **Frontend Framework**: React (v18) with functional components and hooks
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Styling**: CSS Modules + Global CSS with CSS Variables
- **Development**: ES6+, JSX

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Getting Started

1. **Clone or navigate to the project**:
   ```bash
   cd joshua_Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   (If you encounter peer dependency warnings, use `npm install --legacy-peer-deps`)

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder, ready to deploy.

## 🎨 Customization

### Update Personal Information

- **Hero Section**: Edit `src/components/Hero.jsx`
  - Name: `JOSHUA G. ESCALA`
  - Title: `Web Developer`
  - Tagline: Update the motivational quote

- **Contact Info**: Edit `src/components/Contact.jsx`
  - Location, phone, email
  - Social media links (GitHub, LinkedIn)

- **Skills**: Edit `src/components/ProfileSummary.jsx`
  - Add or remove skill badges

- **Services**: Edit `src/components/Services.jsx`
  - Customize service cards and descriptions

### Add Content

#### Profile Image

Place your profile photo as `src/assets/profile.jpg`. Recommended size: 500x500px.

#### Certificate Images

Place certificate preview images in `src/assets/certificates/`. The component expects these filenames (update the `getImage()` calls in `Certificates.jsx` if you use different names):

```
design_process.jpg
UserExperience.jpg
UX_research.jpg
wireframes.jpg
iT_Support.jpg
```

If images are missing, the component displays a blue placeholder and shows "No certificates uploaded yet." message.

#### Projects

Edit `src/components/Projects.jsx` to add your own projects with:
- Project title
- Description
- Technology tags
- Links to GitHub or live demo

### Theme Customization

Edit CSS variables in `src/index.css` under `:root`:

```css
:root {
  --bg: #0f172a;           /* Main background */
  --surface: #0b1220;      /* Card backgrounds */
  --text: #e6eef8;         /* Text color */
  --accent: #2563eb;       /* Button and link color */
  --accent-2: #93c5fd;     /* Heading color */
  /* ... other variables ... */
}
```

## 🚀 Deployment

### Before Deploying

1. **Update `index.html`** meta tags with your actual information:
   - Title
   - Description
   - Author

2. **Add all assets**:
   - Profile image in `src/assets/profile.jpg`
   - Certificate images in `src/assets/certificates/`
   - Project screenshots (optional)

3. **Test locally**:
   ```bash
   npm run dev
   # Check that all sections load and images display
   ```

4. **Build for production**:
   ```bash
   npm run build
   npm run preview
   # Opens a preview of the production build
   ```

### Hosting Options

#### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Vercel auto-detects Vite and deploys with `npm run build`
4. Your site is live with auto-updates on commits

#### Netlify

1. Push code to GitHub/GitLab/Bitbucket
2. Connect repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

#### Static Hosting (AWS S3, GitHub Pages, etc.)

1. Run `npm run build`
2. Upload the `dist/` folder to your hosting service
3. Configure server to serve `index.html` for all routes (for SPA routing)

## 📱 Responsive Design

The portfolio is **mobile-first** and uses CSS media queries:
- Small devices: 320px+
- Tablets: 640px+ (`sm`)
- Desktops: 768px+ (`md`)
- Large screens: 1024px+ (`lg`)

## ♿ Accessibility

- Semantic HTML (`<nav>`, `<section>`, `<footer>`)
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus styles on all interactive elements
- Color contrast ratios meet WCAG AA standards

## 📝 Available Scripts

```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production (output: dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## 🐛 Troubleshooting

### Blank Page on Localhost

1. Make sure you're running `npm run dev`
2. Open the browser console (F12) – check for errors
3. Verify that `http://localhost:5173` is accessible
4. Check the terminal; build errors will appear there

### Images Not Loading

- Verify images are in the correct folder (`src/assets/`)
- Check that filenames match exactly (case-sensitive)
- Restart the dev server after adding new images
- For certificates, ensure they're in `src/assets/certificates/`

### Build Errors

- Run `npm install` to ensure dependencies are up to date
- Delete `node_modules/` and run `npm install` again if issues persist
- Check [Vite docs](https://vitejs.dev/) for build configuration

## 📄 License

Free to use and modify for personal or professional portfolios.

## 💡 Tips for Success

1. **Keep content fresh** – Update projects and experience regularly
2. **Optimize images** – Use tools like TinyPNG to compress assets before uploading
3. **Test responsiveness** – Check on real mobile devices, not just browser devtools
4. **Monitor performance** – Use tools like Google PageSpeed or GTmetrix
5. **SEO** – Update meta tags, add a sitemap, and consider adding a blog
6. **Analytics** – Add Google Analytics or similar to track visitors

---

**Built with ❤️ by Joshua G. Escala** | [GitHub](https://github.com) | [LinkedIn](https://linkedin.com)
