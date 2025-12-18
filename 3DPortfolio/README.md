# Modern Portfolio Website

A stunning, responsive portfolio website with 3D animations powered by Three.js, featuring glassmorphism design and neon accents.

## Features

- Sticky navigation with smooth scroll
- 3D animated hero section using Three.js
- Skills section with animated progress bars
- Projects showcase with hover effects
- Education timeline
- Contact form with validation
- Dark/Light theme toggle
- Fully responsive design
- Smooth animations and transitions

## Customization Guide

### 1. Personal Information

**Update the following in `index.html`:**

- **Line 13:** `<a href="#home" class="nav-logo">&lt;YourName /&gt;</a>` - Replace "YourName" with your name
- **Line 34:** `<h1 class="hero-name">Your Full Name</h1>` - Replace with your full name
- **Line 35:** `<p class="hero-title">Full Stack Developer</p>` - Replace with your job title
- **Lines 36-39:** Update the hero description with your personal introduction
- **Line 191:** `<p>your.email@example.com</p>` - Replace with your email
- **Line 200:** `<p>+1 (123) 456-7890</p>` - Replace with your phone number
- **Line 209:** `<p>Your City, Country</p>` - Replace with your location
- **Line 249:** `<p>&copy; 2024 Your Name. All rights reserved.</p>` - Replace with your name

### 2. Social Media Links

**Update the following in `index.html`:**

- **Line 213:** GitHub URL - Replace `https://github.com/yourusername` with your GitHub profile
- **Line 216:** LinkedIn URL - Replace `https://linkedin.com/in/yourusername` with your LinkedIn profile
- **Line 219:** Twitter URL - Replace `https://twitter.com/yourusername` with your Twitter profile

### 3. Education

**Update the timeline in `index.html` (Lines 150-172):**

- **Line 153:** Years (e.g., "2020 - 2024")
- **Line 154:** Degree name
- **Line 155:** University/College name
- **Lines 156-159:** Relevant coursework and details

Add more timeline items by copying the `timeline-item` div structure.

### 4. Projects

**Update projects array in `js/main.js` (Lines 1-50):**

Each project has the following structure:

```javascript
{
    title: "Project Name",
    description: "Brief description of your project",
    tags: ["Technology1", "Technology2", "Technology3"],
    liveUrl: "https://your-live-project-url.com",
    codeUrl: "https://github.com/yourusername/project-repo",
    icon: "🎨" // Choose an appropriate emoji
}
```

- Replace all 6 example projects with your own
- Update the `liveUrl` to point to your deployed project
- Update the `codeUrl` to point to your GitHub repository
- Choose relevant technology tags
- Select an appropriate emoji icon

### 5. Skills

**Update skills in `index.html` (Lines 68-127):**

To add or modify skills:

- Find the `skills-grid` section
- Update skill names, icons, and percentages
- Use Font Awesome icons (find icons at https://fontawesome.com/icons)
- Adjust the `data-progress` value (0-100) for skill level

Example:

```html
<div class="skill-card">
  <div class="skill-icon">
    <i class="fab fa-python"></i>
  </div>
  <h3 class="skill-name">Python</h3>
  <div class="skill-bar">
    <div class="skill-progress" data-progress="85"></div>
  </div>
  <span class="skill-percentage">85%</span>
</div>
```

### 6. Theme Colors (Optional)

To customize colors, edit `css/style.css` (Lines 9-19):

```css
:root {
  --primary-color: #00d4ff; /* Main accent color */
  --secondary-color: #00ff88; /* Secondary accent */
  --accent-color: #ff006e; /* Alert/error color */
  /* ... other colors */
}
```

## Deployment

### Deploy to Netlify

1. Create a [Netlify](https://www.netlify.com/) account
2. Drag and drop the entire project folder into Netlify
3. Your site will be live in seconds!

### Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Select "main" branch as source
5. Your site will be live at `https://yourusername.github.io/portfolio/`

### Deploy to Vercel

1. Create a [Vercel](https://vercel.com/) account
2. Import your GitHub repository or drag and drop your project
3. Deploy with one click!

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles and animations
├── js/
│   └── main.js         # JavaScript functionality and Three.js
├── assets/             # Place your images here (optional)
└── README.md           # This file
```

## Technologies Used

- HTML5
- CSS3 (Glassmorphism, Animations)
- Vanilla JavaScript
- Three.js (3D Graphics)
- Font Awesome (Icons)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Tips

1. **Images:** If you want to add profile pictures or project screenshots, place them in the `assets/` folder and update the paths in HTML
2. **Performance:** The 3D animation is optimized but may impact performance on older devices
3. **SEO:** Update the page title and add meta descriptions for better search engine optimization
4. **Analytics:** Add Google Analytics code before the closing `</body>` tag if needed

## License

Free to use for personal projects. Please provide attribution if you use this template.

## Support

For issues or questions, please open an issue on the GitHub repository.

---

Built with passion and modern web technologies. Make it yours!
