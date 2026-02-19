# Glimmora International - Enterprise Website

Modern, enterprise-grade React website for Glimmora International, an AI-native enterprise platform company.

## 🚀 Features

- **Multi-Page React Application** with React Router v6
- **7 Solution Pages**: GRC, TPRM, Internal Audit, ScanVista, Tax Automation, RaaS, Dynamics 365
- **6 Service Pages**: Business Process Consulting, Digital Transformation, Data Analytics & AI, ERP Consulting, Cybersecurity & SOC, Cloud & Automation
- **Resources Section**: Blog infrastructure with listing and detail pages
- **Responsive Design**: Mobile-first, fully responsive layout
- **Tailwind CSS**: Utility-first styling with brand colors
- **Reusable Components**: Navbar, Footer, BookDemo form
- **Modern UI/UX**: Enterprise SaaS aesthetics

## 🎨 Brand Colors

- **Primary (Maroon)**: #760015
- **Maroon Dark**: #5A0010
- **Maroon Light**: #920019
- **Orange**: #F39200
- **Orange Light**: #FFA726

## 📁 Project Structure

```
Glimmora-Website/
├── public/
│   └── logo.png              # Place Glimmora logo here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with dropdowns
│   │   ├── Footer.jsx        # Global footer
│   │   └── BookDemoForm.jsx  # Reusable demo form
│   ├── layouts/
│   │   └── Layout.jsx        # Main layout wrapper
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── About.jsx         # About us
│   │   ├── Contact.jsx       # Contact page
│   │   ├── solutions/        # 7 solution pages
│   │   ├── services/         # 6 service pages
│   │   └── resources/        # Resources hub + blogs
│   ├── App.jsx               # Route configuration
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Glimmora Logo

Place the Glimmora logo image as `public/logo.png`

### 3. Run Development Server

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📄 Page Routes

### Core Pages
- `/` - Home
- `/about` - About Us
- `/contact` - Contact

### Solutions
- `/solutions/grc` - GRC Platform
- `/solutions/tprm` - TPRM Platform
- `/solutions/internal-audit` - Internal Audit Platform
- `/solutions/scanvista` - ScanVista
- `/solutions/tax-automation` - Tax Automation
- `/solutions/robot-as-a-service` - Robot as a Service
- `/solutions/dynamics-365` - Dynamics 365

### Services
- `/services/business-process-consulting` - Business Process Consulting
- `/services/digital-transformation` - Digital Transformation
- `/services/data-analytics-ai` - Data Analytics & AI
- `/services/erp-consulting` - ERP Consulting
- `/services/cybersecurity-soc` - Cybersecurity & SOC
- `/services/cloud-automation` - Cloud & Automation

### Resources
- `/resources` - Resources Hub
- `/resources/blogs` - Blog Listing
- `/resources/blogs/:slug` - Individual Blog Post

## 🎯 Key Features

### Navigation
- Sticky top navbar with scroll detection
- Dropdown menus for Solutions, Services, and Resources
- Mobile-responsive hamburger menu
- Active route highlighting
- "Book a Demo" CTA button

### Solution Pages
- Product-led landing page design
- Problem statement sections
- Feature showcases with icons
- Business outcome metrics
- Inline BookDemo form
- Visual content blocks

### Service Pages
- Service overview and value proposition
- Integration with Glimmora platforms
- Use cases and capabilities
- CTA linking to relevant solutions

### Resources
- Expandable resource hub design
- Blog listing with category filters
- Blog detail pages with rich formatting
- Newsletter subscription
- Related articles

### Forms
- BookDemoForm component with validation
- Inline error messages
- Success state handling
- Accessible labels and ARIA attributes

## 🎨 Design System

### Typography
- Primary Font: **Inter**
- Fallbacks: IBM Plex Sans, Source Sans 3
- Clear heading hierarchy (H1-H6)
- Generous line spacing

### Components
- `.btn-primary` - Primary CTA button
- `.btn-secondary` - Secondary button
- `.card` - Card component
- `.section-container` - Page section wrapper
- `.input-field` - Form input styling

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## 🔧 Customization

### Adding New Blog Posts

Edit `src/pages/resources/Blogs.jsx` and add to the `blogPosts` array:

```javascript
{
  slug: 'your-blog-slug',
  title: 'Your Blog Title',
  excerpt: 'Short description...',
  category: 'Category',
  author: 'Author Name',
  date: 'Date',
  readTime: 'X min read',
  image: '📊',
}
```

### Modifying Brand Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  brand: {
    maroon: '#760015',
    // Add custom colors
  },
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

This is a static React application that can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Azure Static Web Apps
- GitHub Pages

## 📝 Notes

- Logo should be placed at `public/logo.png`
- All routing is client-side using React Router
- Images use emoji placeholders (replace with actual images)
- Form submissions are simulated (integrate with backend API)
- Blog data is hardcoded (connect to CMS or API)

## 🔒 Environment Variables

No environment variables required for basic functionality. Add `.env` file if integrating:
- Analytics (Google Analytics, etc.)
- Form backend (API endpoints)
- CMS integration

## 📞 Support

For issues or questions about this codebase:
- Review component documentation
- Check React Router v6 docs
- Consult Tailwind CSS documentation

---

**Built with ❤️ for Glimmora International**
