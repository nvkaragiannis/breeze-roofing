# Breeze Roofing NC — Components

## Component Architecture

All components live in `/components/`. Organized by type:
```
/components/
  /layout/
    Header.tsx
    Footer.tsx
    MobileCTABar.tsx
  /sections/
    Hero.tsx
    TrustBar.tsx
    FortifiedCallout.tsx
    ServicesGrid.tsx
    WhyBreeze.tsx
    ReviewsSection.tsx
    ServiceAreasMap.tsx
    CoastalExpertise.tsx
    EstimateSection.tsx
    BlogPreview.tsx
    EmergencyCTA.tsx
  /ui/
    Button.tsx
    ServiceCard.tsx
    ReviewCard.tsx
    AreaCard.tsx
    BlogCard.tsx
    TrustBadge.tsx
    SchemaScript.tsx
    BreadcrumbNav.tsx
  /roofr/
    InstantEstimatorEmbed.tsx
```

---

## Layout Components

### `Header.tsx`
**Sticky on scroll. Mobile: show phone + CTA only.**

Desktop layout:
```
[Logo] | ⭐4.9 (50+ reviews) | NC Lic #XXXX | [Phone] | [GET FREE ESTIMATE →]
Nav: Home | Services ▾ | Areas ▾ | Fortified Roof | Blog | FAQ | Financing
```

Mobile layout (sticky):
```
[Logo] | [☎ Call] | [Get Estimate]
Hamburger menu for full nav
```

Props: none (static data)
Key behaviors:
- Nav is transparent over hero, becomes white/shadowed on scroll (use `useEffect` + `scrollY`)
- "Services" dropdown shows all service pages
- "Areas" dropdown shows all service area pages
- "Get Free Estimate" button always amber/gold
- Phone number always `href="tel:19106655277"`

---

### `Footer.tsx`
Three-column layout:

Column 1: Logo + tagline + license number + certifications
Column 2: Quick Links (About, Services, Financing, Fortified Roof, FAQ, Blog)
Column 3: Contact info + hours + service area summary

Bottom bar: © 2025 Breeze Roofing | Privacy Policy | Terms

---

### `MobileCTABar.tsx`
Fixed to bottom of viewport, visible only on mobile (`md:hidden`).
Two equal buttons: [📞 Call Now] [Get Free Estimate]
Height: 60px. Z-index: 50.
Adds `pb-16` to body to prevent content overlap.

---

## Section Components

### `Hero.tsx`
Full-viewport height on desktop, tall on mobile.

Props:
```typescript
interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  trustItems: string[];
  backgroundImage: string;
}
```

Default values for homepage:
```
headline: "Wilmington's Trusted Fortified Roof Contractor"
subheadline: "Protecting coastal NC homes from hurricanes — and saving homeowners up to 40% on insurance with IBHS Fortified Roofing"
primaryCTA: { text: "Get My Free Estimate", href: "/estimate" }
secondaryCTA: { text: "Call (910) 665-5277", href: "tel:19106655277" }
trustItems: ["Licensed & Insured", "IBHS Fortified Certified", "Free Inspections", "24/7 Emergency"]
```

---

### `TrustBar.tsx`
Horizontal strip below hero.

Items:
- ⭐ 4.9 Stars — 50+ Google Reviews
- 🏠 NC Contractor License #[XXXX]
- 👨‍👩‍👧 Family-Owned Since [Year]
- 🌀 IBHS Fortified Certified
- 🕐 24/7 Emergency Service

Responsive: horizontal scroll on mobile, wrap on desktop.

---

### `FortifiedCallout.tsx`
High-visibility section for the Fortified Roof program.

Content:
- Icon: `Award` or shield
- Headline: "Save 20-40% on Homeowner's Insurance"
- Body: "As an IBHS certified Fortified Roof contractor, we build roofs that NC insurance companies reward. We handle all certification paperwork."
- 3 bullet points: What it is / How much you save / How we handle it
- CTA: "Learn About Fortified Roofing" → `/services/fortified-roof/`

Background: navy (`bg-[#1B3A5C]`) with white text. Amber CTA button.

---

### `ServicesGrid.tsx`

Props:
```typescript
interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  featured?: boolean; // Fortified Roof gets featured styling
}
```

6 services shown on homepage. Layout: 2-col mobile, 3-col desktop.

Services:
1. Residential Roofing — `Home` icon
2. Storm Damage Repair — `CloudLightning` icon
3. Emergency Repair — `Clock` icon (red accent)
4. IBHS Fortified Roof — `Award` icon (featured, amber border)
5. Roof Inspection — `Search` icon
6. Commercial Roofing — `Building` icon

---

### `WhyBreeze.tsx`
4 trust pillars + owner photo.

Pillars:
1. **Fast Response** — "Same-day emergency service. Brett answers the phone."
2. **Transparent Pricing** — "No hidden fees. Written estimates before any work begins."
3. **Certified & Licensed** — "NC Licensed, fully insured, IBHS Fortified certified."
4. **Coastal Expertise** — "Built for hurricane country. Salt air, wind ratings, we know it."

Layout: photo of Brett left, 4 pillars right (desktop). Stack on mobile.

---

### `ReviewsSection.tsx`

Props:
```typescript
interface Review {
  name: string;
  location?: string;
  text: string;
  rating: number;
  source: 'google';
}
```

Hardcoded reviews to feature (curated from real reviews — NO duplicates):

```typescript
const reviews = [
  {
    name: "Gene Atkinson",
    text: "Hired Breeze Roofing based on workmanship I observed as they worked on the house across the street... Their estimate included everything. Crew was very professional. Brett kept me informed throughout the project.",
    rating: 5,
    source: 'google'
  },
  {
    name: "Daniel Z",
    text: "He was quick to respond, came to our house, and diagnosed the issue quickly. I called on Saturday afternoon, he came same-day, and repairs were in-place within 24 hours. I could not be more impressed.",
    rating: 5,
    source: 'google'
  },
  {
    name: "Lisa Brown, PhD",
    text: "Brett and his team are literal lifesavers. It's so refreshing to work with people who do things right and are helpful while they do it.",
    rating: 5,
    source: 'google'
  },
  {
    name: "Blanche Williamson",
    text: "It's a pleasure dealing with Brett. His work is excellent. I trust and thank Brett for being a reasonable and mutual partner. My new guards and gutter clean are both perfect and affordable.",
    rating: 5,
    source: 'google'
  }
]
```

Layout: 2-column grid on desktop, single column mobile.
Include: "View All Reviews on Google →" link.

---

### `EstimateSection.tsx`
Wraps the Roofr embed with surrounding content.

```typescript
// InstantEstimatorEmbed.tsx
'use client';

export function InstantEstimatorEmbed() {
  return (
    <div className="roofr-embed-wrapper min-h-[600px]">
      {/* Brett pastes his Roofr embed code here */}
      {/* Example structure — actual code comes from Brett's Roofr dashboard */}
      <div id="roofr-instant-estimator">
        {/* Roofr embed script tag goes here */}
      </div>
    </div>
  );
}
```

Surround with:
- Headline: "Get Your Instant Roof Estimate"
- Subtext: "Enter your address and get a ballpark estimate in 60 seconds. No obligation, no pressure."
- Below embed: "Prefer to talk? Call Brett directly: (910) 665-5277"

---

### `EmergencyCTA.tsx`
Red banner component. Use on storm damage pages, emergency pages.

```
🚨 Storm Damage? We're Available 24/7
Call (910) 665-5277 — Emergency Response
```

---

## UI Components

### `Button.tsx`
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'emergency';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
}
```

### `ReviewCard.tsx`
Star rating (filled SVG stars), name, text (truncated to 3 lines with expand), Google icon.

### `ServiceCard.tsx`
Icon + title + description + "Learn more →" link. Hover: shadow lift.

### `SchemaScript.tsx`
```typescript
export function SchemaScript({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### `BreadcrumbNav.tsx`
```typescript
interface Breadcrumb {
  name: string;
  href?: string;
}
// Renders: Home > Service Areas > Hampstead, NC
// Also outputs BreadcrumbList JSON-LD
```

---

## Page Templates

### Service Area Page Template (`/areas/[city]/page.tsx`)
```
<Header />
<BreadcrumbNav items={["Home", "Service Areas", cityName]} />
<LocalHero city={cityName} />     // Variant of Hero with city-specific H1
<LocalServicesSection />
<LocalChallengesSection />        // City-specific roofing challenges
<LocalReviews city={cityName} />  // Filter reviews by location if available
<EstimateSection />
<ServiceAreasNav />               // Links to neighboring areas
<Footer />
<MobileCTABar />
<SchemaScript schema={localBusinessSchema} />
<SchemaScript schema={breadcrumbSchema} />
```

### Blog Post Template (`/blog/[slug]/page.tsx`)
```
<Header />
<BreadcrumbNav />
<article>
  <BlogHeader />      // Title, date, author, category
  <BlogContent />     // MDX content
  <BlogCTA />         // "Get a free estimate" mid-article and end
</article>
<RelatedPosts />
<Footer />
<MobileCTABar />
<SchemaScript schema={articleSchema} />
```
