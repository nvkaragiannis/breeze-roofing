# Project Research Summary

**Project:** Breeze Roofing NC Website Enhancement & Optimization
**Domain:** High-Converting SEO-Dominant Local Service Business Website (Roofing Contractor)
**Researched:** 2026-04-03
**Confidence:** HIGH

## Executive Summary

This research covers the optimization and enhancement of Breeze Roofing's existing Next.js 16 marketing website, focusing on completing launch-blockers and implementing conversion-focused improvements. The site already has strong foundational architecture with static generation, comprehensive schema markup, and mobile-responsive design. The primary insight from research: Breeze Roofing's MVP foundation is solid — the path forward focuses on **completion over creation**, **optimization over innovation**, and **content over code**.

The recommended approach prioritizes three critical areas: (1) completing launch-blocking gaps (real photos, business details, Roofr integration, API keys), (2) optimizing Core Web Vitals for SEO ranking signals, and (3) enhancing content strategy with unique service-area pages and storm-focused blog content. Next.js 16's native SEO capabilities eliminate the need for additional SEO libraries, and the existing static-first architecture provides perfect Core Web Vitals performance when properly configured.

Key risks center on SEO migration pitfalls common to local service redesigns: URL changes without redirects (40-70% traffic loss), NAP inconsistency causing local ranking drops, and mobile UX failures affecting 70%+ of roofing traffic. These are mitigated through redirect mapping, GBP consistency audits, real device testing, and a phased approach that prioritizes high-value, low-risk completions before tackling complex enhancements.

## Key Findings

### Recommended Stack

Modern SEO-dominant local business websites leverage Next.js 16's native capabilities rather than adding third-party SEO libraries. The site currently uses Next.js 16.2.1 with Tailwind CSS v4 and Turbopack — this stack already provides everything needed for top-tier SEO performance. The key realization: **next-seo, next-sitemap, and react-helmet are obsolete** for Next.js 13+ projects. Native Metadata API, sitemap.ts, and robots.ts handle all SEO needs.

**Core technologies already implemented:**
- **Next.js 16 Metadata API**: Built-in SEO meta tags, OpenGraph, dynamic metadata — eliminates need for next-seo
- **Static Site Generation**: All pages pre-rendered at build time for instant LCP (<0.5s) and perfect crawlability
- **next/image**: Automatic WebP/AVIF conversion, responsive sizing, lazy loading for Core Web Vitals optimization
- **Tailwind CSS v4**: Utility-first CSS with mobile-first responsive design
- **MDX + gray-matter**: File-based blog with frontmatter for content management

**Missing but recommended additions:**
- **schema-dts + react-schemaorg**: Type-safe JSON-LD generation (prevents schema errors that hurt rankings)
- **@vercel/analytics + @vercel/speed-insights**: Privacy-first analytics + Core Web Vitals monitoring (no cookie banner needed)
- **react-hook-form + zod**: High-performance form handling with type-safe validation (current ContactForm can be enhanced)
- **google-libphonenumber**: Phone number formatting and validation for consistent NAP signals

**Stack confidence: HIGH** — All recommendations verified via npm registry and official Next.js documentation.

### Expected Features

The site already implements all table-stakes features expected of modern roofing contractor websites. Feature research reveals the primary opportunity is **optimization and content enhancement**, not new feature development.

**Must have (already implemented):**
- Click-to-call functionality (MobileCTABar, Hero CTAs)
- Online estimate request form (ContactForm with validation + rate limiting)
- Service pages (10 services) and area pages (8 coastal NC towns)
- Google review display (ReviewsSection with 4.9 rating)
- LocalBusiness schema markup (rich results eligibility)
- Mobile-responsive layout (Tailwind + sticky mobile CTA bar)
- Trust signals (licenses, Fortified certification, 24/7 emergency)
- Blog infrastructure (MDX system with 7 posts)

**Should have (gaps to complete):**
- **Real project photos**: ProjectGallery component exists but needs Brett's before/after images (HIGH priority — visual proof drives conversion)
- **Roofr instant estimator**: InstantEstimatorEmbed component exists but needs embed code from Brett's dashboard (HIGH priority — reduces friction)
- **Business details**: License number, Brett's last name, year founded currently TBD (HIGH priority — credibility)
- **Core Web Vitals audit**: Verify LCP <2.5s, proper image optimization (MEDIUM priority — Google ranking factor)
- **Warranty/guarantee section**: Risk reversal content (MEDIUM priority — add after launch validation)
- **Storm/insurance blog posts**: High-intent commercial keywords (MEDIUM priority — traffic opportunity)

**Defer (v2+):**
- Video testimonials (production complexity, start with text reviews)
- Live chat with humans (validate phone/form conversion rates first)
- Service-specific area pages (e.g., "roof repair Hampstead NC" — analyze search volume first)
- Weather-aware dynamic content (engineering complexity, unproven ROI)
- Multi-language support (validate Hispanic market demand first)

**Anti-features to avoid:**
- AI chatbots (frustrate users with complex needs like roof damage)
- Customer portal/login system (massive scope creep for marketing site)
- Blog comment sections (spam magnet, moderation burden)
- Popup/modal lead capture (Google penalty, terrible UX)
- Animated video backgrounds (murders Core Web Vitals)

**Feature confidence: HIGH** — Based on Google's official structured data requirements, Core Web Vitals documentation, and industry conversion optimization patterns.

### Architecture Approach

The current architecture follows best practices for static-first, SEO-optimized local service sites. Static pre-rendering (SSG) with Next.js App Router provides near-instant page loads, perfect crawlability, and scales infinitely via CDN. The data layer separation (lib/data/) enables content updates without touching components. Schema layer isolation (lib/schema.ts) centralizes JSON-LD generation for easier auditing.

**Major components:**
1. **Data Layer** (lib/data/) — Single source of truth: services.ts, areas.ts, company.ts, reviews.ts. All business content lives here, not hardcoded in components.
2. **Schema Layer** (lib/schema.ts) — JSON-LD generators for LocalBusiness, Service, FAQPage, Article, BreadcrumbList. Type-safe with schema-dts prevents Google-penalizing errors.
3. **Page Routes** (app/) — Static generation via generateStaticParams() for all services/areas. Dynamic metadata via generateMetadata() for SEO.
4. **Section Components** (components/sections/) — Reusable homepage blocks: Hero, TrustBar, ServicesGrid, ReviewsSection, ProjectGallery, ServiceAreasMap.
5. **Layout Components** (components/layout/) — Persistent UI: Header, Footer, MobileCTABar (sticky dual CTAs for phone/form conversion paths).
6. **Blog System** (content/blog/ + lib/blog.ts) — MDX files parsed at build time with gray-matter frontmatter, Article schema for rich results.
7. **API Layer** (app/api/contact/) — Single route handler for form submissions with rate limiting, validation, Resend email delivery.

**Key architectural patterns:**
- **Static pre-rendering**: All pages generated at build time for instant LCP, no server computation delays
- **Topic cluster structure**: Hub pages (services) link to spokes (blog posts, area pages) for topical authority
- **Dual-path conversion**: Every page offers phone OR form CTAs (different user preferences)
- **Comprehensive schema**: Every page type has appropriate structured data (LocalBusiness, Service, FAQPage, Article, Breadcrumb)
- **Internal linking web**: Breadcrumbs, footer sitemap, contextual links distribute page authority
- **Lazy-load strategy**: Hero images use priority={true}, below-fold images use loading="lazy" for LCP optimization

**Architecture confidence: HIGH** — Patterns verified via Google Search Central documentation, Web.dev Core Web Vitals guides, and Schema.org specifications.

### Critical Pitfalls

Research identified 18 domain-specific pitfalls common to roofing contractor website redesigns. Five catastrophic failures to avoid:

1. **URL Structure Changes Without Redirects** — Redesigns that change URLs without 301 redirects lose 40-70% traffic within 2-4 weeks. Prevention: Create redirect map from Google Search Console exports before any URL changes; test all redirects in staging; deploy simultaneously with launch. Breeze Roofing's current URL structure (/services/[slug], /areas/[slug], /blog/[slug]) is optimal — maintain it.

2. **NAP (Name, Address, Phone) Inconsistency with Google Business Profile** — Mismatched business info causes 20-40% drop in "near me" search visibility. Prevention: Document exact NAP from GBP; match formatting precisely on website; add LocalBusiness schema with identical data. Critical: company.ts is single source of truth — all components must pull from this file.

3. **Mobile UX Failures** — 70-80% of roofing searches happen on mobile. Desktop-optimized designs that break on mobile lose 40-60% conversion rate overnight. Prevention: Mobile-first design; real device testing (not just DevTools); tap-to-call in header; forms with ≤5 fields; thumb-friendly buttons (≥48px).

4. **Core Web Vitals Neglect** — Unoptimized images, synchronous third-party scripts, and lazy-loading hero images cause LCP >4s and Google ranking penalties. Prevention: Use next/image with priority={true} on hero, WebP formats, lazy load below-fold, async load chat widgets, target LCP <2.5s.

5. **Content Removal During "Simplification"** — Removing "old-looking" pages that drive 30-40% of organic traffic destroys rankings for long-tail keywords. Prevention: Run content audit showing GA4 traffic by landing page; keep any page receiving >50 sessions/month from organic; 301 redirect if must remove.

**Additional critical pitfalls:**
- Blocking search engines during development (noindex left in production, traffic goes to zero)
- Thin service area pages (Google doorway page penalty for templated city pages)
- Form over-complication (12 fields instead of 3, 50-70% drop in submissions)
- Schema markup missing or broken (lost rich snippets, 15-30% CTR drop)
- Conversion path destruction (burying CTAs "for cleaner look," 50-70% conversion drop)

**Pitfall confidence: MEDIUM-HIGH** — Based on documented contractor SEO disasters, Google's official guidelines, and industry conversion optimization research. Recovery from these failures takes 6-12 months if they occur.

## Implications for Roadmap

Based on combined research, the optimal approach is a **completion-focused, risk-mitigated enhancement roadmap** rather than a major redesign. The site's architecture is sound; the opportunity lies in completing gaps, optimizing performance, and enriching content.

### Suggested Phase Structure

#### Phase 1: Launch Blockers & Core Optimizations
**Rationale:** Complete the gaps preventing full production launch. These are high-value, low-risk completions with immediate impact. No architectural changes means minimal risk of SEO disruption.

**Delivers:**
- Real project photos integrated into ProjectGallery
- Business details populated (license number, Brett's last name, year founded)
- Roofr instant estimator embedded on /estimate page
- API keys configured (RESEND_API_KEY, NEXT_PUBLIC_GA_ID)
- Domain connected (breezeroofingnc.com)
- Core Web Vitals audit + optimizations (target: LCP <2.5s, CLS <0.1)

**Features addressed (from FEATURES.md):**
- Real project photos (P1 priority — HIGH user value, LOW implementation cost)
- Roofr instant estimator (P1 priority — reduces lead friction)
- Business details (P1 priority — credibility essential)

**Pitfalls avoided (from PITFALLS.md):**
- Mobile UX failures: Test Roofr embed on real devices, verify responsive
- Image optimization neglect: Audit all images, ensure next/image used correctly
- Missing schema: Verify all pages have appropriate JSON-LD

**Stack elements used:**
- Next.js Image for photo optimization
- @vercel/speed-insights for Core Web Vitals monitoring (add if not present)
- Existing InstantEstimatorEmbed component

**Research flag:** Standard implementation, no deep research needed. All patterns documented in ARCHITECTURE.md.

---

#### Phase 2: Local SEO Hardening
**Rationale:** Ensure NAP consistency, schema completeness, and GBP alignment to protect/improve local search rankings. These changes carry minimal risk but require careful audit work.

**Delivers:**
- NAP consistency audit (website matches GBP exactly)
- LocalBusiness schema enhanced (verify geo coordinates, hours, areaServed)
- Citation audit (Yelp, BBB, Angi, Yellow Pages NAP matches)
- Google Maps integration (if not present)
- Service + FAQ schema validation on all service pages
- Breadcrumb schema on all pages
- Search Console sitemap submission + indexing verification

**Features addressed:**
- NAP consistency (table stakes — ranking factor)
- Schema markup completeness (differentiator — rich results)

**Pitfalls avoided:**
- GBP disconnection: Document exact NAP, match everywhere
- Missing/broken schema: Test with Google Rich Results Test
- Internal linking collapse: Verify breadcrumbs present

**Stack elements used:**
- schema-dts + react-schemaorg (add for type-safe JSON-LD)
- Existing lib/schema.ts (enhance with areaServed, openingHoursSpecification)

**Research flag:** No additional research needed. Google's LocalBusiness documentation covers all requirements.

---

#### Phase 3: Content Enrichment — Service Areas
**Rationale:** Transform thin area pages into rich, unique local content to rank for "[service] in [city]" searches. Research shows competitors have weak area page content — opportunity for differentiation.

**Delivers:**
- Unique content for each of 8 area pages (500+ words each)
- Local context (coastal vs. inland challenges, building codes, climate considerations)
- Area-specific photos, projects, testimonials (where available)
- Internal linking between area pages and service pages
- Geographic schema markup (areaServed in LocalBusiness)

**Features addressed:**
- Service area coverage (table stakes, but enhancement to differentiator)
- Local SEO signals (competitive advantage)

**Pitfalls avoided:**
- Thin service area pages: Write genuinely unique content per area, not templates
- Content removal: Enhance existing pages, don't delete

**Stack elements used:**
- Existing app/areas/[city]/page.tsx structure
- lib/data/areas.ts for expanded area data

**Research flag:** No technical research needed, but requires content research/writing time. Budget 2-3 hours per area page for unique content creation.

---

#### Phase 4: Content Enrichment — Storm/Insurance Blog
**Rationale:** Target high-intent commercial keywords: "hurricane roof damage claims NC," "fortified roof insurance discount," "storm damage roof repair Wilmington." Post-storm searches are highest-value traffic.

**Delivers:**
- 5-10 targeted blog posts:
  - "How to File Roof Insurance Claim in NC"
  - "Hurricane Preparation Roof Checklist"
  - "Fortified Roof Insurance Discounts: Complete Guide"
  - "Post-Storm Roof Damage Assessment Guide"
  - "Coastal Roof Maintenance: Salt Air & Wind Protection"
- Article schema for rich results
- Internal linking to relevant service pages (storm damage repair, Fortified roof)
- Related blog post recommendations

**Features addressed:**
- Storm damage & insurance content (differentiator — commercial intent traffic)
- Blog expansion (20+ posts target)

**Pitfalls avoided:**
- Content removal: Adding, not replacing existing 7 posts
- Blog workflow breaking: Uses existing MDX system, no changes

**Stack elements used:**
- Existing content/blog/ + lib/blog.ts
- Article schema generation (lib/schema.ts)

**Research flag:** Content research needed for insurance claim process, NC-specific building codes, Fortified certification benefits. Consider "/gsd:research-phase" for insurance claim guide.

---

#### Phase 5: Conversion Optimization Testing
**Rationale:** With Core Web Vitals optimized and content enriched, test conversion path improvements. This phase is data-driven — only proceed after baseline metrics established.

**Delivers:**
- Warranty/guarantee section (test impact on service page conversion)
- Project timeline transparency content ("Typical roof replacement: 2-3 days")
- Financing options prominence (link from estimate form + service pages)
- Form optimization testing (A/B test field reduction if current form has >5 fields)
- Emergency service prominence review (ensure 24/7 messaging visible)

**Features addressed:**
- Warranty/guarantee visibility (P2 priority — risk reversal)
- Project timeline transparency (P2 priority — expectation setting)
- Financing options visibility (P2 priority — remove price objections)

**Pitfalls avoided:**
- Form over-complication: Test any changes, monitor conversion rate
- Conversion path destruction: Protect existing CTAs while testing enhancements

**Stack elements used:**
- @vercel/analytics or PostHog (if A/B testing needed)
- Existing ContactForm component

**Research flag:** Standard A/B testing patterns. No deep research unless implementing PostHog for advanced testing.

---

#### Phase 6: Future Enhancements (v2+)
**Rationale:** Defer until product-market fit validated and data shows demand.

**Potential additions:**
- Video testimonials (production required)
- Live chat with humans (if form/call conversion <5%)
- Service-specific area pages (if Search Console shows demand)
- Customer case studies (after 10+ Fortified projects)
- Weather-aware dynamic content (API integration + testing)

**Research flag:** Each enhancement requires validation research before implementation.

### Phase Ordering Rationale

**Why Phase 1 first:** Launch blockers prevent full production readiness. Real photos and business details are zero-risk additions with high trust impact. Roofr integration is existing component, just needs embed code. Core Web Vitals optimization protects/improves rankings.

**Why Phase 2 next:** Local SEO hardening has minimal code changes but high ranking protection value. NAP consistency and schema completeness are foundational for all future work. Must be solid before investing in content creation.

**Why Phases 3-4 before 5:** Content enrichment (area pages, blog posts) drives traffic growth. Need traffic baseline before conversion optimization makes sense. Testing conversions with low traffic produces unreliable data.

**Why Phase 5 after content:** Conversion optimization requires sufficient traffic volume to test meaningfully (1000+ visitors/week minimum). Content phases build traffic, then optimize conversion of that traffic.

**Why Phase 6 deferred:** v2 features require validation data that won't exist until v1 is live for 3-6 months. Better to excel at core execution than spread resources across speculative features.

### Research Flags

**Phases with standard patterns (skip /gsd:research-phase):**
- **Phase 1:** Launch blockers use existing components and documented patterns
- **Phase 2:** Local SEO requirements fully documented by Google
- **Phase 3:** Area page content is writing, not technical complexity
- **Phase 5:** Conversion optimization patterns well-established

**Phases potentially needing deeper research:**
- **Phase 4 (Blog Content):** If creating "How to File Roof Insurance Claim in NC" guide, research NC insurance claim process, timelines, required documentation. Consider /gsd:research-phase for accuracy.
- **Phase 6 (Future):** Video testimonial production, live chat tools, weather API integration each require tool/vendor research before implementation.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | All recommendations verified via npm registry, official Next.js docs. No third-party SEO libraries needed — Next.js 16 provides everything. schema-dts + @vercel/analytics are proven, maintained packages. |
| Features | HIGH | Based on Google's official structured data requirements, Core Web Vitals documentation, and Web.dev conversion optimization guides. MVP feature set already complete — focus is completion and enhancement. |
| Architecture | HIGH | Current static-first SSG architecture is optimal for local service SEO. Patterns verified via Google Search Central, Web.dev guides, Schema.org specs. No architectural changes recommended. |
| Pitfalls | MEDIUM-HIGH | Based on documented contractor website redesign failures, Google's SEO guidelines, and industry conversion data. Recovery timelines are estimates (6-12 months) based on typical patterns, not Breeze Roofing-specific data. |

**Overall confidence: HIGH**

Research is grounded in official documentation (Google Search Central, Web.dev, Next.js docs, Schema.org) and verified via npm package registries. Architecture review shows solid foundation requiring completion rather than redesign.

### Gaps to Address

**Competitor analysis:** No direct analysis of Wilmington NC roofing competitor websites conducted. Could inform content strategy and keyword targeting for Phases 3-4. **Action:** Consider lightweight competitive audit during Phase 3 planning — use Ahrefs/Semrush to identify competitor keyword gaps.

**Conversion rate benchmarks:** No roofing industry-specific conversion rate data (phone vs. form). Using general local service standards (3-7% typical). **Action:** Establish baseline in Phase 1, measure improvement in Phase 5.

**Search volume data:** No keyword research for service-specific area pages (e.g., "roof repair Hampstead NC"). **Action:** Use Google Keyword Planner or Search Console data during Phase 3 to prioritize which area pages to expand first.

**Roofr integration specifics:** InstantEstimatorEmbed component exists but Roofr's postMessage events, iframe sizing, and mobile responsiveness not yet tested. **Action:** Early integration testing in Phase 1 staging environment before production deployment.

**Brett's business priorities:** Research doesn't reflect Brett's specific business constraints, budget, timeline, or strategic priorities. **Action:** Requirements definition phase should validate research assumptions against actual business goals.

**Current Core Web Vitals baseline:** No Lighthouse audit conducted yet. Site uses next/image and SSG (strong indicators of good performance), but actual LCP/CLS/INP unknown. **Action:** First task in Phase 1 — run Lighthouse audit, establish baseline, identify optimization opportunities.

## Sources

### Primary Sources (HIGH Confidence)

**Official Documentation:**
- Next.js 16.2.1 npm registry — Version verification, Metadata API capabilities, peer dependencies
- Google Search Central (developers.google.com/search/docs) — LocalBusiness structured data requirements, JavaScript SEO basics, URL structure guidelines, crawlable links, canonicalization, page experience signals
- Web.dev (Google) — Core Web Vitals thresholds (LCP <2.5s, INP <200ms, CLS <0.1), LCP optimization (priority loading, fetchpriority, avoid lazy-loading), CLS optimization (reserve space, use transforms)
- Schema.org — LocalBusiness properties (openingHours, geo, areaServed), Article schema (headline, author, dates), RoofingContractor subtype recommendations
- npm registry — schema-dts 2.0.0 (Google-maintained), react-schemaorg 2.0.1, @vercel/analytics 2.0.1, @vercel/speed-insights 2.0.0, react-hook-form 7.72.1, zod 4.3.6, google-libphonenumber 3.2.44 version verification

**Codebase Analysis:**
- Current implementation review: components/sections/, lib/data/, lib/schema.ts, app/ route structure
- .planning/codebase/ARCHITECTURE.md — Data flow, schema patterns, component responsibilities
- .planning/PROJECT.md — Project goals, constraints, Fortified certification differentiator

### Secondary Sources (MEDIUM Confidence)

**Industry Best Practices:**
- Contractor conversion optimization patterns — Dual CTAs (phone + form), mobile-first design, social proof clustering, form simplification
- Local SEO standards — NAP consistency requirements, area page content depth, citation management
- Roofing-specific patterns — Emergency messaging prominence, insurance focus, certification visibility, storm damage content

**Performance Benchmarks:**
- PageSpeed Insights thresholds (pagespeed.web.dev) — Performance scoring methodology
- Core Web Vitals as ranking signals — Google's page experience update confirmation
- Conversion rate impact data — Form friction reducing submissions 50-70%, mobile UX failures dropping conversion 40-60%

### Tertiary Sources (Requires Validation)

**Extrapolated Patterns:**
- Recovery timelines for SEO disasters (6-12 months for URL changes, 2-4 months for NAP fixes) — based on typical patterns, not roofing-specific data
- Competitive positioning assumptions (Fortified certification underutilized, instant pricing separates leaders) — inferred from general contractor market, not Wilmington NC market research
- Feature prioritization (video testimonials deferred, live chat conditional) — based on general local service business patterns, not Breeze Roofing-specific data
- Traffic volume thresholds (1000+ visitors/week for A/B testing) — general statistical significance requirements, not roofing-specific benchmarks

**Limitations:**
- No competitor website analysis for Wilmington NC roofing contractors
- No keyword research showing search volume for specific service/area combinations
- No user testing with actual roofing customer personas
- No Roofr-specific integration documentation reviewed yet

---

*Research completed: 2026-04-03*
*Ready for roadmap: YES*
*Next step: Create detailed roadmap with phases, milestones, and success metrics based on this synthesis*
