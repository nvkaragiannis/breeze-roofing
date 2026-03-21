# Breeze Roofing NC — Claude Code Master Instructions

## How to Use These Files
Feed all of the following files to Claude Code at the start of your session, in this order:
1. `PROJECT_OVERVIEW.md` — context and strategy
2. `DESIGN_SYSTEM.md` — colors, typography, component style rules
3. `PAGES.md` — URL structure and page-by-page specifications
4. `COMPONENTS.md` — component list, props, and implementation details
5. `SEO.md` — metadata, schema markup, GEO strategy
6. `INTEGRATIONS.md` — Roofr embed, Resend, GA4
7. `CONTENT.md` — all copy and placeholder content

---

## Suggested Claude Code Session Prompts

### Session 1 — Project Init & Design System
```
I'm building a Next.js 14 (App Router) + Tailwind website for a roofing contractor. 
I've provided 7 spec files above. Start by:
1. Scaffolding the Next.js project with App Router and Tailwind
2. Installing dependencies: lucide-react, resend, @next/third-parties
3. Setting up the font (Inter via next/font/google)
4. Creating the Tailwind config with the custom color palette from DESIGN_SYSTEM.md
5. Creating the root layout.tsx with: font, GA4 stub, LocalBusiness schema script, and MobileCTABar
6. Building the Header and Footer components exactly as specified in COMPONENTS.md
```

### Session 2 — Homepage
```
Build the complete homepage (app/page.tsx) with all sections as specified in PAGES.md and CONTENT.md:
- Hero with trust bar
- FortifiedCallout section (navy background)
- ServicesGrid (6 cards)
- WhyBreeze section with 4 pillars
- ReviewsSection (4 curated reviews, no duplicates)
- EstimateSection with placeholder for Roofr embed
- Footer
All copy comes from CONTENT.md. All styling from DESIGN_SYSTEM.md.
```

### Session 3 — SEO Infrastructure
```
Implement the complete SEO infrastructure:
1. app/sitemap.ts — dynamic sitemap covering all pages, areas, and blog posts
2. app/robots.txt
3. SchemaScript component from COMPONENTS.md
4. Add LocalBusiness JSON-LD schema (from SEO.md) to root layout
5. Add FAQPage schema to /faq page
6. Set up metadata for: homepage, all service pages, all area pages
Use the exact keyword targets from SEO.md for each page's title and description.
```

### Session 4 — Service Area Pages
```
Build the service area system:
1. app/areas/page.tsx — service areas hub/index page
2. app/areas/[city]/page.tsx — dynamic template
3. Populate with city data from CONTENT.md and PAGES.md
4. Each area page must have: unique H1, unique body content, zip codes, BreadcrumbNav, LocalBusiness schema, and CTA to /estimate
Cities: wilmington-nc, hampstead-nc, leland-nc, carolina-beach-nc, wrightsville-beach-nc, southport-nc, topsail-island-nc, surf-city-nc
```

### Session 5 — Service Pages
```
Build individual service pages starting with the highest priority:
1. /services/fortified-roof/ — use the full copy from CONTENT.md, FAQPage schema
2. /services/storm-damage/
3. /services/emergency-repair/
4. /services/residential-roofing/
5. /services/roof-inspection/
6. /services/commercial-roofing/
Each needs: unique H1, metadata, schema, EmergencyCTA where relevant, CTA to /estimate
```

### Session 6 — Blog System
```
Set up the blog:
1. Install and configure next-mdx-remote or @next/mdx
2. Create /content/blog/ directory for MDX files
3. Build app/blog/page.tsx — blog index
4. Build app/blog/[slug]/page.tsx — blog post template with Article schema
5. Create the first blog post MDX file: how-much-does-a-new-roof-cost-wilmington-nc
Use the outline from CONTENT.md
```

### Session 7 — Integrations
```
Implement integrations:
1. InstantEstimatorEmbed component with placeholder and GA4 event tracking (INTEGRATIONS.md)
2. /app/api/contact/route.ts — Resend email API route
3. Contact form component on /contact/ page
4. GA4 setup via @next/third-parties
5. BreadcrumbNav component with JSON-LD output
```

---

## Key Rules for Claude Code
- **Never use two equal-weight CTAs** — always one primary (amber), one secondary (smaller/outlined)
- **All phone numbers** must be `href="tel:19106655277"` — tap-to-call
- **All images** must use `next/image` with explicit width and height
- **Hero image** must have `priority` prop
- **No inline styles** — Tailwind classes only
- **No placeholder/lorem text** — use CONTENT.md copy or clear `[PLACEHOLDER]` markers
- **Schema scripts** go at the bottom of each page inside the page component, not in layout (except LocalBusiness which goes in root layout)
- **MobileCTABar** must add bottom padding to prevent overlap with page content
- **Roofr embed** always has a `min-h-[650px]` wrapper to prevent layout shift

---

## Things to Ask Brett Before Going Live
- [ ] NC Contractor License number
- [ ] Year Breeze Roofing was founded
- [ ] His Roofr Instant Estimator embed code
- [ ] Manufacturer certifications (GAF, Owens Corning?)
- [ ] Professional photo of Brett and/or crew on a job
- [ ] Actual street address (for schema and Google Maps)
- [ ] Confirm email address (replace Letsgo@)
- [ ] Current Google review count
- [ ] BBB membership?
- [ ] Which reviews to highlight vs retire (flag the 3 identical ones)

---

## Deployment Checklist (Vercel)
- [ ] Connect GitHub repo to Vercel
- [ ] Add environment variables: RESEND_API_KEY, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_SITE_URL
- [ ] Set custom domain: breezeroofingnc.com
- [ ] Verify SSL (automatic with Vercel)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Business Profile website link points to new site
- [ ] Test Roofr embed on staging before going live
- [ ] Test contact form → Resend → Brett's email
- [ ] Run Lighthouse audit (target: 95+ Performance, 100 SEO, 100 Accessibility)
- [ ] Test on iOS Safari and Android Chrome
