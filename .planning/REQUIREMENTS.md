# Requirements: Breeze Roofing NC Redesign

**Defined:** 2026-04-03
**Core Value:** When someone searches anything roofing-related in Wilmington NC, Breeze Roofing appears first — and they convert within 60 seconds.

## v1 Requirements

### Visual Design & Brand

- [x] **DESIGN-01**: Site has a distinctive, premium visual identity that feels friendly/local — not a generic contractor template ✓ 01-01
- [ ] **DESIGN-02**: Real project photos integrated throughout (hero, service pages, area pages, gallery)
- [ ] **DESIGN-03**: Before/after project gallery showcasing Brett's actual work
- [x] **DESIGN-04**: Subtle micro-interactions and animations that reinforce the "Breeze" brand (clouds, smooth transitions) ✓ 01-01
- [ ] **DESIGN-05**: Coastal NC visual storytelling — imagery, language, and references that resonate with the local market
- [x] **DESIGN-06**: Consistent typography, color palette, and spacing system across all 43+ pages ✓ 01-01

### Conversion Optimization

- [ ] **CONV-01**: Persistent click-to-call button visible on every page (mobile: sticky bottom bar, desktop: header)
- [ ] **CONV-02**: Estimate request form accessible within 1 click from any page
- [ ] **CONV-03**: Roofr instant estimator embedded on estimate page with proper mobile UX
- [ ] **CONV-04**: Trust signals on every page: Google rating, review count, certifications, license number
- [ ] **CONV-05**: Warranty/guarantee sections on each service page
- [ ] **CONV-06**: Expected project timeline for each service type
- [ ] **CONV-07**: Dual CTA strategy — phone and estimate form equally prominent, not one buried
- [ ] **CONV-08**: Emergency service CTA prominently visible (24/7 availability)

### SEO Technical

- [ ] **SEO-01**: Core Web Vitals passing on all pages (LCP <2.5s, CLS <0.1, INP <200ms)
- [ ] **SEO-02**: RoofingContractor JSON-LD schema on all pages (not generic LocalBusiness)
- [ ] **SEO-03**: FAQPage schema on FAQ page and service pages with FAQ sections
- [ ] **SEO-04**: Article schema on all blog posts with proper author, date, image markup
- [ ] **SEO-05**: BreadcrumbList schema on all pages
- [ ] **SEO-06**: Optimized meta title and description unique to every page (no duplicates)
- [ ] **SEO-07**: XML sitemap with proper priority and changefreq
- [ ] **SEO-08**: Canonical URLs and proper internal linking architecture
- [ ] **SEO-09**: Image optimization: WebP/AVIF format, lazy loading, proper alt text on all images
- [ ] **SEO-10**: @vercel/analytics and @vercel/speed-insights installed for Core Web Vitals monitoring

### Content — Area Pages

- [ ] **AREA-01**: Each area page has 500+ words of unique content (no duplicate/thin pages)
- [ ] **AREA-02**: Area pages reference local landmarks, neighborhoods, and building characteristics
- [ ] **AREA-03**: Area-specific testimonials and project photos where available
- [ ] **AREA-04**: Local building code and coastal-specific references per area (hurricane prep, salt air, etc.)
- [ ] **AREA-05**: Internal links from area pages to relevant service pages and blog posts

### Content — Blog Strategy

- [ ] **BLOG-01**: Storm/hurricane damage content targeting high-intent post-storm searches
- [ ] **BLOG-02**: Insurance claim process guides for roofing (NC-specific)
- [ ] **BLOG-03**: Educational content: roof maintenance, signs of damage, material comparisons
- [ ] **BLOG-04**: Fortified Roof certification explainer content (differentiator)
- [ ] **BLOG-05**: Seasonal/coastal maintenance guides (hurricane prep, salt air protection)
- [ ] **BLOG-06**: Blog posts link to relevant service pages and estimate form (topic cluster model)

### Local SEO

- [ ] **LOCAL-01**: NAP (Name/Address/Phone) consistent across entire site
- [ ] **LOCAL-02**: Google Business Profile alignment — schema matches GBP exactly
- [ ] **LOCAL-03**: Local references and context in service page content (not just area pages)
- [ ] **LOCAL-04**: Citation strategy document for directory listings (Yelp, BBB, Angi, HomeAdvisor, etc.)

## v2 Requirements

### Advanced Features (defer until data validates demand)

- **ADV-01**: Video testimonials from customers
- **ADV-02**: Live chat (human-staffed, not chatbot)
- **ADV-03**: Service-specific area pages (e.g., /services/roof-repair/hampstead) — 80+ pages
- **ADV-04**: Weather-aware dynamic content
- **ADV-05**: A/B testing framework (PostHog or similar)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Chatbot / AI chat | Poor UX for emergency roofing needs; feels impersonal for local business |
| Popup modals | Google penalizes intrusive interstitials; annoys mobile users |
| Video background hero | Kills Core Web Vitals (LCP); wastes bandwidth on mobile |
| Customer portal / login | Marketing site only — no backend complexity |
| Social media integration | Focus is organic search, not social |
| Paid advertising setup | Organic strategy only |
| CMS / admin panel | Staying with MDX static content |
| Mobile app | Web-only |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DESIGN-01 | Phase 1 | Complete (01-01) |
| DESIGN-02 | Phase 1 | Pending |
| DESIGN-03 | Phase 1 | Pending |
| DESIGN-04 | Phase 1 | Complete (01-01) |
| DESIGN-05 | Phase 1 | Pending |
| DESIGN-06 | Phase 1 | Complete (01-01) |
| CONV-01 | Phase 2 | Pending |
| CONV-02 | Phase 2 | Pending |
| CONV-03 | Phase 2 | Pending |
| CONV-04 | Phase 2 | Pending |
| CONV-05 | Phase 2 | Pending |
| CONV-06 | Phase 2 | Pending |
| CONV-07 | Phase 2 | Pending |
| CONV-08 | Phase 2 | Pending |
| SEO-01 | Phase 1 | Pending |
| SEO-02 | Phase 3 | Pending |
| SEO-03 | Phase 3 | Pending |
| SEO-04 | Phase 3 | Pending |
| SEO-05 | Phase 3 | Pending |
| SEO-06 | Phase 3 | Pending |
| SEO-07 | Phase 3 | Pending |
| SEO-08 | Phase 3 | Pending |
| SEO-09 | Phase 1 | Pending |
| SEO-10 | Phase 1 | Pending |
| AREA-01 | Phase 5 | Pending |
| AREA-02 | Phase 5 | Pending |
| AREA-03 | Phase 5 | Pending |
| AREA-04 | Phase 5 | Pending |
| AREA-05 | Phase 5 | Pending |
| BLOG-01 | Phase 6 | Pending |
| BLOG-02 | Phase 6 | Pending |
| BLOG-03 | Phase 6 | Pending |
| BLOG-04 | Phase 6 | Pending |
| BLOG-05 | Phase 6 | Pending |
| BLOG-06 | Phase 6 | Pending |
| LOCAL-01 | Phase 4 | Pending |
| LOCAL-02 | Phase 4 | Pending |
| LOCAL-03 | Phase 4 | Pending |
| LOCAL-04 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 38 total
- Mapped to phases: 38
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-03*
*Last updated: 2026-04-03 after roadmap creation*
