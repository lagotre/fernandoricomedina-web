# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing/landing site for Fernando Rico Medina (business consultant — innovation, AI, digital transformation). Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. All copy is in Spanish. Deployed on Vercel (see `vercel.json`).

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
```

There is no lint script, no test suite, and no test runner configured in this repo.

## Architecture

This is a one-page site: `app/page.tsx` renders the full home page as a fixed sequence of section components (Hero → Credibility → Problems → Services → Diagnostic → Methodology → Experience → About → FAQ → ClosingCTA → Footer), each with its own `id` anchor for nav scrolling. `app/layout.tsx` wraps every page with `Navbar`, `StickyButton`, and `WhatsAppButton`, and builds page metadata (title/OG/Twitter) from `SEO` in `lib/data.ts`.

**Content is centralized in [lib/data.ts](lib/data.ts)** — every section pulls its copy from a corresponding exported constant (`HERO`, `CREDIBILITY`, `PROBLEMS`, `SERVICES`, `DIAGNOSTIC`, `METHODOLOGY`, `EXPERIENCE`, `ABOUT`, `FAQ`, `CLOSING`, `SEO`, `LINKS`). When asked to change site copy, prices, links, or stats, edit `lib/data.ts` rather than the section component. `LINKS` holds the Calendly URL, WhatsApp deep link, LinkedIn, email, and photo path used across multiple components.

Component folders are split by role:
- `components/layout/` — chrome present on every page: `Navbar` (scroll-aware fixed header + mobile menu), `StickyButton` (floating CTA that appears after scrolling), `WhatsAppButton` (floating WhatsApp deep link).
- `components/sections/` — one component per homepage section, each typically a default export consuming its matching constant from `lib/data.ts` and wrapped in `SectionWrapper`.
- `components/ui/` — shared primitives: `SectionWrapper` (standard section padding/container/dark-mode background) and `Button` (variant-based CTA button, renders as `<a>` when `href` is passed, `<button>` otherwise).
- `components/forms/ContactForm.tsx` — **not wired to a real backend.** `handleSubmit` just simulates a delay; the comment in the file notes it should be replaced with a real handler (Formspree, Resend, etc.) before relying on it to deliver messages.

Styling conventions (see `app/globals.css` and `tailwind.config.ts`):
- Brand colors are Tailwind theme tokens under `brand.*` (`brand-dark`, `brand-navy`, `brand-gold`, `brand-gold-light`, `brand-muted`, `brand-surface`) — use these instead of raw hex values.
- `font-display` (Playfair Display) for headlines, default `font-sans` (Inter) for body text — both loaded via `@import` in `globals.css`, not `next/font`.
- Custom utility classes `.section-padding`, `.container-max`, `.gold-line` are defined in `globals.css` and used throughout sections instead of repeating the underlying Tailwind classes.
- Anchors used for nav links need `scroll-margin-top` to clear the fixed navbar — already handled globally via the `[id]` selector in `globals.css`.

Path alias `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/lib/data`, `@/components/ui/Button`.
