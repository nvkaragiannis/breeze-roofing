# Architecture

**Analysis Date:** 2026-04-03

## Pattern Overview

**Overall:** Static Site Generation (SSG) with file-based routing, data-driven content, and minimal client-side interactivity.

**Key Characteristics:**
- Pure marketing site: no database, no CMS, no backend state
- Content sourced from TypeScript data files and MDX files
- All pages either fully static or use `generateStaticParams()` for dynamic routes
- Client components used sparingly for form submission and state management only
- Server-side schema generation for SEO (JSON-LD structured data)

## Layers

**Presentation Layer:**
- Purpose: Render pages with layout components, sections, and UI primitives
- Location: `app/` (page.tsx files), `components/` (sections, layout, ui)
- Contains: Server and Client components, page layouts, reusable UI elements
- Depends on: Data layer for content, lib/schema for structured data
- Used by: Next.js routing system

**Data Layer:**
- Purpose: Provide structured, type-safe access to company data, services, areas, and blog posts
- Location: `lib/data/` (services.ts, areas.ts, company.ts, reviews.ts, navigation.ts), `lib/blog.ts`
- Contains: Exported constants for services, areas, company info, reviews; functions for blog reading
- Depends on: File system (lib/blog.ts reads MDX/MD files from `content/blog/`)
- Used by: All page components and schema generators

**Routing Layer:**
- Purpose: Map URLs to content using Next.js App Router conventions
- Location: `app/` directory structure
- Contains: Page files (page.tsx), dynamic routes ([param]), error handlers, metadata
- Depends on: Data layer, presentation layer
- Used by: Next.js runtime

**Schema Layer:**
- Purpose: Generate JSON-LD structured data for SEO (LocalBusiness, FAQ, Article, Review, etc.)
- Location: `lib/schema.ts`
- Contains: Functions that transform domain objects into Schema.org JSON
- Depends on: Data layer (company, services, reviews)
- Used by: Page components via `<SchemaScript>` components

**API Layer:**
- Purpose: Handle server-side operations (email submission, rate limiting)
- Location: `app/api/contact/route.ts`
- Contains: POST endpoint for contact form, validation, rate limiting, email delivery
- Depends on: Resend SDK for email
- Used by: Client-side ContactForm component

## Data Flow

**Homepage Load:**

1. `app/page.tsx` renders as default export (Server Component)
2. Calls `getRecentPosts(3)` → reads from `content/blog/*.{md,mdx}` via `lib/blog.ts`
3. Calls `getReviewSchema(reviews)` → transforms `lib/data/reviews.ts` into JSON-LD
4. Imports section components (Hero, ServicesGrid, etc.) from `components/sections/`
5. Each section component imports data from `lib/data/` (services, areas, company)
6. Renders HTML with JSON-LD `<script type="application/ld+json">` tags
7. User receives fully rendered HTML (no hydration needed for most content)

**Dynamic Service Page Load:**

1. `app/services/[service]/page.tsx` receives `params: Promise<{ service: string }>`
2. Calls `generateStaticParams()` → returns all service slugs from `lib/data/services.ts`
3. Awaits params, calls `getServiceBySlug(slug)` → finds service object
4. If not found, calls `notFound()` → renders 404
5. Generates breadcrumb, service, and FAQ schemas from service object
6. Renders ServicePage with content, areas served, FAQs
7. Page is statically pre-rendered at build time

**Contact Form Submission:**

1. User fills form in `components/ContactForm.tsx` (Client Component)
2. Form submitted → `handleSubmit()` serializes form fields
3. Fetches POST `/api/contact` with JSON body
4. Route handler in `app/api/contact/route.ts`:
   - Extracts IP from headers, checks rate limit
   - Validates form fields (required, length, email format)
   - Sanitizes HTML in inputs (prevents XSS in email)
   - Calls `resend.emails.send()` with sanitized data
   - Returns success or error JSON
5. Client updates formState and shows success/error message

**Blog Post Load:**

1. `app/blog/[slug]/page.tsx` receives `params: Promise<{ slug: string }>`
2. Calls `generateStaticParams()` → returns all blog post slugs
3. Awaits params, calls `getPostBySlug(slug)` → reads MDX file, parses frontmatter
4. Generates breadcrumb and article schemas
5. Renders BlogPostPage with title, date, content, author
6. Calls `getRelatedServices(post.tags)` → scores services by tag match
7. Renders related services grid at bottom

**State Management:**

- **Server-side:** None (all data is static)
- **Client-side:** ContactForm uses `useState` for form submission status
- No global state manager needed (Zustand, Redux, Context API not used)
- Data fetched once at build time via `getAllPosts()`, cached by Next.js

## Key Abstractions

**Service Object:**
- Purpose: Represents a single roofing service (Residential Roofing, Fortified Roof, etc.)
- Examples: `lib/data/services.ts` (array of Service types)
- Pattern: TypeScript interface with `slug`, `title`, `description`, `icon`, `content` (markdown), `faqs` array; exported as const array

**BlogPost Object:**
- Purpose: Represents a blog article with metadata and content
- Examples: `lib/blog.ts` (BlogPost interface and functions)
- Pattern: Parsed from MDX frontmatter using `gray-matter`; cached by reading file system once

**Area Object:**
- Purpose: Represents a service area (city/region)
- Examples: `lib/data/areas.ts` (array of Area types)
- Pattern: TypeScript interface with `slug`, `city`, `state`, and area-specific content

**Company Object:**
- Purpose: Central source of truth for business info (name, phone, address, hours)
- Examples: `lib/data/company.ts` (exported as const)
- Pattern: Immutable object used by layout components, schema generators, and routing

**Section Component:**
- Purpose: Reusable page section that may compose UI components and data
- Examples: `components/sections/Hero.tsx`, `components/sections/ServicesGrid.tsx`
- Pattern: Server Component that imports data from `lib/data/`, renders HTML with Tailwind classes

**Schema Generator Functions:**
- Purpose: Transform domain objects into JSON-LD for search engines
- Examples: `getLocalBusinessSchema()`, `getServiceSchema()`, `getArticleSchema()` in `lib/schema.ts`
- Pattern: Pure functions returning JSON objects; called in page layouts

## Entry Points

**Homepage:**
- Location: `app/page.tsx`
- Triggers: GET /
- Responsibilities: Render hero, services grid, reviews, blog preview; inject GA tracking; set canonical metadata

**Dynamic Service Page:**
- Location: `app/services/[service]/page.tsx`
- Triggers: GET /services/{slug}
- Responsibilities: Render service detail, FAQs, areas served; generate service schema; handle 404

**Dynamic Blog Post:**
- Location: `app/blog/[slug]/page.tsx`
- Triggers: GET /blog/{slug}
- Responsibilities: Render blog post, related services; generate article schema; handle 404

**Contact API:**
- Location: `app/api/contact/route.ts`
- Triggers: POST /api/contact
- Responsibilities: Validate form, rate limit, sanitize, send email via Resend

**Root Layout:**
- Location: `app/layout.tsx`
- Triggers: Wraps all pages
- Responsibilities: Set global metadata, load fonts, inject GA snippet, render skip-to-content link

**Not Found:**
- Location: `app/not-found.tsx`
- Triggers: GET on non-existent route
- Responsibilities: Render 404 page with navigation

## Error Handling

**Strategy:** Silent fallback for optional features, explicit user messaging for form failures.

**Patterns:**

- **Blog missing:** `lib/blog.ts` checks `blogDirExists()` and returns empty array if `content/blog/` doesn't exist
- **Resend not configured:** `app/api/contact/route.ts` checks for `RESEND_API_KEY` and returns 503 with user-friendly message
- **Page not found:** Dynamic routes call `notFound()` if entity not found → renders `app/not-found.tsx`
- **Form submission error:** Catch block in ContactForm catches network or server errors, displays error message to user
- **GA not configured:** `app/layout.tsx` conditionally renders GoogleAnalytics only if `NEXT_PUBLIC_GA_ID` env var is set

## Cross-Cutting Concerns

**Logging:**
- Approach: Console.error for server-side issues (missing env vars, contact form errors)
- Location: `app/api/contact/route.ts` logs errors before returning 500 response

**Validation:**
- Approach: Client-side HTML5 (required fields), server-side strict validation in contact endpoint
- Pattern: Email regex validation, length checks (name <200, phone <50, message <5000), honeypot field (bot trap)
- Location: `app/api/contact/route.ts`

**Authentication:**
- Approach: Not applicable (public marketing site)
- Substitute: Rate limiting on contact endpoint (5 requests per IP per hour)

**Security:**
- CSP headers set via `next.config.ts` (X-Frame-Options: DENY, X-Content-Type-Options: nosniff, etc.)
- HTML sanitization: `escapeHtml()` in contact endpoint prevents XSS in email body
- Honeypot field traps bot submissions
- Rate limiting prevents contact form abuse

**SEO:**
- Structured data: JSON-LD schemas injected via `<SchemaScript>` components
- Static metadata: Set via `export const metadata` in page files
- Dynamic metadata: Generated via `generateMetadata()` functions for dynamic routes
- Canonical URLs: Set in metadata.alternates.canonical
- Robots: Indexed via `robots.ts`, sitemap via `sitemap.ts`

**Performance:**
- Static generation at build time for all pages
- Image optimization via `next/image` (WebP format configured in `next.config.ts`)
- CSS-in-JS via Tailwind (utility classes only, no CSS-in-JS library)
- Font optimization via `next/font/google` (Inter with display: swap)
- No unnecessary JavaScript on non-form pages

---

*Architecture analysis: 2026-04-03*
