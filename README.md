# Mentera.ai Landing Page

This is the landing page for Mentera.ai, an AI-powered med spa management platform. The website is built using Next.js and follows atomic design principles for maintainable and scalable component architecture.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Intersection Observer

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global CSS styles
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Homepage component
│   ├── not-found.tsx   # 404 page
│   └── sitemap.ts      # Dynamic sitemap generation
├── components/          # React components following atomic design
│   ├── atoms/          # Basic building blocks (buttons, inputs, etc.)
│   ├── molecules/      # Combinations of atoms (form groups, cards, etc.)
│   ├── organisms/      # Complex components (navigation, footer, etc.)
│   └── templates/      # Page-level components (sections, layouts)
├── lib/                # Utility functions and helpers
└── public/             # Static assets (images, fonts, etc.)
```

## Features

- SEO optimized with Next.js metadata, sitemaps and proper semantic HTML
- Responsive design for mobile, tablet, and desktop viewports
- Micro-interactions and animations for enhanced user experience
- Performance optimized with minimal JavaScript and efficient rendering
- Mouse-following parallax effects in the hero section
- Gradient animations and shiny text effects
- Intersection-based animations for scroll experiences
- Accessible design following WCAG guidelines

## Design System

The project uses Tailwind CSS for styling with a custom configuration that defines:

- Color palette specific to Mentera brand
- Typography system with custom fonts
- Spacing and sizing scales
- Animation durations and easing functions
- Responsive breakpoints
- Custom component variants

## Development Guidelines

1. **Atomic Design**: Follow atomic design principles for component organization
2. **Styling**: Use Tailwind CSS utility classes and avoid inline styles
3. **Responsiveness**: Design for mobile-first, then adapt for larger screens
4. **Performance**: Optimize images, use code splitting, and minimize JavaScript
5. **Animations**: Add meaningful animations that enhance UX, not distract
6. **Accessibility**: Ensure proper contrast, keyboard navigation, and screen reader support
7. **SEO**: Maintain semantic HTML structure and metadata

## Build and Deploy

To build the project for production:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

Copyright © 2024 Mentera.ai. All rights reserved.
