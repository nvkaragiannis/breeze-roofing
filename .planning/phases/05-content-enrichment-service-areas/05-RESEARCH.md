# Phase 5: Content Enrichment — Service Areas - Research

**Researched:** 2026-04-04
**Domain:** Local SEO content strategy, location-specific copywriting, thin content avoidance
**Confidence:** MEDIUM-HIGH

## Summary

Phase 5 transforms 8 existing area pages from basic templates (current: ~150 words each) into rich, locally-optimized landing pages (target: 500+ words each) that rank for "[service] in [city]" searches while avoiding Google's thin content and doorway page penalties.

**Current state:** Area pages exist with basic structure in `lib/data/areas.ts` and template at `app/areas/[city]/page.tsx`. Each area has `intro` (1 paragraph) and `challenges` (1 paragraph) fields totaling ~150 words. The template displays these fields plus neighborhoods, zip codes, and service links.

**Gap:** Content is too thin to rank competitively. Google's official spam policies warn against location pages that "funnel users to one page" or contain "substantially similar pages" without unique value. Current area pages are at risk of thin content penalties.

**Primary recommendation:** Expand `ServiceArea` interface with new content fields, write unique 500+ word content per area emphasizing local specifics (landmarks, building characteristics, coastal conditions), and optionally add area-specific testimonials and internal blog links.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| TypeScript | 5.x | Type-safe data interfaces | Already used for `ServiceArea` interface - extend existing pattern |
| Next.js 16 | 16.2.1 | Static page generation | `generateStaticParams` already generates 8 area pages at build time |
| MDX | via next-mdx-remote 6.0.0 | Optional rich content format | Already used for blog posts - could be adapted for area long-form content |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| gray-matter | 4.0.3 | Frontmatter parsing | If area content moves to MDX files (alternative to expanding data objects) |
| Vitest | 4.1.2 | Content validation tests | Test word counts, uniqueness, required fields per AREA requirements |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Inline data objects | MDX files per area | MDX adds editing flexibility but increases file count (8 new files); data objects keep content colocated with metadata |
| Manual content writing | AI content generation | Manual ensures genuine local knowledge; AI risks generic/detectable patterns |
| All content in data file | Hybrid (data + separate content files) | Single file keeps metadata/content together; splitting improves maintainability for long content |

**Installation:**
No new packages required - work within existing stack.

## Architecture Patterns

### Recommended Project Structure
```
lib/data/
├── areas.ts              # Expand ServiceArea interface
├── area-content.ts       # Optional: separate long-form content
└── reviews.ts            # Extend for area-specific testimonials

app/areas/[city]/
└── page.tsx              # Enhance template with new content sections

tests/
└── area-content.test.ts  # NEW: Validate AREA-01 through AREA-05
```

### Pattern 1: Data Model Extension (Recommended)
**What:** Expand `ServiceArea` interface with new optional fields for enriched content

**When to use:** When content is structured data (paragraphs with clear purposes) rather than free-form prose

**Example:**
```typescript
export interface ServiceArea {
  // ... existing fields (slug, city, metaTitle, intro, challenges)
  
  // NEW fields for Phase 5
  localContext?: {
    landmarks: string[];          // Famous local landmarks
    buildingTypes: string;        // Architectural/building characteristics paragraph
    weatherPatterns: string;      // Specific weather/coastal conditions paragraph
    communityCharacter: string;   // What makes this area unique paragraph
  };
  
  buildingCodes?: {
    windZone: string;             // e.g., "130+ mph design wind speed"
    specificRequirements: string; // Local code considerations paragraph
    hurricanePrep: string;        // Hurricane-specific guidance paragraph
  };
  
  testimonials?: string[];        // Review names/quotes specific to this area
  relatedBlogSlugs?: string[];   // Blog posts particularly relevant to this area
  relatedServiceSlugs?: string[]; // Services especially important here (e.g., hurricane damage for Wrightsville)
}
```

**Why this pattern:**
- Maintains type safety across codebase
- Keeps all area metadata/content in one place
- Easy to validate with Vitest tests
- Clear semantic structure for each content type

### Pattern 2: Content Sections in Template
**What:** Area page template renders new content sections with semantic HTML

**When to use:** Always - proper structure improves SEO and accessibility

**Example:**
```typescript
// app/areas/[city]/page.tsx additions
<article>
  {/* Existing intro/challenges */}
  
  {/* NEW: Local Context Section */}
  {area.localContext && (
    <section className="mb-10">
      <h2>Why {area.city} Roofing Is Different</h2>
      {area.localContext.landmarks.length > 0 && (
        <p>Landmarks: {area.localContext.landmarks.join(', ')}</p>
      )}
      <p>{area.localContext.buildingTypes}</p>
      <p>{area.localContext.weatherPatterns}</p>
      <p>{area.localContext.communityCharacter}</p>
    </section>
  )}
  
  {/* NEW: Building Code Section */}
  {area.buildingCodes && (
    <section className="mb-10">
      <h2>Building Standards in {area.city}</h2>
      <p>{area.buildingCodes.specificRequirements}</p>
      <p>{area.buildingCodes.hurricanePrep}</p>
    </section>
  )}
  
  {/* NEW: Area Testimonials */}
  {area.testimonials && area.testimonials.length > 0 && (
    <section className="mb-10">
      <h2>What {area.city} Homeowners Say</h2>
      {/* Render testimonial cards */}
    </section>
  )}
  
  {/* NEW: Related Content Links (AREA-05) */}
  {area.relatedBlogSlugs && (
    <section className="mb-10">
      <h2>Resources for {area.city} Homeowners</h2>
      {/* Link to blog posts */}
    </section>
  )}
</article>
```

### Pattern 3: Content Uniqueness Strategy
**What:** Write genuinely distinct content for each area by focusing on objective differences

**When to use:** Every area page - thin content penalties come from template-swapping city names

**Uniqueness vectors per area:**
1. **Geographic position:** Barrier island vs mainland, riverfront vs inland, proximity to ocean
2. **Building stock:** Historic homes vs new construction, vacation rentals vs primary residences, architectural styles
3. **Community character:** Established neighborhoods vs rapid growth, luxury market vs working-class, HOA prevalence
4. **Weather exposure:** Direct ocean exposure vs sound-side, barrier island vs 10 miles inland, flood zone differences
5. **Historical context:** Major storms that hit this specific area, development timeline, notable projects

**Example contrast (Wrightsville Beach vs Hampstead):**

**Wrightsville Beach:**
- Barrier island, direct Atlantic exposure
- Premium/luxury market with strict HOA requirements
- Historic oceanfront homes + modern construction
- 140+ mph wind zone, maximum salt air exposure
- Hurricane Florence made direct landfall here (2018)

**Hampstead:**
- Mainland, Topsail Sound proximity (not direct ocean)
- Rapid growth area with new construction dominance
- Builder-grade materials common in newer developments
- 130 mph wind zone, moderate salt air
- New homeowners often unfamiliar with coastal roofing needs

These objective differences drive genuinely unique content without keyword stuffing.

### Anti-Patterns to Avoid

- **Template + City Name Swap:** "Wilmington faces coastal challenges" → "Leland faces coastal challenges" with no actual differences. Google detects this as doorway spam.

- **Keyword Stuffing:** Repeating "[city] roofing" 20 times per page. Modern Google NLP understands semantic relevance without exact-match repetition.

- **Generic Coastal Claims:** "This area faces hurricanes and salt air" applies to ALL 8 areas. Not differentiation.

- **Forcing Word Count:** Adding fluff paragraphs to hit 500 words. Google values density of useful information, not raw word count.

- **Copied Testimonials:** Same reviews on every area page. Testimonials should be area-specific or omitted.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Content uniqueness validation | Manual comparison of area pages | Vitest tests with string similarity checks | Automated tests prevent accidental duplication across 8 pages; can measure % overlap |
| Word count enforcement | Manual counting | Vitest tests with `content.split(/\s+/).length` | Ensures AREA-01 (500+ word) requirement stays met as content evolves |
| Local landmark research | Making up references | Manual research + Wilmington tourism sites | Fake or wrong landmarks destroy credibility with locals; better to verify |
| Wind zone requirements | Guessing building codes | Reference NC Residential Code maps (if accessible) or general "coastal zone" language | Wrong code claims expose legal liability; safe to use general language |

**Key insight:** Testing content requirements (word count, uniqueness, required fields) is straightforward with Vitest. Custom content similarity algorithms are overkill - simple character overlap percentage suffices.

## Common Pitfalls

### Pitfall 1: Thin Content Disguised as Unique
**What goes wrong:** Page hits 500 words but most content is filler, repetitive, or slightly reworded from other pages

**Why it happens:** Pressure to meet word count without genuine local knowledge to differentiate areas

**How to avoid:**
- Use the uniqueness vectors (geographic position, building stock, community character, weather exposure, history)
- Interview Brett for specific projects/challenges per area
- Reference objective data: Hurricane Florence track, development dates, barrier island vs mainland
- Better to have 400 genuinely unique words than 500 words with 200 words of duplicate filler

**Warning signs:**
- Multiple area pages contain nearly identical paragraphs with city names swapped
- Content describes "coastal challenges" without explaining what's unique about THIS coastal location vs others
- Generic statements like "quality roofing matters here" that apply everywhere

### Pitfall 2: Doorway Page Pattern
**What goes wrong:** Google penalizes pages as "doorways" designed to funnel traffic to main service pages

**Why it happens:** Area pages become thin wrappers around "Our Services" sections with minimal unique value

**How to avoid:**
- Provide substantial local context BEFORE linking to services
- Internal links should be contextual ("hurricane damage repair is critical in Wrightsville Beach's direct-ocean exposure") not generic ("We offer hurricane damage repair, click here")
- Area pages should answer "Why does location matter for roofing?" not just "We serve this location"

**Warning signs:**
- Page content is mostly a list of services with minimal local explanation
- First paragraph immediately funnels to estimate form
- No discussion of what makes this area's roofing needs different

### Pitfall 3: Unfulfillable Local Specificity
**What goes wrong:** Content makes overly specific claims about building codes, landmarks, or requirements that can't be verified or are wrong

**Why it happens:** Desire for specificity leads to guessing or extrapolating general knowledge

**How to avoid:**
- Specific claims need sources (NC Residential Code, IBHS Fortified standards, recent hurricane data from NOAA)
- When uncertain, use general language: "Barrier island locations like Topsail face enhanced wind requirements" vs "Topsail requires 156 mph wind rating" (if you don't know the exact number)
- Landmarks should be verifiable (Wrightsville Beach Boardwalk) not assumed (don't invent neighborhood names)

**Warning signs:**
- Numeric building code requirements without source
- Neighborhood names Brett doesn't recognize
- Claims about "most common" issues without data

### Pitfall 4: Testimonial Misattribution
**What goes wrong:** Same generic reviews appear on every area page, or reviews are attributed to areas where the project didn't happen

**Why it happens:** Limited review pool, desire to populate every page with social proof

**How to avoid:**
- Only use area-specific testimonials where you know the location
- Better to omit testimonial section than fake it
- Generic reviews go on service pages and homepage, not area pages
- Can reference "See our Google reviews" with link rather than displaying generic reviews

**Warning signs:**
- Exact same review text on multiple area pages
- Reviews mention specific areas displayed on different area pages
- "John from [City]" testimonials on every page with city name swapped

### Pitfall 5: Internal Linking Overkill (AREA-05)
**What goes wrong:** Every paragraph has 3-4 links to service pages and blog posts, creating spammy appearance

**Why it happens:** Misunderstanding of internal linking best practices - more links ≠ better SEO

**How to avoid:**
- 3-5 contextual internal links per area page is sufficient
- Link when the connection adds value: "After Hurricane Florence damaged hundreds of Wrightsville Beach roofs, we saw firsthand why [impact-resistant shingles](/services/roof-replacement) matter"
- Don't link the same anchor text multiple times per page
- Related blog posts go in dedicated "Resources for [City]" section, not scattered throughout

**Warning signs:**
- More than 10 internal links on a 500-word page
- Same service linked 3+ times
- Links interrupt reading flow rather than enhance it

## Code Examples

Verified patterns from existing codebase:

### Current ServiceArea Interface
```typescript
// lib/data/areas.ts (current)
export interface ServiceArea {
  slug: string;
  city: string;
  state: string;
  zipCodes: string[];
  metaTitle: string;
  metaDescription: string;
  intro: string;
  challenges: string;
  neighborhoods?: string[];
}
```

### Enhanced Interface for Phase 5
```typescript
// lib/data/areas.ts (Phase 5 expansion)
export interface ServiceArea {
  // Existing fields remain unchanged
  slug: string;
  city: string;
  state: string;
  zipCodes: string[];
  metaTitle: string;
  metaDescription: string;
  intro: string;
  challenges: string;
  neighborhoods?: string[];
  
  // NEW: Rich local context (AREA-02)
  localContext?: {
    landmarks: string[];          // Famous local landmarks
    geographicPosition: string;   // Barrier island vs mainland, riverfront, etc.
    buildingCharacteristics: string; // Typical building stock paragraph
    communityProfile: string;     // What makes this area unique paragraph
  };
  
  // NEW: Coastal/building specifics (AREA-04)
  coastalFactors?: {
    windZone: string;             // e.g., "130+ mph design wind speed"
    saltAirExposure: "high" | "moderate" | "low";
    hurricaneHistory: string;     // Notable storms affecting this area
    buildingConsiderations: string; // Code and prep guidance paragraph
  };
  
  // NEW: Social proof and linking (AREA-03, AREA-05)
  testimonialNames?: string[];   // Names from reviews.ts who are from this area
  featuredProjectDescription?: string; // Optional before/after from this area
  relatedBlogSlugs?: string[];   // 2-3 most relevant blog posts
  priorityServices?: string[];   // Service slugs especially relevant (e.g., ["storm-damage", "hurricane-prep"])
}
```

### Word Count Validation Test
```typescript
// tests/area-content.test.ts (NEW for Phase 5)
import { describe, it, expect } from 'vitest';
import { areas } from '@/lib/data/areas';

describe('Area Content Requirements', () => {
  // AREA-01: Each area page has 500+ words of unique content
  it('should have at least 500 words of content per area', () => {
    areas.forEach((area) => {
      // Concatenate all text content fields
      const content = [
        area.intro,
        area.challenges,
        area.localContext?.geographicPosition || '',
        area.localContext?.buildingCharacteristics || '',
        area.localContext?.communityProfile || '',
        area.coastalFactors?.hurricaneHistory || '',
        area.coastalFactors?.buildingConsiderations || '',
      ].join(' ');
      
      const wordCount = content.trim().split(/\s+/).length;
      
      expect(wordCount, `${area.city} has only ${wordCount} words (need 500+)`).toBeGreaterThanOrEqual(500);
    });
  });
  
  // AREA-02: Area pages reference local landmarks and characteristics
  it('should include local landmarks or specific building characteristics', () => {
    areas.forEach((area) => {
      const hasLandmarks = area.localContext?.landmarks && area.localContext.landmarks.length > 0;
      const hasBuilding = area.localContext?.buildingCharacteristics && area.localContext.buildingCharacteristics.length > 50;
      
      expect(
        hasLandmarks || hasBuilding,
        `${area.city} lacks local landmarks or building characteristics`
      ).toBe(true);
    });
  });
  
  // AREA-04: Coastal-specific references present
  it('should include coastal or building code references', () => {
    areas.forEach((area) => {
      const hasCoastalFactors = area.coastalFactors !== undefined;
      
      expect(hasCoastalFactors, `${area.city} lacks coastal/building code references`).toBe(true);
    });
  });
  
  // AREA-05: Internal links to services and blog
  it('should have related content links', () => {
    areas.forEach((area) => {
      const hasLinks = (
        (area.relatedBlogSlugs && area.relatedBlogSlugs.length > 0) ||
        (area.priorityServices && area.priorityServices.length > 0)
      );
      
      expect(hasLinks, `${area.city} has no internal content links`).toBe(true);
    });
  });
});
```

### Enhanced Area Page Template
```typescript
// app/areas/[city]/page.tsx (additions for Phase 5)

{/* NEW: Geographic & Community Context (AREA-02) */}
{area.localContext && (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      Why {area.city} Roofing Requires Specialized Knowledge
    </h2>
    
    {area.localContext.landmarks.length > 0 && (
      <p className="text-gray-600 leading-relaxed mb-4">
        <strong>Landmarks and location:</strong> {area.localContext.landmarks.join(' • ')}
      </p>
    )}
    
    <p className="text-gray-600 leading-relaxed mb-4">
      {area.localContext.geographicPosition}
    </p>
    
    <p className="text-gray-600 leading-relaxed mb-4">
      {area.localContext.buildingCharacteristics}
    </p>
    
    <p className="text-gray-600 leading-relaxed">
      {area.localContext.communityProfile}
    </p>
  </section>
)}

{/* NEW: Coastal/Building Factors (AREA-04) */}
{area.coastalFactors && (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      Coastal Conditions & Building Standards
    </h2>
    
    <div className="bg-sky/10 border-l-4 border-sky p-4 mb-4">
      <p className="text-sm text-gray-700">
        <strong>Wind Zone:</strong> {area.coastalFactors.windZone}
        <br />
        <strong>Salt Air Exposure:</strong> {area.coastalFactors.saltAirExposure.charAt(0).toUpperCase() + area.coastalFactors.saltAirExposure.slice(1)}
      </p>
    </div>
    
    <p className="text-gray-600 leading-relaxed mb-4">
      {area.coastalFactors.hurricaneHistory}
    </p>
    
    <p className="text-gray-600 leading-relaxed">
      {area.coastalFactors.buildingConsiderations}
    </p>
  </section>
)}

{/* NEW: Related Blog Content (AREA-05) */}
{area.relatedBlogSlugs && area.relatedBlogSlugs.length > 0 && (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      Helpful Resources for {area.city} Homeowners
    </h2>
    <div className="grid gap-3">
      {area.relatedBlogSlugs.map((slug) => {
        // Fetch blog post by slug and render link card
        // Implementation depends on blog data structure
      })}
    </div>
  </section>
)}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| City name doorway pages | Substantive local context | Google Panda update (2011) + ongoing | Thin location pages now actively penalized; must provide genuine value |
| 200-300 word minimum | 500+ words for competitive ranking | ~2018-2020 as SERP competition increased | Local service pages need depth to compete; 200 words insufficient |
| Keyword density targeting | Natural language + semantic relevance | Google BERT (2019) + MUM (2021) | NLP understands context; forcing exact keywords hurts more than helps |
| Generic reviews everywhere | Location-specific social proof | Local SEO evolution (~2020+) | Google favors geo-specific signals; generic reviews add no local authority |

**Deprecated/outdated:**
- **Exact-match keyword stuffing:** Modern Google NLP (BERT, MUM) understands semantic meaning. "Wilmington roofing" repeated 15 times is spam, not SEO.
- **Minimal differentiation:** Pre-2015, cities-with-swapped-names worked for local SEO. Post-Panda, Google penalizes substantially similar location pages.
- **Word count only:** 500 words of fluff ranks worse than 400 words of unique, valuable content. Density matters more than raw count.

## Open Questions

1. **Should area pages include pricing ranges specific to that area?**
   - What we know: Wilmington pricing data exists in blog post ("$8,000-$20,000 typical residential replacement")
   - What's unclear: Whether pricing genuinely varies by area (Wrightsville Beach luxury vs Leland builder-grade) or is consistent
   - Recommendation: Keep pricing on main service pages unless Brett confirms material pricing differences by area. Mentioning "barrier island access adds complexity" in Topsail content is safe without specific numbers.

2. **How to handle area-specific testimonials when review pool is limited?**
   - What we know: `reviews.ts` has 4 testimonials, no location attribution currently
   - What's unclear: Whether Brett knows locations for these reviews, and if more reviews can be gathered
   - Recommendation: Add optional `location?: string` field to Review interface. Only display testimonials with confirmed locations on area pages. Omit testimonial section rather than fake attribution.

3. **Should MDX replace data objects for very long area content?**
   - What we know: Blog uses MDX successfully; area pages could follow same pattern
   - What's unclear: Whether 500-800 word area content is complex enough to justify MDX overhead
   - Recommendation: Stay with expanded data objects for Phase 5. Content structure is clear (intro, challenges, local context, building factors). MDX adds complexity without clear benefit unless content exceeds 1000 words or needs rich media embedding.

4. **Do barrier island areas need separate building code callouts?**
   - What we know: Topsail Island and Surf City are barrier islands; Wrightsville Beach is barrier island
   - What's unclear: Whether NC building codes explicitly differentiate barrier islands vs 1-mile-inland locations for residential roofing
   - Recommendation: Use general language about "barrier island exposure requiring enhanced wind ratings" without claiming specific code differences unless verifiable. Hurricane exposure is objectively higher on barrier islands regardless of code specifics.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Vitest 4.1.2 |
| Config file | `vitest.config.ts` (exists) |
| Quick run command | `npm test tests/area-content.test.ts` |
| Full suite command | `npm test` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| AREA-01 | Each area has 500+ words unique content | unit | `npm test tests/area-content.test.ts -t "500 words" -x` | ❌ Wave 0 |
| AREA-02 | Local landmarks/neighborhoods referenced | unit | `npm test tests/area-content.test.ts -t "local landmarks" -x` | ❌ Wave 0 |
| AREA-03 | Area-specific testimonials where available | unit | `npm test tests/area-content.test.ts -t "testimonials" -x` | ❌ Wave 0 |
| AREA-04 | Coastal/building code references per area | unit | `npm test tests/area-content.test.ts -t "coastal" -x` | ❌ Wave 0 |
| AREA-05 | Internal links to services and blog posts | unit | `npm test tests/area-content.test.ts -t "internal links" -x` | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `npm test tests/area-content.test.ts` (quick - validates data structure and requirements)
- **Per wave merge:** `npm test` (full suite including design tokens)
- **Phase gate:** All tests green + manual review of 2 sample area pages for content quality before `/gsd:verify-work`

### Wave 0 Gaps
- [ ] `tests/area-content.test.ts` — covers AREA-01 through AREA-05 with word count, uniqueness, required field validation
- [ ] Framework already installed (Vitest 4.1.2) — no setup needed

## Sources

### Primary (HIGH confidence)
- Current codebase: `lib/data/areas.ts`, `app/areas/[city]/page.tsx`, `content/blog/best-roofing-materials-coastal-north-carolina.mdx` - reviewed for existing patterns and content depth model
- Existing test infrastructure: `vitest.config.ts`, `tests/design-tokens.test.ts` - reviewed for test pattern

### Secondary (MEDIUM confidence)
- Google spam policies on doorway pages and thin content (https://developers.google.com/search/docs/essentials/spam-policies) - verified official guidance on location page requirements
- NOAA hurricane data for NC (https://www.ncei.noaa.gov/access/billions/state-summary/NC) - verified recent storm history (Florence 2018, Isaias 2020, Helene 2024) for local context
- Yoast thin content definition - verified 300-500 word baseline, emphasis on unique value over pure word count

### Tertiary (LOW confidence - needs verification)
- NC building code wind zone requirements - multiple sources attempted, none successful. RECOMMENDATION: Use general "130+ mph coastal zone" language rather than cite unverified specific codes.
- IBHS Fortified standards by location type - website CSS only retrieved. RECOMMENDATION: Reference Fortified in general terms (already established on site) without claiming location-specific variations.
- Area-specific pricing variations - not researched. RECOMMENDATION: Keep pricing on main service pages unless Brett confirms area differences.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - No new dependencies, work within existing Next.js/TypeScript/Vitest infrastructure
- Architecture patterns: HIGH - Data model extension follows existing `services.ts` pattern; test patterns match `design-tokens.test.ts`
- Content strategy: MEDIUM - Google guidance verified, but specific coastal NC building details partially unverifiable through web research (relies on Brett's local knowledge)
- Pitfalls: MEDIUM-HIGH - Google spam policy warnings verified; thin content risks well-documented; local specificity challenges based on web research limitations

**Research date:** 2026-04-04
**Valid until:** 2026-05-04 (30 days - local SEO principles stable, but Google algorithm updates possible)

**Notes on research limitations:**
- Web research for NC-specific building codes and wind zones unsuccessful (404 errors, paywalls)
- IBHS Fortified NC-specific guidance not retrievable (CSS-only pages)
- Brave Search API unavailable (BRAVE_API_KEY not set) - used WebFetch instead
- RECOMMENDATION: Plans should rely on Brett's local knowledge for specific building code/wind zone claims, or use general "coastal zone" language
