# Maadhu Avati - Portfolio

A modern, responsive portfolio website built with Next.js 16, showcasing my projects, skills, and experience as a Full-Stack Developer.

🌐 **Live Site:** [maadhuavati.in](https://maadhuavati.in)

---

## ✨ Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Fluid Typography** - Smooth text scaling using CSS `clamp()`
- **Touch-Friendly** - 48px minimum touch targets for mobile accessibility
- **SEO Optimized** - Structured data, sitemap, and Open Graph meta tags
- **Dark Theme** - Modern dark UI with accent highlights
- **Smooth Animations** - Subtle hover effects and transitions
- **Accessibility** - Focus states, ARIA labels, reduced motion support

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **React 19** | UI component library |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Netlify** | Hosting and deployment |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── robots.txt          # Search engine crawling rules
│   ├── sitemap.xml         # XML sitemap for SEO
│   └── ...                 # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO metadata
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles & CSS variables
│   ├── components/
│   │   ├── Navbar.tsx      # Responsive navigation
│   │   ├── Hero.tsx        # Hero section with featured project
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx # Individual project cards
│   │   ├── ProjectRow.tsx  # Horizontal scrolling row
│   │   ├── SkillsSection.tsx
│   │   ├── ArchitectureSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── JsonLd.tsx      # Structured data for SEO
│   └── data/
│       └── projects.ts     # Project & skills data
├── netlify.toml            # Netlify deployment config
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Maadhu938/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

---

## 🎨 Customization

### Adding/Editing Projects

Edit `src/data/projects.ts`:

```typescript
export const projects = [
    {
        title: "Project Name",
        description: "Brief description of the project",
        techStack: ["React", "Node.js", "PostgreSQL"],
        githubUrl: "https://github.com/username/repo",
        liveUrl: "https://project-demo.com",
        status: "Active Development",
        featured: true  // Shows in hero section
    },
    // Add more projects...
];
```

### Adding/Editing Skills

Edit the `skills` array in `src/data/projects.ts`:

```typescript
export const skills = [
    { name: "React", category: "Frontend" },
    { name: "Python", category: "Backend" },
    // Add more skills...
];
```

### Changing Theme Colors

Edit CSS variables in `src/app/globals.css`:

```css
@theme {
  --color-bg-primary: #0a0e17;
  --color-accent: #3b82f6;
  /* ... other colors */
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size | Device |
|------------|-------------|--------|
| Default | < 640px | Mobile |
| `sm:` | ≥ 640px | Large phones |
| `md:` | ≥ 768px | Tablets |
| `lg:` | ≥ 1024px | Laptops |
| `xl:` | ≥ 1280px | Desktops |

---

## 🔍 SEO Features

- **Meta Tags** - Title, description, keywords, Open Graph, Twitter cards
- **Structured Data** - JSON-LD schema for Person and Website
- **Sitemap** - XML sitemap at `/sitemap.xml`
- **Robots.txt** - Search engine crawling rules at `/robots.txt`
- **Canonical URL** - Prevents duplicate content issues

---

## 🌐 Deployment

This project is configured for **Netlify** deployment:

1. Push code to GitHub
2. Connect repository to Netlify
3. Netlify auto-detects settings from `netlify.toml`
4. Add custom domain in Netlify dashboard

### Netlify Configuration

The `netlify.toml` includes:
- Next.js plugin for SSR/SSG support
- Security headers (X-Frame-Options, CSP, etc.)
- Cache headers for static assets
- Automatic HTTPS

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Maadhu Avati**

- GitHub: [@Maadhu938](https://github.com/Maadhu938)
- LinkedIn: [Maadhu Avati](https://www.linkedin.com/in/maadhu-avati-525435279)
- Email: maadhuavati07@gmail.com

---

Made with ❤️ using Next.js
