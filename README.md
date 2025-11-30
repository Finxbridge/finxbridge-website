# Finxbridge Website Clone

A modern, fully responsive recreation of the Finxbridge website built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates production-ready code with best practices for performance, SEO, and accessibility.

## Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion and custom CSS animations
- **SEO Optimized**: Meta tags, semantic HTML, and structured data
- **Performance Focused**: Optimized images, lazy loading, and code splitting
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA labels
- **Clean Code**: TypeScript for type safety, ESLint for code quality

## Project Structure

```
finxWebsite/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles and Tailwind imports
├── components/
│   ├── Header.tsx           # Navigation header with mobile menu
│   ├── Hero.tsx             # Hero section with gradient background
│   ├── Services.tsx         # Services grid section
│   ├── Features.tsx         # Features with animated stats
│   ├── About.tsx            # About section with image
│   ├── Stats.tsx            # Animated statistics counter
│   ├── Testimonials.tsx     # Client testimonials carousel
│   ├── Contact.tsx          # Contact form and information
│   ├── Footer.tsx           # Footer with links and social media
│   ├── ScrollProgress.tsx   # Progress bar indicator
│   └── ScrollToTop.tsx      # Scroll to top button
├── public/
│   └── (static assets)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, React Intersection Observer
- **Carousel**: Swiper.js
- **Icons**: SVG icons (inline)
- **Fonts**: Google Fonts (Inter, Ubuntu)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd C:\Projects\finxWebsite
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
```

## Environment Variables

This project doesn't require environment variables by default. If you want to add analytics or external services, create a `.env.local` file:

```env
# Example
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#387dff',
    dark: '#1e6dff',
  },
  // ... more colors
}
```

### Content

All content is editable in the respective component files:
- Hero text: `components/Hero.tsx`
- Services: `components/Services.tsx`
- About: `components/About.tsx`
- Contact info: `components/Contact.tsx`

### Images

Replace image placeholders with actual images:
1. Add images to the `public/` directory
2. Use Next.js `Image` component for optimization:

```tsx
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority
/>
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next folder
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Static Export

For static hosting (GitHub Pages, S3):

1. Update `next.config.js`:
```javascript
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

2. Build:
```bash
npm run build
# Files will be in the 'out' directory
```

## Performance Optimizations

- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Use Next.js Image component
- **Lazy Loading**: Components load on scroll with Intersection Observer
- **Font Optimization**: Google Fonts loaded via Next.js font optimization
- **CSS Purging**: Tailwind removes unused CSS in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Focus indicators on interactive elements

## Image Placeholders

The following images need to be replaced with actual assets:

1. **Hero Section**: Modern fintech dashboard illustration (800x600px)
2. **About Section**: Professional team photo or office workspace (600x600px)
3. **Logo**: Company logo (replace the gradient "F" placeholder)
4. **Favicon**: `public/favicon.ico`

## Contributing

This is a clone project for demonstration purposes. Feel free to customize and extend it for your needs.

## License

This project is created for educational and demonstration purposes. Please ensure you have the rights to use any content, images, or branding when deploying to production.

## Support

For issues or questions:
1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Check the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. Review the component files for inline comments

## Acknowledgments

- Original design inspiration: [Finxbridge](https://finxbridge.com/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
