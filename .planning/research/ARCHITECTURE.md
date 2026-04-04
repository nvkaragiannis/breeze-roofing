# Architecture Research

**Domain:** Local Service Business Marketing Website (Roofing Contractor)
**Researched:** 2026-04-03
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     SEO & METADATA LAYER                     │
│  Google Search → Static HTML → JSON-LD Schemas → Rankings   │
├─────────────────────────────────────────────────────────────┤
│                   PRESENTATION LAYER                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │  Pages   │  │ Sections │  │   UI     │  │  Layout  │    │
│  │ (Routes) │  │(Homepage)│  │Components│  │(Header/  │    │
│  │          │  │          │  │          │  │ Footer)  │    │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘    │
│       │             │             │             │           │
├───────┴─────────────┴─────────────┴─────────────┴───────────┤
│                      DATA LAYER                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │   Static Content (TypeScript data + MDX files)      │    │
│  │   - services.ts  - areas.ts  - company.ts           │    │
│  │   - reviews.ts   - blog/*.mdx                       │    │
│  └─────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                    SCHEMA LAYER                              │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐               │
│  │LocalBiz   │  │ FAQPage   │  │  Article  │               │
│  │Schema     │  │ Schema    │  │  Schema   │               │
│  └───────────┘  └───────────┘  └───────────┘               │
├─────────────────────────────────────────────────────────────┤
│                      API LAYER (Minimal)                     │
│  POST /api/contact → Resend Email → Contact submission      │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| **Page Routes** | URL structure, metadata generation, content assembly | Next.js App Router pages with `generateMetadata()`, `generateStaticParams()` |
| **Section Components** | Large content blocks (Hero, Services Grid, Reviews) | Server Components that import from data layer |
| **UI Components** | Reusable atoms (Button, Card, Badge) | Pure presentational components |
| **Layout Components** | Persistent elements (Header, Footer, CTAs) | Shared across all pages, contain navigation |
| **Data Files** | Single source of truth for business content | TypeScript const exports (services, areas, company) |
| **Schema Generators** | Transform data into JSON-LD for Google | Pure functions in lib/schema.ts |
| **Blog System** | File-based CMS for articles | MDX files with gray-matter frontmatter |
| **Contact API** | Form submission handling | Route handler with validation + email delivery |

## Recommended URL Structure

### Primary Navigation Hierarchy

```
/                                  # Homepage (hub for all content)
├── /services/                     # Services directory (table stakes)
│   ├── /services/residential-roofing
│   ├── /services/fortified-roof
│   ├── /services/storm-damage-repair
│   ├── /services/emergency-roof-repair
│   ├── /services/commercial-roofing
│   ├── /services/roof-inspection
│   ├── /services/gutter-installation
│   ├── /services/roof-replacement
│   ├── /services/roof-maintenance
│   └── /services/insurance-claims
├── /areas/                        # Service areas directory (local SEO)
│   ├── /areas/wilmington-nc
│   ├── /areas/hampstead-nc
│   ├── /areas/leland-nc
│   ├── /areas/carolina-beach-nc
│   ├── /areas/wrightsville-beach-nc
│   ├── /areas/southport-nc
│   ├── /areas/topsail-island-nc
│   └── /areas/surf-city-nc
├── /blog/                         # Educational content (topical authority)
│   ├── /blog/how-to-choose-roofing-contractor
│   ├── /blog/signs-roof-needs-replacement
│   ├── /blog/fortified-roof-worth-investment
│   ├── /blog/hurricane-preparation-roof
│   ├── /blog/insurance-claim-roof-damage
│   ├── /blog/roof-maintenance-coastal-homes
│   └── /blog/[post-slug]
├── /roofing-products/             # Product catalog (search visibility)
├── /leaf-solutions/               # Specific product page (gutter guards)
├── /estimate/                     # Primary conversion page
├── /contact/                      # Secondary conversion page
├── /about/                        # Trust signals
├── /financing/                    # Remove buying objections
├── /faq/                          # Address common concerns
├── /privacy-policy/               # Legal compliance
└── /terms/                        # Legal compliance
```

### URL Structure Rationale

**Descriptive, hyphenated slugs:** `/services/residential-roofing` not `/services/123` — Google recommends meaningful, readable URLs (Source: Google Search Central URL Structure guide)

**Shallow hierarchy:** Maximum 2-3 levels deep — keeps page authority strong and URLs simple

**Service + Location pattern:** Creates natural internal linking opportunities (`/services/residential-roofing` mentions areas, `/areas/wilmington-nc` mentions services)

**Blog uses topical slugs:** Question-based URLs match search intent (`how-to-`, `signs-`, `worth-investment`)

**No trailing slashes:** Consistent canonicalization (Next.js default)

## Recommended Project Structure

### Current Structure (Optimized for SEO)

```
breeze_roofing/
├── app/                          # Next.js App Router (file-system routing)
│   ├── layout.tsx                # Root: metadata, fonts, GA, JSON-LD
│   ├── page.tsx                  # Homepage: all sections, recent blog
│   ├── robots.ts                 # Crawl directives (allow all)
│   ├── sitemap.ts                # Auto-generated from static routes
│   ├── not-found.tsx             # 404 with navigation
│   ├── services/
│   │   ├── page.tsx              # Services directory page
│   │   └── [service]/
│   │       └── page.tsx          # Dynamic service detail + FAQs
│   ├── areas/
│   │   ├── page.tsx              # Areas directory page
│   │   └── [city]/
│   │       └── page.tsx          # Dynamic area detail + services
│   ├── blog/
│   │   ├── page.tsx              # Blog directory (all posts)
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic blog post + Article schema
│   ├── estimate/page.tsx         # Primary conversion page
│   ├── contact/page.tsx          # Secondary conversion page
│   ├── about/page.tsx            # Trust signals + team
│   ├── financing/page.tsx        # Overcome price objections
│   ├── faq/page.tsx              # Address common concerns
│   ├── roofing-products/page.tsx # Product catalog
│   ├── leaf-solutions/page.tsx   # Specific product page
│   ├── privacy-policy/page.tsx   # Legal
│   ├── terms/page.tsx            # Legal
│   └── api/
│       └── contact/
│           └── route.ts          # POST endpoint for forms
├── components/
│   ├── layout/                   # Persistent across all pages
│   │   ├── Header.tsx            # Navigation + phone CTA
│   │   ├── Footer.tsx            # Sitemap links + business info
│   │   └── MobileCTABar.tsx      # Sticky call/estimate CTAs
│   ├── sections/                 # Homepage building blocks
│   │   ├── Hero.tsx              # Above-fold with primary CTA
│   │   ├── TrustBar.tsx          # Certifications, ratings, years
│   │   ├── ServicesGrid.tsx      # Service cards with links
│   │   ├── WhyBreeze.tsx         # Differentiators
│   │   ├── ReviewsSection.tsx    # Social proof
│   │   ├── ProjectGallery.tsx    # Visual portfolio
│   │   ├── ServiceAreasMap.tsx   # Geographic coverage
│   │   ├── BlogPreview.tsx       # Recent articles
│   │   └── EstimateSection.tsx   # Secondary CTA
│   ├── ui/                       # Reusable primitives
│   │   ├── Button.tsx            # CTA buttons
│   │   ├── BreadcrumbNav.tsx     # Structured breadcrumbs
│   │   ├── ServiceCard.tsx       # Service display
│   │   ├── BlogCard.tsx          # Blog post preview
│   │   ├── AreaCard.tsx          # Service area card
│   │   ├── ReviewCard.tsx        # Testimonial display
│   │   ├── SchemaScript.tsx      # JSON-LD injection
│   │   └── MarkdownContent.tsx   # MDX rendering
│   └── ContactForm.tsx           # Client component for submission
├── lib/
│   ├── schema.ts                 # JSON-LD generators (all types)
│   ├── blog.ts                   # MDX file reading + parsing
│   ├── utils.ts                  # Helpers (cn, formatters)
│   └── data/                     # Single source of truth
│       ├── company.ts            # Business info (NAP, hours, geo)
│       ├── services.ts           # All service definitions
│       ├── areas.ts              # All service area definitions
│       ├── reviews.ts            # Testimonials with ratings
│       └── navigation.ts         # Menu structure
├── content/
│   └── blog/                     # MDX files with frontmatter
│       ├── post-slug.mdx         # YAML frontmatter + markdown
│       └── ...
├── public/                       # Static assets
│   ├── hero-bg.jpg               # Hero background
│   ├── services/                 # Service photos
│   ├── projects/                 # Before/after gallery
│   ├── team/                     # About page photos
│   └── favicon.ico
├── next.config.ts                # Turbopack, image formats, CSP
├── tailwind.config.ts            # Custom colors, fonts
└── package.json                  # Dependencies
```

### Structure Rationale

**App Router over Pages Router:** Built-in Server Components, better metadata API, native streaming (Next.js 13+ standard)

**Flat component structure:** `/components/sections/` not `/components/homepage/sections/` — sections may be reused on other pages later

**Data layer separation:** `lib/data/` keeps content editable without touching components — easier for non-technical updates

**Schema layer isolation:** `lib/schema.ts` centralizes all JSON-LD generation — easier to audit and maintain compliance

**MDX for blog:** Allows embedded React components in posts while keeping content as markdown — best of both worlds

**Static assets in public:** Next.js serves directly at `/filename` — no import statements needed for `<Image>` src

## Architectural Patterns for SEO Marketing Sites

### Pattern 1: Static Pre-Rendering (Next.js SSG)

**What:** All pages generated as static HTML at build time, served instantly without server computation

**When to use:** Always for marketing sites with content that changes infrequently (services, areas, company info)

**Trade-offs:**
- PRO: Near-instant page loads (LCP <0.5s), perfect for Core Web Vitals
- PRO: Google crawls immediately without JavaScript rendering delays
- PRO: Scales to unlimited traffic (just CDN bandwidth)
- CON: Requires rebuild to update content (acceptable for marketing sites)
- CON: Can't personalize content per-user (not needed for local service business)

**Example:**
```typescript
// app/services/[service]/page.tsx
export async function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  return {
    title: `${service.title} in Wilmington NC | Breeze Roofing`,
    description: service.description,
    alternates: { canonical: `https://breezeroofingnc.com/services/${slug}` },
  };
}
```

**Why this works:** Google Search Central confirms "server-side or pre-rendering makes your website faster for users and crawlers" — bypasses JavaScript rendering queue entirely.

### Pattern 2: Topic Cluster Architecture

**What:** Hub-and-spoke content structure with pillar pages linking to related subtopic pages

**When to use:** For establishing topical authority in competitive search categories (e.g., roofing services)

**Trade-offs:**
- PRO: Distributes page authority through internal links
- PRO: Google better understands content relationships
- PRO: Users discover related content naturally
- CON: Requires more comprehensive content creation
- CON: Internal linking must be maintained as content grows

**Example:**
```
Hub (Pillar):     /services/residential-roofing
                  (comprehensive guide to residential roofing)
                          ↓ internal links ↓
Spokes:          /blog/signs-roof-needs-replacement
                 /blog/how-long-does-roof-last
                 /blog/roof-materials-comparison
                 /areas/wilmington-nc (residential roofing in Wilmington)
                          ↓ contextual backlinks ↓
                  (all spokes link back to hub)
```

**Implementation:**
```typescript
// components/RelatedContent.tsx
export function RelatedServices({ tags }: { tags: string[] }) {
  const relatedServices = services
    .filter(s => s.tags.some(tag => tags.includes(tag)))
    .slice(0, 3);
  
  return (
    <section>
      <h2>Related Services</h2>
      {relatedServices.map(service => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </section>
  );
}
```

**Why this works:** Creates semantic relationships that Google uses for ranking relevance — blog posts about roof replacement naturally link to `/services/roof-replacement`, strengthening that page's authority for "roof replacement Wilmington NC" searches.

### Pattern 3: Dual-Path Conversion Architecture

**What:** Every page provides two equal conversion paths: immediate phone call + asynchronous estimate request

**When to use:** Always for local service businesses (some customers prefer calling, others prefer forms)

**Trade-offs:**
- PRO: Captures different user preferences (immediate need vs. research phase)
- PRO: Mobile users can tap-to-call instantly
- PRO: Desktop users can submit forms at their convenience
- CON: Requires maintaining both form infrastructure and phone tracking
- CON: Must optimize two conversion funnels instead of one

**Example:**
```typescript
// components/layout/Header.tsx
export function Header() {
  return (
    <header>
      <nav>...</nav>
      <div className="cta-group">
        <a href={`tel:${company.phone}`} className="phone-cta">
          <Phone /> {formatPhoneDisplay(company.phone)}
        </a>
        <Link href="/estimate" className="estimate-cta">
          Free Estimate
        </Link>
      </div>
    </header>
  );
}

// components/layout/MobileCTABar.tsx (sticky bottom)
export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex gap-2 p-4 bg-white shadow-lg lg:hidden">
      <a href={`tel:${company.phone}`} className="flex-1 btn-primary">
        <Phone /> Call Now
      </a>
      <Link href="/estimate" className="flex-1 btn-secondary">
        Get Estimate
      </Link>
    </div>
  );
}
```

**Why this works:** Different customer segments have different preferences — post-storm emergency needs call immediately, research-phase customers want to compare estimates. Offering both maximizes total conversions.

### Pattern 4: Comprehensive JSON-LD Schema Markup

**What:** Every page type includes appropriate structured data for Google's Rich Results

**When to use:** Always for local service businesses — provides data Google uses for Knowledge Graph, local pack, and rich snippets

**Trade-offs:**
- PRO: Dramatically improves visibility in local search results
- PRO: Powers Google's Knowledge Panel display
- PRO: Enables rich snippet features (FAQ dropdowns, star ratings, breadcrumbs)
- CON: Requires maintenance as business info changes
- CON: Must validate markup to avoid Google penalties

**Example:**
```typescript
// lib/schema.ts
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor", // More specific than LocalBusiness
    name: company.name,
    telephone: `+1${company.phone}`,
    address: { /* full PostalAddress */ },
    geo: { /* latitude/longitude (5+ decimal places) */ },
    openingHoursSpecification: [ /* detailed hours */ ],
    areaServed: [ /* all service cities */ ],
    aggregateRating: { /* rating + review count */ },
    hasOfferCatalog: { /* all services */ },
  };
}
```

**Required implementation:**
- **Homepage:** `LocalBusiness` (RoofingContractor subtype) + `WebSite` for site name
- **Service pages:** `Service` + `FAQPage` + `BreadcrumbList`
- **Blog posts:** `Article` + `BreadcrumbList`
- **Area pages:** `Service` with `areaServed` + `BreadcrumbList`

**Why this works:** Google's Local Business documentation confirms this data improves visibility in local search results and knowledge panels — essential for "roofing contractor near me" searches.

### Pattern 5: Internal Linking Web (Every Page is a Link Hub)

**What:** Strategic cross-linking between related pages using descriptive anchor text within content

**When to use:** Always — internal links are Google's primary signal for understanding site structure and page relationships

**Trade-offs:**
- PRO: Distributes page authority throughout site
- PRO: Helps Google discover and index all pages
- PRO: Increases pages per session (user engagement signal)
- CON: Requires contextual linking within prose, not just navigation
- CON: Can feel over-optimized if done poorly

**Example:**
```typescript
// app/services/[service]/page.tsx
export default async function ServicePage({ params }) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  
  return (
    <>
      <BreadcrumbNav items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: service.title, url: `/services/${slug}` }
      ]} />
      
      <article>
        <MarkdownContent content={service.content} />
        
        {/* Contextual internal links */}
        <p>
          We serve homeowners throughout {" "}
          <Link href="/areas/wilmington-nc">Wilmington</Link>,{" "}
          <Link href="/areas/wrightsville-beach-nc">Wrightsville Beach</Link>, and{" "}
          <Link href="/areas/carolina-beach-nc">Carolina Beach</Link>.
        </p>
        
        {/* Related services */}
        <RelatedServices tags={service.tags} />
        
        {/* Blog posts linking to this service */}
        <RelatedBlogPosts serviceSlug={slug} />
      </article>
      
      <Footer /> {/* Contains full sitemap links */}
    </>
  );
}
```

**Linking strategy:**
- **Navigation:** Header + Footer (persistent on all pages)
- **Breadcrumbs:** Every page shows path back to homepage
- **Contextual:** Service pages mention areas, area pages mention services
- **Related content:** Blog posts link to relevant services
- **Footer sitemap:** Every page linked from every other page

**Why this works:** Google's crawling documentation states "Every page you care about should have a link from at least one other page on your site" and links provide context for relevance ranking.

### Pattern 6: Lazy-Load Below-Fold, Priority Above-Fold

**What:** Hero images use `priority={true}`, below-fold images use `loading="lazy"`

**When to use:** Always — critical for LCP (Largest Contentful Paint) optimization

**Trade-offs:**
- PRO: Dramatically improves LCP scores (target: <2.5s)
- PRO: Reduces initial page weight
- PRO: Better mobile experience on slow connections
- CON: Requires manual classification of above/below fold content
- CON: May cause layout shifts if image dimensions not specified

**Example:**
```typescript
// components/sections/Hero.tsx (above-fold)
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/hero-bg.jpg"
        alt="Breeze Roofing team installing residential roof"
        fill
        priority={true}  // ← Preload immediately
        quality={85}
        sizes="100vw"
        className="object-cover"
      />
      {/* Hero content */}
    </section>
  );
}

// components/sections/ProjectGallery.tsx (below-fold)
export function ProjectGallery() {
  return (
    <section>
      {projects.map(project => (
        <Image
          key={project.id}
          src={project.imageSrc}
          alt={project.description}
          width={600}
          height={400}
          loading="lazy"  // ← Load when scrolled into view
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ))}
    </section>
  );
}
```

**Additional LCP optimizations:**
- Use `fetchpriority="high"` on LCP image (Next.js Image does this automatically with `priority`)
- Ensure hero image source is in initial HTML (not loaded by JavaScript)
- Use WebP/AVIF formats for smaller file sizes (Next.js automatic)
- Set explicit width/height to prevent CLS (Cumulative Layout Shift)

**Why this works:** Web.dev Core Web Vitals guide confirms LCP images should "start loading as early as possible" and avoid lazy-loading — `priority={true}` ensures hero images preload before other resources.

## Data Flow

### Page Load Flow (Static Pre-Rendering)

```
Build Time:
  getAllServices() → lib/data/services.ts
       ↓
  generateStaticParams() → [all service slugs]
       ↓
  For each slug:
    getServiceBySlug() → service object
         ↓
    generateMetadata() → page metadata
         ↓
    getServiceSchema() → JSON-LD schema
         ↓
    Render page.tsx → static HTML file
         ↓
  Write to .next/static/

Runtime (User Request):
  GET /services/residential-roofing
       ↓
  Vercel CDN → .next/static/services/residential-roofing.html
       ↓
  Browser receives fully-rendered HTML (0 JavaScript execution needed)
       ↓
  Google crawler sees complete content immediately
```

### Form Submission Flow

```
User Action:
  Fill ContactForm → Submit
       ↓
  POST /api/contact (with form data)
       ↓
  API Route Handler:
    1. Extract IP from headers
    2. Check rate limit (5 per hour per IP)
    3. Validate required fields
    4. Sanitize HTML (prevent XSS)
    5. Check honeypot field (bot trap)
       ↓
  resend.emails.send({
    from: company.email,
    to: company.email,
    subject: "New Contact Form Submission",
    html: sanitizedFormData
  })
       ↓
  Return { success: true } or { error: "message" }
       ↓
  Client updates formState → Show success/error message
```

### Internal Linking Flow (Page Authority Distribution)

```
Homepage (High Authority)
  ├─→ /services/ (receives authority)
  │    ├─→ /services/residential-roofing (receives authority)
  │    │    ├─→ /areas/wilmington-nc (contextual link)
  │    │    └─→ /blog/how-to-choose-roofing-contractor (contextual link)
  │    └─→ /services/fortified-roof
  │         └─→ /blog/fortified-roof-worth-investment
  ├─→ /areas/ (receives authority)
  │    ├─→ /areas/wilmington-nc
  │    │    └─→ /services/residential-roofing (bidirectional)
  │    └─→ /areas/wrightsville-beach-nc
  └─→ /blog/ (receives authority)
       ├─→ /blog/post-1
       │    └─→ /services/roof-replacement (topical relevance)
       └─→ /blog/post-2
            └─→ /services/storm-damage-repair

Every page links back to:
  - Homepage (breadcrumb)
  - Parent category (breadcrumb)
  - Related content (contextual)
  - All other pages (footer sitemap)
```

## Scaling Considerations

| Scale | Architecture Adjustments | Notes |
|-------|--------------------------|-------|
| **0-10k visits/month** | Current architecture perfect — static HTML on Vercel CDN | No changes needed. LCP <1s, perfect Core Web Vitals. |
| **10k-100k visits/month** | Still no changes needed — static sites scale infinitely | Vercel CDN handles this easily. Only cost is bandwidth. |
| **100k+ visits/month** | Add image CDN (Cloudflare Images), enable ISR for blog updates | Next.js Image Optimization on Vercel may hit function limits. Consider image CDN or self-hosted. |

### Scaling Priorities

**First bottleneck (unlikely to hit):** Vercel Image Optimization function invocations (~1M/month free tier)
- **Solution:** Use Cloudflare Images or Imgix for image delivery
- **Alternative:** Self-host with `output: 'standalone'` and use CDN in front

**Second bottleneck (extremely unlikely):** Build times for new blog posts
- **Solution:** Enable ISR (Incremental Static Regeneration) for `/blog/[slug]` pages
- **Alternative:** Use On-Demand Revalidation triggered by content updates

**What doesn't need optimization:**
- Static page delivery (CDN scales infinitely)
- Contact form submissions (rate-limited to prevent abuse)
- Metadata generation (happens at build time, not runtime)

## Anti-Patterns

### Anti-Pattern 1: Client-Side Rendering for Primary Content

**What people do:** Use `"use client"` for page content, load data with `useEffect` + `fetch`

**Why it's wrong:**
- Google must wait for JavaScript rendering (slower indexing)
- Terrible Core Web Vitals (LCP depends on JavaScript execution)
- Content not available in initial HTML (SEO penalty)

**Do this instead:**
```typescript
// ❌ BAD: Client-side data fetching
"use client";
export default function ServicesPage() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/api/services').then(r => r.json()).then(setServices);
  }, []);
  return <div>{services.map(...)}</div>;
}

// ✅ GOOD: Server Component with static data
export default function ServicesPage() {
  return <div>{services.map(...)}</div>; // services imported from lib/data
}
```

### Anti-Pattern 2: Using Generic `LocalBusiness` Schema

**What people do:** Use `@type: "LocalBusiness"` for all local businesses

**Why it's wrong:**
- Google prefers specific types (HomeAndConstructionBusiness, RoofingContractor)
- Less likely to appear in specialized search features
- Missing semantic signals for industry-specific queries

**Do this instead:**
```typescript
// ❌ BAD: Generic LocalBusiness
{
  "@type": "LocalBusiness",
  "name": "Breeze Roofing"
}

// ✅ GOOD: Specific RoofingContractor
{
  "@type": "RoofingContractor", // More specific subtype
  "name": "Breeze Roofing",
  "areaServed": [...], // Geographic scope
  "hasOfferCatalog": {...} // Service catalog
}
```

**Source:** Schema.org documentation recommends "the most specific child type" available.

### Anti-Pattern 3: Thin Service Area Pages

**What people do:** Create `/areas/wilmington-nc` that just says "We serve Wilmington" with no unique content

**Why it's wrong:**
- Google penalizes duplicate/thin content
- Doesn't provide value to users
- Won't rank for "[service] in [city]" searches

**Do this instead:**
```typescript
// ✅ GOOD: Rich, unique area pages
export default function AreaPage({ params }) {
  const area = getAreaBySlug(params.city);
  return (
    <>
      <h1>{area.name} Roofing Contractor</h1>
      
      {/* Unique content per area */}
      <section>
        <h2>About Roofing in {area.city}</h2>
        <p>{area.localContext}</p> {/* Coastal vs. inland, climate, building codes */}
      </section>
      
      {/* Services available in this area */}
      <ServicesGrid services={getServicesForArea(area.slug)} />
      
      {/* Local testimonials */}
      <ReviewsSection reviews={getReviewsForArea(area.slug)} />
      
      {/* Local projects */}
      <ProjectGallery projects={getProjectsForArea(area.slug)} />
    </>
  );
}
```

**Why this works:** Each area page provides genuinely different, valuable content — not just template with city name swapped.

### Anti-Pattern 4: Missing Breadcrumbs

**What people do:** No breadcrumb navigation, only header menu

**Why it's wrong:**
- Users don't understand site hierarchy
- Google can't display breadcrumbs in search results
- Missed opportunity for internal linking

**Do this instead:**
```typescript
// ✅ GOOD: Breadcrumbs on every page
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";

export default function ServicePage({ params }) {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` }
  ];
  
  return (
    <>
      <BreadcrumbNav items={breadcrumbItems} />
      {/* Inject BreadcrumbList schema */}
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbItems)} />
      
      {/* Page content */}
    </>
  );
}
```

**Source:** Google's breadcrumb documentation recommends "providing breadcrumbs that represent a typical user path" with structured data.

### Anti-Pattern 5: Lazy-Loading Above-Fold Images

**What people do:** Use `loading="lazy"` on hero images to reduce initial payload

**Why it's wrong:**
- Delays LCP (Largest Contentful Paint) significantly
- Google's Core Web Vitals penalizes slow LCP
- Terrible user experience (blank hero on slow connections)

**Do this instead:**
```typescript
// ❌ BAD: Lazy-loading hero
<Image src="/hero.jpg" loading="lazy" />

// ✅ GOOD: Priority loading for LCP image
<Image 
  src="/hero.jpg" 
  priority={true}  // Preloads before other resources
  fetchpriority="high"  // Browser hint (Next.js adds automatically)
  sizes="100vw"  // Responsive sizing
/>
```

**Source:** Web.dev LCP optimization guide states "avoid lazy-loading your LCP image" and use `fetchpriority="high"`.

### Anti-Pattern 6: No Canonical URLs

**What people do:** Forget to set canonical URLs, letting search engines choose

**Why it's wrong:**
- Google may index wrong URL variant (www vs. non-www, http vs. https)
- Splits page authority across duplicate URLs
- Can cause duplicate content issues

**Do this instead:**
```typescript
// app/services/[service]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  
  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `https://breezeroofingnc.com/services/${slug}` // ← Absolute URL
    }
  };
}
```

**Source:** Google's canonicalization guide recommends "use absolute URLs" and set canonical tags on all pages.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| **Resend** (Email) | API key in env var, POST from route handler | Rate limit contact form to prevent abuse |
| **Google Analytics** | `@next/third-parties` GoogleAnalytics component | Only loads if `NEXT_PUBLIC_GA_ID` set |
| **Google Business Profile** | No integration — manual updates | Keep NAP (Name, Address, Phone) consistent |
| **Roofr Instant Estimator** | Embed code in `/estimate` page | To be added — awaits Brett's dashboard access |
| **Vercel** | Git push triggers build + deploy | Automatic — no configuration needed |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| **Pages ↔ Data Layer** | Direct import from `lib/data/` | No API needed — static build-time access |
| **Pages ↔ Schema Layer** | Direct function call to `lib/schema.ts` | Pure functions, no state |
| **Components ↔ Data Layer** | Direct import (Server Components only) | Client Components receive data as props |
| **ContactForm ↔ API Route** | HTTP POST with JSON body | Client Component → Route Handler → Resend |
| **Blog ↔ Content Files** | File system read via `lib/blog.ts` | MDX parsed with gray-matter at build time |

## Sources

### Primary Sources (HIGH Confidence)

**Google Search Central:**
- [JavaScript SEO Basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) — Confirms static pre-rendering benefits
- [Local Business Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business) — Required properties for LocalBusiness schema
- [Breadcrumb Structured Data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) — BreadcrumbList implementation
- [URL Structure](https://developers.google.com/search/docs/crawling-indexing/url-structure) — Descriptive, readable URL recommendations
- [Crawlable Links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) — Internal linking requirements
- [Canonicalization](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) — Canonical URL best practices
- [Page Experience Signals](https://developers.google.com/search/docs/appearance/page-experience) — Core Web Vitals as ranking signals

**Web.dev (Google):**
- [Core Web Vitals](https://web.dev/articles/vitals) — LCP <2.5s, INP <200ms, CLS <0.1
- [Optimize LCP](https://web.dev/articles/optimize-lcp) — Priority loading, fetchpriority, avoid lazy-loading LCP images
- [Optimize CLS](https://web.dev/articles/cls) — Reserve space, use transforms, avoid layout shifts

**Schema.org:**
- [LocalBusiness](https://schema.org/LocalBusiness) — Recommends specific subtypes (RoofingContractor)

### Implementation Sources (MEDIUM Confidence)

**Next.js 16 Documentation:**
- Server Components (via built-in docs in `node_modules/next/dist/docs/`)
- Metadata API patterns (observed in existing codebase)
- Image optimization (Next.js Image component best practices)

**Current Codebase:**
- `lib/schema.ts` — Existing JSON-LD implementations
- `app/services/[service]/page.tsx` — Static params generation pattern
- `components/layout/Header.tsx` — Dual CTA implementation

### Research Gaps (Require Validation)

- **Competitor analysis:** No data on Wilmington NC roofing competitor sites
- **Keyword research:** No search volume data for "[service] in [city]" terms
- **Topic cluster effectiveness:** General best practice, but no industry-specific data for roofing
- **Conversion rate benchmarks:** No data on phone vs. form conversion rates for roofing

---

*Architecture research for: SEO-optimized local service business marketing site*
*Researched: 2026-04-03*
*Next steps: Use this architecture to inform roadmap phase structure*
