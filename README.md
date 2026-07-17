# Laravelcamp

A bilingual (Arabic / English) e-learning platform UI built with the modern Next.js stack. Arabic is the default locale with full RTL support; English renders LTR from the same components via logical CSS properties. Ships with a custom **"Crimson Studio"** design system — warm light-first canvas, crimson→orange gradient accents, glass navbar, and a full dark mode.

> This project is a full modernization + ground-up redesign of a 2022 Next.js 12 (Pages Router + MUI + SCSS + Redux) codebase. All backend integration was removed and replaced with typed placeholder data, so the app runs fully self-contained.

## Stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19 |
| Language | TypeScript (strict) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config in `app/globals.css`) |
| UI components | [shadcn/ui](https://ui.shadcn.com) (Radix primitives) + [lucide-react](https://lucide.dev) icons |
| i18n | [next-intl](https://next-intl.dev) — `ar` (default, RTL) and `en`, localized routes `/ar/...` & `/en/...` |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) — light (default) + dark mode toggle |
| Carousels | Embla via the shadcn Carousel component (RTL-aware) |
| Package manager | pnpm |

## Getting started

```bash
pnpm install
pnpm dev        # start the dev server on http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint       # eslint (flat config)
pnpm typecheck  # tsc --noEmit
```

Visiting `/` redirects to the default locale (`/ar`). Use the globe switcher in the navbar to change languages.

## Project structure

```
app/
  globals.css            # Tailwind v4 theme: brand tokens, shadcn variables, utilities
  [locale]/
    layout.tsx           # html/body, Cairo font, dir=rtl|ltr, NextIntlClientProvider
    login/page.tsx       # standalone page (no navbar/footer)
    (main)/              # routes wrapped in Navbar + Footer
      page.tsx           # home
      about/ blogs/ contact/ library/ profile/ tracks/ ...
      course/[id]/ techdegree/[id]/ tracks/[id]/
components/
  ui/                    # shadcn/ui components (button has custom `brand` variants)
  layout/                # navbar, mobile sheet, footer, locale switcher, page loader
  home/ tracks/ library/ course/ techdegree/ auth/
  shared/                # course card, blog card, video dialog, progress bar, ...
data/                    # typed placeholder data (courses, quizzes, blogs, plans, faqs, ...)
i18n/                    # next-intl routing / navigation / request config
messages/                # ar.json, en.json translation catalogs
proxy.ts                 # next-intl locale-detection middleware
```

## Design system — "Crimson Studio"

All tokens live in `app/globals.css` (Tailwind v4 CSS-first config), with light + dark palettes:

- **Canvas**: warm off-white `#faf8f6` with ink text `#1c1917` (dark: `#121110` / `#f5f3f0`)
- **Primary crimson** `#dc2626` with the signature gradient `--gradient-brand` (crimson → orange, `bg-brand-gradient`, `text-gradient`)
- **Rubik** font (Google Fonts via `next/font`) covering both Arabic and Latin scripts
- Surface utilities: `glass` (frosted navbar/cards), `bg-hero-mesh` (warm radial mesh), `bg-dot-grid`, `shadow-soft` / `shadow-lifted`, `card-hover`
- Custom animations: `animate-float`, `animate-marquee` (skills band), `animate-pulse-ring`
- Button variants: `gradient` (primary CTA pill), `soft`, `outline-pill`
- The logo is drawn in code (`components/layout/logo.tsx`) — flame mark + gradient wordmark, no image asset

## Placeholder data

The legacy app fetched from an InfixLMS backend (`/get-popular-courses`, `/get-all-courses`, `/get-course-details/:id`, `/get-all-quizzes`). Those calls were replaced by typed local data in `data/` that mirrors the same shapes (`{ en, ar }` bilingual fields, chapters, quizzes...). Wiring a real backend back in only requires replacing the imports in the route files.
