# Breeze Roofing NC — Project Overview

## What We're Building
A high-performance, SEO-first marketing website for Breeze Roofing, a family-owned roofing contractor based in Wilmington, NC. The site is a pure marketing and lead generation shell — no custom backend, no CMS, no database. All lead capture is handled via an embedded Roofr Instant Estimator widget.

## Business Context
- **Company:** Breeze Roofing (breezeroofingnc.com)
- **Owner:** Brett [last name TBD]
- **Phone:** (910) 665-5277
- **Email:** Letsgo@breezeroofingnc.com (update to brett@ or info@ when confirmed)
- **Location:** Wilmington, NC 28401
- **Service radius:** 50 miles around Wilmington
- **Founded:** [Year TBD — ask Brett]
- **NC Contractor License:** [# TBD — ask Brett]
- **Certifications:** IBHS Fortified Roof Contractor, [GAF/Owens Corning TBD — confirm with Brett]

## The Core Competitive Strategy
Breeze Roofing is a small, family-owned operator competing against larger companies with big Google Ads budgets. We cannot win on paid search spend. We win by:

1. **Dominating local organic search** — service area pages, schema markup, Google Business signals
2. **GEO (Generative Engine Optimization)** — structuring content so AI search engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) cite Breeze Roofing when homeowners ask questions
3. **Fortified Roof differentiation** — this is a major underused asset; almost no local competitors offer this and it maps directly to homeowner insurance savings anxiety
4. **Trust signals that ads can't replicate** — real named reviews, owner photo, license number, local specificity

## Primary User Intent (Who Visits This Site)
1. **Storm damage panic** — post-hurricane, searching on mobile, needs someone NOW
2. **Planned replacement** — getting 3 quotes, comparing, highly price-sensitive
3. **Insurance-motivated** — wants Fortified Roof to lower premiums
4. **AI search** — asked ChatGPT or Perplexity "best roofer in Wilmington NC" and clicked through

## Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Lead capture:** Roofr Instant Estimator embed (Brett provides embed code from Roofr dashboard)
- **Email fallback:** Resend (for emergency contact form that doesn't require Roofr)
- **Analytics:** Google Analytics 4 + Roofr estimator event tracking
- **No database, no auth, no CMS**

## Content Strategy
- All blog/content pages are MDX files in the repo (`/content/blog/`)
- Service area pages are Next.js static pages with unique local content
- No WordPress, no headless CMS for v1

## Key Differentiators to Feature (Priority Order)
1. IBHS Fortified Roof certification — saves homeowners 20-40% on insurance
2. 24/7 emergency storm response
3. Family-owned, Brett is the face — personal accountability
4. Free drone inspections
5. Financing available
6. Serves coastal NC — specializes in salt air, hurricane-grade installations

## What the Current Site Does Wrong (Do Not Repeat)
- Service area nav links are dead `#` anchors — no rankable pages
- 3 reviews with identical copy appear twice on the page — trust killer
- No license number visible anywhere
- No photo of Brett or the team
- Fortified Roof program buried in nav, not featured
- Email `Letsgo@` looks unprofessional
- No schema markup
- No blog/content
- Hero has two equal-weight CTAs with no hierarchy
- Nav has a "More" dropdown that hides the Instant Estimate tool

## Success Metrics
- Rank page 1 for: "roofing contractor Wilmington NC", "roof replacement Wilmington NC", "Fortified roof contractor NC", "[city] roofer" for each service area
- Appear in AI Overview / ChatGPT answers for local roofing queries
- Roofr Instant Estimator submissions become primary lead metric
- Google Business Profile call volume increase
