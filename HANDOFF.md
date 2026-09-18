# HANDOFF, Zynergy Website Project

> Context document for continuing this work in a new chat/machine.
> First written 2026-09-01, last updated 2026-09-10. Self-contained.
> If working with Claude: read this fully before making changes and follow
> **Working preferences** (section 7). This repo is PUBLIC: no client deal
> economics, legal identifiers, or personal data belong here.

---

## 0. State on 2026-09-10 (read this first)

- **Prod:** serves commit `ab7dddd` (deployed 2026-09-11 night on the
  user's "deploy"): Zynergy Apps naming (was Products) on the gateway and
  titles, Zynergy Admin branding in /admin, Design line at /design, gateway
  1 + 3 cards, @zynergyid handles, real team names on /tentang (photos
  pending). Sister app: Zynergy Hub is live at hub.zynergy.co.id (repo
  zynergy-hub). https://zynergy.co.id is live on Vercel and is already the
  canonical URL (site.ts, og:url, sitemap verified 2026-09-10). Ask before
  deploying.
- **Domain:** zynergy.co.id LIVE, nameservers on Vercel, DNS managed in
  the Vercel project (`vercel dns ls zynergy.co.id --scope devdanzen-projects`).
- **Email (set up 2026-09-10):** Zoho Mail Forever Free plan (5 users, no
  IMAP), org super admin **admin@zynergy.co.id** (display "Zynergy Admin",
  login for all brand accounts, only Danish). DNS done: MX (mx/mx2/mx3.zoho.com),
  SPF, DKIM (zmail._domainkey), DMARC p=none reporting to admin@. Mailbox
  plan: info@ (aliases halo@, sales@, marketing@), danish@, rizal@; team
  decided two people for now, aliases for roles, mailboxes for people.
- **Brand accounts:** Google account created with admin@ (for YouTube,
  Business Profile, Analytics). Instagram + Threads **@zynergyid** created.
  Facebook Page next (from Danish's personal profile, add Rizal as second
  admin, link IG, then Meta Business Suite). Social profile pictures with
  70% mark in `~/Downloads/zynergy-logo/social/` (white-on-navy is primary).
- **Hosting decision:** stay on Vercel Hobby until the first paying client,
  then Pro. ONE Vercel project: `/digital` and `/supply` stay as paths;
  `admin.zynergy.co.id` optional host rewrite; a future SaaS at
  `app.zynergy.co.id` gets its own project; team docs live in Notion.
- **Brand:** new Z mark (two separate point-symmetric pieces with facing
  ring nodes) in `src/components/ui/BrandMark.tsx`, `src/app/icon.svg`
  (solid-node variant), `src/app/apple-icon.png`, OG image. Navy #0B1B3F is
  the identity color, blue #2563EB is for actions. Logotype (wordmark) not
  yet designed. Handles: **@zynergyid** everywhere.
- **Open content questions:** company address on `/supply` and the compro
  PDF (Cilandak) vs the registered address (BSD, Tangerang Selatan);
  placeholders still live (stats 98% / 4.9, testimonials, portfolio, team
  photos on `/tentang`, final pricing).
- **Design line (added 2026-09-10, designer's request):** fourth line
  **Zynergy Design** (`/design`, content in `src/content/design.ts`):
  standalone design deliverables (branding, packaging, print, compro/deck,
  social visuals, merchandise). Boundary: growth-oriented creative (website
  visuals, ad creative, content as a service) stays inside Digital's three
  capabilities; /design cross-links to /digital. Interim page: hero, 6
  services, 3 steps, WA CTAs, no pricing until Nadhy defines packages.
  Gateway now 1 + 3 cards; nav has 9 items (verified one row at 1280px).
- **Team materials** (outside this repo): kickoff deck and brief, Notion
  team hub, logo asset pack, domain statement letter. Never regenerate
  handed-off files without an explicit "update".

---

## 1. Project goal

Build **zynergy.co.id**: the group site of **Zynergy**, the digital brand of
PT Sinergi Mitra Abadi Jaya (an Indonesian company founded 2008). Four
lines: **Zynergy Digital** (flagship: websites, branding, digital marketing,
sold as yearly subscription/care to UMKM and SMEs, positioned as "Digital
Growth Partner", not "jasa pembuatan website"), **Zynergy Apps**
(future SaaS; called "Products" until 2026-09-11), **Zynergy Supply** (industrial procurement, credibility page
only). Originally modeled on digitalinaja.id, later repositioned upmarket.
User/team: team@deepskill.io, six-person part-time team, PERINTIS 2026
university program (Sept to Dec) as first stage, run as a real business.

**Infra:** Vercel project `zynergy` (scope `devdanzen-projects`, deploy via
`vercel deploy --prod`), **Neon Postgres** (`neon-yellow-window`, us-east-1)
+ **Vercel Blob** (`zynergy-uploads`). Migrations run at build time
(`vercel.json`, unpooled URL for migrate). GitHub **zynergyid/zynergy** (dipindah 2026-09-19 dari akun pribadi ke organisasi zynergyid bersama zynergy-hub)
(public; no Vercel git integration yet; plan: move to a `zynergyid` org and
consider making it private). Prod `/admin` awaits first-user creation
(never seeded). Gotcha: keep the Payload Blob plugin registered
unconditionally (enabled-flag gating) or the admin importMap breaks.

---

## 2. Competitor research (digitalinaja.id, analyzed 2026-09-01)

Business model: attract with pain-point marketing → funnel every CTA into
**WhatsApp deep links with pre-filled messages** (`wa.me/<nr>?text=...`) →
close via free consultation. Yearly package pricing with "free hosting/domain/
maintenance forever" as the hook.

- **Their stack:** Laravel + Inertia.js + React + Radix UI + Tailwind, Vite build
- **Their design:** light theme, orange #E24A1D primary / #FB923C accent,
  Plus Jakarta Sans font, pill section badges, rounded-2xl cards, gradient blobs
- **Their pages:** long landing page + /blog + /portfolio (6 case studies) +
  /brief-project (lead form: business type, budget, deadline, feature checkboxes,
  file upload max 5×8MB) + /login (client area)
- **Their landing sequence (we mirror it, it's a conversion pattern):**
  hero → stats bar (120+ sites, 98% satisfaction, 4.9/5) → tech-logo marquee →
  6 pain-point cards → 6 service segments → 8 why-us cards → 3 pricing tiers
  (500K/800K/1000K per year, middle highlighted) → 6-step process → portfolio →
  6 testimonials → FAQ accordion (8 q) → final CTA → footer
- **Their WhatsApp number:** 6285113251571 (for reference only)

---

## 3. Decisions made (all confirmed by user)

| Decision | Choice |
|---|---|
| Team skills | JavaScript/TypeScript |
| Launch scope | Landing page only; full admin panel later |
| Stack | **Next.js (App Router) + TS + Tailwind + Radix + Framer Motion**, deploy on **Vercel** |
| Phase 2 | **Payload CMS 3** (installs in-repo, same deploy) + **Neon Postgres** + Vercel Blob for uploads |
| Phase 3 | Client login area via Payload auth (only if needed) |
| Design theme | **"Synergy Blue"**, chosen over "Voltage" (dark tech) and "Kinetic Coral" (warm) |
| Rationale | Blue=trust + emerald=growth converts the UMKM market; clearly distinct from competitor's orange |

### Design tokens (implemented in `src/app/globals.css`)

- `primary` #2563EB · `primary-dark` #1D4ED8 · `primary-soft` #EFF4FF
- `secondary` #10B981 (emerald; used for ALL WhatsApp CTAs) · `secondary-dark` #0E9F6E · `secondary-soft` #E7F8F1
- `ink` #0F1B33 (headings) · `muted` #55617A (body) · `surface` #FBFCFE (page bg) ·
  `surface-soft` #F4F7FB (alternating sections) · `line` #E6EAF2 (borders)
- Font: **Plus Jakarta Sans** (next/font, weights 400–800), light theme only
- Patterns kept from competitor: pill badges, rounded-2xl cards + soft shadows,
  highlighted middle pricing tier, sticky floating WhatsApp button

---

## 4. What's built (this repo)

Next.js **16.3.3** (Turbopack, note: NOT 15, see AGENTS.md about breaking
changes), React 19, Tailwind **v4** (tokens via `@theme` in globals.css, no
tailwind.config), pnpm.
Deps: framer-motion, @radix-ui/react-accordion, lucide-react, clsx, tailwind-merge.

```
src/
├── app/            layout.tsx (font/metadata/Header/Footer/WhatsAppFloat), page.tsx, globals.css
├── content/        ⭐ ALL business data & copy, EDIT HERE, NOT IN COMPONENTS
│   ├── site.ts     name, WA number, waMessages, email, socials, nav
│   └── landing.ts  typed content for every section (hero…finalCta)
├── components/
│   ├── layout/     Header (client: scroll+mobile menu), Footer, WhatsAppFloat
│   ├── sections/   Hero, StatsBar, Problems, Services, WhyUs, Pricing,
│   │               Process, Portfolio, Testimonials, Faq, FinalCta
│   └── ui/         Section, SectionHeading, CtaLink, Reveal (framer),
│                   FaqAccordion (radix), WhatsAppIcon (custom svg, lucide has no brands)
└── lib/            cn.ts (clsx+twMerge), wa.ts (waLink builder)
```

**Site structure (since 2026-09-04, agency lines MERGED):** the root `/`
is a navy group gateway with THREE lines (content in company.ts):
**Zynergy Digital** (flagship, full-width card; merges the former
Technology/Creative/Marketing lines per the same-buyer rule; full funnel
at `/digital` incl. a Whitebox-style "Satu Tim, Tiga Kapabilitas"
3-column section), **Zynergy Apps** (upcoming card, drafts in
apps.ts), **Zynergy Supply** (`/supply`; steel+amber industrial
design, 13-client marquee, six categories, identity block + compro PDF at
/docs/, contracts under the PT name). Former routes /technology and
/creative were REMOVED (no redirects, pre-launch). Gateway motto follows
the Whitebox model (user's stated inspiration).

**Supply line (public-safe summary):** the PT (founded 2008) supplies
networking, electrical, and infrastructure components to industrial
clients via SR/RFQ-based bids, domestic and import sourcing. Categories on
`/supply`: networking & konektivitas (SFP/GLC transceivers, Lantronix,
Cisco), structured cabling (Commscope, Netviel, Panduit), kelistrikan
(Schneider, Phoenix Contact), MRO & custom fabrication. NOTE: this repo is
PUBLIC; client names, financials, vendor IDs, and deal economics live ONLY
in Claude's private local memory, never here. Full credibility page (client
list needs clearance, certifications, company profile PDF) awaits user.

**Apps plan (decided 2026-09-03 as "Products"; renamed Zynergy Apps on
2026-09-11 because customers say "aplikasi", the subdomain is app., and
"Products" clashed with Supply's physical goods; not yet built):** the
Digital line will later carry software apps (SaaS/AI tools, courses)
besides jasa.
Rules: this repo is marketing-only; every product lives in its OWN repo,
deploy, and eventually own domain ("by Zynergy"); this site only lists and
links them via a catalog (`src/content/apps.ts` → `/apps/<slug>`
marketing cards, built only when the first product is announceable; no
"coming soon" shells). Incubate under the Zynergy umbrella, graduate to
own brand after proven demand. Sequencing: productized vertical services
and possibly a course first; they fund and reveal the first real product.
Point all ads/SEO/social links at `/technology`, not `/`. Brand-line slugs are ENGLISH (user preference, brand consistency); SEO lives in Indonesian titles/content, not slugs. Footer carries the
PT endorsement line; `legalName` is the real PT. SEO plumbing: sitemap.ts,
robots.ts, JSON-LD (Organization on `/`, ProfessionalService + FAQPage on
`/digital`, BlogPosting on posts). SEO strategy: vertical long-tail + local
+ blog content into the Cek quiz; ads for near-term leads.

Landing (`/technology`) section anchor ids: beranda, masalah, layanan, fitur
(teaser), keunggulan, paket, proses, portofolio, testimoni, faq, kontak.

**/racik-fitur (added 2026-09-03):** lead-gen tool page, "Cek" diagnostic
quiz (6 pain questions → verdict + feature recommendations, content in
`src/content/quiz.ts`) flowing into a tap-to-select feature picker
(18-feature catalog in `src/content/features.ts`, skeleton-wireframe
thumbnails, business-type presets). Selection lives in the shareable
`?f=` query param; checkout = pre-filled WhatsApp message. Landing page
carries a teaser banner linking here. The landing overhaul (big type,
minimal copy per section, refs: qasir.id, flip.id, hostinger.com/id)
shipped 2026-09-03: hero repositioned to WaaS ("Websitenya Kami Urus.
Anda Fokus Jualan."), problems 6→4 cards, why-us 8→4. `/tentang` exists
with TODO(launch) placeholder team members (content in
`src/content/team.ts`; awaiting real names, roles, photos), linked from
the footer. Everything above is deployed to prod.

All copy is **original Indonesian** (intent mirrors competitor, wording does not).
Hero visual is CSS-only (GridPattern blueprint, CubePattern crates on /supply); no stock imagery by decision. Brand mark and favicon are inline SVG (see section 0).

### Verified (2026-09-01)

- `pnpm build` ✅ compiles, type-checks, fully static prerender
- `pnpm lint` ✅ zero warnings
- Zero browser console errors; all 10 sections render; FAQ accordion works
- 10 `wa.me` CTAs with correct pre-filled Indonesian messages
- `.claude/launch.json` exists in repo for dev-server preview (port 3000)

---

## 5. Placeholders, grep `TODO(launch)` in src/content/

| Item | Current placeholder | Action |
|---|---|---|
| Pricing | Starter 500K / Business 950K (highlighted) / Premium 1.5JT per year | Finalize real prices & benefits |
| Testimonials | 3 fake quotes, "Nama Klien" | **MUST replace with real ones before launch** |
| Portfolio | 3 invented projects w/ gradient thumbnails | Replace with real projects + screenshots |
| Stats | 5+ (real) / 98% / 4.9/5 (fake) | Replace 98% and 4.9 with real numbers or remove |
| Socials | @zynergyid URLs in site.ts (accounts being claimed) | Confirm each account exists |
| Email | halo@ and info@zynergy.co.id | Mailboxes do not exist until Zoho is set up |

---

## 6. Next steps (in order)

1. Finish domain: Hostinger verification, nameservers to Vercel, verify with
   `vercel domains inspect zynergy.co.id`, set primary, update canonical
   URLs in `src/content/site.ts` and metadata, ask, deploy.
2. Zoho Mail: add TXT verification, MX, SPF, DKIM, DMARC via Vercel DNS.
3. Deploy the pending brand-mark and socials commits after the user's local
   check.
4. Resolve the company address question (Cilandak vs registered BSD) on
   `/supply` and in `scripts/generate-company-profile.py`, regenerate the
   compro PDF only when asked.
5. Real content: team names/photos, stats, testimonials, portfolio, final
   pricing (`TODO(launch)`), first prod admin user.
6. Meta Pixel + GA4 via `next/script` before running ads.
7. Optional: `admin.zynergy.co.id` host rewrite (Next 16 `proxy.ts`), Vercel
   Pro when the first client pays, GitHub org move, Vercel git integration,
   admin login branding, delete stray `neon-sky-ferry` resource.

---

## 7. Working preferences (user-stated)

Act as a **senior fullstack engineer with clean-code standards**:

- Content/config separated from presentation (single source of truth in `src/content/`)
- Typed content models; small focused components; meaningful names
- Minimal dependencies, hand-roll trivial primitives instead of adding libraries
- Server components by default; `"use client"` only where interactivity requires
- Respect `prefers-reduced-motion`; keep animations subtle & performance-cheap
- Verify with `pnpm build` + `pnpm lint` before declaring anything done
- The codebase must stay maintainable by a JS/TS team as it grows into Phase 2

Communication: user prefers concrete deliverables (files, mockups) over
descriptions; give one firm recommendation with trade-offs, and if they keep
hesitating, say plainly that both options work so they act today. The user
writes mostly in Indonesian; answer in Indonesian unless they write English.

Hard rules (learned from corrections):
- **Never deploy to prod without an explicit "deploy".** Commit and push
  normally; deploying is the user's call.
- **Never regenerate handed-off deliverables** (kickoff deck, brief,
  compro PDF, logo pack) without an explicit "update".
- **No em dashes anywhere**: repo copy, chat, documents. Commas, periods,
  colons.
- The user runs their own server on :3000; `next start` serves a frozen
  build, so after changes rebuild and restart (or use `pnpm dev`). Stop
  Claude's preview server when done.
- Team-facing documents: short, friendly, straightforward Indonesian.
- Language register: English for brand labels and taglines, Indonesian for
  persuasion and SEO copy. Brand-line slugs are English (`/digital`,
  `/supply`).

---

## 8. Machine-specific notes (old machine, safe to ignore on laptop)

- Old path: `/home/danish/projects/zynergy`; dev preview via
  `/home/danish/projects/.claude/launch.json` (`pnpm --dir zynergy dev`, port 3000)
- Claude memory files on the old machine (`zynergy-website-project.md`,
  `engineering-standards.md`) duplicate what's in this handoff, nothing unique there
- Design-direction mockup HTML (3 theme candidates) was in the session scratchpad,
  disposable; the chosen theme is fully specified in section 3
