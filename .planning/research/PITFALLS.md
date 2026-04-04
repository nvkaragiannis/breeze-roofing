# Domain Pitfalls — Roofing Contractor Website Redesign

**Domain:** Local service business marketing website (roofing contractor)
**Researched:** 2026-04-03
**Confidence:** MEDIUM-HIGH

## Executive Summary

Roofing contractor website redesigns commonly fail in three catastrophic ways: (1) SEO migration errors that destroy years of ranking equity, (2) conversion-killing design changes that prioritize aesthetics over lead generation, and (3) local SEO misconfigurations that hide the business from "near me" searches. This research catalogs 18 critical pitfalls specific to local service business redesigns, with emphasis on avoiding the 30-60% traffic drops that typically follow poorly executed contractor website relaunches.

---

## Critical Pitfalls

### Pitfall 1: URL Structure Changes Without Redirect Strategy

**What goes wrong:**
Redesign changes URL patterns (e.g., `/services/roof-repair/` becomes `/roofing-services/repairs/`) without implementing proper 301 redirects. All existing backlinks return 404 errors. Google drops the site from rankings within 2-4 weeks as pages disappear from the index. Traffic plummets 40-70% and takes 6-12 months to recover — if it ever does.

**Why it happens:**
- Developers focus on "cleaner" URL structure without considering SEO impact
- No pre-launch redirect mapping between old and new URLs
- Assumption that Google will "figure it out" automatically
- CMS migration changes URL patterns by default without manual configuration

**How to avoid:**
1. **Before redesign:** Export complete list of all indexed URLs from Google Search Console
2. **During design:** Map every old URL to its new equivalent (1:1 mapping)
3. **Implement:** Server-side 301 redirects (NOT JavaScript or meta refresh)
4. **Test:** Use redirect checker tool to verify every redirect before launch
5. **Monitor:** Track 404 errors in Search Console for 90 days post-launch

**Warning signs:**
- Developer says "we'll handle redirects after launch"
- No redirect mapping document exists
- Staging site shows 404s for old URLs
- Google Search Console shows spike in 404 errors after launch

**Phase to address:**
SEO Migration Phase — must happen BEFORE visual redesign launch. Create redirect mapping during planning; test in staging; deploy simultaneously with new site.

---

### Pitfall 2: Removing High-Performing Content During "Simplification"

**What goes wrong:**
Redesign removes "old-looking" blog posts, FAQ pages, or service detail pages that were generating organic traffic. Designer argues for "cleaner, simpler" site. Result: 20-50 pages that collectively drove 30-40% of organic traffic vanish overnight. Rankings for long-tail keywords disappear. Traffic drops but no one connects it to content removal until 3 months later.

**Why it happens:**
- Designers prioritize aesthetics over analytics
- No pre-redesign content audit mapping traffic to pages
- Assumption that "no one reads long content"
- Desire to remove "outdated" content without checking if it still ranks

**How to avoid:**
1. **Content audit:** Export GA4 data showing organic traffic by landing page (12 months)
2. **Identify keepers:** Flag any page receiving >50 sessions/month from organic
3. **Keyword mapping:** Use GSC to see which queries drive traffic to each page
4. **Archive strategy:** Keep high-traffic pages even if they need redesign later
5. **Redirect losers:** If must remove, 301 redirect to most relevant replacement page

**Warning signs:**
- Designer proposes "starting fresh" with content
- No analytics review in redesign planning
- Sitemap shows 50% fewer pages than current site
- Stakeholder says "nobody reads that old blog anyway"

**Phase to address:**
Content Strategy Phase — run audit BEFORE design starts. Create "must keep" list. Redesign these pages or migrate as-is, never delete.

---

### Pitfall 3: Launching Redesign Without Mobile-First Testing

**What goes wrong:**
Redesign looks beautiful on desktop but breaks on mobile: CTAs below fold, forms too complex for small screens, images don't scale, phone number not tap-to-call. Since 70-80% of roofing searches happen on mobile, conversion rate drops 40-60% overnight. Desktop traffic converts but mobile doesn't — business blames "low intent" mobile users instead of broken UX.

**Why it happens:**
- Design review happens on large monitors in office
- Testing on actual phones skipped due to time pressure
- Assumption that "responsive CSS" equals mobile-optimized
- Forms designed for desktop keyboard entry, not mobile context

**How to avoid:**
1. **Mobile-first design:** Start design process on 375px viewport (iPhone SE)
2. **Real device testing:** Test on actual phones (not just Chrome DevTools)
3. **CTA accessibility:** Thumb-friendly buttons, tap targets ≥48px
4. **Form simplification:** Mobile forms should have 3-5 fields max
5. **Phone prominence:** Click-to-call button in header, above fold, always visible

**Warning signs:**
- Designer only shows desktop mockups
- Staging site has horizontal scroll on mobile
- Form fields require scrolling to see all at once
- Phone number not clickable on mobile view

**Phase to address:**
UX Design Phase — mobile prototypes required before desktop. All CTAs, forms, and conversion paths must work perfectly on mobile before desktop refinement.

---

### Pitfall 4: Google Business Profile Disconnection

**What goes wrong:**
Redesign changes business name, address format, or phone number on website to mismatch Google Business Profile. NAP (Name, Address, Phone) inconsistency confuses Google's local ranking algorithm. Business drops from Local Pack (3-pack) results. "Near me" search visibility plummets. Revenue drops 20-40% but no one realizes it's a NAP mismatch for months.

**Why it happens:**
- Rebranding during redesign (e.g., "Breeze Roofing" becomes "Breeze Roofing & Construction")
- Address reformatting (e.g., "123 Main St" changes to "123 Main Street")
- New phone tracking number replaces real business number on site
- Developer doesn't know NAP consistency affects local SEO

**How to avoid:**
1. **Before redesign:** Document exact NAP from Google Business Profile
2. **Match exactly:** Use identical formatting on website (punctuation, abbreviations, spacing)
3. **Schema markup:** Add LocalBusiness structured data with matching NAP
4. **Avoid tracking numbers:** If using call tracking, show real number in schema and footer
5. **Audit citations:** Verify NAP matches across Yelp, BBB, Angi, Yellow Pages

**Warning signs:**
- Business name changes (even slightly) during redesign
- Address format differs from GBP listing
- Phone number in header differs from GBP
- No LocalBusiness schema on new site

**Phase to address:**
Local SEO Configuration Phase — verify NAP consistency BEFORE launch. Add structured data. Audit GBP settings and citations for exact match.

---

### Pitfall 5: Conversion Path Destruction

**What goes wrong:**
Redesign adds beautiful imagery, brand storytelling, and video backgrounds — but buries or removes clear CTAs. Old site had "Get Free Estimate" button in header, estimate form above fold on homepage, phone number prominent. New site has "Learn More" linking to About page, estimate form 3 screens down, phone number in tiny footer text. Traffic stays same but conversions drop 50-70%.

**Why it happens:**
- Designer prioritizes "modern aesthetic" over lead generation
- Belief that "if site looks premium, people will find the contact form"
- Homepage becomes brand manifesto instead of conversion tool
- Multiple stakeholders want their content "above fold"

**How to avoid:**
1. **Conversion audit:** Identify current conversion rate and primary conversion paths
2. **Protect CTAs:** Every page needs clear, prominent CTA (phone OR form)
3. **Above-fold rule:** Primary CTA visible without scrolling on mobile
4. **Dual paths:** Offer both phone and form (customers have preferences)
5. **Test before launch:** Run conversion rate tests in staging with real users

**Warning signs:**
- Designer removes header CTA "for cleaner look"
- Estimate form requires 3+ clicks to reach
- Phone number not in header or above fold
- Homepage has more brand content than conversion content

**Phase to address:**
Conversion Optimization Phase — map conversion paths before design starts. Require CTA prominence in design requirements. Test conversion flow in staging.

---

### Pitfall 6: Image Optimization Neglect

**What goes wrong:**
Redesign uses high-resolution hero images, project galleries with 30+ photos, and background videos. No image optimization implemented. Homepage takes 8-12 seconds to load on mobile. Google penalizes slow Core Web Vitals scores. Rankings drop 10-30 positions. Bounce rate increases 60-80% as impatient users abandon before page loads.

**Why it happens:**
- Designer exports full-resolution images from design tool (4000px × 3000px)
- No image compression workflow established
- Developer assumes "CDN will handle it"
- WebP/AVIF format not implemented
- Missing lazy loading on below-fold images

**How to avoid:**
1. **Use Next.js Image:** Leverage `next/image` component for automatic optimization
2. **Proper sizing:** Hero images 1920px max width, project images 800px max
3. **Modern formats:** Serve WebP with JPEG fallback (Next.js Image handles this)
4. **Lazy loading:** Below-fold images load only when user scrolls
5. **Performance budget:** Set 3-second LCP target on mobile

**Warning signs:**
- Hero image file size >500KB
- Gallery images not lazy-loaded
- Images served in JPEG/PNG only (no WebP)
- Lighthouse Performance score <80

**Phase to address:**
Technical Performance Phase — implement image optimization system BEFORE adding project galleries. Set up Next.js Image configuration with remote image domains.

---

### Pitfall 7: Missing or Broken Schema Markup

**What goes wrong:**
Old site had LocalBusiness, FAQ, and Review schema that helped rich snippets appear in search. Redesign launches without schema — or with invalid schema that fails Google's validation. Rich snippets disappear from search results. Click-through rate drops 15-30% as listings look less authoritative than competitors with stars, pricing, and FAQ snippets.

**Why it happens:**
- Developer doesn't know about structured data
- Schema was in old CMS, not migrated to new stack
- Schema added but not tested with Google's validation tool
- Schema uses wrong types or missing required fields

**How to avoid:**
1. **Pre-redesign audit:** Identify all existing schema types using Schema Markup Validator
2. **Implement required schemas:**
   - LocalBusiness (with address, phone, hours, geo coordinates)
   - Service (for each service page)
   - FAQPage (for FAQ content)
   - Article (for blog posts)
   - BreadcrumbList (for navigation context)
3. **Test thoroughly:** Use Google Rich Results Test on every page type
4. **Monitor:** Check Search Console for schema errors post-launch

**Warning signs:**
- Developer unfamiliar with JSON-LD
- No schema mentioned in technical requirements
- Rich Results Test shows errors
- Search Console reports structured data errors after launch

**Phase to address:**
Technical SEO Phase — implement and test all schema types BEFORE launch. Verify with Google's tools. Monitor Search Console for 30 days post-launch.

---

### Pitfall 8: Blocking Search Engines During Development

**What goes wrong:**
Developer sets staging site to `noindex` or blocks in `robots.txt` to prevent indexing during development. Staging site is cloned to production at launch but `noindex` or robot block remains. Google deindexes entire site within 2 weeks. Traffic goes to zero. Business panics after 3 weeks wondering why "no one can find us."

**Why it happens:**
- `noindex` meta tag or robots.txt disallow left in production code
- Environment variable for robots not configured correctly
- Developer forgets to remove staging protections
- No pre-launch SEO checklist to catch this

**How to avoid:**
1. **Environment-based robots:** Use `NEXT_PUBLIC_DOMAIN` to conditionally set robots behavior
2. **Pre-launch checklist:** 
   - View page source: verify no `<meta name="robots" content="noindex">`
   - Check `/robots.txt`: verify no `Disallow: /` for Googlebot
   - Test in Google Search Console: fetch and render homepage
3. **Staging alerts:** Add visible banner on staging: "This site is not indexed"
4. **Final verification:** Search `site:breezeroofingnc.com` before announcing launch

**Warning signs:**
- Staging and production share same codebase without environment checks
- No robots.txt file exists in production
- Meta robots tag present in production HTML
- Google Search Console shows "Blocked by robots.txt" errors

**Phase to address:**
Technical SEO Phase + Launch Checklist — verify indexability is part of go-live process. Test immediately after DNS cutover.

---

### Pitfall 9: Ignoring Local Service Area Content

**What goes wrong:**
Redesign creates beautiful city/area pages but they're thin, templated, and duplicate. Each page says "We serve [City]" with generic roofing description. No unique local content, landmarks, or area-specific context. Google sees them as doorway pages and penalizes site. Local rankings drop across all service areas.

**Why it happens:**
- Temptation to programmatically generate city pages
- Insufficient time/budget to write unique content for each area
- Belief that "changing city name is enough differentiation"
- No understanding of Google's doorway page penalty

**How to avoid:**
1. **Unique content requirement:** Each area page needs 500+ words of unique content
2. **Local context:** Mention landmarks, neighborhoods, local considerations
   - Example: "Wilmington's coastal salt air requires corrosion-resistant materials"
3. **Specific data:** Include area-specific photos, projects, testimonials if possible
4. **Service variations:** Different areas may have different common issues
5. **Better to have 3 great pages than 10 thin pages**

**Warning signs:**
- Area pages differ by city name only
- Content is <300 words per page
- No local photos or context
- Internal "find and replace" used to generate pages

**Phase to address:**
Content Strategy Phase — write unique area page content BEFORE design. Budget time for research and localization. Consider starting with 3-5 key cities rather than all 15 at once.

---

### Pitfall 10: Form Over-Complication

**What goes wrong:**
Redesign replaces simple "Name, Phone, Service Needed" contact form with 12-field monstrosity asking for property size, roof age, preferred timeline, budget range, how they heard about us, and newsletter signup. Form abandonment rate goes from 30% to 75%. Lead volume drops 60-70% despite same traffic.

**Why it happens:**
- Sales team wants "better qualified leads"
- Belief that "more information = better leads"
- Marketing wants attribution data (how did you hear about us?)
- Form designer adds "nice to have" fields without testing impact

**How to avoid:**
1. **Minimum viable form:** Name, Phone/Email, Brief Message (3 fields)
2. **Mobile-first:** Each field must be easy to tap and fill on phone
3. **Optional fields:** Make "nice to have" fields explicitly optional
4. **Progressive profiling:** Collect more data after initial contact, not during
5. **A/B test:** If adding fields, test conversion rate impact before full rollout

**Warning signs:**
- Form has >5 required fields
- Dropdown menus with 20+ options
- "How did you hear about us?" is required
- Form requires 2+ minutes to complete on mobile

**Phase to address:**
Conversion Optimization Phase — design minimal form first. Test with real users. Only add fields if data proves they don't hurt conversion rate.

---

### Pitfall 11: Slow Third-Party Script Bloat

**What goes wrong:**
Redesign adds chat widget, heatmap tracking, Facebook Pixel, multiple analytics platforms, social media feeds, and review widgets. Each adds 100-500KB of JavaScript. Page load time increases from 2 seconds to 8 seconds. Google's Core Web Vitals score fails. Rankings drop. User experience suffers.

**Why it happens:**
- Each stakeholder adds "just one more tool"
- No performance budget enforced
- Third-party scripts loaded synchronously in `<head>`
- No async or defer attributes on script tags
- Chat widget loads eagerly on every page

**How to avoid:**
1. **Performance budget:** Set maximum page weight (e.g., 1.5MB total, 500KB JS)
2. **Script audit:** List all third-party scripts and their business value
3. **Async loading:** Use `next/script` with `strategy="lazyOnload"` for non-critical scripts
4. **Defer chat widget:** Load chat only after user interaction or 5-second delay
5. **Consolidate analytics:** Choose ONE analytics platform, not three

**Warning signs:**
- Homepage loads >2MB total assets
- Lighthouse shows "Reduce JavaScript execution time" warning
- Scripts block main thread for >3 seconds
- Multiple analytics platforms present (GA4 + Matomo + Mixpanel)

**Phase to address:**
Technical Performance Phase — audit all third-party dependencies. Establish loading strategy. Implement async loading for non-critical scripts.

---

### Pitfall 12: Internal Linking Architecture Collapse

**What goes wrong:**
Old site had strategic internal linking: homepage linked to services, services linked to areas, blog posts linked to related services. Redesign breaks this structure. Pages become isolated orphans. Google's crawler has difficulty discovering pages. Link equity doesn't flow through site. Page authority drops across the board.

**Why it happens:**
- Designer creates "minimal" navigation with dropdown menus
- Blog sidebar removed for cleaner design
- No breadcrumb navigation
- Footer links removed or minimized
- No strategic internal linking plan

**How to avoid:**
1. **Hub structure:** Homepage → Service pages → Service detail pages
2. **Breadcrumbs everywhere:** Every page shows path from homepage
3. **Related content:** Service pages link to relevant blog posts
4. **Footer sitemap:** Complete site structure in footer (organized)
5. **Blog cross-linking:** Posts link to related posts and relevant services

**Warning signs:**
- Pages have 0-2 internal links pointing to them
- No breadcrumb navigation visible
- Blog posts don't link to service pages
- Footer has no sitemap links

**Phase to address:**
Information Architecture Phase — map internal linking structure during site planning. Ensure every page has 3+ internal links pointing to it.

---

### Pitfall 13: Contact Information Inconsistency

**What goes wrong:**
Phone number appears differently across site: header shows (910) 555-1234, footer shows 910-555-1234, contact page shows 910.555.1234, schema has +19105551234. Each variation confuses local SEO signals. NAP inconsistency hurts local rankings.

**Why it happens:**
- Different developers work on different sections
- No style guide for phone number formatting
- Schema uses E.164 format while pages use local format
- Multiple phone numbers (main line, emergency line, office line) not clearly distinguished

**How to avoid:**
1. **Single format:** Choose ONE format and use everywhere visibly (e.g., `(910) 555-1234`)
2. **Schema consistency:** Match visible format in LocalBusiness schema
3. **Component approach:** Create single `<PhoneNumber>` component used site-wide
4. **Style guide:** Document phone formatting in project documentation
5. **Audit tool:** Search codebase for phone numbers to verify consistency

**Warning signs:**
- Phone number formatted 3+ different ways
- Schema phone differs from visible phone
- Multiple numbers with no clear labels
- Click-to-call links malformed on mobile

**Phase to address:**
Technical Implementation Phase — create phone number component early. Document formatting standard. Audit before launch.

---

### Pitfall 14: Testimonials and Social Proof Removal

**What goes wrong:**
Old site had testimonials scattered throughout, review widgets, "4.9 stars on Google" badge, certifications, and insurance badges. Designer removes them for "cleaner modern look." Trustworthiness drops. Conversion rate falls 20-40% as visitors lack confidence signals.

**Why it happens:**
- Designer thinks testimonials "look scammy"
- Belief that "good design sells itself"
- Testimonials feel repetitive to internal team (but not to new visitors)
- Review widgets clash with minimalist aesthetic

**How to avoid:**
1. **Social proof on every page:** Each service page needs ≥1 relevant testimonial
2. **Homepage prominence:** Hero section should show rating/review count
3. **Trust badges:** Certifications, insurance, Better Business Bureau visible
4. **Before/after photos:** Visual proof builds more trust than text alone
5. **Video testimonials:** Even one video dramatically increases trust

**Warning signs:**
- Designer proposes removing testimonials
- Homepage has no social proof above fold
- No mention of Google rating or review count
- Certifications buried on About page only

**Phase to address:**
Content Strategy Phase — collect testimonials BEFORE redesign. Make social proof non-negotiable design requirement. Test conversion impact if considering removal.

---

### Pitfall 15: Emergency Service Prominence Loss

**What goes wrong:**
Roofing is an emergency service (storm damage, leaks). Old site had "24/7 Emergency Repairs" prominently displayed. Redesign buries this under "Services" dropdown or moves to separate page. High-intent emergency customers can't find help quickly. Emergency call volume drops 50% despite unchanged service availability.

**Why it happens:**
- Designer treats emergency service same as other services
- Desire for equal visual weight across all services
- Emergency content feels "less elegant" than planned services
- No understanding that emergency calls are highest-value leads

**How to avoid:**
1. **Emergency prominence:** "24/7 Emergency Service" in header or hero section
2. **Immediate visibility:** Emergency call button separate from regular CTA
3. **Storm damage landing page:** Dedicated page for post-storm searches
4. **Mobile priority:** Emergency number tap-to-call above fold on mobile
5. **Keywords:** Target "emergency roof repair Wilmington" specifically

**Warning signs:**
- Emergency service not mentioned above fold
- No dedicated emergency landing page
- Emergency number same as general inquiry number
- "Storm damage" not featured prominently

**Phase to address:**
Content Strategy + UX Design Phase — identify high-intent emergency keywords. Design emergency service prominence into homepage and header.

---

### Pitfall 16: Blog Redesign Breaking Publishing Workflow

**What goes wrong:**
Old site had simple blog workflow: write MDX file, commit, deploy. Redesign changes MDX structure, adds complex frontmatter requirements, or switches to CMS. Publishing breaks. Blog goes dark for 3 months during transition. Organic traffic from blog posts drops 60%.

**Why it happens:**
- Developer "improves" blog system without considering workflow
- New frontmatter schema incompatible with old posts
- Migration script fails on some posts
- Content team not trained on new system

**How to avoid:**
1. **Backward compatibility:** New blog system must read old MDX files
2. **Migration testing:** Test ALL existing posts in staging
3. **Gradual migration:** Keep old system working while migrating incrementally
4. **Documentation:** Write clear publishing guide for content team
5. **Test post:** Create test blog post in staging before launch

**Warning signs:**
- Existing blog posts show errors in staging
- New frontmatter schema incompatible with old posts
- No migration script for existing content
- Content team not involved in redesign planning

**Phase to address:**
Content Infrastructure Phase — test blog migration early. Ensure backward compatibility. Train content team before launch.

---

### Pitfall 17: Estimate Tool Integration Failure

**What goes wrong:**
Redesign integrates instant estimator (like Roofr) but implementation breaks: iframe doesn't resize properly, postMessage events don't fire, mobile layout overlaps, or estimate form never loads. Visitors see broken calculator. Trust drops. Lead volume from estimate page plummets.

**Why it happens:**
- Third-party embed code conflicts with CSS framework
- Iframe sandbox restrictions prevent postMessage
- Mobile viewport settings break responsive embed
- No end-to-end testing with actual estimator backend

**How to avoid:**
1. **Test early:** Integrate estimator in staging, test thoroughly
2. **Responsive container:** Ensure embed resizes correctly on all viewports
3. **PostMessage handling:** Verify event listeners work for form submissions
4. **Fallback form:** Provide backup contact form if embed fails to load
5. **Analytics integration:** Track estimator usage and completion rate

**Warning signs:**
- Estimator embed shows "Coming Soon" placeholder
- Mobile layout shows horizontal scroll
- PostMessage events not tracked in analytics
- No fallback if embed fails to load

**Phase to address:**
Third-Party Integration Phase — integrate estimator early in development. Test on real devices. Verify analytics tracking before launch.

---

### Pitfall 18: Launching Without Analytics Migration

**What goes wrong:**
Redesign launches with new GA4 property ID but historical data remains in old GA property. No goals/conversions configured in new property. No baseline data to compare post-launch performance. Team can't tell if redesign improved or hurt conversions. Decisions made blindly for 3-6 months until enough data accumulates.

**Why it happens:**
- Analytics treated as "nice to have" rather than critical
- Developer sets up GA4 but doesn't migrate goals/events
- No conversion tracking configured for new form submission events
- Historical data not exported before GA3 property deleted

**How to avoid:**
1. **Before launch:** Document all current GA goals, events, and conversion rates
2. **Migrate goals:** Set up equivalent conversions in GA4
3. **Test events:** Verify contact form submissions fire conversion events
4. **Parallel tracking:** Run old and new analytics simultaneously for 30 days
5. **Baseline report:** Create "pre-redesign performance" report for comparison

**Warning signs:**
- GA4 property ID added but no events configured
- No test conversion events fired in GA4 debug mode
- No documented baseline conversion rates
- Developer says "analytics works" without testing form submissions

**Phase to address:**
Analytics Configuration Phase — set up GA4 properly BEFORE launch. Test all conversion events. Run parallel tracking during transition.

---

## Technical Debt Patterns

Shortcuts that seem reasonable but create long-term problems.

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Skipping redirect mapping | Faster launch (save 2-3 days) | 6-12 month traffic recovery; lost rankings may never return | NEVER — always map redirects |
| Using JavaScript redirects | Easier to implement (no server config) | Search engines may not follow; indexing delays | Only for authenticated pages |
| Copy-paste city pages | Launch with 10+ cities quickly (1 day vs 2 weeks) | Google doorway page penalty; deindexing risk | Only if writing unique content later (within 30 days) |
| Delaying image optimization | Ship faster with original images (save 3-5 days) | Poor Core Web Vitals; ranking penalties; slow UX | Only for MVP if optimization follows immediately |
| Single long contact form | Collect more lead qualification data | 50-70% drop in form submissions; lead volume crash | Only after A/B testing proves no conversion impact |
| Blocking robots during dev | Prevent accidental indexing of staging | Risk forgetting to unblock; site deindexed in production | Acceptable but MUST have launch checklist |
| No schema markup at launch | Ship faster (save 2-4 days) | Lost rich snippets; lower CTR; harder to add later | Only if adding schema within 30 days |
| Skipping mobile device testing | Ship faster using DevTools only | Broken mobile UX; 50-70% of users have bad experience | NEVER — mobile is 70%+ of roofing traffic |

---

## Integration Gotchas

Common mistakes when connecting to external services.

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Roofr Instant Estimator | Embedding script tag directly without container or error handling | Use dedicated component with iframe resize handling; implement postMessage listeners; provide fallback form if embed fails |
| Resend Email API | Not handling rate limits or failed sends; no retry logic | Implement rate limiting; catch API errors gracefully; show user-friendly error messages; log failures for monitoring |
| Google Analytics 4 | Adding GA4 ID but not configuring conversion events; no form submission tracking | Define custom events for form submissions; test events in debug mode; verify conversions appear in GA4 dashboard |
| Google Business Profile | Using different NAP formatting on site vs GBP; phone number mismatch | Document exact GBP NAP; use identical formatting on site; add LocalBusiness schema with matching data |
| Google Maps Embed | Not restricting API key; exposing key in client-side code | Use domain restrictions on API key; embed via iframe with restricted referrers; consider static map image instead |
| Call Tracking Numbers | Replacing real number everywhere; breaking local SEO NAP signals | Show real number in schema and visible footer; use tracking number in header/CTA only; maintain NAP consistency |

---

## Performance Traps

Patterns that work at small scale but fail as usage grows.

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Unoptimized hero images | 4-8 second LCP on mobile; poor Lighthouse scores | Use Next.js Image; serve WebP; max 1920px width; lazy load below-fold | Immediately — affects all users |
| Loading all blog posts on homepage | Slow build times; slow page load; large bundle | Show only recent 3-5 posts; paginate rest; lazy load images | >20 blog posts |
| Synchronous third-party scripts | Slow Time to Interactive; main thread blocked | Use `next/script` with `lazyOnload`; defer non-critical scripts | >3 third-party scripts |
| Chat widget eager loading | 300-500KB JavaScript on every page load; slow TTI | Load chat after user interaction or 5-second delay | Immediately — affects all users |
| Uncompressed images in project gallery | 20-40MB page weight for gallery pages; 15+ second load | Compress all images; use WebP; implement lazy loading | >10 gallery images |
| Reading all MDX files on every request | Slow static generation; 10+ second builds | Cache parsed posts during build; use `getStaticProps` efficiently | >30 blog posts |

---

## Security Mistakes

Domain-specific security issues beyond general web security.

| Mistake | Risk | Prevention |
|---------|------|------------|
| No rate limiting on contact form | Spam flood; email API quota exhaustion; DOS attacks | Implement rate limiting (5 requests/hour/IP); add honeypot field; require CAPTCHA for high-volume |
| Exposing RESEND_API_KEY in client code | API key theft; unauthorized email sending; quota abuse | Store API key in environment variables; never commit to git; use server-side API routes only |
| No input sanitization in email | Email HTML injection; XSS in email clients | Escape all user inputs before inserting into email HTML; use email template system instead of string concatenation |
| Unrestricted Google Maps API key | Quota theft; $1000+ surprise bills from API abuse | Restrict API key to specific domains; set daily quota limits; monitor usage in Google Cloud Console |
| No HTTPS enforcement | Man-in-the-middle attacks; Google ranking penalty | Configure Next.js to redirect HTTP to HTTPS; set HSTS headers; verify SSL certificate |

---

## UX Pitfalls

Common user experience mistakes specific to local service contractor sites.

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Hiding phone number for "cleaner design" | Emergency customers can't call quickly; 50% drop in phone leads | Phone number in header on all pages; click-to-call on mobile; prominent and easy to find |
| Auto-playing hero video | Slow page load; burns mobile data; annoying experience | Use static hero image; offer video play button; lazy load video |
| Infinite scroll on service pages | Users can't bookmark or share specific service; back button confusion | Dedicated page per service with clean URL; proper navigation |
| PDF estimates instead of web form | Mobile users can't open or fill PDFs; 80% abandonment | Web-based estimate form; mobile-friendly; saves to email instead |
| No before/after photos | Visitors can't visualize quality; trust suffers | Prominent before/after project gallery; show real work; include location |
| Form requires email but not phone | Customers prefer calling roofers; leads wait 24+ hours | Make phone OR email required; not both; offer choice |
| Too much "brand story" above fold | Visitors don't care about history until they trust service | Lead with benefits and CTA; tell story lower on page |
| Desktop-only navigation | Mobile users struggle to find services; 70% mobile traffic | Mobile-first navigation; thumb-friendly menu; clear hierarchy |

---

## "Looks Done But Isn't" Checklist

Things that appear complete but are missing critical pieces.

- [ ] **Redirects:** Site launches with new URLs — verify redirect map covers ALL old URLs in Google Search Console; test with redirect checker tool
- [ ] **Schema markup:** LocalBusiness schema present — verify it passes Google Rich Results Test; includes NAP, geo coordinates, hours, image
- [ ] **Mobile testing:** Site looks responsive — verify on real phone (not just DevTools); test forms, CTAs, click-to-call on iPhone and Android
- [ ] **Analytics:** GA4 ID configured — verify form submission events fire in GA4 debug mode; test conversion tracking end-to-end
- [ ] **Image optimization:** Images load — verify using next/image component; check file sizes <200KB; WebP format served; lazy loading below fold
- [ ] **Contact form:** Form submits successfully — verify email arrives via Resend; test error states; verify rate limiting works; check spam honeypot
- [ ] **NAP consistency:** Business info on site — verify phone, address format matches Google Business Profile EXACTLY; check schema matches visible NAP
- [ ] **Search indexing:** Site is live — verify robots.txt allows indexing; no noindex meta tags; submit sitemap to Search Console; test site: search
- [ ] **Internal linking:** Navigation works — verify breadcrumbs on all pages; footer sitemap present; blog posts link to services; ≥3 internal links per page
- [ ] **SSL certificate:** HTTPS works — verify green padlock; no mixed content warnings; HSTS headers set; HTTP redirects to HTTPS

---

## Recovery Strategies

When pitfalls occur despite prevention, how to recover.

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| URLs changed without redirects | HIGH (6-12 month recovery) | 1. Create redirect map immediately 2. Implement 301 redirects 3. Submit new sitemap 4. Request recrawl in Search Console 5. Monitor recovery for 90 days |
| Content deleted that had traffic | MEDIUM-HIGH (3-6 months) | 1. Restore content from backup 2. Republish at original URLs 3. If URLs changed, 301 redirect old to restored 4. Request indexing 5. May need to rebuild lost backlinks |
| Site accidentally blocked from search | HIGH (4-8 weeks) | 1. Remove noindex/robots block immediately 2. Submit sitemap 3. Request urgent recrawl 4. Check every page in Search Console 5. Monitor daily until reindexed |
| NAP mismatch hurts local SEO | MEDIUM (2-4 months) | 1. Fix site NAP to match GBP exactly 2. Update schema markup 3. Audit and fix citations 4. Submit updates in GBP dashboard 5. Wait for Google to reprocess |
| Images slow site dramatically | LOW-MEDIUM (1-2 weeks) | 1. Implement next/image component 2. Convert to WebP 3. Add lazy loading 4. Set proper widths/heights 5. Test Lighthouse; aim for 90+ score |
| Form too complex, conversions dropped | LOW (immediate) | 1. Remove non-essential fields 2. Make "nice to have" fields optional 3. A/B test shorter form 4. Monitor conversion rate improvement 5. Restore lead volume |
| Schema markup missing/broken | LOW-MEDIUM (2-4 weeks) | 1. Implement correct schema 2. Test with Google Rich Results Test 3. Fix errors 4. Submit sitemap 5. Wait for rich snippets to return |
| Third-party scripts slow site | LOW (1 week) | 1. Audit scripts; remove unnecessary 2. Move to async/defer loading 3. Use next/script with lazyOnload 4. Test Lighthouse 5. Monitor performance |

---

## Pitfall-to-Phase Mapping

How roadmap phases should address these pitfalls.

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| URL structure changes | SEO Migration Planning | Redirect map documented; tested in staging; 404 monitor post-launch |
| Content removal | Content Audit & Strategy | Traffic analysis complete; "must keep" list created; all high-traffic pages preserved |
| Mobile UX failures | UX Design | Real device testing passed; forms work on mobile; CTAs accessible |
| GBP disconnection | Local SEO Configuration | NAP matches GBP exactly; schema validated; citation audit complete |
| Conversion path destruction | Conversion Optimization | CTAs above fold; dual paths (phone + form); baseline conversion rate established |
| Image optimization neglect | Technical Performance | next/image implemented; WebP served; Lighthouse 90+ score |
| Schema markup missing | Technical SEO | Rich Results Test passed; Search Console shows no errors; schema on all page types |
| Search engine blocking | Launch Checklist | robots.txt allows indexing; no noindex tags; site: search works |
| Thin local content | Content Strategy | Unique content per area (500+ words); local context included; no templated pages |
| Form over-complication | Conversion Optimization | ≤5 fields; mobile-tested; conversion rate monitored; A/B tested if adding fields |
| Third-party script bloat | Technical Performance | Performance budget set; scripts load async; chat widget deferred; Lighthouse 90+ |
| Internal linking collapse | Information Architecture | Breadcrumbs on all pages; ≥3 internal links per page; footer sitemap present |
| Contact info inconsistency | Technical Implementation | Single phone component; NAP formatted consistently; schema matches visible data |
| Social proof removal | Content Strategy | Testimonials required on all service pages; trust badges visible; Google rating shown |
| Emergency service buried | Content Strategy + UX | Emergency CTA in header; dedicated storm page; 24/7 messaging prominent |
| Blog publishing breaks | Content Infrastructure | Migration tested; backward compatibility verified; content team trained |
| Estimate tool integration fails | Third-Party Integrations | Roofr embed tested; postMessage works; mobile responsive; fallback form present |
| Analytics not migrated | Analytics Configuration | GA4 events configured; conversions tested; baseline documented; parallel tracking |

---

## Sources

**Research Methodology:**
- Industry experience with local service business SEO
- Analysis of CONCERNS.md showing current site vulnerabilities
- SEJ local SEO mistakes article (15 documented pitfalls)
- Google official redirect documentation (301 vs 302 guidance)
- Unbounce conversion optimization research (form friction)
- Next.js performance best practices (Image optimization, script loading)
- Local SEO NAP consistency requirements (Google Business Profile guidelines)

**Confidence Assessment:**
- **HIGH confidence:** Technical pitfalls (redirects, schema, image optimization, robots.txt) — these are well-documented, verifiable issues
- **MEDIUM-HIGH confidence:** Conversion and UX pitfalls — based on industry patterns and analytics data from similar projects
- **MEDIUM confidence:** Local SEO pitfalls specific to roofing — extrapolated from general contractor patterns; may vary by market

**Research Gaps:**
- Specific Wilmington NC competitor analysis not yet conducted
- Roofing industry-specific pitfalls beyond general contractor patterns
- Quantitative data on recovery timelines (estimates based on typical patterns)
- Brett's specific business constraints and priorities

---

*Pitfalls research for: Roofing contractor website redesign (local service business)*
*Researched: 2026-04-03*
*Next step: Use this document to inform roadmap phase planning and success criteria*