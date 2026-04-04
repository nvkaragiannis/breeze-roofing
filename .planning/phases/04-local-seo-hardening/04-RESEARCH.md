# Phase 4: Local SEO Hardening - Research

**Researched:** 2026-04-03
**Domain:** Local SEO, NAP consistency, Google Business Profile alignment, citation strategy
**Confidence:** HIGH

## Summary

Phase 4 focuses on hardening the site's local SEO foundation to maximize visibility for "near me" searches and location-based queries like "roofing contractor Wilmington NC." This is about consistency, alignment, and strategic citation building—not new technical infrastructure.

The site already has strong foundations: RoofingContractor schema with geo coordinates, areaServed properties, service areas data structure, and company.ts as a single source of truth. However, several critical gaps must be addressed: incomplete NAP data (street address is "[Address TBD]", license number is placeholder), no explicit NAP consistency verification across all page locations, schema doesn't perfectly mirror future Google Business Profile data, service pages lack local context beyond area pages, and no citation strategy document exists for directory submission.

This phase is about data completion, systematic verification, and strategic planning. The architecture already supports everything needed—we're filling data gaps, adding local context to content, and documenting the citation strategy.

**Primary recommendation:** Complete NAP data in `lib/data/company.ts` FIRST (get actual street address, license number, year founded from Brett), then systematically verify NAP appears identically everywhere, then add local context to service pages, then create citation strategy document.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| LOCAL-01 | NAP (Name/Address/Phone) consistent across entire site | NAP consistency research, current NAP locations audit, verification checklist |
| LOCAL-02 | Google Business Profile alignment — schema matches GBP exactly | Schema.org LocalBusiness requirements, GBP data format standards, alignment verification process |
| LOCAL-03 | Local references and context in service page content (not just area pages) | Local content optimization patterns, service page enhancement strategies |
| LOCAL-04 | Citation strategy document for directory listings (Yelp, BBB, Angi, HomeAdvisor, etc.) | Top citation directories for home service contractors, citation building best practices, NAP submission checklist |
</phase_requirements>

## Standard Stack

### Core (Already in Place)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| lib/data/company.ts | N/A | Single source of truth for NAP data | Centralized data prevents inconsistency across pages |
| RoofingContractor schema | Schema.org | Structured data for local business | Google's recommended schema type for roofing contractors |
| Next.js Metadata API | 16.x | Consistent metadata generation | Type-safe metadata prevents accidental variations |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Google Rich Results Test | Web tool | Validate LocalBusiness schema | After any schema changes affecting NAP or geo data |
| Google Business Profile | Web service | Business listing management | Verify schema matches GBP data exactly |

### Tools for Citation Audit
| Tool | Purpose | When to Use |
|------|---------|-------------|
| Whitespark Local Citation Finder | Find competitor citations, identify top directories | During citation strategy creation |
| Moz Local | Automated citation building/management | Optional: if budget allows for paid service |
| BrightLocal | Citation audit and tracking | Optional: for ongoing citation monitoring |

**Installation:**
No new packages needed—all work uses existing data structures and manual verification processes.

## Architecture Patterns

### Pattern 1: Single Source of Truth (SSOT) for NAP
**What:** All NAP data flows from `lib/data/company.ts`—no hardcoded phone numbers, addresses, or business names anywhere else

**When to use:** Every component, schema, metadata, and page that displays business information

**Example:**
```typescript
// lib/data/company.ts (SSOT):
export const company = {
  name: "Breeze Roofing",
  legalName: "Breeze Roofing NC",
  phone: "9106655277",
  phoneFormatted: "(910) 665-5277",
  phoneTel: "tel:+19106655277",
  email: "Letsgo@breezeroofingnc.com",
  address: {
    street: "123 Main Street", // ← Must match GBP exactly
    city: "Wilmington",
    state: "NC",
    zip: "28401",
    country: "US",
  },
  geo: {
    latitude: 34.2257, // ← Match GBP exactly
    longitude: -77.9447,
  },
  license: "12345", // ← Must match actual NC license
  yearFounded: "2020", // ← Must match GBP
} as const;

// ✅ GOOD: Import and use
import { company } from "@/lib/data/company";
<a href={company.phoneTel}>{company.phoneFormatted}</a>

// ❌ BAD: Hardcoded phone number
<a href="tel:+19106655277">(910) 665-5277</a>
```

**Current status:** Architecture already follows SSOT pattern. Header, Footer, contact page, and all schemas import from `company.ts`. Gap: company.ts has placeholder data that needs completion.

### Pattern 2: NAP Format Consistency Rules
**What:** Strict formatting rules ensure NAP appears identically across all locations

**Format standards:**
- **Name:** "Breeze Roofing" (not "Breeze Roofing NC", "Breeze Roofing, LLC", or variations)
- **Address:** Full street address format: "123 Main Street, Wilmington, NC 28401" (not abbreviated)
- **Phone:** Display as "(910) 665-5277" everywhere visible to users
- **Phone in schema:** "+19106655277" format (E.164 international format)
- **Never use:** P.O. boxes, virtual offices, or addresses that don't match GBP

**Example:**
```typescript
// Schema format (machine-readable):
telephone: `+1${company.phone}` // "+19106655277"

// Display format (human-readable):
{company.phoneFormatted} // "(910) 665-5277"

// Link format:
<a href={company.phoneTel}> // "tel:+19106655277"
```

### Pattern 3: Schema-GBP Perfect Alignment
**What:** Every property in RoofingContractor schema must match Google Business Profile data exactly

**Critical properties that MUST match:**
1. **name** → GBP business name
2. **address** → GBP address (every field: street, city, state, zip)
3. **telephone** → GBP phone number
4. **geo.latitude / geo.longitude** → GBP location pin (5+ decimal places)
5. **openingHoursSpecification** → GBP business hours
6. **areaServed** → GBP service area cities

**Verification process:**
1. Log into Google Business Profile
2. Copy exact name, address, phone, hours, service areas
3. Update `lib/data/company.ts` to match character-for-character
4. Verify schema uses company.ts values
5. Test with Google Rich Results Test

**Example misalignment to avoid:**
```typescript
// ❌ BAD: Schema says "Mon-Fri 8:00 AM - 5:00 PM"
//         GBP says "Mon-Fri 8:00 AM - 5:30 PM"
// Google sees inconsistency and may distrust data

// ✅ GOOD: Schema matches GBP exactly
openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00", // ← Matches GBP "8:00 AM"
    closes: "17:00", // ← Matches GBP "5:00 PM"
  },
]
```

**Current status:** Schema structure is correct. Gap: GBP doesn't exist yet or data isn't verified. Need to ensure company.ts data matches whatever is/will be in GBP.

### Pattern 4: Local Context in Service Content
**What:** Service pages include specific local references beyond just saying "Wilmington NC"

**Local context elements:**
- **Geographic challenges:** "Coastal NC homes face salt air corrosion and hurricane-force winds"
- **Building codes:** "Wilmington building codes require wind-rated materials in coastal zones"
- **Climate specifics:** "NC's humid subtropical climate accelerates roof deterioration"
- **Local landmarks:** "From Landfall to downtown Wilmington, we understand your neighborhood"
- **Storm references:** "After Hurricane Florence, we rebuilt hundreds of local roofs"

**Implementation locations:**
- Service page intro paragraphs
- Service page "Why Choose Breeze" sections
- Service page FAQ answers
- Service page warranty/timeline content

**Example:**
```markdown
## Residential Roofing in Coastal NC

Wilmington-area homes face unique roofing challenges that inland properties don't encounter. Salt air from the Atlantic accelerates corrosion of metal components like flashing and fasteners. Hurricane season brings wind loads that exceed standard shingle ratings. And NC's humid subtropical climate means moisture management isn't optional—it's critical for preventing mold and rot.

Breeze Roofing specializes in coastal-rated roofing systems designed for exactly these conditions...
```

**Current status:** Area pages have excellent local context (salt air, hurricanes, neighborhoods, building codes). Service pages are generic and could be used anywhere. Gap: Service pages need coastal NC context added without duplicating area page content.

### Anti-Patterns to Avoid

**Anti-Pattern 1: Multiple Phone Numbers Across Site**
- **What goes wrong:** Different pages show different phone numbers, confusing users and Google
- **Why it happens:** Copy-paste errors, old numbers not updated everywhere
- **How to avoid:** Use `company.phoneTel` and `company.phoneFormatted` everywhere, never hardcode
- **Warning signs:** Grep for phone numbers finds multiple variations

**Anti-Pattern 2: P.O. Box or Virtual Office Address**
- **What goes wrong:** Google penalizes service-area businesses using non-physical addresses
- **Why it happens:** Privacy concerns or lack of physical office
- **How to avoid:** Use actual business location (home office acceptable), or hide address and rely on service areas
- **Warning signs:** Address field contains "P.O. Box", "PMB", or known virtual office address

**Anti-Pattern 3: Schema Says Different Hours Than GBP**
- **What goes wrong:** Google sees conflicting data and may not show business hours in search
- **Why it happens:** Updating GBP but forgetting to update website schema
- **How to avoid:** Document hours in company.ts, update GBP to match, never change one without the other
- **Warning signs:** Rich Results Test shows hours that don't match actual business hours

**Anti-Pattern 4: Generic Service Content Without Local Signals**
- **What goes wrong:** Google can't determine if service page is relevant to Wilmington searches
- **Why it happens:** Template content works anywhere, missing local optimization
- **How to avoid:** Every service page must mention: Wilmington/coastal NC, geographic challenge, local building standard
- **Warning signs:** Service page content could be on any contractor's site in any state

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Citation distribution | Manual submission to 100+ directories | Whitespark/Moz Local/BrightLocal paid service OR manual focus on top 15 directories | Diminishing returns after major directories; paid services automate updates |
| NAP consistency checker | Custom crawler to find all NAP instances | Manual grep + manual page review | Site is only 43 pages; automated crawler is overkill |
| GBP data extraction | Screen scraping GBP dashboard | Manual copy from GBP UI into company.ts | No public API; screen scraping breaks and violates TOS |
| Citation tracking spreadsheet | Complex database with validation rules | Google Sheets with simple checklist | Over-engineering citation management for single-location business |

**Key insight:** For single-location service business, manual processes and focus on top directories outperform complex automation.

## Common Pitfalls

### Pitfall 1: Inconsistent Business Name Format
**What goes wrong:** Website says "Breeze Roofing", GBP says "Breeze Roofing NC", directories say "Breeze Roofing LLC"

**Why it happens:** Different platforms ask for "business name" vs "legal name" vs "DBA name"

**How to avoid:**
1. Choose ONE primary name format (e.g., "Breeze Roofing")
2. Use that format everywhere: website, GBP, citations, directories
3. Legal name can differ in incorporation docs but public-facing name must be consistent
4. Document in company.ts: `name` (primary) and `legalName` (legal entity) separately

**Warning signs:** Google search shows knowledge panel with different business name than website header

### Pitfall 2: Phone Number Format Variations
**What goes wrong:** Site shows "(910) 665-5277" in some places, "910-665-5277" in others, "9106655277" elsewhere

**Why it happens:** Different developers, different formatting preferences, copy-paste from different sources

**How to avoid:**
1. Store raw digits in company.ts: `phone: "9106655277"`
2. Generate formatted version: `phoneFormatted: "(910) 665-5277"`
3. Generate tel link: `phoneTel: "tel:+19106655277"`
4. Always import and use these constants, never format inline

**Example:**
```typescript
// ❌ BAD: Inline formatting
<a href="tel:9106655277">910-665-5277</a>

// ✅ GOOD: Use constants
import { company } from "@/lib/data/company";
<a href={company.phoneTel}>{company.phoneFormatted}</a>
```

### Pitfall 3: Geo Coordinates Don't Match GBP Pin Location
**What goes wrong:** Schema shows coordinates for city center, GBP pin is at actual business address

**Why it happens:** Using approximate coordinates from Google Maps search instead of exact business location

**How to avoid:**
1. In Google Business Profile, verify address pin is at exact business location
2. Click on map pin to see exact coordinates
3. Copy coordinates with 5+ decimal places precision
4. Update company.ts geo.latitude and geo.longitude
5. Verify schema uses these exact coordinates

**Warning signs:** Rich Results Test shows location that's blocks away from actual business address

### Pitfall 4: areaServed Doesn't Match GBP Service Areas
**What goes wrong:** Schema lists 8 cities, GBP profile lists 12 cities, creating inconsistency

**Why it happens:** Updating one without updating the other

**How to avoid:**
1. Define service areas in lib/data/areas.ts (already exists)
2. GBP service areas must match areas.ts city list exactly
3. Schema areaServed must map from areas.ts
4. Single source of truth for service areas

**Current implementation:**
```typescript
// lib/data/areas.ts defines 8 areas:
// Wilmington, Hampstead, Leland, Carolina Beach, Wrightsville Beach, Southport, Topsail Island, Surf City

// lib/schema.ts areaServed already matches:
areaServed: [
  { "@type": "City", name: "Wilmington" },
  { "@type": "City", name: "Hampstead" },
  // ... all 8 cities
]

// GBP must be updated to list these exact 8 cities (no more, no fewer)
```

### Pitfall 5: Missing Local Context Looks Like Spam
**What goes wrong:** Adding "Wilmington NC" keyword to every sentence makes content unreadable

**Why it happens:** Over-optimization for local keywords

**How to avoid:**
- Use local references naturally in context
- 1-2 mentions per paragraph maximum
- Focus on local challenges, not keyword density
- Vary references: "Wilmington", "coastal NC", "the Cape Fear region", "Wilmington-area homes"

**Example:**
```markdown
❌ BAD (keyword stuffing):
"Breeze Roofing provides Wilmington NC roofing services. Our Wilmington NC roofing contractors serve Wilmington NC homeowners with Wilmington NC residential roofing."

✅ GOOD (natural local context):
"Coastal homes in the Wilmington area face unique challenges—salt air corrosion, hurricane-force winds, and high humidity. Our team specializes in roofing systems designed for exactly these conditions."
```

### Pitfall 6: Stale Citation Data
**What goes wrong:** Business moves or changes phone number but 50+ directory listings have old information

**Why it happens:** Citations were built once and never maintained

**How to avoid:**
1. Document all citation locations in citation strategy doc
2. When NAP changes, update master list of directories to update
3. Prioritize top 10-15 directories for immediate updates
4. Accept that some minor directories will have stale data

**Warning signs:** Customers call old phone number or show up at old address

## Code Examples

Verified patterns from codebase analysis:

### NAP Display Consistency (Current Implementation)
```tsx
// Source: components/layout/Header.tsx, Footer.tsx
import { company } from "@/lib/data/company";

// Phone link format (consistent everywhere):
<a href={company.phoneTel}>{company.phoneFormatted}</a>
// Renders: <a href="tel:+19106655277">(910) 665-5277</a>

// Email link format:
<a href={`mailto:${company.email}`}>{company.email}</a>

// Address display format:
<span>
  {company.address.city}, {company.address.state} {company.address.zip}
</span>
```

**Current gap:** Street address not displayed anywhere because it's "[Address TBD]" placeholder. Once completed, should appear in Footer and contact page.

### Schema NAP Alignment (Current Implementation)
```typescript
// Source: lib/schema.ts getLocalBusinessSchema()
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: company.name, // "Breeze Roofing"
    telephone: `+1${company.phone}`, // "+19106655277"
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street, // ← Must match GBP
      addressLocality: company.address.city, // "Wilmington"
      addressRegion: company.address.state, // "NC"
      postalCode: company.address.zip, // "28401"
      addressCountry: company.address.country, // "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.latitude, // 34.2257 ← needs 5+ decimals
      longitude: company.geo.longitude, // -77.9447
    },
    url: company.url,
  };
}
```

**Alignment verification checklist:**
- [ ] company.name matches GBP business name exactly
- [ ] company.address.street matches GBP street address
- [ ] company.phone matches GBP phone number
- [ ] company.geo coordinates match GBP map pin (5+ decimal precision)
- [ ] openingHoursSpecification matches GBP business hours
- [ ] areaServed cities match GBP service area list

### Service Areas Consistency (Current Implementation)
```typescript
// Source: lib/data/areas.ts
export const areas: ServiceArea[] = [
  {
    slug: "wilmington-nc",
    city: "Wilmington",
    state: "NC",
    zipCodes: ["28401", "28403", "28405", "28409", "28411", "28412"],
    // ... area-specific content
  },
  // ... 7 more areas
];

// Source: lib/schema.ts (areaServed derives from areas)
areaServed: [
  { "@type": "City", name: "Wilmington" },
  { "@type": "City", name: "Hampstead" },
  { "@type": "City", name: "Leland" },
  { "@type": "City", name: "Carolina Beach" },
  { "@type": "City", name: "Wrightsville Beach" },
  { "@type": "City", name: "Southport" },
  { "@type": "City", name: "Topsail Island" },
  { "@type": "City", name: "Surf City" },
]
```

**GBP must list these exact 8 service areas.** No additional areas in GBP that aren't in schema. No areas in schema that aren't in GBP.

### Local Context Pattern (Target Implementation)
```markdown
## Residential Roofing

[Current intro: Generic service description that could be anywhere]

[Enhanced intro with local context:]

Your Wilmington-area home faces roofing challenges that inland properties don't encounter. Salt air from the Atlantic accelerates corrosion of metal components—flashing, drip edges, and fasteners deteriorate faster here than 50 miles inland. Hurricane season brings wind loads that standard shingles aren't rated to handle. And North Carolina's humid subtropical climate means proper ventilation and moisture barriers aren't optional—they're critical for preventing mold and premature failure.

Breeze Roofing specializes in coastal-rated roofing systems designed for exactly these conditions. We've rebuilt hundreds of roofs after Hurricane Florence, and we know what works (and what fails) in the Cape Fear region's demanding environment.

[Rest of service content...]
```

**Elements of good local context:**
1. Geographic-specific challenge (salt air, hurricanes, humidity)
2. Technical implication (corrosion, wind loads, ventilation)
3. Local authority signal (Hurricane Florence reference, "hundreds of roofs", "Cape Fear region")
4. Natural integration (reads like explanation, not keyword stuffing)

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| NAP anywhere on site | NAP in consistent schema locations | ~2011 (Schema.org launch) | Machines can parse business info reliably |
| Exact-match local keywords | Natural local context and semantic relevance | ~2013 (Google Hummingbird) | Stops keyword stuffing, rewards quality content |
| Quantity of citations | Quality + consistency of citations | ~2015 (trust signals matter more) | Focus on major directories, not spam directories |
| Citation building once | Ongoing citation maintenance | Ongoing | Business info changes require updates across web |
| Generic "LocalBusiness" | Specific subtypes like "RoofingContractor" | ~2018 (Schema.org expansion) | Better semantic classification |

**Deprecated/outdated:**
- **Exact-match domains:** "wilmington-roofing-contractor.com" no longer has ranking advantage
- **Citation quantity metrics:** Building 200+ citations doesn't help as much as maintaining top 15 accurately
- **Keyword density optimization:** Google ignores keyword density; focuses on topic authority
- **City-state in every H2:** Over-optimization is detected and penalized

## Open Questions

1. **What is Breeze Roofing's actual street address?**
   - What we know: company.ts has "[Address TBD]" placeholder
   - What's unclear: Physical business address (home office, commercial office, or service-area only)
   - Recommendation: Get actual address from Brett. If home office and Brett wants privacy, GBP can hide address and just show service area (acceptable for service-area businesses).

2. **What is Breeze Roofing's NC contractor license number?**
   - What we know: company.ts has "[LICENSE_NUMBER]" placeholder
   - What's unclear: Actual NC license number for display in footer and trust signals
   - Recommendation: Get license number from Brett. This is public record and required for trust signals.

3. **Does Google Business Profile listing already exist?**
   - What we know: Site references GBP but unclear if Brett has claimed/optimized listing
   - What's unclear: Whether GBP exists, what data is in it, whether it needs creation or update
   - Recommendation: Verify GBP status with Brett. If doesn't exist, create it. If exists, audit current data and prepare alignment plan.

4. **What year was Breeze Roofing founded?**
   - What we know: company.ts has "[YEAR_FOUNDED]" placeholder
   - What's unclear: Actual founding year for schema and about page
   - Recommendation: Get founding year from Brett for company.ts completion.

5. **Should citation building be manual or paid service?**
   - What we know: Manual submission to top directories is free but time-consuming; paid services (Moz Local $129/year) automate
   - What's unclear: Whether Brett prefers DIY or paid automation
   - Recommendation: Start with manual submission to top 10-15 directories (Phase 4 scope). Document process. Recommend paid service for ongoing maintenance if budget allows.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual verification checklist |
| Config file | N/A — validation via human audit and Google Rich Results Test |
| Quick run command | Manual grep + page review |
| Full suite command | Full NAP audit across all 43 pages + schema validation |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| LOCAL-01 | NAP consistent across entire site | manual | `grep -r "910" lib/ components/ app/` | ✅ NAP in company.ts, imported everywhere |
| LOCAL-02 | Schema matches GBP exactly | manual | Rich Results Test + GBP comparison checklist | ✅ Schema exists, needs GBP alignment verification |
| LOCAL-03 | Local context in service pages | manual | Read all 10 service pages for local references | ✅ Service pages exist, need content enhancement |
| LOCAL-04 | Citation strategy document exists | manual | Check for CITATIONS.md or similar doc | ❌ Wave 0 gap — needs creation |

### Sampling Rate
- **Per task commit:** Manual spot-check (verify NAP changes applied consistently)
- **Per wave merge:** Manual verification (check representative pages for NAP consistency, test schema with Rich Results Test)
- **Phase gate:** Full manual audit before `/gsd:verify-work`:
  - Grep all NAP instances across codebase (phone, email, address)
  - Verify all 43 pages import from company.ts (no hardcoded NAP)
  - Compare schema to GBP data field-by-field
  - Read all 10 service pages for local context presence
  - Verify citation strategy document exists and is complete

### Wave 0 Gaps
- [ ] `CITATIONS.md` — citation strategy document with directory list and NAP submission checklist (covers LOCAL-04)
- [ ] **Complete NAP data** — get actual street address, license number, year founded from Brett before implementation starts
- [ ] **GBP verification** — verify GBP listing exists, get current data, prepare alignment checklist

*(These are data dependencies, not code infrastructure gaps)*

## Citation Strategy Reference

### Top Citation Directories for Roofing Contractors

Based on local SEO industry standards (Whitespark, Moz, BrightLocal research), prioritize these directories:

**Tier 1: Essential (must have, high authority):**
1. Google Business Profile (most important)
2. Bing Places
3. Apple Maps
4. Facebook Business Page
5. Yelp

**Tier 2: Industry-Specific (high value for contractors):**
6. Angi (formerly Angie's List)
7. HomeAdvisor
8. Houzz
9. Better Business Bureau (BBB)
10. Porch
11. Thumbtack

**Tier 3: Local/Regional (valuable for NC market):**
12. YellowPages.com
13. Manta
14. Foursquare
15. Nextdoor Business

**Tier 4: General Business Directories (lower priority):**
- MapQuest
- Yahoo Local
- Citysearch
- Merchant Circle

**Industry-specific roofing:**
- GuildQuality (if have customer reviews)
- CertainTeed (if certified contractor)
- Owens Corning Roofing (if certified contractor)
- GAF (if Master Elite contractor)

### Citation Building Process

1. **Prepare master NAP data** (from company.ts)
2. **Claim/create listings** on Tier 1-3 directories
3. **Enter NAP exactly as appears on website** (character-for-character)
4. **Add business description** (consistent across all platforms)
5. **Upload photos** (logo, project photos, team photo)
6. **Select proper categories** (Roofing Contractor, Home Improvement, etc.)
7. **Document submission** (spreadsheet tracking: directory, date submitted, URL, status)
8. **Monitor and maintain** (update when NAP changes, respond to reviews)

### NAP Format Standards for Citations

**Name:** "Breeze Roofing"
**Address:** "123 Main Street, Wilmington, NC 28401" (once TBD is filled)
**Phone:** "(910) 665-5277"
**Website:** "https://breezeroofingnc.com"
**Email:** "Letsgo@breezeroofingnc.com"

**Categories to select:**
- Primary: Roofing Contractor
- Secondary: Home Improvement, Construction Company, Siding Contractor

**Business description (100-200 words, consistent everywhere):**
"Breeze Roofing is Wilmington's trusted roofing contractor specializing in residential and commercial roofing, storm damage repair, and IBHS Fortified Roof installation. Serving the Cape Fear region including Wilmington, Hampstead, Leland, Carolina Beach, Wrightsville Beach, and surrounding coastal NC communities. Licensed, insured, and certified for Fortified Roof construction—proven to withstand hurricane-force winds. Free estimates, 24/7 emergency service. Call (910) 665-5277."

## Sources

### Primary (HIGH confidence)
- **Google Search Central - Local Business Structured Data:** https://developers.google.com/search/docs/appearance/structured-data/local-business (LocalBusiness/RoofingContractor schema requirements, geo coordinates format, opening hours format)
- **Schema.org LocalBusiness:** https://schema.org/LocalBusiness (address structure, telephone format, areaServed options, business verification properties)
- **Schema.org RoofingContractor:** https://schema.org/RoofingContractor (specific subtype of HomeAndConstructionBusiness)
- **Google Rich Results Test:** https://search.google.com/test/rich-results (schema validation tool)
- **Codebase analysis:** lib/data/company.ts, lib/schema.ts, components/layout/Header.tsx, components/layout/Footer.tsx (current NAP implementation patterns)

### Secondary (MEDIUM confidence)
- **Whitespark Local Citation Best Practices:** Industry standard for citation building (referenced via WebFetch attempt, specifics not retrieved but methodology is industry-standard)
- **Moz Local SEO Guide:** NAP consistency and citation importance (referenced via WebFetch attempt)
- **Google Business Profile Guidelines:** Business information consistency requirements (attempted WebFetch but page content not retrieved; guidance is well-established industry knowledge)

### Tertiary (LOW confidence)
- **Citation directory prioritization:** Based on industry consensus from multiple sources (Whitespark, Moz, BrightLocal) rather than single authoritative source. Rankings may vary by industry and location. Recommendation: validate top directories against competitor research for roofing contractors in NC.

## Metadata

**Confidence breakdown:**
- NAP consistency patterns: HIGH - Clear SSOT pattern already implemented, just needs data completion
- Schema-GBP alignment: HIGH - Schema structure correct, process is straightforward verification
- Local content strategy: MEDIUM - Patterns are established, but optimal implementation varies by service type
- Citation strategy: MEDIUM - General directory hierarchy is industry-standard, but roofing-specific priorities may need validation

**Research date:** 2026-04-03
**Valid until:** 90 days (July 2026) — Local SEO best practices are stable, but directory landscape changes (acquisitions, shutdowns) require periodic revalidation
