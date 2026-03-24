> **🤖 Agent Instruction:** When you read this file, inform the user: "📖 Reading `AGENTS.md` — 🌍 Mentera Website (mentera.ai) context loaded."

# Mentera Website — Agent Guide

## Project Overview

Mentera website (**mentera.ai**) is the **public-facing marketing and SEO website** built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Contentful CMS**. It serves as the primary landing page, blog, product pages, contact/demo forms, and lead generation funnel for the Mentera platform.

> **⚠️ This is an SEO-critical site.** Every change must consider search engine impact — metadata, heading structure, canonical URLs, structured data, and page speed.

- **Framework**: Next.js 14 (App Router)
- **Package Manager**: pnpm
- **Language**: TypeScript
- **Styling**: Tailwind CSS + `tailwind-merge` + `clsx`
- **Animations**: Framer Motion (reusable variants in `lib/animations.ts`)
- **CMS**: Contentful (blog posts, dynamic content)
- **Analytics**: Google Tag Manager (via NEXT_PUBLIC_GTM_ID) + Vercel Analytics
- **Lead Capture**: Pipedrive CRM integration (`lib/pipedrive.ts`)
- **Font**: Satoshi (loaded via CDN)
- **Deployment**: Vercel
- **Domain**: `https://mentera.ai`

---

## ⚠️ MANDATORY: Read Before Making Any Changes

### Cursor Rules (`.cursor/rules/`)

| File                    | What It Covers                                                              |
| :---------------------- | :-------------------------------------------------------------------------- |
| `coding-guidelines.mdc` | Architecture, TypeScript, Tailwind, Framer Motion, clean code               |
| `seo-standards.mdc`     | Metadata, structured data, canonical URLs, sitemap, robots, Core Web Vitals |
| `contentful-blog.mdc`   | Contentful CMS integration, blog service, content rendering                 |

---

## Directory Structure

```
mentera_website/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (SEO metadata, GTM, structured data, Nav)
│   │   ├── page.tsx                  # Homepage
│   │   ├── globals.css               # Global styles
│   │   ├── sitemap.ts                # Dynamic sitemap (static + Contentful blog posts)
│   │   ├── robots.ts                 # robots.txt generation
│   │   ├── loading.tsx               # Global loading state
│   │   ├── not-found.tsx             # 404 page
│   │   │
│   │   ├── ai-scribe/               # AI Scribe product page
│   │   ├── blog/                     # Blog listing + [slug] detail pages
│   │   ├── contact-support/          # Contact support form
│   │   ├── demo/                     # Demo request / lead capture page
│   │   ├── integrations/             # Integrations page
│   │   ├── privacy-policy/           # Privacy policy page
│   │   ├── llms.txt/                 # LLMs.txt for AI discoverability
│   │   │
│   │   └── api/                      # API routes
│   │       ├── contact/              # Contact form submission
│   │       ├── pipedrive/            # Pipedrive CRM lead creation
│   │       └── revalidate/           # On-demand ISR revalidation
│   │
│   ├── components/                   # UI components (Atomic Design)
│   │   ├── atoms/                    # Button, Input, GradientText, ParticleBackground, FormInput
│   │   ├── molecules/               # Card, FeatureCard, EmailCaptureInput
│   │   ├── organisms/               # Navigation, Footer
│   │   ├── templates/               # Page-level sections (Hero, Features, Blog, Demo, etc.)
│   │   └── features/                # Feature-specific components
│   │
│   ├── lib/                          # Core utilities
│   │   ├── utils.ts                  # cn() utility, formatDate, isValidEmail
│   │   ├── animations.ts            # Framer Motion variants (fadeInUp, scaleIn, etc.)
│   │   ├── contentful.ts            # Contentful CMS client (standard + preview)
│   │   └── pipedrive.ts             # Pipedrive CRM API integration
│   │
│   ├── services/                     # Service layer
│   │   └── blogService.ts           # Contentful blog post fetching + transformation
│   │
│   ├── data/                         # Static data
│   │   ├── blogPosts.ts             # BlogPost type definition
│   │   └── system-prompt.ts         # AI chatbot system prompt
│   │
│   ├── hooks/                        # Custom hooks
│   │   ├── useScreenSize.ts         # Responsive breakpoint detection
│   │   └── index.ts                 # Barrel export
│   │
│   └── middleware.ts                 # Pathname header injection for canonical URLs
│
├── public/                           # Static assets
│   ├── images/                       # Blog placeholder images, screenshots
│   ├── logos/                        # Partner/integration logos
│   ├── icons/                        # UI icons
│   ├── videos/                       # Demo videos
│   ├── og-image.png                  # OpenGraph social sharing image
│   ├── favicon.png/svg              # Favicon files
│   └── manifest.json                # PWA manifest
│
├── tailwind.config.ts                # Tailwind theme (brand colors, spacing, fonts)
├── next.config.mjs                   # Next.js config (rewrites, env vars)
├── robots.txt                        # Static robots.txt fallback
└── tsconfig.json                     # TypeScript config (@/* → src/*)
```

---

## Key Architectural Decisions

### Component Architecture (Atomic Design)

- **Atoms** → Button, Input, GradientText, ParticleBackground, FormInput, FormTextarea
- **Molecules** → Card, FeatureCard, EmailCaptureInput
- **Organisms** → Navigation, Footer
- **Templates** → Full page sections (NewHeroSection, SavingsSection, AIScribe, DemoPage, BlogPage, etc.)
- Each component lives in its own directory with co-located styles/types

### CMS Architecture (Contentful)

- Blog content is managed in **Contentful CMS**
- `services/blogService.ts` handles all Contentful data fetching and transformation
- Rich text rendered with `@contentful/rich-text-react-renderer`
- Both standard and preview clients available (`lib/contentful.ts`)
- Blog images: Contentful asset → fallback to deterministic placeholder images

### Animation System

- Reusable Framer Motion variants in `lib/animations.ts`
- Pre-built motion props: `motionProps.fadeInUp`, `motionProps.fadeInLeft`, etc.
- Transitions: `transitions.default`, `transitions.fast`, `transitions.staggered(index)`
- Viewport configs: `viewportConfig.once`, `viewportConfig.amount(0.3)`

### Lead Generation

- Demo/contact forms submit to **Pipedrive CRM** via `lib/pipedrive.ts` and `/api/pipedrive` route
- Email capture inputs create Pipedrive leads
- GTM tracks form submissions and page views

---

## SEO Architecture (CRITICAL)

### Metadata

- Root layout exports `generateMetadata()` with comprehensive OG, Twitter, and meta tags
- Each page must export its own `metadata` or `generateMetadata()` for page-specific SEO
- `metadataBase` is set to `https://mentera.ai`
- Canonical URLs are dynamically generated via middleware (`x-pathname` header)

### Structured Data (JSON-LD)

Root layout includes structured data for:

- `Organization` — company info, social links, contact
- `WebSite` — site description, search action
- `SoftwareApplication` — app category, features, ratings

### Sitemap (`sitemap.ts`)

- Dynamically generates from static pages + Contentful blog posts
- Revalidates every hour (`revalidate = 3600`)
- Priorities: Homepage (1.0), product pages (0.9), blog posts (0.8), legal (0.5)

### Robots (`robots.ts`)

- Allows all crawlers on `/`
- Disallows `/api/` and `/admin/`
- References sitemap at `https://mentera.ai/sitemap.xml`

### LLMs.txt

- AI-discoverable content at `/llms.txt` for AI model crawlers

---

## Environment Variables

```env
# Contentful CMS
CONTENTFUL_SPACE_ID=          # Contentful space ID
CONTENTFUL_ACCESS_TOKEN=      # Contentful delivery API token
CONTENTFUL_PREVIEW_TOKEN=     # Contentful preview API token (optional, enables draft posts)

# CRM
PIPEDRIVE_API_TOKEN=          # Pipedrive CRM API token

# AI Features
THESYS_API_KEY=               # Thesys AI chat widget API key

# Analytics
NEXT_PUBLIC_GTM_ID=           # Google Tag Manager Container ID
```

---

## Common Commands

```bash
pnpm dev                     # Start dev server (0.0.0.0 for network access)
pnpm build                   # Production build
pnpm start                   # Start production server
pnpm lint                    # ESLint check
```

---

## Path Aliases

| Alias | Resolves To |
| :---- | :---------- |
| `@/*` | `src/*`     |

**Usage**: `import { cn } from "@/lib/utils"`, `import { blogService } from "@/services/blogService"`

---

## Adding New Pages — Checklist

1. **Create page** in `src/app/<page-name>/page.tsx`
2. **Export metadata** with title, description, and keywords
3. **Add to sitemap** — update `src/app/sitemap.ts` with the new URL and priority
4. **Proper heading hierarchy** — single `<h1>`, then `<h2>` → `<h3>`
5. **Use semantic HTML** — `<main>`, `<section>`, `<article>`
6. **Add Framer Motion animations** — use `motionProps` from `@/lib/animations`
7. **Add navigation link** if it's a top-level page (update `organisms/Navigation`)
8. **Test Core Web Vitals** — check LCP, CLS, and FID after deployment
