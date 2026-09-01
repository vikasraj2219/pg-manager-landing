# PG Manager — Landing Page

A conversion-focused B2B SaaS landing page for **PG Manager**, a Hostel & PG Management platform. Built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

Output is generated in `dist/`.

## Structure

- `src/App.tsx` — assembles the full page from section components, in the order defined in the brief
- `src/components/` — one component per landing page section (Hero, Problem, FeaturesList, Pricing, FAQ, etc.)
- `src/components/visuals/` — the product-UI mockups shown inside browser-frame cards (dashboard, room/bed grid, rent table, etc.) — replace these with real product screenshots when available
- `src/lib/data.ts` — all editable content: nav links, feature copy, pricing plans, FAQ, personas

## Notes for going live

- **Pricing**: plans in `src/lib/data.ts` (`pricingPlans`) use "Talk to Sales" placeholders — add real prices once finalized.
- **Product visuals**: the dashboard/feature mockups are illustrative, built to match the described product UI. Swap in real screenshots of `https://pg.waghmare.site/dashboard` when ready, and remove the "demo visualization" labels.
- **Demo form** (`src/components/DemoForm.tsx`): currently only sets local state on submit. Wire the `handleSubmit` function to your backend/API or a form service (e.g. your own `/api/leads` endpoint).
- **Analytics**: no analytics IDs are hardcoded. Add tracking (GA4, PostHog, etc.) via environment variables in `vite.config.ts` / a `.env` file, and fire events on CTA clicks (Book a Demo, Start Free Trial, Pricing, Request Demo).
- **Testimonials**: no fabricated customer quotes are included, per the brief. Replace the "Designed Around Real PG Operations" section with real testimonials once you have them.
- **SEO**: title, meta description, Open Graph and canonical tags are set in `index.html` — update the domain once deployed.

## Design system

- Colors, fonts and layout tokens are defined in `tailwind.config.js` (ink / paper / brass / ledger / rust palette, Libre Caslon Text for headlines, Manrope for UI text).
- Respects `prefers-reduced-motion`.
