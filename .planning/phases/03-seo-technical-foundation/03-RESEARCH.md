# Phase 3: SEO Technical Foundation - Research

**Researched:** 2026-04-03
**Domain:** Technical SEO for Next.js marketing sites
**Confidence:** HIGH

## Summary

Phase 3 focuses on upgrading the site's existing SEO infrastructure from good to perfect. The site already has a solid foundation with `lib/schema.ts` providing LocalBusiness, FAQ, Article, and Breadcrumb schemas, plus Next.js metadata API usage and a functional sitemap. This phase elevates that foundation to meet all Google Rich Results requirements.

The primary work is upgrading LocalBusiness to RoofingContractor schema (more specific type), adding missing Article image properties for blog posts, ensuring FAQPage compliance, validating all schemas with Google Rich Results Test, and auditing metadata uniqueness across all 43+ pages.

**Key insight:** This is schema refinement and metadata audit work, not ground-up implementation. The architecture already supports everything needed—we're enhancing existing functions and fixing gaps.

**Primary recommendation:** Use Google Rich Results Test as the validation checkpoint for all schema changes. Test with actual URLs once deployed to staging/production, not just isolated JSON snippets.

## Standard Stack

### Core (Already in Place)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js 16 | 16.x | Metadata API, sitemap generation | Built-in SEO tools, automatic `<head>` generation |
| Schema.org JSON-LD | N/A | Structured data format | Google's recommended format (over Microdata/RDFa) |
| TypeScript | 5.x | Type-safe schema generation | Prevents property typos in schema objects |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Google Rich Results Test | Web tool | Schema validation | Every schema change before deployment |
| Google Search Console | Web tool | Post-deployment monitoring | After launch to track Rich Results status |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| JSON-LD | Microdata (inline HTML attributes) | JSON-LD is easier to maintain, separate from presentation |
| Manual schema objects | Schema generator library (schema-dts) | Manual gives full control; auto-gen adds bundle size for marginal benefit |

**Installation:**
No new packages needed—all work uses existing Next.js APIs and Schema.org specifications.

## Architecture Patterns

### Pattern 1: Schema Refinement Over Replacement
**What:** Enhance existing schema generators in `lib/schema.ts` rather than rewriting from scratch

**When to use:** When existing schemas are structurally correct but missing specificity or optional properties

**Example:**
```typescript
// Current (lib/schema.ts):
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor", // ✓ Already correct!
    name: company.name,
    // ... existing properties
  };
}

// Enhancement needed:
// 1. Verify all required properties present
// 2. Add recommended properties (image, logo)
// 3. Ensure geo coordinates have 5+ decimal places
```

### Pattern 2: Metadata Uniqueness Audit
**What:** Systematic verification that every page has unique title and description (no duplicates)

**When to use:** For all 43+ pages before considering SEO "complete"

**Example:**
```typescript
// Audit script approach:
// 1. Extract all metadata objects from pages
// 2. Group by title/description
// 3. Flag duplicates
// 4. Review dynamic routes (services, areas, blog) for template issues

// Service pages already use unique metadata:
export async function generateMetadata({ params }): Promise<Metadata> {
  const service = getServiceBySlug(slug);
  return {
    title: service.metaTitle, // ✓ Each service has unique metaTitle
    description: service.metaDescription, // ✓ Each service has unique description
    alternates: { canonical: `https://breezeroofingnc.com/services/${slug}` },
  };
}
```

### Pattern 3: Article Schema Image Requirements
**What:** Add image property to Article schema for blog posts (recommended by Google for rich results eligibility)

**When to use:** All blog posts, even if image is generic (hero background or brand image)

**Example:**
```typescript
// Current getArticleSchema() missing image property:
export function getArticleSchema(article: {
  title: string;
  datePublished: string;
  dateModified?: string;
  description: string;
  url: string;
  image?: string; // ← Add optional image parameter
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image || `${company.url}/hero-bg.jpg`, // Fallback to site image
    author: {
      "@type": "Person",
      name: `Brett, ${company.name}`,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: `${company.url}/logo.png`, // Add publisher logo
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
  };
}
```

**Source:** Google's Article schema docs state image is recommended (not required) but "for best results, we recommend providing multiple high-resolution images (minimum of 50K pixels when multiplying width and height)."

### Anti-Patterns to Avoid

**Anti-Pattern 1: Using Generic LocalBusiness Instead of Specific Subtype**
- **What goes wrong:** Less semantic signal for Google, lower chance of appearing in industry-specific searches
- **Why it happens:** Generic types are easier to find in Schema.org documentation
- **How to avoid:** Always use most specific subtype available (RoofingContractor > HomeAndConstructionBusiness > LocalBusiness)
- **Warning signs:** Schema uses `@type: "LocalBusiness"` instead of `"RoofingContractor"`

**Anti-Pattern 2: FAQPage on Non-Authoritative Sites**
- **What goes wrong:** Google restricts FAQPage to "well-known, authoritative websites that are government-focused or health-focused"
- **Why it happens:** FAQPage seems like an obvious choice for FAQ sections
- **How to avoid:** For roofing contractor sites, use FAQPage cautiously—may not qualify for rich results, but still provides semantic value
- **Warning signs:** Rich Results Test accepts FAQPage but Google Search Console shows no FAQ rich results after deployment

**Note:** Current implementation uses FAQPage on service pages. This is semantically correct but may not trigger rich results due to authority restrictions. Keep implementation for semantic value but don't expect FAQ dropdowns in search results.

**Anti-Pattern 3: Setting lastModified to `new Date()` on Static Content**
- **What goes wrong:** Sitemap shows every page modified "today" which is misleading for crawlers
- **Why it happens:** Easy default in sitemap generation
- **How to avoid:** Use actual file modification time or fixed dates for static content; `new Date()` only for truly dynamic pages
- **Warning signs:** All pages in sitemap.xml have same lastModified timestamp

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Metadata extraction/audit | Custom script to parse TypeScript files | Manual page-by-page review with spreadsheet | 43 pages is small enough for manual audit; automated extraction is complex due to dynamic routes |
| Schema validation | Custom JSON schema validator | Google Rich Results Test (web tool) | Google's tool is authoritative source, custom validator may miss edge cases |
| Sitemap generation | Custom XML builder | Next.js `app/sitemap.ts` convention | Next.js handles all XML formatting, types, and URL resolution automatically |

**Key insight:** For a 43-page site, manual auditing is faster and more reliable than building automation.

## Common Pitfalls

### Pitfall 1: Forgetting Canonical URLs on Dynamic Routes
**What goes wrong:** Service pages, area pages, and blog posts missing canonical URLs despite static pages having them

**Why it happens:** Easy to set canonical in static metadata but forget in `generateMetadata()` functions

**How to avoid:** 
1. Audit all `generateMetadata()` functions
2. Ensure every one includes `alternates: { canonical: "..." }`
3. Use absolute URLs (https://breezeroofingnc.com/...) not relative paths

**Warning signs:**
```typescript
// ❌ BAD: Missing canonical
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: "...",
    description: "...",
    // ← Missing alternates.canonical!
  };
}

// ✅ GOOD: Canonical present
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: "...",
    description: "...",
    alternates: { canonical: `https://breezeroofingnc.com/...` },
  };
}
```

### Pitfall 2: Duplicate Meta Descriptions Across Similar Pages
**What goes wrong:** Multiple service pages share identical descriptions like "Breeze Roofing provides professional roofing services in Wilmington NC"

**Why it happens:** Template-based content generation without customization

**How to avoid:**
1. Each service page description must mention specific service type
2. Each area page description must mention specific city
3. Blog posts must have unique descriptions (not excerpts of first paragraph)

**Example:**
```typescript
// ❌ BAD: All services have same description
const services = [
  { slug: "residential-roofing", metaDescription: "Professional roofing in Wilmington NC" },
  { slug: "commercial-roofing", metaDescription: "Professional roofing in Wilmington NC" },
];

// ✅ GOOD: Each service has unique description
const services = [
  { slug: "residential-roofing", metaDescription: "Expert residential roof installation and repair for Wilmington NC homeowners. Licensed, insured, Fortified-certified." },
  { slug: "commercial-roofing", metaDescription: "Commercial roofing solutions for Wilmington NC businesses. Flat roofs, TPO, EPDM, metal roofing systems." },
];
```

### Pitfall 3: Article Schema Missing Image Property
**What goes wrong:** Blog posts have Article schema but Google can't display rich results without image

**Why it happens:** Image is "recommended" not "required" so easy to skip

**How to avoid:**
1. Add `image` property to all Article schemas
2. Use blog post featured image if available
3. Fall back to site logo or hero image if no post-specific image

**Warning signs:** Google Rich Results Test validates Article schema but Preview shows no image

### Pitfall 4: BreadcrumbList With Only One Item
**What goes wrong:** Google requires minimum 2 ListItems in BreadcrumbList

**Why it happens:** Forgetting to include "Home" as first breadcrumb

**How to avoid:**
1. All breadcrumbs start with Home → Parent → Current
2. Minimum 2 items (Home + Current page)
3. Use absolute URLs for `item` property

**Example:**
```typescript
// ❌ BAD: Only one breadcrumb
getBreadcrumbSchema([
  { name: "Services", url: "https://..." }
]);

// ✅ GOOD: At least two breadcrumbs
getBreadcrumbSchema([
  { name: "Home", url: "https://breezeroofingnc.com" },
  { name: "Services", url: "https://breezeroofingnc.com/services" },
]);
```

### Pitfall 5: RoofingContractor Schema Missing GeoCoordinates
**What goes wrong:** Local business schema without geo coordinates reduces local SEO effectiveness

**Why it happens:** Geo coordinates require 5+ decimal places for precision, easy to omit

**How to avoid:**
1. Verify `lib/data/company.ts` has `geo.latitude` and `geo.longitude`
2. Ensure 5+ decimal places precision (e.g., 34.22573, -77.94471)
3. Use Google Maps to get exact coordinates for business address

**Warning signs:** Rich Results Test shows RoofingContractor schema but no geo property

## Code Examples

Verified patterns from official sources:

### Next.js generateMetadata with Canonical URL
```typescript
// Source: Next.js 16 docs (node_modules/next/dist/docs)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getItemBySlug(slug);
  
  return {
    title: item.title,
    description: item.description,
    alternates: {
      canonical: `https://breezeroofingnc.com/path/${slug}`,
    },
  };
}
```

### RoofingContractor Schema (Most Specific Type)
```typescript
// Source: Schema.org RoofingContractor specification
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor", // More specific than LocalBusiness
    name: company.name,
    telephone: `+1${company.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: company.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.latitude, // Minimum 5 decimal places
      longitude: company.geo.longitude,
    },
    image: `${company.url}/logo.png`, // Recommended property
    logo: `${company.url}/logo.png`, // Recommended property
    url: company.url,
    areaServed: [
      { "@type": "City", name: "Wilmington" },
      // ... other cities
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: company.reviewRating,
      reviewCount: company.reviewCount,
      bestRating: "5",
    },
  };
}
```

### Article Schema with Image and Publisher Logo
```typescript
// Source: Google Article structured data documentation
export function getArticleSchema(article: {
  title: string;
  datePublished: string;
  dateModified?: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image || `${company.url}/hero-bg.jpg`, // Recommended
    author: {
      "@type": "Person",
      name: `Brett, ${company.name}`,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: `${company.url}/logo.png`, // Required for publisher
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
  };
}
```

### BreadcrumbList Schema
```typescript
// Source: Google Breadcrumb structured data documentation
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1, // 1-indexed positions
      name: item.name,
      item: item.url, // Absolute URLs
    })),
  };
}

// Usage: Minimum 2 items required
const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", url: "https://breezeroofingnc.com" },
  { name: "Services", url: "https://breezeroofingnc.com/services" },
  { name: "Residential Roofing", url: "https://breezeroofingnc.com/services/residential-roofing" },
]);
```

### Sitemap with Appropriate lastModified
```typescript
// Source: Next.js 16 sitemap.ts documentation
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://breezeroofingnc.com",
      lastModified: new Date("2026-04-03"), // Fixed date for static homepage
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://breezeroofingnc.com/services/residential-roofing",
      lastModified: new Date("2026-03-15"), // Actual last edit date
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
```

**Note:** Google ignores `priority` and `changeFrequency` values per official documentation, but including them provides semantic documentation value.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Generic LocalBusiness schema | Specific RoofingContractor subtype | Schema.org added specific types ~2018 | Better semantic signals for local search |
| Microdata (inline HTML) | JSON-LD (script tag) | Google recommended JSON-LD ~2016 | Easier maintenance, cleaner HTML |
| robots.txt for crawl control | sitemap.xml for discovery | Always both, but sitemap became primary tool ~2010 | Positive signal vs. negative signal |
| Manual metadata in HTML | Next.js Metadata API | Next.js 13+ (2022) | Type-safe, automatic `<head>` generation |

**Deprecated/outdated:**
- **data-vocabulary.org markup:** Deprecated by Google in 2020, only Schema.org supported now
- **meta keywords tag:** Google hasn't used this since 2009
- **Sitemap priority/changeFreq affecting crawl rate:** Google confirmed it ignores these values

## Open Questions

1. **FAQPage eligibility for roofing contractor site**
   - What we know: Google restricts FAQPage rich results to "well-known, authoritative websites that are government-focused or health-focused"
   - What's unclear: Whether roofing contractor can qualify as "authoritative" or if this is hard restriction
   - Recommendation: Keep FAQPage schema for semantic value but don't expect FAQ rich results in search. Monitor Google Search Console for actual behavior.

2. **Optimal sitemap lastModified strategy**
   - What we know: Current implementation uses `new Date()` which shows all pages modified today
   - What's unclear: Whether to use file modification times (harder to track for TypeScript data) or fixed dates
   - Recommendation: Use fixed dates matching actual content updates. Track in STATE.md when pages change.

3. **Logo file location and format**
   - What we know: Publisher logo required for Article schema, logo recommended for RoofingContractor
   - What's unclear: Whether logo.png exists in public/ directory
   - Recommendation: Verify logo file exists before referencing in schema. If not, add to Phase 3 work.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual validation (no automated tests for schema) |
| Config file | N/A — validation via Google Rich Results Test |
| Quick run command | Open browser to search.google.com/test/rich-results |
| Full suite command | Manual audit of all schema types across representative pages |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| SEO-02 | RoofingContractor schema on all pages | manual | Rich Results Test → any page URL | ✅ lib/schema.ts exists |
| SEO-03 | FAQPage schema on FAQ and service pages | manual | Rich Results Test → /faq, /services/* | ✅ lib/schema.ts exists |
| SEO-04 | Article schema on blog posts | manual | Rich Results Test → /blog/* | ✅ lib/schema.ts exists |
| SEO-05 | BreadcrumbList schema on all pages | manual | Rich Results Test → any page URL | ✅ lib/schema.ts exists |
| SEO-06 | Unique meta title/description on all pages | manual | Browser DevTools → check `<head>` on all 43 pages | ✅ metadata in pages |
| SEO-07 | XML sitemap with proper structure | manual | Visit /sitemap.xml → validate XML | ✅ app/sitemap.ts |
| SEO-08 | Canonical URLs on all pages | manual | Browser DevTools → check `<link rel="canonical">` | ✅ metadata in pages |

### Sampling Rate
- **Per task commit:** Manual spot-check (Rich Results Test on 1-2 affected pages)
- **Per wave merge:** Manual verification (Rich Results Test on all page types: homepage, service, area, blog, static)
- **Phase gate:** Full manual audit before `/gsd:verify-work` (all 43 pages checked for unique metadata, schema validation on 1 page per type)

### Wave 0 Gaps
- None — all validation is manual using Google's official tools. No test infrastructure needed for schema/SEO work.

## Sources

### Primary (HIGH confidence)
- **Google Search Central - Local Business Structured Data:** https://developers.google.com/search/docs/appearance/structured-data/local-business (RoofingContractor requirements)
- **Google Search Central - FAQPage:** https://developers.google.com/search/docs/appearance/structured-data/faqpage (FAQPage restrictions, government/health only for rich results)
- **Google Search Central - Article Structured Data:** https://developers.google.com/search/docs/appearance/structured-data/article (image recommendations, author/publisher requirements)
- **Google Search Central - Breadcrumb:** https://developers.google.com/search/docs/appearance/structured-data/breadcrumb (minimum 2 items, position indexing)
- **Google Search Central - Intro to Structured Data:** https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data (validation tools, common mistakes)
- **Google Search Central - Sitemap Best Practices:** https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (confirms Google ignores priority/changeFrequency)
- **Schema.org RoofingContractor:** https://schema.org/RoofingContractor (properties, parent classes, inheritance from LocalBusiness)
- **Next.js 16 Metadata Documentation:** node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md (generateMetadata API)
- **Next.js 16 Sitemap Documentation:** node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md (sitemap.ts conventions)
- **Next.js 16 generateMetadata API Reference:** node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md (Metadata type, alternates.canonical)

### Secondary (MEDIUM confidence)
- **Google Rich Results Test:** https://search.google.com/test/rich-results (web tool, not documented API)
- **Existing codebase schemas:** lib/schema.ts (provides current implementation patterns)

### Tertiary (LOW confidence)
- None — all sources are authoritative (Google official docs, Schema.org official spec, Next.js bundled docs)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All tools are official Google/Next.js APIs
- Architecture: HIGH - Patterns verified against Google Search Central documentation
- Pitfalls: HIGH - Based on Google's official structured data guidelines and common mistakes documentation

**Research date:** 2026-04-03
**Valid until:** 180 days (June 2026) — Schema.org and Google Search Central change infrequently for established types like LocalBusiness/Article
