# AdverMedia — Website

Production-ready Next.js site for AdverMedia: *"Communities are more
powerful than advertisements."*

Built with:
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for the design system
- **Framer Motion** for scroll-driven storytelling and micro-interactions
- Real brand assets (logo, community creator imagery, Instagram QR) sourced
  directly from the assets you supplied

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Deploy

This is a standard Next.js App Router project — it deploys as-is to
**Vercel** (recommended, zero config: `vercel deploy`), or to any Node
host / Docker setup that can run `next build && next start`.

## Project structure

```
app/
  layout.tsx       — fonts, metadata, SEO
  page.tsx          — composes all sections in scroll order
  globals.css        — Tailwind layers + design-system utilities
components/
  Nav.tsx             — sticky navigation
  Hero.tsx            — belief-statement opening (manifesto mode)
  OriginStory.tsx      — "The Noticing" + "The Gap" narrative beats
  BrandReveal.tsx       — "AdverMedia was born" moment
  Community.tsx          — living creator-community mosaic (proof layer)
  Offerings.tsx           — services, reframed as membership benefits
  Package.tsx               — the single ₹35,000 offer
  Process.tsx                — the 8-step "what happens after you join"
  Contact.tsx                  — "Join the Movement" + contact form
  Footer.tsx
  ui/
    Reveal.tsx                   — scroll-triggered fade/stagger primitives
    KineticLine.tsx                — word-by-word manifesto text reveal
    SectionLabel.tsx                 — numbered eyebrow label
lib/
  content.ts     — single source of truth for every real business fact
                    on the site (brochure content + founder story).
                    Edit copy here, not inside components.
public/images/
  logo.png                — AdverMedia mark (transparent)
  community/creator-*.jpg  — real creator-community imagery
  instagram-qr.jpg          — Instagram QR code
```

## Editing content

Every real fact on the site — the origin story, pricing, services, process
steps, contact details — lives in **`lib/content.ts`**. Nothing is
hardcoded inside the JSX. If a business fact ever changes (a new price,
new services, a founder name you want to add), that file is the only
place to touch.

## Notes on what's still open

Per the Creative Direction Document, a few things were intentionally left
as-is because no real data was supplied for them yet:

- No testimonials or case studies are shown — none were in the source
  assets, and none have been invented.
- Founders are referred to collectively ("three student founders") since
  no individual names were provided. Add names in `lib/content.ts` /
  `components/OriginStory.tsx` if you'd like them credited.
- The contact form currently opens the visitor's email client via a
  `mailto:` link (no backend required, fully deployable as-is). Swap the
  `handleSubmit` logic in `components/Contact.tsx` for a real form
  endpoint (e.g. Formspree, a serverless function, or your CRM) whenever
  you're ready to collect submissions server-side instead.
