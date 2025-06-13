# TrioChat Landing Page

A modern landing page for TrioChat's WhatsApp Business Platform, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern UI Design**: Sleek, professional design based on industry-leading SaaS landing pages
- **Dark/Light Mode**: Full theme support with smooth transitions
- **Responsive Layout**: Optimized for all screen sizes from mobile to large desktop
- **Smooth Animations**: Using Framer Motion for engaging user interactions
- **SEO Optimized**: Built with SEO best practices in mind
- **Performant**: Fast loading times and optimized assets
- **Accessible**: Following web accessibility standards

## Tech Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **GSAP**: Advanced animations (optional)
- **next-themes**: Dark/light mode support
- **Tabler Icons**: Modern icon set

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/triochat-landing-page.git
cd triochat-landing-page
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
triochat-landing-page/
├── src/
│   ├── app/                   # App router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout with providers
│   │   └── page.tsx           # Main page component
│   ├── components/            # Reusable components
│   │   ├── header.tsx         # Navigation header
│   │   ├── hero-section.tsx   # Hero section
│   │   ├── features-section.tsx # Features showcase
│   │   ├── how-it-works.tsx   # Process explanation
│   │   ├── testimonials.tsx   # Customer testimonials
│   │   ├── pricing.tsx        # Pricing plans
│   │   ├── faq-section.tsx    # FAQ accordion
│   │   ├── contact-section.tsx # Contact form
│   │   ├── footer.tsx         # Site footer
│   │   ├── theme-provider.tsx # Dark/light mode provider
│   │   └── theme-toggle.tsx   # Theme toggle button
│   └── lib/                   # Utility functions
│       └── utils.ts           # Helper functions
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── next.config.ts             # Next.js configuration
└── package.json               # Project dependencies
```

## Customization

### Themes

The color scheme can be customized in the `tailwind.config.ts` file. The site uses CSS variables for theming, which can be found in `src/app/globals.css`.

### Content

Content for each section can be edited in the respective component files. For example, to update the features list, edit `src/components/features-section.tsx`.

### Images

Replace the placeholder images in the `public` directory with your own branding and screenshots.

## Deployment

This project is ready to be deployed on Vercel or any other hosting platform that supports Next.js:

```bash
# Build for production
npm run build
# or
yarn build
# or
pnpm build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspiration from [Sero](https://sero.framer.website/), [Atomic](https://atomic-template.framer.website/), [Landin](https://landin.framer.website/), [Attio](https://attio.com/), and [Cluely](https://cluely.com/)
- Content inspiration from [Gallabox](https://gallabox.com/), [WATI](https://www.wati.io/), and [Aisensy](https://aisensy.com/)
- Icons from [Tabler Icons](https://tabler-icons.io/)
