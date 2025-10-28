# AI Assistant Instructions for Basic Website Project

## Project Overview
This is a responsive web project using HTML5, CSS3, and vanilla JavaScript. The project implements a mobile-first design approach with responsive breakpoints for tablet and desktop views.

## Key Files and Structure
- `index.html`: Main entry point with basic page structure
- `style.css`: Responsive styles with mobile-first approach
- `script.js`: JavaScript functionality for mobile menu toggle
- `about.html`, `contact.html`: Additional content pages

## Design Patterns and Conventions

### Responsive Design Breakpoints
- Mobile (default): < 768px
- Tablet: 768px - 900px
- Desktop: > 930px

Example from `style.css`:
```css
/* Tablet */
@media screen and (min-width: 768px) and (max-width: 900px) {
    section { width: 45%; }
}
```

### Typography System
- Headings: "BBH Sans Bogle" (primary)
- Body: "Oswald" with variants (400, 500, 600, 700)

### Navigation Pattern
- Mobile: Hamburger menu with slide-in animation
- Desktop: Horizontal navigation bar
- Active state uses red background (#e01c1c)

## JavaScript Conventions
- Event handlers use explicit `function` declarations
- DOM queries use `querySelector`
- CSS transitions handle animations
- Console logging used for debugging

## Important Development Patterns
1. Mobile menu toggle uses opacity and display properties for smooth transitions
2. Section visibility is controlled via CSS media queries
3. Desktop-specific content uses `#desktop-section` ID pattern

## Component Examples
Mobile Menu Toggle (from `script.js`):
```javascript
function toggleMenu(evt) {
    let nav = document.querySelector("#nav-list");
    // Toggle between = and x for menu icon
    evt.target.innerText = nav.style.display === "block" ? "=" : "x";
}
```

## File Organization
- All styles in single `style.css` file
- JavaScript in single `script.js` file
- HTML files in root directory
- No build process required - static files served directly