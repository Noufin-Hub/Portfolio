# Noufin - Personal Portfolio Website

A modern, professional portfolio website built with HTML5, CSS3, and vanilla JavaScript.

## 🚀 Features

- **Fully Responsive** - Mobile-first design that works on all devices
- **Dark Mode** - Toggle between light and dark themes
- **Smooth Animations** - Scroll animations, typing effect, and hover effects
- **Contact Form** - With validation
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Loading** - No unnecessary libraries
- **Accessible** - ARIA labels and keyboard navigation support

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main stylesheet
│   └── responsive.css  # Responsive styles
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   └── images/         # Images and placeholders
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Personal Information

Replace all placeholder content in `index.html` with your actual information:

#### Hero Section
- **Name**: Replace "Noufin" with your name
- **Headline**: Update the typing animation text in `js/script.js`
- **Introduction**: Replace the placeholder description
- **Social Links**: Update GitHub, LinkedIn, and email links
- **Profile Photo**: Replace `assets/images/profile-placeholder.svg` with your photo

#### About Section
- **Introduction**: Add your professional background
- **Career Objective**: Write your career goals
- **Strengths**: Update with your actual strengths
- **Stats**: Adjust the numbers in `data-target` attributes

#### Skills Section
- Update skill levels by changing `data-level` values (0-100)
- Add or remove skills as needed

#### Education Section
- Update institution names, years, and CGPA
- Add more education items by copying the timeline-item structure

#### Projects Section
- Replace project placeholders with your actual projects
- Update project images, descriptions, tech stacks, and links
- Add more projects by copying the project-card structure

#### Certifications Section
- Update with your actual certifications
- Add certificate links
- Add more certifications as needed

#### Contact Section
- Update email, phone, and location
- Update social media links
- The contact form is ready to use - you can integrate it with a backend service

### 2. Images

Replace the placeholder SVG images with your actual images:

- `assets/images/profile-placeholder.svg` - Your professional photo
- `assets/images/project-placeholder-1.svg` - Project 1 screenshot
- `assets/images/project-placeholder-2.svg` - Project 2 screenshot
- `assets/images/project-placeholder-3.svg` - Project 3 screenshot

Recommended image sizes:
- Profile photo: 400x400px
- Project screenshots: 400x200px

### 3. Resume

Add your resume PDF to the project:
1. Create an `assets/resume/` folder
2. Add your resume PDF as `Noufin_Resume.pdf`
3. Update the download link in the Resume section

### 4. Color Theme

To customize colors, edit the CSS variables in `css/style.css`:

```css
:root {
    --bg-primary: #F8FAFC;      /* Main background */
    --primary: #2563EB;         /* Primary color */
    --accent: #38BDF8;          /* Accent color */
    --text-primary: #111827;    /* Main text color */
    /* ... more variables */
}
```

### 5. Typography

The website uses Poppins font. To change it:
1. Choose a different font from Google Fonts
2. Update the font link in `index.html`
3. Change `--font-primary` in `css/style.css`

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript (Vanilla)** - No frameworks, pure JS
- **Font Awesome** - Icons (via CDN)
- **Google Fonts** - Poppins typography

## 📱 Responsive Breakpoints

- Mobile: < 576px
- Tablet: 576px - 991px
- Desktop: > 992px

## 🚀 Deployment

### Option 1: GitHub Pages
1. Push the code to a GitHub repository
2. Go to repository Settings > Pages
3. Select the main branch
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Drag and drop the portfolio folder to Netlify
2. Your site will be live instantly

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the portfolio directory
3. Follow the prompts

## 📝 SEO Tips

1. Update the `<title>` tag in `index.html`
2. Update the meta description with your actual information
3. Add your actual keywords in the meta keywords tag
4. Replace placeholder alt text with descriptive text

## 🔧 JavaScript Features

The following features are implemented in `js/script.js`:

- Loading animation
- Scroll progress indicator
- Back to top button
- Dark mode toggle (with localStorage persistence)
- Mobile navigation
- Smooth scrolling
- Typing animation
- Scroll animations (fade-in effects)
- Skill bars animation
- Stats counter animation
- Contact form validation
- Active nav link highlighting

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This portfolio template is free to use for personal and commercial projects.

## 🤝 Support

For issues or questions, feel free to reach out through the contact form on the website.

---

**Built with ❤️ for Noufin**
