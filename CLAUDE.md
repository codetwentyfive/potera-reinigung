# Potera Reinigung - Claude Guide

## Project Overview

Business website for **Potera**, a cleaning services company. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and MUI.

## Tech Stack

- **Framework**: Next.js 14.2.11 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 + MUI 6 (Material UI)
- **CSS-in-JS**: Emotion (MUI peer dependency)

## Commands

```bash
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build
npm start       # Start production server
npm run lint    # Run ESLint
```

## Project Structure

```
app/            # Next.js App Router pages and layouts
  layout.tsx    # Root layout (Header + Footer)
  page.tsx      # Home page
  contact/      # Contact page
  services/     # Services page
components/     # Reusable React components
public/         # Static assets (images, icons, favicon)
styles/         # Additional global styles
```

## Key Components

| Component | Purpose |
|-----------|---------|
| `Header.tsx` / `Navbar.tsx` | Site navigation |
| `HeroSection.tsx` | Landing hero with CTA |
| `AboutUsSection.tsx` | Company info |
| `ServicesSection.tsx` | Service offerings |
| `HowItWorksSection.tsx` | Process explanation |
| `Footer.tsx` | Site footer |

## Architecture Notes

- **App Router** is the primary routing system (`app/` directory)
- The `pages/` directory contains legacy routes — prefer `app/` for new pages
- Path alias `@/*` maps to the project root (configured in `tsconfig.json`)
- Custom Tailwind theme uses a blue color palette (see `tailwind.config.js`)
- `EstimateSection` component exists but is currently disabled in the home page

## Code Conventions

- Use TypeScript for all new files
- Use Tailwind utility classes for styling; MUI components for complex UI elements
- Follow existing component patterns (functional components with TypeScript props)
- Images go in `public/images/`, icons in `public/icons/`
