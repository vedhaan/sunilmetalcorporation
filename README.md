# Sunil Metal Corporation — Website

A 5-page marketing site for Sunil Metal Corporation (SMC), an Ahmedabad-based
ferrous & non-ferrous metal scrap trading company established in 1985.

## Tech Stack

- **React** (Vite) — SPA, no SSR
- **React Router** — client-side routing across 5 pages
- **Tailwind CSS v4** — via `@tailwindcss/vite`, theme defined in `src/index.css` (no `tailwind.config.js`)
- **Motion** (formerly Framer Motion) — `motion/react` import path
- **Fonts:** Bricolage Grotesque (display), IBM Plex Mono (labels/mono), Inter (body) — loaded via Google Fonts in `index.html`

## Getting Started

npm install
npm run dev


Runs at `http://localhost:5173` by default.

## Build

npm run build


Outputs to `dist/`.

## Project Structure

src/
components/
Header.jsx
Footer.jsx
WhatsAppButton.jsx
home/
Hero.jsx
TrustStrip.jsx
AboutSnapshot.jsx
MaterialsSnapshot.jsx
WhyChooseUs.jsx
CertificationsTeaser.jsx
FaqSnippet.jsx
ClosingCta.jsx
pages/
Home.jsx — fully built (8 sections)
About.jsx — placeholder only
Materials.jsx — placeholder only
Certifications.jsx — placeholder only
Contact.jsx — placeholder only
public/
logo.jpg
_redirects — required for Cloudflare Pages SPA routing
gallery/ — NOT YET POPULATED, see below


## Color Palette

| Name          | Hex       | Tailwind class          |
|---------------|-----------|--------------------------|
| Ink           | `#2A1B0E` | `bg-ink` / `text-ink`    |
| Bronze Deep   | `#6E4419` | `bg-bronze-deep`         |
| Bronze Core   | `#9C6B2E` | `bg-bronze-core`         |
| Bronze Shine  | `#EAC98A` | `bg-bronze-shine`        |
| Cream         | `#FAF6EF` | `bg-cream`                |
| Oxide         | `#B5502A` | `bg-oxide` (added for CTAs / copper accent) |

Defined in `src/index.css` via Tailwind v4's `@theme` block.

## Deployment

Hosted on **Cloudflare Pages**, connected to this repo's `main` branch.

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Every push to `main` auto-deploys to the production URL; other branches get preview URLs.

`public/_redirects` (`/* /index.html 200`) is required — without it, direct
navigation or a refresh on any route other than `/` returns a 404, since
Cloudflare's server doesn't know about React Router's client-side routes.

## Project Status

**Home page: complete** (Hero, Trust Strip, About Snapshot, Materials
Snapshot, Why Choose Us, Certifications Teaser, FAQ, Closing CTA).

**About & History, Materials We Deal In, Certifications & Facility Gallery,
Contact / RFQ: not yet built** — currently placeholder pages only.

## Known Content Issues — Resolve Before Launch

These come from gaps or ambiguities in the original content doc and are
**not yet fixed in code**:

1. **WhatsApp number is a placeholder.** `WHATSAPP_NUMBER` is hardcoded in
   `src/components/WhatsAppButton.jsx` and duplicated inline in `Hero.jsx`
   and `ClosingCta.jsx`. Get the real primary contact number, then update
   all three (or refactor into a shared constant first).
2. **Nickel has no matching Materials section.** FAQ and other copy mention
   it; the Materials grid does not have a Nickel tile. Confirm whether SMC
   trades nickel before the Materials page is built.
3. **Export/import wording is an assumption**, not confirmed. The original
   doc read "IMPOTER TO USA, Dubai..." — treated throughout as "Exporter
   to," but this hasn't been verified with the client.
4. **GST number** (`24AAVPB1273H1ZS`) has not been placed on the site yet
   and its validity/currency hasn't been confirmed.
5. **MRAI / ANMA full names** (spelled out in Trust Strip's hover rings) are
   sourced from the content doc, not independently verified against the
   associations' current official names.
6. **`public/gallery/` is empty.** `CertificationsTeaser.jsx` references
   `/gallery/facility-1.jpg`, `/gallery/facility-2.jpg`, and
   `/gallery/certificate-1.jpg` — real photos need to be added with those
   exact filenames, or the `src` paths in that component updated to match
   whatever's actually provided.

## Remaining Phases

- **Phase 2** — About & History (Our History, Leadership, Mission & Vision,
  What We Stand For, Closing CTA)
- **Phase 3** — Materials We Deal In (per-metal sections with anchors
  matching the Home page grid's links)
- **Phase 4** — Certifications & Facility Gallery
- **Phase 5** — Contact / RFQ (form, maps, business hours)
- **Phase 6** — Cross-page polish: mobile nav menu (not yet built — Header
  is desktop-only), SEO meta tags, accessibility pass, responsive audit
- **Phase 7** — Final QA against the content issues above, production deploy