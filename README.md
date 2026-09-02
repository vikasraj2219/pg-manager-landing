# PG Manager — Landing Page

A product-led B2B SaaS landing page for **PG Manager**. Every primary CTA opens the live product at https://pg.waghmare.site directly — there is no demo-booking flow, free-trial flow, or lead-capture form.

## Getting started

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## What changed in this pass

- **Logo** — added the provided logomark at `public/images/logo.png` (and a 64px version as the favicon). It's used in the navbar and footer, replacing the old placeholder "P" badge.
- **Subscription plan cards** — `src/components/PricingPreview.tsx` now shows three tiers (Starter / Growth / Portfolio) with feature differentiation instead of just a text blurb. No prices are invented — each card links straight to the product, and a note points people to in-app pricing, consistent with the "no fabricated pricing" rule from the original brief.
- **Removed "How the modules connect"** — the `ProductWorkflow` section (the connected pill-chain of Property → Rooms → Beds → … → Reports) is gone, along with `workflowSteps` from `src/lib/data.ts`.
- **De-duplicated repeated content** — the page was showing the same modules and the same dashboard numbers multiple times:
  - `BentoFeatures`, `FinancialCarousel` and `OperationsBento` all re-covered the same 8 modules (Properties, Rooms & Beds, Tenants, Billing, Payments, Expenses, Maintenance, Analytics/KYC/Staff) that the interactive `ProductShowcase` tabs already cover in more depth — removed all three rather than trim them individually, since `ProductShowcase` is the strongest version of that content.
  - `OwnerDashboard` rendered the exact same `DashboardOverview` visual and near-identical copy ("Your entire business, at a glance") as the Hero section — removed it and folded its intent into `Analytics`, which now carries the "business at a glance" framing with its own distinct figures instead of repeating the Hero's `92% / ₹4.8L` numbers.

## Structure

- `src/App.tsx` — page assembly, in order: Navbar → Hero → Capability strip → Problem/Solution → Product showcase (tabs) → Multi-property → Analytics → Audience carousel → How it works → Security → Pricing → FAQ → Final CTA → Footer → Sticky mobile CTA.
- `src/components/` — one component per section.
- `src/components/visuals/` + `src/lib/visualRegistry.tsx` — the coded product-UI mockups shown inside `BrowserFrame` cards. Swap these for real screenshots of `pg.waghmare.site/dashboard` when ready.
- `src/lib/data.ts` — all editable copy: nav links, module tab content, personas, FAQ, pricing plan cards.

## Notes for going live

- Replace the coded dashboard mockups with real product screenshots once available.
- If real pricing figures are finalized, add them to the `scale` field in `pricingPlans` (`src/lib/data.ts`) — kept deliberately non-numeric for now so nothing on the page is fabricated.
- No analytics IDs are hardcoded; wire up tracking via environment variables when ready.
