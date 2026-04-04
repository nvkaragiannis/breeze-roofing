# Technology Stack

**Analysis Date:** 2026-04-03

## Languages

**Primary:**
- TypeScript 5 - All source code and configuration
- TSX/JSX - React components and pages

**Secondary:**
- JavaScript - Configuration files (ESM modules)
- CSS - Styling via Tailwind CSS v4

## Runtime

**Environment:**
- Node.js - Development and production

**Package Manager:**
- npm 10+ (inferred from package-lock.json)
- Lockfile: Present (`package-lock.json`)

## Frameworks

**Core:**
- Next.js 16.2.1 - Full-stack React framework with App Router
- React 19.2.4 - Core UI library
- React DOM 19.2.4 - React rendering for web

**Styling:**
- Tailwind CSS v4 - Utility-first CSS framework
- @tailwindcss/postcss 4 - PostCSS plugin for Tailwind v4
- PostCSS - CSS transformation pipeline via `postcss.config.mjs`

**Build & Dev:**
- Turbopack - Build engine (enabled in `next.config.ts`)

## Key Dependencies

**Critical:**
- resend 6.9.4 - Email delivery API client for contact form submissions
- next-mdx-remote 6.0.0 - MDX rendering for blog content
- react-markdown 10.1.0 - Markdown to React component conversion
- gray-matter 4.0.3 - Frontmatter parsing for MDX blog files

**Icons & UI:**
- lucide-react 0.577.0 - Icon library

**Third-Party Integration:**
- @next/third-parties 16.2.1 - Official Next.js integrations (Google Analytics)

## Development Dependencies

**Linting & Type Checking:**
- eslint 9 - JavaScript/TypeScript linting
- eslint-config-next 16.2.1 - Next.js ESLint config with Core Web Vitals rules

**Type Definitions:**
- @types/node 20 - Node.js type definitions
- @types/react 19 - React type definitions
- @types/react-dom 19 - React DOM type definitions

## Configuration Files

**TypeScript:**
- `tsconfig.json` - Strict mode enabled, path aliases configured (`@/*` → root)
- Target: ES2017
- Module resolution: bundler

**Build:**
- `next.config.ts` - Turbopack enabled, image format optimization (WebP), security headers
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS

**Linting:**
- `eslint.config.mjs` - Flat config format with Next.js Core Web Vitals and TypeScript rules

## Environment Configuration

**Runtime Configuration:**
Located in Vercel project settings (`.vercel/project.json` references `projectId: prj_MbESplhj1Fi1TxKVLXo3mwJWmtzL`)

**Required Environment Variables:**

| Variable | Purpose | Scope | Status |
|----------|---------|-------|--------|
| `RESEND_API_KEY` | Email delivery API authentication | Server-side only | Not configured |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID | Public/Client-side | Not configured |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (optional) | Public/Client-side | Not configured |

**Build Configuration:**
- Next.js 16 App Router with static generation
- TypeScript strict mode
- Security headers configured in `next.config.ts`

## Platform Requirements

**Development:**
- Node.js (latest LTS recommended)
- npm or compatible package manager
- Git for version control

**Production:**
- Vercel (deployed to `vercel.com`)
- Project ID: `prj_MbESplhj1Fi1TxKVLXo3mwJWmtzL`
- Organization: `team_KV1a7wqRJTL3kImWVGIZWB6T`
- Domain: `breezeroofingnc.com` (not yet configured, currently on default Vercel domain)

## Output Format

**Build Output:**
- `next build` generates static HTML + optimized bundles
- Turbopack bundling enabled for faster builds
- WebP image optimization for smaller payloads

**Deployment:**
- Vercel deployment pipeline (git-based)
- Environment variables managed in Vercel dashboard

---

*Stack analysis: 2026-04-03*
