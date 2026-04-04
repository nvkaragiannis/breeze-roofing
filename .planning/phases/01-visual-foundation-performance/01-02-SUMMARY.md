---
phase: 01-visual-foundation-performance
plan: 02
subsystem: image-optimization-monitoring
tags: [performance, monitoring, infrastructure, seo]
requirements:
  - SEO-09
  - SEO-10
  - SEO-01
provides:
  - AVIF image format optimization with WebP fallback
  - Real-user performance monitoring via Vercel Analytics
  - Core Web Vitals tracking via Speed Insights
  - Organized image directory structure for scalability
affects:
  - All pages rendering images (service pages, header, footer, leaf-solutions, financing)
  - Build configuration (next.config.ts)
  - Root layout (app/layout.tsx)
dependency_graph:
  requires: []
  provides: [image-optimization-config, performance-monitoring, image-directory-structure]
  affects: [all-service-pages, layout-components, build-process]
tech_stack:
  added:
    - "@vercel/analytics@^2.0.0"
    - "@vercel/speed-insights@^2.0.0"
  patterns:
    - AVIF-first image serving with automatic WebP fallback
    - Zero-config performance monitoring (auto-detects Vercel deployment)
    - Organized public/images/ directory structure by content type
key_files:
  created:
    - public/images/hero/.gitkeep
    - public/images/projects/.gitkeep
    - public/images/areas/.gitkeep
    - public/images/services/ (directory with 13 images)
    - public/images/brand/ (directory with logo)
  modified:
    - next.config.ts
    - app/layout.tsx
    - lib/data/services.ts
    - components/layout/Header.tsx
    - components/layout/Footer.tsx
    - app/leaf-solutions/page.tsx
    - app/financing/page.tsx
    - package.json
    - package-lock.json
decisions:
  - "AVIF format prioritized over WebP for 20-50% size reduction (browsers without AVIF support automatically fall back to WebP)"
  - "Analytics and Speed Insights placed at end of body tag for non-blocking performance monitoring"
  - "Product images renamed with semantic kebab-case (leaf-solution-*, momnt-financing-banner) for better maintainability"
  - "Empty directories (hero, projects, areas) include .gitkeep files for git tracking"
metrics:
  duration_minutes: 5
  tasks_completed: 2
  files_modified: 9
  images_organized: 13
  completed_at: "2026-04-04T00:54:43Z"
---

# Phase 01 Plan 02: Image Optimization Infrastructure and Monitoring Summary

**One-liner:** AVIF image format enabled with WebP fallback, Vercel Analytics and Speed Insights installed for Core Web Vitals monitoring, and all images reorganized into semantic directory structure.

## What Was Built

This plan established the image optimization and performance monitoring foundation for the Breeze Roofing site. AVIF format reduces image payload by 20-50% compared to WebP (critical for LCP improvement targeting SEO-01). Vercel Analytics and Speed Insights provide real-user Core Web Vitals data to track performance in production. The organized image directory structure prevents file sprawl as real project photos are added in future phases.

**Key capabilities delivered:**
- AVIF-first image serving with automatic WebP fallback for older browsers
- Real-user performance monitoring automatically enabled in production
- Semantic image organization (hero, projects, services, areas, brand)
- All 13 existing images relocated and all references updated across codebase

## Tasks Completed

| # | Task | Status | Commit | Files Changed |
|---|------|--------|--------|---------------|
| 1 | Install monitoring packages and enable AVIF | ✅ Complete | 0ba56a5* | next.config.ts, app/layout.tsx, package.json, package-lock.json |
| 2 | Organize image directory structure and relocate existing images | ✅ Complete | d4a581b | 22 files (9 modified, 13 moved/renamed) |

*Task 1 work was already committed in previous 01-01 execution (deviation documented below).

## Deviations from Plan

### Pre-completed Work (Task 1)

**Found during:** Task 1 execution start
**Issue:** Task 1 changes (AVIF format in next.config.ts, Analytics/SpeedInsights in app/layout.tsx, package installations) were already present in HEAD commit 0ba56a5 from previous 01-01 plan execution
**Resolution:** Verified changes were correct and build succeeded. Documented as deviation and continued to Task 2 (no re-commit needed since work was already correctly completed)
**Impact:** No functional impact — all Task 1 objectives were met. Task 2 proceeded normally.

### Additional Image Renaming (Task 2 — Rule 2: Critical Functionality)

**Found during:** Task 2 image relocation
**Issue:** Product image filenames contained URL-encoded characters and non-semantic naming (e.g., `Leaf+Solution+SELF+SHED+DEBRIS+USE-1920w.webp`, `56843992-0-new-wave-miter-1-1000x516-1920w.webp`)
**Fix:** Renamed to semantic kebab-case during move:
  - `Leaf+Solution+SELF+SHED+DEBRIS+USE-1920w.webp` → `leaf-solution-self-shed-debris.webp`
  - `SELF+SHEDDING+with+shingles+Xtreme+USE+copy-1920w.webp` → `leaf-solution-self-shedding-xtreme.webp`
  - `56843992-0-new-wave-miter-1-1000x516-1920w.webp` → `leaf-solution-new-wave-miter.webp`
  - `momnt-web-banner-1650x320-statement.webp` → `momnt-financing-banner.webp`
**Rationale:** Rule 2 (critical functionality) — semantic filenames improve maintainability and prevent confusion as more product images are added
**Files modified:** app/leaf-solutions/page.tsx, app/financing/page.tsx
**Commit:** d4a581b (combined with Task 2)

## Technical Implementation

### AVIF Configuration (next.config.ts)

```typescript
images: {
  formats: ["image/avif", "image/webp"],
}
```

AVIF listed first so browsers that support it receive smaller files. Browsers without AVIF support automatically fall back to WebP (Next.js Image component handles negotiation via Accept header).

### Analytics Integration (app/layout.tsx)

```tsx
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// ... inside <body> tag, after GoogleAnalytics
<Analytics />
<SpeedInsights />
```

Both components auto-detect Vercel deployment environment. They render nothing in local dev (no environment variables needed). In production, they collect:
- **Analytics:** Page views, user interactions, custom events
- **Speed Insights:** Real-user Core Web Vitals (LCP, FID, CLS, FCP, TTFB)

### Image Directory Structure

```
public/images/
├── hero/          # Hero/banner images (priority loaded) — empty, .gitkeep
├── projects/      # Before/after gallery photos — empty, .gitkeep
├── services/      # Service page images — 13 images relocated here
├── areas/         # Area-specific landmark photos — empty, .gitkeep
└── brand/         # Logo and branding assets — logo relocated here
```

All image references updated across 7 files to match new paths (`/images/services/*`, `/images/brand/*`).

## Verification Results

**Build verification:**
```bash
npx next build
```
✅ Build succeeded with no errors. All image paths resolved correctly.

**Image structure verification:**
```bash
ls public/images/services/  # 13 images present
ls public/images/brand/     # 1 logo present
ls public/images/hero/ public/images/projects/ public/images/areas/  # .gitkeep files present
```
✅ All directories created and populated as specified.

**Image reference verification:**
```bash
grep -rn "residential_roofing_pic\|breeze_roofing_logo\|Leaf+Solution" app/ components/ lib/
```
✅ All image references updated to new paths.

## Requirements Fulfilled

- **SEO-09:** Image format optimization enabled (AVIF with WebP fallback) → 20-50% payload reduction
- **SEO-10:** Performance monitoring installed (Vercel Analytics + Speed Insights) → Real-user Core Web Vitals tracking
- **SEO-01:** Image optimization infrastructure in place to support LCP <2.5s target

## Success Criteria Met

- [x] AVIF format enabled in next.config.ts (with WebP fallback)
- [x] @vercel/analytics and @vercel/speed-insights installed and rendering in layout
- [x] All existing images relocated to organized public/images/ subdirectories
- [x] All image references in codebase updated to new paths
- [x] Build succeeds cleanly
- [x] Empty directories have .gitkeep files for git tracking

## Decisions Made

1. **AVIF-first image format strategy:** AVIF listed before WebP in next.config.ts formats array so browsers with AVIF support get the smallest possible files (20-50% smaller than WebP). Next.js Image component handles automatic fallback negotiation.

2. **Analytics placement at end of body:** Analytics and SpeedInsights components placed as last children in body tag (after GoogleAnalytics) to avoid blocking render-critical resources. Both components are async by design.

3. **Semantic image filename convention:** Product images renamed to kebab-case with semantic prefixes (leaf-solution-*, momnt-financing-banner) rather than preserving vendor filenames. Improves maintainability as product catalog grows.

4. **Directory structure by content type:** Images organized by use case (hero, projects, services, areas, brand) rather than by page or file type. This structure scales better as content grows and makes it clear which images are priority-loaded vs lazy-loaded.

## Next Steps

With image optimization infrastructure in place, Phase 01 can proceed with:
- **Plan 03:** Visual design implementation (color scheme, typography, component styling)
- **Plan 04:** Hero section and real project photo integration (depends on Brett providing photos)
- **Plan 05:** Performance audit and Core Web Vitals baseline measurement (using Speed Insights data)

## Self-Check: PASSED

**Created files exist:**
```bash
[ -f "public/images/hero/.gitkeep" ] && echo "FOUND: public/images/hero/.gitkeep"
[ -f "public/images/projects/.gitkeep" ] && echo "FOUND: public/images/projects/.gitkeep"
[ -f "public/images/areas/.gitkeep" ] && echo "FOUND: public/images/areas/.gitkeep"
[ -f "public/images/services/residential_roofing_pic.jpeg" ] && echo "FOUND: public/images/services/residential_roofing_pic.jpeg"
[ -f "public/images/brand/breeze_roofing_logo_white_background.jpeg" ] && echo "FOUND: public/images/brand/breeze_roofing_logo_white_background.jpeg"
```

**Commits exist:**
```bash
git log --oneline --all | grep -q "0ba56a5" && echo "FOUND: 0ba56a5"
git log --oneline --all | grep -q "d4a581b" && echo "FOUND: d4a581b"
```

**Configuration changes verified:**
```bash
grep -q "image/avif" next.config.ts && echo "FOUND: AVIF format in next.config.ts"
grep -q "@vercel/analytics" app/layout.tsx && echo "FOUND: Analytics import in layout"
grep -q "SpeedInsights" app/layout.tsx && echo "FOUND: SpeedInsights component in layout"
```

All verification checks passed.
