# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for Fernando Rico Medina (business consultant — commercial strategy, marketing, channels, AI). Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. All copy is in Spanish. Built as a **static export** (`output: "export"` in `next.config.js`) and deployed to Hostinger shared hosting as plain HTML/CSS/JS — not Vercel/Node.js, despite the legacy `vercel.json`. There is no server runtime in production: no API routes, no SSR, no `next/image` optimization (`images.unoptimized: true`).

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build -> static files in out/
npm run start    # preview the static export (serves out/ via `serve`, not `next start` — that's incompatible with output: export)
```

There is no lint script, no test suite, and no test runner configured in this repo.

### Deploying to Hostinger

`npm run build` produces a static site in `out/`. To publish: zip the **contents** of `out/` (not the folder itself — `index.html` must sit at the zip root), upload via hPanel → File Manager into the domain's `public_html`, and extract there. `trailingSlash: true` is required in `next.config.js` so every route exports as `route/index.html` (works on any static server with zero config); without it Next exports flat `route.html` files that need server rewrite rules Hostinger shared hosting won't have by default. Dynamic metadata routes (`app/sitemap.ts`, `app/robots.ts`) export fine as static files. **`next/og` dynamic image routes (`app/opengraph-image.tsx`) do NOT export with a file extension** (e.g. `out/opengraph-image` with no `.png`), which breaks `Content-Type` on plain static hosting — use a static `app/opengraph-image.png` file instead (current setup) rather than an `ImageResponse` route.

After any `next.config.js` or routing change, rebuild and smoke-test the actual `out/` output before publishing: `rm -rf out && npm run build`, then serve it statically (e.g. `npx serve out`) and click through every route — don't trust `npm run dev` alone, since static export has different file-resolution behavior than the dev server. Always `rm -rf out` before rebuilding rather than building over a stale `out/`; don't run a static file server against `out/` while a build that writes to it is in flight — both have caused corrupted output (stale chunk hashes, duplicate `name 2/` directories) during this project's history.

## Architecture

The site spans multiple routes under `app/`: `app/page.tsx` (home) renders a fixed sequence of section components (Hero → Credibility → Problems → Services → Diagnostic → About → TrayectoriaPreview → TestimoniosPreview → FAQ → ClosingCTA → Footer), each with its own `id` anchor for in-page nav scrolling. Three pages live outside the home and render the **full** version of a section the home only teases: `app/metodologia/page.tsx`, `app/herramientas/page.tsx`, and `app/testimonios/page.tsx` (which combines the full `Trayectoria` + `Testimonios` components — the home's `TrayectoriaPreview`/`TestimoniosPreview` link to it). Nav links in `Navbar`/`Footer` that point at home sections use `/#section-id` (not bare `#section-id`) so they still resolve correctly from these other pages; links to standalone pages use a plain path like `/metodologia`. These standalone pages must include `<Footer />` themselves — `app/layout.tsx` does not render it globally (only `Navbar`, `StickyButton`, `WhatsAppButton`); only `app/page.tsx` adds `Footer` after its last section.

`app/layout.tsx` builds page metadata (title/OG/Twitter/JSON-LD) from `SEO` and `LINKS` in `lib/data.ts`.

**Content is centralized in [lib/data.ts](lib/data.ts)** — every section pulls its copy from a corresponding exported constant (`HERO`, `CREDIBILITY`, `ECOSYSTEM`, `PROBLEMS`, `SERVICES`, `DIAGNOSTIC`, `METHODOLOGY`, `ABOUT`, `TRAYECTORIA`, `TESTIMONIOS`, `FAQ`, `CLOSING`, `SEO`, `LINKS`). When asked to change site copy, prices, links, or stats, edit `lib/data.ts` rather than the section component. `LINKS` holds the Calendly URL, WhatsApp deep link, LinkedIn, email, and photo path used across multiple components.

Component folders are split by role:
- `components/layout/` — chrome present on every page: `Navbar` (scroll-aware fixed header + mobile menu; logo links to `/`), `StickyButton` (floating CTA that appears after scrolling), `WhatsAppButton` (floating WhatsApp deep link).
- `components/sections/` — one component per section. Several have a "full" version (used on its own internal page) and a "Preview" sibling (the compact teaser embedded in the home page), e.g. `Trayectoria.tsx`/`TrayectoriaPreview.tsx`, `Testimonios.tsx`/`TestimoniosPreview.tsx` — both variants pull from the same `lib/data.ts` constant and share markup via `components/ui/MarqueeRow.tsx` and `components/ui/TestimonialCard.tsx` rather than duplicating it.
- `components/ui/` — shared primitives: `SectionWrapper`, `Button` (variant-based CTA, renders as `<a>` when `href` is passed, `<button>` otherwise), `MarqueeRow` (infinite-scrolling logo/name ticker, pauses on hover), `TestimonialCard`.
- `components/forms/ContactForm.tsx` — **not wired to a real backend and not rendered anywhere in the app.** `handleSubmit` just simulates a delay; would need a real handler (Formspree, Resend, etc.) before being used.

Several `public/` images exist in two versions: an original (often with spaces in the filename, e.g. `Fernando Rico Hero.png`) kept only as an unused backup, and an optimized/recolored version actually referenced in code (`fernando-rico-hero.png`). Check what a component actually imports before assuming the "obvious" filename is the live one. Don't delete the unused originals without asking — that's been corrected before in this project's history.

Styling conventions (see `app/globals.css` and `tailwind.config.ts`):
- Brand colors are Tailwind theme tokens under `brand.*` (`brand-dark`, `brand-navy`, `brand-gold`, `brand-gold-light`, `brand-muted`, `brand-surface`) — use these instead of raw hex values.
- `font-display` (Playfair Display) for headlines, default `font-sans` (Inter) for body text — both loaded via `@import` in `globals.css`, not `next/font`.
- Custom utility classes `.section-padding`, `.container-max`, `.gold-line` are defined in `globals.css` and used throughout sections instead of repeating the underlying Tailwind classes.
- Anchors used for nav links need `scroll-margin-top` to clear the fixed navbar — already handled globally via the `[id]` selector in `globals.css`.

Path alias `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/lib/data`, `@/components/ui/Button`.
