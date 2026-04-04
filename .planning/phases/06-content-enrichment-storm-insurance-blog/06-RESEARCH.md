# Phase 6: Content Enrichment — Storm/Insurance Blog - Research

**Researched:** 2026-04-04
**Domain:** SEO blog content strategy, MDX content management, commercial intent keywords
**Confidence:** HIGH

## Summary

Phase 6 enriches the existing 7-post blog with targeted commercial intent content addressing storm damage, insurance claims, and Fortified certification. The site already has solid technical infrastructure (MDX with gray-matter, Article schema, related services linking) and high-quality example posts. Research reveals:

1. **Gap analysis**: Existing posts partially cover 4 of 6 requirements; gaps exist in seasonal maintenance, roof material comparisons, and additional insurance claim content
2. **Content structure**: Posts should follow E-E-A-T principles (Experience, Expertise, Authoritativeness, Trustworthiness) with 1,500-3,000 words for commercial intent keywords
3. **Topic cluster model**: Service pages act as pillar content; blog posts are cluster content linking back to relevant services and estimate form
4. **MDX frontmatter**: Existing schema works well (title, description, date, author, category, tags, schema)
5. **Internal linking**: Current architecture links blog posts → related services; needs expansion to create bidirectional topic clusters

**Primary recommendation:** Write 6-8 new posts filling requirement gaps while maintaining the high editorial quality of existing posts (local examples, Brett's voice, actionable advice, natural CTAs).

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| gray-matter | ^4.0.3 | MDX frontmatter parsing | De facto standard for static blog parsing in Next.js |
| Next.js 16 | 16.x | MDX rendering via dynamic routes | Built-in MDX support, no additional plugin needed for gray-matter workflow |
| @next/og | included | OG image generation | Built into Next.js for dynamic social sharing images |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| reading-time | ^1.5.0 | Estimate reading time | Optional - current implementation calculates manually (word count / 200 WPM) |
| rehype-slug | ^6.0.0 | Auto-generate heading IDs | If implementing table of contents |
| rehype-autolink-headings | ^7.1.0 | Auto-link headings | If implementing anchor links in long posts |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Manual MDX parsing | Contentlayer | More features but adds build complexity; overkill for 15-20 posts |
| gray-matter | MDX bundler | More powerful but requires rework of existing blog.ts utilities |
| Manual word count | reading-time npm | Slightly more accurate but current implementation works fine |

**Installation:**
```bash
# Current stack already installed - no additions needed
npm list gray-matter next
```

## Architecture Patterns

### Recommended Project Structure
```
content/blog/
├── {slug}.mdx                           # Individual blog posts
├── requirements-coverage.md             # (Optional) Document requirement → post mapping

lib/
├── blog.ts                              # Existing: getAllPosts, getPostBySlug, getRecentPosts
├── schema.ts                            # Existing: getArticleSchema (already has publisher, author, image)

app/blog/
├── page.tsx                             # Existing: Blog listing with BlogCard grid
├── [slug]/page.tsx                      # Existing: Dynamic post page with related services
```

### Pattern 1: MDX Frontmatter Schema
**What:** YAML frontmatter at top of each .mdx file with required metadata
**When to use:** Every blog post
**Example:**
```yaml
---
title: "Primary Keyword Phrase - Location Modifier"
description: "Meta description answering user query in 150-160 characters"
date: "2025-04-05"
author: "Brett, Breeze Roofing"
category: "Storm Damage"
tags: ["storm damage roof", "hurricane NC", "insurance claim", "Wilmington roofing"]
schema: "Article"
---
```

**Validation rules:**
- `title`: 50-70 characters, includes primary keyword
- `description`: 150-160 characters, answers user query
- `date`: ISO 8601 format (YYYY-MM-DD)
- `author`: "Brett, Breeze Roofing" for consistency with existing posts
- `category`: One of: "Storm Damage", "Insurance Claims", "FORTIFIED Roofing", "Maintenance", "Materials", "Coastal Roofing"
- `tags`: 4-8 relevant keywords for content filtering and related post logic
- `schema`: Always "Article" (triggers Article schema in page.tsx)

### Pattern 2: Commercial Intent Content Structure
**What:** Blog posts targeting high-intent commercial keywords with conversion focus
**When to use:** For keywords indicating near-purchase intent (vs purely informational)
**Example structure:**
```markdown
# Primary Keyword Phrase as H1

**Hook paragraph:** Answer the user's question in 1-2 sentences immediately.

[2-3 paragraph introduction establishing E-E-A-T: Brett's experience, local context, why this matters in Wilmington/coastal NC]

## What [Topic] Means [Subsection 1]
[200-400 words explaining core concept]

## Why [Topic] Matters in Coastal NC [Subsection 2]
[200-400 words with local context - hurricane exposure, salt air, building codes]

## How to [Action Related to Topic] [Subsection 3]
[Step-by-step actionable guidance, 300-600 words]

## Common Mistakes / Pitfalls [Subsection 4]
[What homeowners get wrong, 200-300 words]

## When to Call a Professional [Subsection 5]
[Clear decision criteria, 150-250 words]

## Natural CTA Section
[Get estimate or call Brett - low pressure, helpful framing]

## Internal Links Section
[Related services with context, related blog posts]

---
*Footer with local authority statement and IBHS/industry link if relevant*
```

**Key principles:**
- Answer user query in first paragraph (matches Google's emphasis on helpful content)
- Use Brett's voice (first person plural "we", conversational, practical)
- Include local examples (Hurricane Florence/Dorian, Wilmington neighborhoods, Cape Fear coast)
- Natural internal links (contextual, not forced)
- Target 1,500-3,000 words for commercial keywords (longer than informational content)

### Pattern 3: Topic Cluster Internal Linking
**What:** Bidirectional linking between pillar content (service pages) and cluster content (blog posts)
**When to use:** Every blog post should link to 1-3 relevant service pages; service pages should link to relevant blog posts
**Example:**
```typescript
// Existing pattern in app/blog/[slug]/page.tsx (lines 16-59)
function getRelatedServices(tags?: string[]) {
  // Matches service keywords with post tags
  // Returns 3 most relevant services
  // Displays as cards at bottom of post
}
```

**Enhancement needed:**
- Service pages need "Related Blog Posts" section (currently missing)
- Blog listing page could group by category for easier discovery
- Homepage BlogPreview could feature posts by category rotation

### Pattern 4: E-E-A-T Signal Embedding
**What:** Demonstrate Experience, Expertise, Authoritativeness, Trustworthiness in content
**When to use:** Every blog post, especially for YMYL (Your Money Your Life) topics like insurance claims
**Example signals:**
- **Experience:** "After Hurricane Florence in 2018, we worked with..." (real events Brett experienced)
- **Expertise:** Technical explanations with coastal-specific knowledge (sealed roof decks, wind zones, salt air corrosion)
- **Authoritativeness:** References to IBHS research, NC building codes, NC Department of Insurance
- **Trustworthiness:** Honest guidance ("We'll tell you if repair is sufficient"), transparent pricing, local commitment

**Implementation:**
```markdown
<!-- Experience signal -->
We've guided hundreds of Wilmington homeowners through the insurance claim process after hurricanes Florence, Dorian, and Isaias.

<!-- Expertise signal -->
Roof repairs in Wilmington require a different approach than repairs inland. Salt air corrodes metal flashing faster, meaning what looks like a simple flashing repair often reveals rust-through that requires complete replacement.

<!-- Authoritativeness signal -->
According to IBHS testing, FORTIFIED roofs perform dramatically better than code-minimum construction. After Hurricane Michael hit the Florida Panhandle as a Category 5 in 2018, FORTIFIED homes in the impact zone had significantly less damage.

<!-- Trustworthiness signal -->
If a repair will solve the problem, that's what we'll recommend. We never push a replacement when a repair will work.
```

### Anti-Patterns to Avoid
- **Keyword stuffing:** Don't force "Wilmington NC roofing" into every paragraph - use natural variations
- **Thin content:** Avoid <1,000 word posts on commercial keywords (Google penalizes thin commercial content)
- **Generic stock advice:** No "5 tips for roof maintenance" without coastal NC specificity
- **Pushy CTAs:** Don't end every section with "Call now!" - use 1-2 natural CTAs per post
- **Fabricated examples:** Don't invent customer stories - use real Hurricane Florence/Dorian context or general "homeowners ask us..."

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| MDX parsing | Custom markdown parser | gray-matter + Next.js dynamic routes | Already implemented and working; edge cases like code blocks and nested lists are solved |
| Reading time calculation | Complex NLP word analysis | Simple word count / 200 WPM | Current implementation (lib/blog.ts line 40) is accurate enough; diminishing returns from complexity |
| Blog post search | Client-side filtering | Defer to Phase 2 or use tags/categories | 15-20 posts don't need search; category filtering is sufficient |
| Content calendar | Custom CMS | Markdown files + git | Static site with infrequent updates (monthly posts) doesn't justify CMS overhead |
| Keyword research tool | Custom scraper | Manual research + Google Search Console data | Small content volume doesn't justify automation; manual keyword research is more targeted |

**Key insight:** The existing blog infrastructure (gray-matter + dynamic routes + Article schema) is production-ready for 15-20 posts. Don't over-engineer.

## Common Pitfalls

### Pitfall 1: Ignoring Existing Content Coverage
**What goes wrong:** Writing duplicate content that cannibalizes existing posts
**Why it happens:** Not auditing existing 7 posts before planning new content
**How to avoid:** Map requirements to existing posts first, identify gaps, then write only to fill gaps
**Warning signs:** Multiple posts targeting same primary keyword (e.g., two "how to file insurance claim" posts)

**Current coverage analysis:**
- BLOG-01 (Storm/hurricane damage): ✅ COVERED by `signs-your-roof-has-storm-damage-wilmington.mdx`
- BLOG-02 (Insurance claims NC-specific): ✅ COVERED by `how-to-file-roof-insurance-claim-hurricane-nc.mdx`
- BLOG-03 (Educational content): ⚠️ PARTIAL - has cost and lifespan posts; needs maintenance guide and material comparison
- BLOG-04 (Fortified certification): ✅ COVERED by 2 posts (`what-is-ibhs-fortified-roof-nc-insurance-savings.mdx`, `fortified-roof-vs-regular-roof-comparison.mdx`)
- BLOG-05 (Seasonal/coastal maintenance): ❌ GAP - no dedicated hurricane prep or salt air maintenance guide
- BLOG-06 (Internal linking): ✅ WORKING - posts link to services and estimate form

**Gaps to fill:**
1. Hurricane preparation checklist (seasonal - BLOG-05)
2. Salt air roof maintenance guide (coastal-specific - BLOG-05)
3. Roofing materials comparison (educational - BLOG-03)
4. Roof maintenance schedule guide (educational - BLOG-03)
5. (Optional) Wind zone/building code explainer (educational, differentiator)
6. (Optional) When to repair vs replace decision guide (commercial intent)

### Pitfall 2: Writing for Search Engines Instead of Humans
**What goes wrong:** Content reads like keyword-stuffed SEO bait, bounces users, ultimately ranks poorly
**Why it happens:** Focusing on keyword density instead of answering user questions helpfully
**How to avoid:** Write first draft without looking at keyword list; edit second draft to naturally include primary keyword in H1, meta description, first paragraph, and 2-3 subheadings
**Warning signs:** Awkward phrasing like "When you need Wilmington NC roofing contractor services in Wilmington NC, our Wilmington NC roofing company..."

**Example of good vs bad:**

❌ **Bad (keyword stuffing):**
> Wilmington NC roofing contractors know that Wilmington NC homeowners need Wilmington NC roofing services. When looking for Wilmington NC roofing companies, Breeze Roofing is the top Wilmington NC roofer.

✅ **Good (natural, helpful):**
> Wilmington homeowners face unique roofing challenges. Salt air corrodes metal flashing, hurricane-force winds test every connection point, and humidity traps moisture under shingles. Here's what to look for when choosing a local roofer who understands coastal conditions.

### Pitfall 3: Neglecting Internal Link Bidirectionality
**What goes wrong:** Blog posts link to service pages, but service pages don't link back to blog posts - missed topic cluster SEO benefit
**Why it happens:** Blog posts are written after service pages are "done" - no retrofit of service pages with blog links
**How to avoid:** When creating new blog post, immediately add link from relevant service page(s) to new post
**Warning signs:** Service pages have no "Related Resources" or "Learn More" section pointing to blog content

**Current state:**
- ✅ Blog posts link to services (via `getRelatedServices()` function)
- ❌ Service pages do NOT link to blog posts (checked services.ts - no blog references)

**Fix needed:** Extend Service interface with optional `relatedBlogSlugs?: string[]` field, add "Related Resources" section to service page template

### Pitfall 4: Publishing Without Optimal Metadata
**What goes wrong:** Post published with suboptimal title/description, missed ranking opportunity
**Why it happens:** Rushing frontmatter, not checking character counts, using first draft title
**How to avoid:** Validate every post's frontmatter before merge:
  - Title: 50-70 characters, includes primary keyword, compelling for clicks
  - Description: 150-160 characters, answers user query, includes keyword
  - Date: Accurate publication date (Google checks for artificial freshness manipulation)
  - Tags: 4-8 relevant tags matching service page keywords
**Warning signs:** Google Search Console shows low CTR despite decent ranking position (bad title/description)

### Pitfall 5: Ignoring Content Freshness Signals
**What goes wrong:** Old posts with outdated information (e.g., "2024 hurricane season" in 2026) hurt site credibility
**Why it happens:** No content maintenance schedule after initial publication
**How to avoid:** 
  - Use evergreen phrasing ("last year" vs "2024", "recent hurricane seasons" vs specific years)
  - Add content maintenance task: quarterly review of top 5 posts, update examples/stats if needed
  - Update `dateModified` in frontmatter when significantly revising content (Article schema includes this)
**Warning signs:** User comments or low dwell time on previously high-performing posts

## Code Examples

Verified patterns from official sources and existing implementation:

### Article Schema Implementation
```typescript
// Source: app/blog/[slug]/page.tsx (lines 96-101) + lib/schema.ts
// Already implemented and working

export function getArticleSchema({
  title,
  datePublished,
  description,
  url,
}: {
  title: string;
  datePublished: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: `${company.url}/images/hero/roof_photo.jpg`, // Fallback - can be customized per post
    author: {
      "@type": "Person",
      name: "Brett",
      url: company.url,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: `${company.url}/images/brand/logo.png`, // Update when logo added
      },
    },
    datePublished: datePublished,
    dateModified: datePublished, // Could be separate frontmatter field
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
```

**Enhancement opportunity:** Add optional `image` field to MDX frontmatter, use if provided or fallback to hero image.

### Related Services Matching Algorithm
```typescript
// Source: app/blog/[slug]/page.tsx (lines 16-59)
// Scores services based on tag overlap with blog post tags

function getRelatedServices(tags?: string[]) {
  if (!tags || tags.length === 0) {
    // Fallback to most relevant general services
    return services.filter((s) =>
      ["residential-roofing", "fortified-roof", "storm-damage"].includes(s.slug)
    );
  }

  const scored = services.map((s) => {
    const keywords = [
      s.shortTitle.toLowerCase(),
      s.slug.replace(/-/g, " "),
      s.description.toLowerCase(),
    ].join(" ");

    let score = 0;
    
    // Exact tag match in keywords
    for (const tag of tags) {
      if (keywords.includes(tag.toLowerCase())) score += 2;
      
      // Word-level matching for multi-word tags
      for (const word of tag.toLowerCase().split(/\s+/)) {
        if (word.length > 3 && keywords.includes(word)) score += 1;
      }
    }
    
    // Bonus for slug match
    if (tags.join(" ").toLowerCase().includes(s.slug.replace(/-/g, " "))) {
      score += 5;
    }

    return { service: s, score };
  });

  // Sort by relevance
  scored.sort((a, b) => b.score - a.score);

  // Return top 3 matches
  const matched = scored.filter((s) => s.score > 0).slice(0, 3);
  
  // Fill with fallbacks if needed
  if (matched.length >= 3) return matched.map((s) => s.service);
  
  const fallbackSlugs = ["residential-roofing", "fortified-roof", "storm-damage"];
  const result = matched.map((s) => s.service);
  for (const slug of fallbackSlugs) {
    if (result.length >= 3) break;
    const svc = services.find((s) => s.slug === slug);
    if (svc && !result.find((r) => r.slug === svc.slug)) {
      result.push(svc);
    }
  }
  
  return result.slice(0, 3);
}
```

**Works well:** Simple scoring algorithm, handles missing tags gracefully, always returns 3 services.

### Blog Post CTA Pattern
```markdown
<!-- From existing posts - natural, low-pressure CTAs -->

## Get a FORTIFIED Roof Estimate

We're one of the most experienced FORTIFIED roofing contractors in the Wilmington area. We handle the entire process — from installation to evaluator coordination to helping you submit paperwork to your insurer.

**Want to see what a FORTIFIED roof would cost for your home — and how much you'd save on insurance?**

[Get Your Free FORTIFIED Roof Estimate](/estimate)

Call us at **(910) 665-5277** to talk through whether FORTIFIED is right for your home. We serve Wilmington, Wrightsville Beach, Carolina Beach, Kure Beach, Leland, Hampstead, Surf City, and the greater Cape Fear region.
```

**Pattern:** Question framing, primary CTA button, secondary phone CTA, location list (SEO signal), helpful not pushy.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Separate Blog CMS | MDX files in git | ~2020-2023 | Static sites favor git-based content for performance and developer experience |
| Generic local SEO | E-E-A-T signals | 2022 (Google Helpful Content Update) | Content must demonstrate real experience and expertise, not just keyword targeting |
| Keyword density focus | User intent focus | 2023-2024 (multiple algorithm updates) | Google prioritizes answering user queries over keyword presence |
| Pillar pages only | Topic cluster model | ~2021-present | Internal linking between related content improves topical authority |
| BlogPosting schema | Article schema | 2023+ | Article more widely supported for rich results |

**Deprecated/outdated:**
- **Keyword density targets (2-3%):** Google's NLP understands synonyms and context; natural writing ranks better
- **300-500 word blog posts:** Thin content penalized for commercial keywords; target 1,500-3,000 words
- **Exact match domains:** EMDs (e.g., wilmingtonroofing.com) lost ranking boost in 2012; brand domains favored
- **Guest post link building:** Devalued by Google; focus on genuinely helpful content that earns natural links

## Validation Architecture

> Validation framework enabled (workflow.nyquist_validation: true in .planning/config.json)

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Vitest 2.1.8 (already installed) |
| Config file | vitest.config.ts (existing) |
| Quick run command | `npm test -- tests/blog-content-validation.test.ts` |
| Full suite command | `npm test` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| BLOG-01 | Storm/hurricane damage posts target high-intent keywords | unit | `npm test -- tests/blog-content-validation.test.ts -t "BLOG-01"` | ❌ Wave 0 |
| BLOG-02 | Insurance claim guides are NC-specific | unit | `npm test -- tests/blog-content-validation.test.ts -t "BLOG-02"` | ❌ Wave 0 |
| BLOG-03 | Educational content on maintenance, damage signs, materials | unit | `npm test -- tests/blog-content-validation.test.ts -t "BLOG-03"` | ❌ Wave 0 |
| BLOG-04 | Fortified certification explainer content exists | unit | `npm test -- tests/blog-content-validation.test.ts -t "BLOG-04"` | ❌ Wave 0 |
| BLOG-05 | Seasonal/coastal maintenance guides published | unit | `npm test -- tests/blog-content-validation.test.ts -t "BLOG-05"` | ❌ Wave 0 |
| BLOG-06 | Posts link to service pages and estimate form | unit | `npm test -- tests/blog-content-validation.test.ts -t "BLOG-06"` | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `npm test -- tests/blog-content-validation.test.ts -x` (run targeted tests, fail fast)
- **Per wave merge:** `npm test` (full suite including blog validation)
- **Phase gate:** All blog content tests green before `/gsd:verify-work`

### Wave 0 Gaps
- [ ] `tests/blog-content-validation.test.ts` — covers all BLOG-01 through BLOG-06 requirements
- [ ] Test utilities: `getAllPosts()` already exists in `lib/blog.ts` (use for validation)
- [ ] Framework install: ✅ Already installed (Vitest from Phase 1)

**Validation approach:**
- Load all posts from `content/blog/*.mdx`
- Check for presence of posts covering each requirement category
- Validate frontmatter schema (required fields present, character counts)
- Validate internal linking (posts contain links to `/services/*` and `/estimate`)
- Check word count minimums for commercial keywords (1,500+ words)
- Verify Article schema fields populated

## <phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| BLOG-01 | Storm/hurricane damage content targeting high-intent post-storm searches | Commercial intent keyword research shows post-storm searches have high conversion intent; existing post covers storm damage signs; gap in "hurricane roof preparation" |
| BLOG-02 | Insurance claim process guides for roofing (NC-specific) | Existing post comprehensively covers NC-specific claim filing; E-E-A-T research emphasizes demonstrating real experience (Hurricane Florence/Dorian examples) |
| BLOG-03 | Educational content: roof maintenance, signs of damage, material comparisons | Existing posts cover damage signs, cost, and lifespan; gaps in maintenance schedule guide and materials comparison (architectural vs metal vs impact-resistant) |
| BLOG-04 | Fortified Roof certification explainer content (differentiator) | Two existing posts thoroughly cover IBHS Fortified program; differentiator content complete |
| BLOG-05 | Seasonal/coastal maintenance guides (hurricane prep, salt air protection) | Gap identified - no dedicated seasonal maintenance content; coastal-specific content is key differentiator per E-E-A-T research |
| BLOG-06 | Blog posts link to relevant service pages and estimate form (topic cluster model) | Topic cluster research validates pattern; existing implementation uses `getRelatedServices()` function; bidirectional linking needed (service pages → blog posts) |
</phase_requirements>

## Sources

### Primary (HIGH confidence)
- Google Search Central - Article structured data: https://developers.google.com/search/docs/appearance/structured-data/article (verified 2026-04-04)
- Google Search Central - Creating helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content (verified 2026-04-04)
- Existing blog post analysis: 7 posts in `content/blog/*.mdx` (verified structure, quality, coverage)
- Existing blog infrastructure: `lib/blog.ts`, `app/blog/[slug]/page.tsx` (verified implementation)

### Secondary (MEDIUM confidence)
- Semrush commercial intent keywords guide (verified 2026-04-04, general principles applicable)
- Phase 3 Article schema implementation (lib/schema.ts - verified working in production)

### Tertiary (LOW confidence)
- IBHS Fortified program details: Could not verify via WebFetch (CSS-heavy page); relied on existing blog post content which cites IBHS.org
- NC Department of Insurance specific regulations: Could not access detailed regulatory content via homepage WebFetch; existing blog post provides NC-specific guidance (hurricane deductibles, Beach Plan, NCDOI complaint process)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - gray-matter and Next.js MDX patterns are industry standard, verified in working implementation
- Architecture: HIGH - existing blog infrastructure analyzed and validated; patterns extracted from production code
- Content strategy: HIGH - E-E-A-T and commercial intent research from Google official docs; existing posts demonstrate successful implementation
- Topic clusters: MEDIUM - verified concept via commercial intent research, but bidirectional linking not yet implemented
- Fortified/insurance specifics: MEDIUM - relied on existing blog post content (which cites authoritative sources) rather than direct source verification
- Pitfalls: HIGH - identified through existing content analysis and Google's helpful content guidelines

**Research date:** 2026-04-04
**Valid until:** 2026-05-04 (30 days - content strategy stable, but Google algorithm updates frequent)

---

**Researcher notes:**
- Existing 7 blog posts are exceptionally high quality - maintain this standard
- Gap analysis reveals need for 4-6 new posts, not wholesale content creation
- Service pages need retrofit for bidirectional topic cluster linking (extend Service interface)
- Test infrastructure from Phase 1 ready to use for content validation
