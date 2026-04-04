# External Integrations

**Analysis Date:** 2026-04-03

## APIs & External Services

**Email Delivery:**
- Resend - Transactional email service for contact form
  - SDK/Client: `resend` package (v6.9.4)
  - Auth: `RESEND_API_KEY` environment variable
  - Implementation: `app/api/contact/route.ts`
  - Used for: Contact form submissions sent to `Letsgo@breezeroofingnc.com`

**Analytics:**
- Google Analytics 4 - Website traffic and user behavior tracking
  - Integration: `@next/third-parties` GoogleAnalytics component
  - Auth: `NEXT_PUBLIC_GA_ID` environment variable (e.g., `G-XXXXXXXXXX`)
  - Implementation: `app/layout.tsx` (conditionally rendered if GA ID provided)
  - Used for: Page views, user interactions, conversion tracking

## Data Storage

**File System:**
- Local filesystem only - No database or cloud storage
- Blog content: MDX files in `content/blog/` directory
- Data files: TypeScript data modules in `lib/data/`
  - `lib/data/company.ts` - Business information
  - `lib/data/services.ts` - Service catalog
  - `lib/data/areas.ts` - Service areas/cities
  - `lib/data/reviews.ts` - Customer reviews
  - `lib/data/navigation.ts` - Navigation structure

**Static Content:**
- Blog posts: MDX + Frontmatter format parsed by `gray-matter` (v4.0.3)
- Images: Public folder (`public/`) served statically
- CSS: Tailwind-generated utilities

## Authentication & Identity

**Auth Provider:**
- None - Fully static site with no user authentication
- Contact form submits to email without requiring login

**Email Validation:**
- Client-side: Basic email regex validation in contact form
- Server-side: HTML entity escaping + email format validation in `app/api/contact/route.ts`

## Monitoring & Observability

**Error Tracking:**
- None configured - Console logging in route handlers

**Logs:**
- Server logs: `console.error()` in `app/api/contact/route.ts` (contact form errors)
- Vercel platform logs: Available in Vercel dashboard

**Rate Limiting:**
- In-memory rate limiter: 5 requests per hour per IP (`app/api/contact/route.ts`)
- Honeypot field: `website` hidden field to catch bot submissions

## CI/CD & Deployment

**Hosting:**
- Vercel (serverless)
- Organization: `team_KV1a7wqRJTL3kImWVGIZWB6T`
- Project: `breeze_roofing` (ID: `prj_MbESplhj1Fi1TxKVLXo3mwJWmtzL`)
- Live URL: `https://breezeroofing.vercel.app`
- Target domain: `breezeroofingnc.com` (configuration pending)

**CI Pipeline:**
- Git-based deployment: Automatic builds on push to main branch
- Vercel deployment pipeline integrated with GitHub
- Build command: `next build`
- Start command: `next start`
- Dev command: `next dev`

**Build Optimization:**
- Turbopack enabled for faster builds
- Static generation (SSG) for all pages
- Image optimization with WebP format

## Environment Configuration

**Required Environment Variables:**

| Variable | Type | Purpose | Scope | Default |
|----------|------|---------|-------|---------|
| `RESEND_API_KEY` | Secret | Email service authentication | Server-side | Not set (optional) |
| `NEXT_PUBLIC_GA_ID` | Public | Google Analytics measurement ID | Client-side | Not set (optional) |
| `NEXT_PUBLIC_SITE_URL` | Public | Canonical site URL | Client-side | Hardcoded in `app/layout.tsx` |

**Configuration Location:**
- Vercel Environment Variables: Managed in Vercel dashboard
- Access: `vercel env` CLI commands

**Secrets Storage:**
- Vercel secure environment (encrypted at rest)
- Never committed to git (`.env*` files in .gitignore)

## Webhooks & Callbacks

**Incoming Webhooks:**
- None implemented

**Outgoing Webhooks:**
- Resend callbacks: Not currently utilized
- Google Analytics: Pageview tracking only (no custom webhooks)

## Data Flow: Contact Form

**Submission Flow:**

1. User fills contact form on `/contact` page
2. Form validates required fields (name, phone, message)
3. Honeypot check: If `website` field populated, return fake success (bot)
4. IP-based rate limiting: Max 5 requests per hour per IP
5. HTML sanitization: All inputs escaped to prevent injection
6. Email sent via Resend API to `Letsgo@breezeroofingnc.com`
7. Success response returned to client

**Implementation:**
- Route handler: `app/api/contact/route.ts`
- Client form component: Located in `components/`
- Email template: HTML generated server-side with escaped values

## Schema & Structured Data

**JSON-LD Schemas Implemented:**

Generated via `lib/schema.ts` functions, injected into page `<head>`:

- `RoofingContractor` (LocalBusiness) - Homepage and service pages
- `Service` - Individual service pages (`/services/[service]`)
- `Article` - Blog posts (`/blog/[slug]`)
- `FAQPage` - FAQ page (`/faq`)
- `BreadcrumbList` - Navigation breadcrumbs
- `Review` - Customer reviews (from `lib/data/reviews.ts`)
- `AggregateRating` - Star ratings

**Purpose:**
- SEO: Rich snippets in Google Search results
- Local Business: Maps, knowledge panel optimization
- Content metadata: Article publication dates, authors

**Data Source:**
- Hardcoded business data: `lib/data/company.ts`
- Reviews: `lib/data/reviews.ts`
- Services: `lib/data/services.ts`

## Content Management

**Blog System:**
- Format: MDX files with YAML frontmatter
- Location: `content/blog/*.mdx`
- Parser: `gray-matter` for frontmatter extraction
- Renderer: `next-mdx-remote` for MDX → React component conversion

**Frontmatter Fields:**
- `title` - Blog post title
- `description` - SEO meta description
- `date` - Publication date (ISO format)
- `author` - Article author
- `category` - Content category (optional)
- `tags` - Content tags (optional)

**Blog Processing:**
- File reading: `lib/blog.ts` functions
- `getAllPosts()` - Fetch all blog posts (sorted by date)
- `getPostBySlug(slug)` - Fetch single post by URL slug
- `getRecentPosts(count)` - Fetch N most recent posts

## Security Considerations

**Headers Set in `next.config.ts`:**

| Header | Value | Purpose |
|--------|-------|---------|
| `X-Frame-Options` | DENY | Prevent clickjacking |
| `X-Content-Type-Options` | nosniff | Prevent MIME type sniffing |
| `Referrer-Policy` | strict-origin-when-cross-origin | Control referrer leakage |
| `X-DNS-Prefetch-Control` | on | Enable DNS prefetching |
| `Strict-Transport-Security` | max-age=63072000; includeSubDomains; preload | HSTS enforcement (2 years) |
| `Permissions-Policy` | camera=(), microphone=(), geolocation=() | Deny sensitive permissions |

**Contact Form Security:**

- HTML entity escaping: All user inputs escaped before email rendering
- Email validation: Regex check for valid email format
- Rate limiting: 5 requests per IP per hour
- Honeypot field: Hidden `website` field to catch bots
- Length validation: Input field max lengths enforced
- CORS: Same-origin only (POST to `/api/contact`)

---

*Integration audit: 2026-04-03*
