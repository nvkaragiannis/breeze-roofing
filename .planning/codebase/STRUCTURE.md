# Codebase Structure

**Analysis Date:** 2026-04-03

## Directory Layout

```
breeze_roofing/
├── app/                              # Next.js App Router (routes, layouts, metadata)
│   ├── layout.tsx                    # Root layout (HTML shell, fonts, GA, metadata)
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Tailwind CSS imports
│   ├── favicon.ico                   # Site icon
│   ├── robots.ts                     # robots.txt generation
│   ├── sitemap.ts                    # sitemap.xml generation
│   ├── not-found.tsx                 # 404 page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts              # POST endpoint for contact form
│   ├── services/
│   │   ├── page.tsx                  # Services listing page
│   │   └── [service]/
│   │       └── page.tsx              # Dynamic service detail page
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx              # Dynamic blog post page
│   ├── areas/
│   │   ├── page.tsx                  # Service areas listing
│   │   └── [city]/
│   │       └── page.tsx              # Dynamic city/area detail
│   ├── about/
│   │   └── page.tsx                  # About company
│   ├── contact/
│   │   └── page.tsx                  # Contact page
│   ├── estimate/
│   │   └── page.tsx                  # Free estimate request page
│   ├── faq/
│   │   └── page.tsx                  # FAQ page
│   ├── financing/
│   │   └── page.tsx                  # Financing options
│   ├── leaf-solutions/
│   │   └── page.tsx                  # Leaf Solutions gutter product
│   ├── roofing-products/
│   │   └── page.tsx                  # Roofing products page
│   ├── privacy-policy/
│   │   └── page.tsx                  # Privacy policy
│   └── terms/
│       └── page.tsx                  # Terms of service
├── components/
│   ├── ContactForm.tsx               # Form component (use client)
│   ├── layout/
│   │   ├── Header.tsx                # Navigation header
│   │   ├── Footer.tsx                # Site footer
│   │   └── MobileCTABar.tsx           # Mobile call-to-action sticky bar
│   ├── sections/
│   │   ├── Hero.tsx                  # Homepage hero section
│   │   ├── TrustBar.tsx               # Trust badges row
│   │   ├── FortifiedCallout.tsx       # Fortified Roof callout
│   │   ├── ServicesGrid.tsx           # Services grid display
│   │   ├── WhyBreeze.tsx              # Why Breeze section
│   │   ├── ReviewsSection.tsx         # Customer reviews display
│   │   ├── ProjectGallery.tsx         # Project image gallery
│   │   ├── ServiceAreasMap.tsx        # Service areas map
│   │   ├── CoastalExpertise.tsx       # Coastal expertise section
│   │   ├── EstimateSection.tsx        # CTA for free estimates
│   │   ├── BlogPreview.tsx            # Recent blog posts preview
│   │   └── EmergencyCTA.tsx           # Emergency 24/7 CTA
│   ├── roofr/
│   │   └── [Roofr embed components]   # Roofr Instant Estimator integration
│   └── ui/
│       ├── Button.tsx                # Reusable button component
│       ├── BreadcrumbNav.tsx          # Breadcrumb navigation
│       ├── ServiceCard.tsx            # Service card display
│       ├── BlogCard.tsx               # Blog post card
│       ├── AreaCard.tsx               # Service area card
│       ├── ReviewCard.tsx             # Customer review card
│       ├── TrustBadge.tsx             # Trust badge (certified, insured, etc.)
│       ├── MarkdownContent.tsx        # Renders markdown/MDX content
│       ├── SchemaScript.tsx           # Injects JSON-LD schema
│       ├── ImagePlaceholder.tsx       # Fallback for missing images
│       └── [Other UI atoms]
├── lib/
│   ├── schema.ts                     # JSON-LD schema generators
│   ├── blog.ts                       # Blog post file reading and parsing
│   ├── utils.ts                      # Utility functions (cn, formatCityName, etc.)
│   └── data/
│       ├── company.ts                # Company metadata (name, phone, address, hours)
│       ├── services.ts               # All service definitions and content
│       ├── areas.ts                  # All service area definitions
│       ├── reviews.ts                # Customer review data
│       └── navigation.ts             # Navigation menu data
├── content/
│   └── blog/
│       └── *.md, *.mdx               # Blog post markdown files with frontmatter
├── public/
│   ├── [images]                      # Hero, service photos, testimonials
│   └── [favicon, OG images]
├── .planning/
│   └── codebase/                     # This analysis goes here
├── node_modules/
├── .next/                            # Build output (generated)
├── .git/
├── package.json                      # Dependencies (Next.js, React, Tailwind, Resend, etc.)
├── tsconfig.json                     # TypeScript config
├── next.config.ts                    # Next.js config (Turbopack, image formats, security headers)
├── tailwind.config.ts                # Tailwind configuration
├── postcss.config.ts                 # PostCSS config for Tailwind
├── .eslintrc.json                    # ESLint rules
└── README.md, CLAUDE.md, AGENTS.md   # Documentation

```

## Directory Purposes

**`app/`:**
- Purpose: Next.js App Router routes, layouts, error pages
- Contains: page.tsx files, layout.tsx, error.tsx, not-found.tsx, route handlers
- Key files: `app/layout.tsx` (root), `app/page.tsx` (homepage), `app/api/contact/route.ts` (email API)

**`components/`:**
- Purpose: Reusable React components split by type
- Contains: Sections (homepage building blocks), UI (atoms/molecules), Layout (header/footer), Forms
- Key files: `components/sections/Hero.tsx`, `components/ui/Button.tsx`, `components/layout/Header.tsx`

**`components/layout/`:**
- Purpose: Persistent layout components across all pages
- Contains: Header (navigation), Footer (links), MobileCTABar (sticky CTA)
- Exported by: All page files

**`components/sections/`:**
- Purpose: Homepage-specific section components
- Contains: Hero, ServicesGrid, ReviewsSection, ProjectGallery, etc.
- Used by: `app/page.tsx` only

**`components/ui/`:**
- Purpose: Reusable UI primitives and utility components
- Contains: Button, Card, Badge, BreadcrumbNav, MarkdownContent, SchemaScript
- Used by: All pages and sections

**`lib/`:**
- Purpose: Utility functions, schema generators, data access
- Contains: blog.ts (file reading), schema.ts (JSON-LD), utils.ts (helpers)
- Key files: `lib/data/services.ts` (all services), `lib/data/company.ts` (business info)

**`lib/data/`:**
- Purpose: Central data store for business content
- Contains: Const arrays and objects for services, areas, reviews, company info
- Used by: All components that need to display content
- Pattern: TypeScript interfaces + exported const data, no mutations

**`content/blog/`:**
- Purpose: Store blog post markdown/MDX files with gray-matter frontmatter
- Contains: Individual .md/.mdx files (one per post)
- Read by: `lib/blog.ts` (getAllPosts(), getPostBySlug())
- Format: YAML frontmatter (title, date, author, description, tags) followed by markdown content

**`public/`:**
- Purpose: Static assets served directly by Next.js
- Contains: Images (hero bg, service photos, testimonials), favicon, OG images
- Accessed: Via `/filename` in src/href attributes

**`next.config.ts`:**
- Purpose: Next.js configuration
- Contains: Turbopack config, image formats (WebP), security headers (CSP, X-Frame-Options, etc.)

**`tailwind.config.ts`:**
- Purpose: Tailwind CSS theme and plugin configuration
- Contains: Custom colors (navy, amber, emergency), font family (Inter)
- Used by: All components via className attributes

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: Root layout wrapping all pages
- `app/page.tsx`: Homepage
- `app/api/contact/route.ts`: Contact form endpoint

**Configuration:**
- `package.json`: Dependencies and scripts
- `tsconfig.json`: TypeScript settings
- `next.config.ts`: Next.js and security settings
- `tailwind.config.ts`: Design system (colors, spacing, fonts)

**Core Logic:**
- `lib/schema.ts`: Schema.org JSON-LD generation (LocalBusiness, FAQPage, Article, etc.)
- `lib/blog.ts`: Blog post file system reading and parsing
- `lib/data/services.ts`: Service definitions and markdown content
- `lib/data/company.ts`: Company metadata (single source of truth)

**Pages:**
- `app/services/page.tsx`: Services directory
- `app/services/[service]/page.tsx`: Dynamic service detail (uses generateStaticParams)
- `app/blog/page.tsx`: Blog directory
- `app/blog/[slug]/page.tsx`: Dynamic blog post (uses generateStaticParams)
- `app/areas/[city]/page.tsx`: Dynamic service area detail

**Components:**
- `components/layout/Header.tsx`: Site navigation
- `components/layout/Footer.tsx`: Site footer
- `components/sections/Hero.tsx`: Homepage hero
- `components/ui/Button.tsx`: Button component
- `components/ContactForm.tsx`: Contact form (use client)

**Testing:**
- Not present (no tests in project)

## Naming Conventions

**Files:**
- PascalCase: React components (`Button.tsx`, `Header.tsx`, `ServicesGrid.tsx`)
- camelCase: Functions, utilities (`cn.ts`, `blog.ts`, `schema.ts`)
- kebab-case: Routes (`residential-roofing`, `leaf-solutions`, `service-areas`)
- UPPERCASE: HTML documents in `content/blog/` use same slug naming as routes

**Directories:**
- kebab-case: Route segments (`app/services/`, `app/blog/`, `app/leaf-solutions/`)
- camelCase: Component subdirectories (`components/ui/`, `components/layout/`, `components/sections/`)
- snake_case: Image files (`residential_roofing_pic.jpeg`, `commericla_roofing_pic.webp`)

**Functions:**
- camelCase for all exports: `getServiceBySlug()`, `getBreadcrumbSchema()`, `getAllPosts()`
- prefix with get/format/is: `getRecentPosts()`, `formatCityName()`, `isRateLimited()`

**Types:**
- PascalCase: `Service`, `BlogPost`, `Area`, `Review`, `Company`, `ServiceFAQ`
- Suffixed with type: `ServiceFAQ`, `BlogPost` (clear intent)

**CSS Classes:**
- Tailwind utility classes only (no custom CSS classes)
- No BEM or other naming scheme needed
- Semantic class names where required: `skip-to-content` (accessibility), `main-content` (semantic HTML)

## Where to Add New Code

**New Feature (e.g., new service offering):**
- Primary code: Add new object to `lib/data/services.ts` with slug, title, content, FAQs
- Tests: Not applicable (no test suite)
- Dynamic route generates automatically via `generateStaticParams()`
- Images: Add to `public/` and reference in service object

**New Page/Route (e.g., new static page):**
- Primary code: Create `app/new-route/page.tsx` with layout structure (Header, main, Footer)
- Metadata: Export `const metadata: Metadata = {...}` at top of file
- Sections: Create reusable section components in `components/sections/` if complex
- Schema: Add schema generator in `lib/schema.ts` if SEO-critical
- Location: Match directory structure to URL (e.g., `/services/residential` → `app/services/[service]/page.tsx`)

**New Component/Module (e.g., reusable card variant):**
- Implementation: `components/ui/` for UI primitives, `components/sections/` for page sections
- Props: TypeScript interfaces (all props typed)
- Pattern: Prefer Server Components; use `"use client"` only for interactivity
- Exports: Named export, not default

**Utilities/Helpers:**
- Shared helpers: `lib/utils.ts` (cn, formatCityName, formatPhoneDisplay)
- Schema helpers: `lib/schema.ts` (schema generator functions)
- Data access: `lib/blog.ts` for file-based content reading

**New Blog Post:**
- File: Create `content/blog/my-post-slug.md` or `.mdx`
- Frontmatter: Must include title, date, description, author (see existing posts for format)
- Markdown: Write content as markdown; MDX support means you can embed React components
- URL: `/blog/my-post-slug` (derived from filename)
- Listing: Automatically appears on `/blog` page via `getAllPosts()`

## Special Directories

**`.next/`:**
- Purpose: Build output (generated by `next build`)
- Generated: Yes (by Next.js)
- Committed: No (.gitignore)
- Contains: Pre-rendered pages, server functions, manifest files

**`node_modules/`:**
- Purpose: npm dependencies
- Generated: Yes (by `npm install`)
- Committed: No (.gitignore)
- Update: `npm install` after changing package.json

**`public/`:**
- Purpose: Static assets (images, favicon)
- Generated: No (manually added)
- Committed: Yes (images are source material)
- Access: `/filename` URLs map directly to `public/filename`

**`content/blog/`:**
- Purpose: Blog post source files
- Generated: No (manually created)
- Committed: Yes (content is source material)
- Format: Markdown/MDX with YAML frontmatter

**`.planning/codebase/`:**
- Purpose: Architecture documentation (this file)
- Generated: No (manually maintained)
- Committed: Yes (guidance for future work)

---

*Structure analysis: 2026-04-03*
