# Portfolio Website

A premium, client-facing portfolio website built with Astro, React, Tailwind CSS, and Framer Motion.

##  Features

- **Modern Tech Stack**: Astro with React islands architecture
- **Smooth Animations**: Framer Motion for professional animations
- **Dark Premium Theme**: Custom Tailwind configuration
- **Fully Responsive**: Mobile-first design
- **SEO Optimized**: Semantic HTML and meta tags
- **Fast Performance**: Selective hydration strategy

##  Project Structure

```
/
 public/              # Static assets (images, icons)
 src/
    assets/         # Project assets
    components/     # React components
       Hero.tsx
       About.tsx
       Capabilities.tsx
       TechStack.tsx
       Projects.tsx
       Services.tsx
       ContactForm.tsx
       Footer.tsx
    layouts/
       Layout.astro
    pages/
       index.astro
    styles/
        global.css
 astro.config.mjs
 tailwind.config.js
 package.json
```

##  Customization Guide

### 1. Hero Section
- File: src/components/Hero.tsx
- Update your name, headline, and value proposition
- Add your profile photo to public/ and update the image path

### 2. About Section
- File: src/components/About.tsx
- Edit paragraphs to reflect your personal approach

### 3. Capabilities
- File: src/components/Capabilities.tsx
- Modify the capabilities array to match your offerings

### 4. Tech Stack
- File: src/components/TechStack.tsx
- Update the technologies array with your stack
- Add logo images to public/logos/

### 5. Projects
- File: src/components/Projects.tsx
- Update the projects array with your real work
- Add project images to public/

### 6. Services
- File: src/components/Services.tsx
- Customize the services array with your offerings

### 7. Contact Form
- File: src/components/ContactForm.tsx
- Get a free endpoint from https://formspree.io/
- Replace YOUR_FORM_ID with your actual ID

### 8. Footer
- File: src/components/Footer.tsx
- Update social links with your URLs

### 9. SEO & Meta
- File: src/layouts/Layout.astro
- Update title and description defaults
- Add Open Graph image for social sharing

##  Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

##  Deployment

Build the project:
```bash
pnpm build
```

GitHub Pages is already wired up through `.github/workflows/deploy.yml`. Every push to `main` builds the site and publishes the generated `dist/` folder to GitHub Pages.

One-time setup in the GitHub repository settings:
1. Go to **Settings > Pages**.
2. Set **Source** to **GitHub Actions**.

If you want to build locally using the same Pages entry point, run:
```bash
pnpm run build:pages
```

The project still deploys cleanly to any static host by serving `dist/`.

##  Performance Strategy

- Hero: Uses client:load for immediate interactivity
- Other sections: Use client:visible for optimal loading
- Result: Fast initial load with smooth animations

##  Technologies

- Astro 5.x
- React 19.x
- Tailwind CSS 4.x
- Framer Motion 12.x
- TypeScript

---

Built with  by [Your Name]
