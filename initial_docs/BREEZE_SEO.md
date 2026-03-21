# Breeze Roofing NC — SEO & GEO Strategy

## Two Goals
1. **Traditional SEO** — rank on Google for local roofing searches
2. **GEO (Generative Engine Optimization)** — appear in AI-generated answers (ChatGPT, Perplexity, Google AI Overviews, Gemini)

GEO is the emerging moat. When someone asks an AI "who is the best roofer in Wilmington NC" or "what is a Fortified Roof contractor in NC", we want Breeze Roofing cited. AI systems pull from authoritative, well-structured, factually specific pages. This is where small operators beat big ad-spenders.

---

## Technical SEO — Next.js Implementation

### Metadata API (App Router)
Every page uses Next.js `generateMetadata()` or static `metadata` export.

```typescript
// Example: Homepage
export const metadata: Metadata = {
  title: 'Roofing Contractor Wilmington NC | Breeze Roofing | Free Estimates',
  description: 'Breeze Roofing — Wilmington NC\'s trusted family-owned roofer. IBHS Fortified Roof specialists. Free inspections, 24/7 emergency. (910) 665-5277',
  openGraph: {
    title: 'Breeze Roofing | Wilmington NC Roofing Contractor',
    description: '...',
    url: 'https://breezeroofingnc.com',
    siteName: 'Breeze Roofing',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://breezeroofingnc.com',
  },
};
```

Service area pages use dynamic metadata:
```typescript
export async function generateMetadata({ params }: { params: { city: string } }) {
  const city = formatCityName(params.city); // "Hampstead"
  return {
    title: `Roofing Contractor ${city} NC | Breeze Roofing`,
    description: `Breeze Roofing serves ${city}, NC with residential and commercial roofing, storm damage repair, and IBHS Fortified Roof installation. Free estimates. (910) 665-5277`,
  }
}
```

### Sitemap
Auto-generate via `app/sitemap.ts`:
- All static pages
- All service area pages
- All blog posts (from MDX files)
- Priority: homepage = 1.0, service areas = 0.9, services = 0.8, blog = 0.7

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://breezeroofingnc.com/sitemap.xml
```

### Core Web Vitals
- All images: `next/image` with explicit `width` and `height`
- Hero image: `priority` prop to preload
- Fonts: `next/font/google` with `display: 'swap'`
- No layout shift from Roofr embed — reserve space with min-height
- Target: LCP < 2.5s, CLS < 0.1, FID < 100ms

---

## Schema Markup (JSON-LD)

Inject via Next.js layout or page-level `<script type="application/ld+json">`.

### 1. LocalBusiness Schema (every page, via root layout)
```json
{
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Breeze Roofing",
  "alternateName": "Breeze Roofing NC",
  "url": "https://breezeroofingnc.com",
  "telephone": "+19106655277",
  "email": "brett@breezeroofingnc.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Address TBD]",
    "addressLocality": "Wilmington",
    "addressRegion": "NC",
    "postalCode": "28401",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.2257,
    "longitude": -77.9447
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Wilmington" },
    { "@type": "City", "name": "Hampstead" },
    { "@type": "City", "name": "Leland" },
    { "@type": "City", "name": "Carolina Beach" },
    { "@type": "City", "name": "Wrightsville Beach" },
    { "@type": "City", "name": "Southport" },
    { "@type": "City", "name": "Topsail Island" },
    { "@type": "City", "name": "Surf City" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Roofing" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IBHS Fortified Roof Installation" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storm Damage Repair" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Roof Repair" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roofing" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Inspection" }}
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50",
    "bestRating": "5"
  },
  "priceRange": "$$",
  "paymentAccepted": "Cash, Check, Credit Card, Financing Available",
  "currenciesAccepted": "USD"
}
```

### 2. FAQPage Schema (`/faq/` page)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a roof replacement cost in Wilmington NC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical roof replacement in Wilmington, NC ranges from $8,000 to $20,000 depending on roof size, materials, and complexity. Coastal homes may cost more due to hurricane-rated installation requirements. Breeze Roofing offers free estimates — use our Instant Estimator to get a ballpark in 60 seconds."
      }
    },
    {
      "@type": "Question",
      "name": "What is an IBHS Fortified Roof and can it lower my homeowner's insurance in NC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An IBHS Fortified Roof is a construction designation awarded by the Insurance Institute for Business & Home Safety (IBHS) that certifies a roof was built to withstand high winds and hurricane conditions. In North Carolina, a Fortified designation can qualify homeowners for significant insurance premium discounts — often 20-40% depending on your insurer. Breeze Roofing is a certified Fortified contractor in the Wilmington area."
      }
    }
  ]
}
```

### 3. Article Schema (blog posts)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post Title]",
  "author": {
    "@type": "Person",
    "name": "Brett [Last Name]"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Breeze Roofing"
  },
  "datePublished": "[Date]",
  "dateModified": "[Date]"
}
```

### 4. BreadcrumbList Schema (all inner pages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://breezeroofingnc.com" },
    { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://breezeroofingnc.com/areas" },
    { "@type": "ListItem", "position": 3, "name": "Hampstead NC", "item": "https://breezeroofingnc.com/areas/hampstead-nc" }
  ]
}
```

---

## GEO — Generative Engine Optimization

AI systems (ChatGPT with Search, Perplexity, Google AI Overviews) cite sources that are:
- **Factually specific** — not vague marketing copy
- **Authoritative and structured** — clear headings, Q&A format, data citations
- **Locally precise** — exact city names, zip codes, landmarks
- **Consistent NAP** — same Name/Address/Phone across all pages and the web

### GEO Tactics to Implement

**1. Answer-First Content Structure**
Every service page and blog post should lead with a direct answer to the implied question.
```
BAD: "At Breeze Roofing, we're proud to offer..."
GOOD: "A Fortified Roof in North Carolina can reduce homeowner's insurance premiums by 20-40%..."
```

**2. Use Exact Q&A Format in Content**
AI systems love to pull from clear Q&A blocks. Use `<details>/<summary>` or styled FAQ sections with `FAQPage` schema.

**3. Cite Authoritative Sources**
Link to and reference:
- IBHS.org (Fortified program)
- NC Department of Insurance
- NOAA hurricane data for coastal NC
- Local building codes

This signals to AI that Breeze Roofing content is factually grounded.

**4. Entity Consistency**
Every page should contain these exact strings consistently:
- "Breeze Roofing"
- "Wilmington, NC"
- "(910) 665-5277"
- "IBHS Fortified Roof"
- "Brett [Last Name]" (once confirmed)

**5. Freshness**
Blog posts should have visible publish dates and be updated seasonally (especially before hurricane season). AI systems prefer fresh content.

**6. Conversational Content Blocks**
Add a "Homeowners often ask us..." section on service pages. These directly match how people prompt AI assistants.

**7. Local Knowledge Signals**
Reference specific local things AI will associate with the area:
- Hurricane Florence, Dorian (past storms)
- Cape Fear River basin
- Pender County, New Hanover County, Brunswick County
- "Wilmington's coastal building codes"
- Specific zip codes in every area page

---

## Keyword Targets by Page

| Page | Primary Keyword | Secondary Keywords |
|---|---|---|
| Homepage | roofing contractor Wilmington NC | roofer Wilmington NC, Wilmington NC roofing company |
| /services/fortified-roof/ | Fortified roof contractor NC | IBHS Fortified roof Wilmington, fortified roof insurance NC |
| /services/storm-damage/ | storm damage roof repair Wilmington NC | hurricane roof damage NC, roof repair after storm NC |
| /services/emergency-repair/ | emergency roof repair Wilmington NC | 24 hour roofer Wilmington, emergency roofer near me |
| /services/residential-roofing/ | residential roofing Wilmington NC | roof replacement Wilmington NC, new roof Wilmington NC |
| /areas/wilmington-nc/ | roofing contractor Wilmington NC | roofer Wilmington 28401 28405 28412 |
| /areas/hampstead-nc/ | roofing contractor Hampstead NC | roofer Hampstead NC 28443 |
| /areas/leland-nc/ | roofing contractor Leland NC | roofer Leland NC Brunswick County |
| /blog/fortified-roof/ | what is IBHS Fortified Roof NC | fortified roof insurance savings NC |
| /blog/cost/ | roof replacement cost Wilmington NC | how much does a new roof cost NC |
| /faq/ | roofing FAQ Wilmington NC | roofing questions NC |

---

## Google Business Profile Alignment
The website must match GBP exactly:
- Same business name, phone, address
- Same service categories
- Link to `/estimate/` from GBP website button
- GBP posts should link to blog posts
- Respond to every GBP review (adds fresh indexable content)

---

## Internal Linking Strategy
- Homepage → all service pages, all area pages, /estimate/, /services/fortified-roof/ (featured)
- Each service page → related services + relevant area pages
- Each area page → all services + /estimate/ + neighboring area pages
- Blog posts → relevant service pages (e.g., hurricane post → /services/storm-damage/ and /services/fortified-roof/)
- FAQ → relevant service pages for each answer

This creates a tight internal link graph that distributes PageRank and signals topical authority.
