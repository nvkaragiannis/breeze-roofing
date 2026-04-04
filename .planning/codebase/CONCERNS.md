# Codebase Concerns

**Analysis Date:** 2026-04-03

## Critical Missing Configuration

**Placeholder Business Data:**
- Issue: Multiple company data fields contain placeholders instead of real values, which are exposed in JSON-LD schemas and public pages
- Files: `lib/data/company.ts`
- Current state:
  - `address.street`: "[Address TBD]" (exposed in LocalBusiness schema)
  - `license`: "[LICENSE_NUMBER]" (displays on about page)
  - `yearFounded`: "[YEAR_FOUNDED]" (used in various schemas)
- Impact: SEO penalties from invalid schema.org data; trust signals compromised; legal liability if incorrect license shown
- Fix approach: Replace all placeholders with actual company data before production deployment

**Missing Required Environment Variables:**
- Issue: Critical API keys are not configured, breaking functionality
- Files: `app/api/contact/route.ts`, `app/layout.tsx`
- Required but missing:
  - `RESEND_API_KEY`: Contact form emails will not send; users get 503 error
  - `NEXT_PUBLIC_GA_ID`: Google Analytics disabled; no traffic tracking
- Impact: Contact form non-functional in production; no conversion tracking; silent failures
- Fix approach: Document required env vars; add validation/error messages during build

## Security Concerns

**Email HTML Construction Pattern:**
- Issue: Contact form constructs HTML email template via string concatenation despite HTML escaping
- Files: `app/api/contact/route.ts` (lines 124-131)
- Current mitigation: User inputs passed through `escapeHtml()` before insertion; honeypot field catches bot submissions
- Residual risk: Template construction pattern is fragile; future modifications could accidentally skip escaping
- Fix approach: Use email templating system (Resend's templates, MJML) instead of inline HTML strings

**Rate Limiting Stored in Memory:**
- Issue: Rate limit tracking uses in-memory Map that persists across deployments
- Files: `app/api/contact/route.ts` (lines 20-54)
- Current state: 5 requests per IP per hour window; cleaned every 10 minutes
- Impact on Vercel: When deployed to serverless functions, each invocation gets fresh memory; rate limiting resets per container
- Risk: On high-traffic periods, rate limiting is ineffective; attackers can DOS the contact endpoint across multiple regions
- Fix approach: Use Redis/Upstash for distributed rate limiting; or rely on Vercel built-in rate limiting headers

**Roofr Postmessage Origin Validation:**
- Issue: Only validates origin against "https://app.roofr.com" but doesn't validate message structure
- Files: `components/roofr/InstantEstimatorEmbed.tsx` (line 15)
- Current state: Message handler silently catches parsing errors; allows any object with `.type` field
- Impact: Malicious postMessage events from other origins could be tracked as GA events
- Fix approach: Explicitly whitelist expected message types; validate data shape before processing

**Schema JSON Injection Pattern (Safe in Current Context):**
- Issue: Uses `dangerouslySetInnerHTML` for JSON-LD schema injection
- Files: `app/layout.tsx` (line 48), `components/ui/SchemaScript.tsx`
- Current state: Both inject `JSON.stringify()` output of hardcoded business data; not user input
- Risk level: LOW — schemas are generated from static data files only
- Safe because: Schema generation receives no user-controlled input; only called with data from `lib/data/` and `lib/schema.ts`
- Fix approach: No immediate action needed; remains safe as long as schema generation doesn't accept user input

## Performance & Fragile Areas

**Client-Side Hydration Risk in Header:**
- Issue: `Header` component uses `useState` with browser APIs but receives `transparent` prop that affects initial render
- Files: `components/layout/Header.tsx` (lines 21-28, 30-36)
- Current state: Component initializes scroll state on mount; homepage passes `transparent={true}` initially
- Risk: On initial page load, server renders transparent header but client renders scrolled state (false) before hydrating
- Impact: Potential Flash of Wrong Content (FOWC) — header might appear solid briefly then become transparent
- Fix approach: Use `suppressHydrationWarning` on affected elements or move transparent logic to CSS-only approach

**Inefficient Blog Post Loading on Every Build:**
- Issue: `getAllPosts()` reads and parses all MDX files from filesystem on every call
- Files: `lib/blog.ts` (lines 27-59)
- Current state: Called by `generateStaticParams()`, `getRecentPosts()`, `getPostBySlug()` during static generation
- Impact: With 50+ blog posts, this could slow down builds by 5-10 seconds per invocation
- Fix approach: Cache parsed posts during build; implement ISR if blog content changes frequently

**Header Component Size and Complexity:**
- Issue: Single Header component contains 310 lines with desktop nav, mobile drawer, dropdown logic, event handlers
- Files: `components/layout/Header.tsx`
- Current state: Multiple `useEffect` hooks, state management for mobile/dropdown, inline styles
- Impact: Difficult to test; re-renders on every scroll event (mitigated by passive listener); hard to maintain
- Fix approach: Extract mobile drawer to separate component; extract dropdown logic to custom hook; move inline gradient to CSS

**Contact Form Error Handling Vague:**
- Issue: Form catches all errors with generic "Network error" message
- Files: `components/ContactForm.tsx` (lines 53-58)
- Current state: Doesn't distinguish between network timeout, 429 rate limit, 500 server error
- Impact: User doesn't know if they should retry, wait, or call directly
- Fix approach: Parse response status and provide specific error messages (rate limited → "please try again in an hour")

## Missing Critical Features

**Roofr Instant Estimator Not Integrated:**
- Issue: Embed code placeholder not implemented
- Files: `components/roofr/InstantEstimatorEmbed.tsx` (line 64)
- Current state: Shows placeholder UI saying "Brett's embed code goes here"
- Impact: Estimate page shows non-functional calculator; core conversion funnel blocked
- Priority: HIGH
- Fix approach: Add Brett's embed code from Roofr dashboard; test postMessage GA integration works end-to-end

**Project Gallery Empty:**
- Issue: No before/after project images implemented
- Files: `components/sections/ProjectGallery.tsx` (lines 20-43)
- Current state: Renders 6 placeholder cards with "Coming Soon" badges
- Impact: Visual trust signals missing; weakens social proof and competitive positioning
- Priority: HIGH
- Fix approach: Populate with 6-12 project images; add project descriptions, location, date, roof type

**Google Map Embed Missing:**
- Issue: Service area map is placeholder
- Files: `app/contact/page.tsx` (line 94), `components/sections/ServiceAreasMap.tsx`
- Current state: Shows "Google Map — Breeze Roofing service area" placeholder
- Impact: Reduces local SEO signals; hides service radius visibility; harms local search rankings
- Priority: MEDIUM
- Fix approach: Embed Google My Business map or Mapbox with Wilmington service boundaries highlighted

**Team Photo Missing:**
- Issue: About page likely uses ImagePlaceholder instead of team/owner photo
- Files: `app/about/page.tsx`
- Impact: Reduces personal trust connection with owner; weakens "family business" narrative
- Priority: MEDIUM
- Fix approach: Add high-quality photo of Brett and team

## Test Coverage Gaps

**No Tests for Contact Form (Critical):**
- Issue: Contact form and API route have zero test coverage
- Files: `components/ContactForm.tsx`, `app/api/contact/route.ts`
- What's untested:
  - Form submission and validation logic
  - Email sanitization effectiveness (escapeHtml function)
  - Rate limiting behavior with multiple IPs
  - Error scenarios (missing RESEND_API_KEY, network failure, Resend API errors)
  - Honeypot bot detection
  - Email field is truly optional
- Risk: Regression could disable customer contact completely; failures go unnoticed in production
- Priority: HIGH — blocks deployments

**No Tests for Blog System (Medium):**
- Issue: Blog loading, parsing, and static generation untested
- Files: `lib/blog.ts`
- What's untested:
  - Invalid frontmatter handling (missing title, date)
  - Missing blog directory behavior
  - Reading time calculation accuracy
  - Post sorting by date (ascending vs descending)
  - Slug generation with special characters/spaces
  - getAllPosts() performance with 50+ files
- Risk: Bad MDX file could break entire blog or static generation
- Priority: MEDIUM

**No E2E Tests:**
- Issue: No end-to-end test coverage for critical user flows
- Missing coverage:
  - Contact form submission → email delivery
  - Blog post rendering and navigation
  - Service page dynamic routes `[service]` parameter
  - Mobile navigation drawer interaction and closing
  - Rate limiting after 5 requests
- Risk: Breaking changes ship to production unnoticed; customer experience regressions
- Priority: MEDIUM

## Scaling Limitations

**File System Blog Storage:**
- Issue: Blog posts stored as MDX files in `content/blog/`; no CMS or database
- Files: `content/blog/`, `lib/blog.ts`
- Current capacity: Works well for <20 posts; performance acceptable at <50 posts
- Limit: Content updates require redeployment; no real-time publishing possible
- Scaling path: Migrate to headless CMS (Contentful, Sanity, Strapi) or database before exceeding 30+ posts
- Alternative: Keep file-based but implement incremental static regeneration (ISR)

**Static Site Limitations:**
- Issue: Entire site is static HTML; no backend logic or personalization possible
- Current: 43 static pages generated at build time; cannot change without redeploy
- Impact: Cannot implement:
  - Dynamic testimonials based on service area
  - Personalized pricing or financing options
  - Customer account/portal functionality
  - Real-time availability/booking integration
  - A/B testing variants
- Scaling path: If business needs these, migrate to Next.js API routes + database or dedicated backend

**Single API Route:**
- Issue: Only one API route implemented (`/api/contact`)
- Current capacity: Rate-limited to 5 requests/hour per IP; no connection pooling
- Limit: Could handle ~100 contact form submissions/day (conservative)
- Scaling path: If contact volume exceeds 200/day, implement queue system (Bull, RabbitMQ) to offload emails

## Dependencies at Risk

**react-markdown Security Model:**
- Package: `react-markdown` ^10.1.0
- Risk: Renders markdown; could allow script injection if schema escape is bypassed
- Current mitigation: No user-generated markdown; all blog content is controlled files in repo
- Residual risk: If future feature allows user markdown submission, requires explicit sanitization layer (use `remark-gfm` + `rehype-sanitize`)
- Status: LOW RISK in current usage

**gray-matter Error Handling:**
- Package: `gray-matter` ^4.0.3
- Risk: Parses YAML frontmatter; malformed frontmatter could throw uncaught error breaking blog build
- Current error handling: Try/catch in `getAllPosts()` catches directory errors but not parse errors
- Fix approach: Wrap parse call in try/catch; log specific frontmatter errors with line numbers
- Files: `lib/blog.ts` lines 36-37 should be wrapped in try/catch

**Resend Email Service Dependency:**
- Package: `resend` ^6.9.4
- Risk: Contact form completely non-functional if Resend is down or email domain not verified
- Current mitigation: Falls back to 503 error if API key missing; but no fallback if Resend is offline
- Fix approach: Consider email queue + webhook retry; alert on email failures; have manual fallback (copy to support email)

## Data Model Issues

**Company Data Hardcoded (Well-Managed But Limited):**
- Issue: Business info centralized in `lib/data/company.ts` which is good, but still requires code changes
- Files: `lib/data/company.ts` (source of truth); used across `lib/schema.ts`, component files
- Current state: Phone referenced in Header, ContactForm, contact page, estimate page, footer
- Impact: Company changes require code push/rebuild; cannot update without deployment
- Fix approach: Good pattern for now; if company needs to update hours/phone frequently, move to database or Vercel KV

**Service Data Not Fully Centralized:**
- Issue: Service information in `lib/data/services.ts` but descriptions might be duplicated in page files
- Files: `app/services/[service]/page.tsx` references `lib/data/services`
- Risk: Service descriptions could drift between list and detail views over time
- Fix approach: Ensure all service content pulled from single source; audit for duplication

## Browser Compatibility Issues

**No Browser Compatibility Documentation:**
- Issue: No explicit documentation of minimum browser versions supported
- Current state: Using ES2017 target; modern JavaScript (destructuring, arrow functions, async/await)
- Unknown: Whether IE11, older Edge, or older Safari versions tested/supported
- Fix approach: Add `.browserslistrc` file or document minimum versions in README

**useEffect Dependency Arrays Not Verified:**
- Issue: Event listeners added without verification of all dependencies
- Files: `components/layout/Header.tsx` (lines 21-28, 30-36)
- Risk: Missing dependencies could cause stale closures
- Fix approach: Run ESLint rule `exhaustive-deps` to catch missing dependencies

## Monitoring & Observability

**Missing React Error Boundary:**
- Issue: No error boundary component for graceful error UI
- Files: `app/layout.tsx` has no error boundary wrapper
- Impact: Runtime errors in components cause complete white screen crash
- Risk: Bad image import or component error makes entire site unusable
- Fix approach: Create `app/error.tsx` with fallback UI; wrap root layout in ErrorBoundary

**Insufficient Production Logging:**
- Issue: Limited logging in API routes and critical paths
- Files: `app/api/contact/route.ts` (console.error on failures), `lib/blog.ts` (silent errors)
- Current logging: Only logs if RESEND_API_KEY missing or general contact error
- Impact: Production issues invisible; hard to debug contact form failures, rate limiting hits, email delivery issues
- Fix approach: Add structured logging (Pino, Winston); integrate with Vercel Analytics; log response status codes

**No Error Monitoring Service:**
- Issue: Client-side errors not tracked; no error monitoring integration
- Current state: Browser errors just disappear; no visibility into user experience issues
- Impact: Runtime errors and user experience regressions go completely unnoticed
- Fix approach: Integrate Sentry SDK for production error tracking; set up alerts for high error rates

**No Performance Monitoring:**
- Issue: No Web Vitals tracking beyond GA4 stub
- Current state: GA4 integration is stub placeholder
- Impact: Don't know actual Lighthouse scores, Core Web Vitals, First Contentful Paint
- Fix approach: Integrate `next/performance` or Vercel Analytics; monitor in production

## Known Bugs or Workarounds

**Inline Gradient Header Style:**
- Issue: Header background uses inline `style` prop for gradient instead of Tailwind CSS
- Files: `components/layout/Header.tsx` (lines 49-51)
- Current state: `style={{ background: "linear-gradient(to right, #7BA7BC, #A3C4D4, #d4e5ec, #ffffff)" }}`
- Impact: Gradient won't update if theme colors change; harder to maintain; bypasses Tailwind's theming system
- Fix approach: Move to Tailwind CSS variable or CSS module; or use Tailwind `bg-gradient-to-r` with custom stops

**Markdown Images Not Optimized:**
- Issue: `MarkdownContent` component doesn't support images in markdown
- Files: `components/ui/MarkdownContent.tsx` (no `img` component override)
- Current limitation: Images in blog markdown files won't render with `next/image` optimization
- Impact: Images in blog posts load unoptimized; worse Core Web Vitals; slower page speed
- Fix approach: Add `img` component override in ReactMarkdown that uses `next/image` with proper width/height

**No Toast/Notification System:**
- Issue: Form errors only shown as inline alert; no toast notifications
- Files: `components/ContactForm.tsx`
- Impact: Success messages disappear; user might submit form twice thinking it failed
- Fix approach: Add toast library (sonner, react-hot-toast) for persistent feedback

## Deployment Concerns

**Missing .env.example File:**
- Issue: No template for required environment variables
- Files: No `.env.example` in repo root
- Impact: New developers or CI/CD don't know what vars are required; easy to miss RESEND_API_KEY or NEXT_PUBLIC_GA_ID
- Fix approach: Create `.env.example` with all required vars, optional vars, and descriptions:
  ```
  RESEND_API_KEY=re_xxx  # Required for contact form emails
  NEXT_PUBLIC_GA_ID=G_xxx  # Optional for Google Analytics
  NEXT_PUBLIC_DOMAIN=https://breezeroofingnc.com  # Optional; defaults to deployment URL
  ```

**Hardcoded Domain in Metadata:**
- Issue: All metadata and canonical URLs use hardcoded "https://breezeroofingnc.com"
- Files: `app/layout.tsx` (line 20), every page metadata, `lib/schema.ts`
- Current state: Works for production but fails for staging/preview deployments (wrong canonical URL)
- Fix approach: Use environment variable `NEXT_PUBLIC_DOMAIN` with fallback to automatic Vercel deployment URL detection

**TypeScript skipLibCheck Disabled Strict Checking:**
- Issue: `skipLibCheck: true` in `tsconfig.json` masks library type errors
- Files: `tsconfig.json` (line 6)
- Risk: Type errors in dependencies hidden; could cause runtime issues during upgrades
- Impact: Next.js version upgrades might introduce type conflicts but go unnoticed
- Fix approach: Remove line (default is false) or set to false explicitly; fix any type errors that surface

**No Pre-commit Hooks for Linting:**
- Issue: No husky/lint-staged to enforce linting before commits
- Impact: Developers can commit code that fails ESLint; CI doesn't catch issues
- Fix approach: Add husky pre-commit hook; run eslint on staged files

## Performance Concerns

**Large Header Component Re-renders:**
- Issue: Header component re-renders on every scroll event
- Files: `components/layout/Header.tsx` (line 23)
- Current: `handleScroll` called on every scroll; uses passive listener (good) but still updates component state
- Impact: 60+ re-renders per second while scrolling; noticeable on lower-end devices
- Fix approach: Use `requestAnimationFrame` throttling; or move scroll detection to CSS media query

**Unused Dependencies:**
- Issue: Potential unused packages in package.json
- Current packages: `@next/third-parties`, `gray-matter`, `lucide-react`, `next-mdx-remote`, `react-markdown`, `resend`
- Status: All appear to be actively used; no obvious bloat
- Fix approach: Run `depcheck` tool to verify; no immediate action needed

## Version Compatibility

**Next.js 16 (Bleeding Edge):**
- Issue: Project uses Next.js 16.2.1, which is very recent
- Risk: Early version bugs; breaking changes in minor versions; limited third-party library support
- Stability: Works but fewer community best practices/examples available
- Fix approach: Monitor release notes; consider staying one major version behind for production stability

**React 19 (Recent):**
- Issue: Project uses React 19.2.4, released recently
- Risk: New compiler features; potential edge cases with RSC boundaries
- Current: No evident issues; hydration and component structure looks sound
- Fix approach: Monitor React team announcements for any emerging patterns

---

*Concerns audit: 2026-04-03*
