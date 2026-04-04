# Phase 1: Visual Foundation & Performance - Research

**Researched:** 2026-04-03
**Domain:** Visual design systems, image optimization, Core Web Vitals optimization
**Confidence:** HIGH

## Summary

Phase 1 establishes the visual identity and performance foundation for Breeze Roofing NC. The existing codebase already has solid Next.js 16 + Tailwind CSS v4 architecture with some foundational work (custom colors defined, WebP configured, Turbopack enabled). Research confirms this is enhancement work, not rebuild.

The phase combines two domains: visual design (distinctive brand identity, coastal storytelling, micro-interactions) and performance optimization (Core Web Vitals passing, image optimization, monitoring installation). Both domains share a common challenge: achieving visual richness without sacrificing performance. Modern Next.js tooling (next/image, Tailwind v4 @theme, Vercel analytics) provides the foundation.

**Primary recommendation:** Use Tailwind CSS v4 @theme directive for design tokens, next/image with priority prop for hero images, and install both @vercel/analytics and @vercel/speed-insights for comprehensive monitoring. Existing architecture is production-ready; focus on content (real photos) and incremental visual enhancements.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| DESIGN-01 | Distinctive, premium visual identity (friendly/local, not generic contractor template) | Tailwind v4 @theme directive enables custom color palette, typography, spacing tokens; existing colors (navy, sky, amber) provide foundation |
| DESIGN-02 | Real project photos integrated throughout (hero, service pages, area pages, gallery) | next/image with priority prop, WebP format configured; storage pattern: /public/images/{category}/ with descriptive filenames |
| DESIGN-03 | Before/after project gallery showcasing Brett's actual work | Component pattern using next/image with grid layout; dimension attributes prevent CLS; lazy loading below fold |
| DESIGN-04 | Subtle micro-interactions and animations reinforcing "Breeze" brand | Tailwind animate-* utilities with custom @keyframes; existing drift animation provides pattern; motion-safe variant respects reduced-motion preferences |
| DESIGN-05 | Coastal NC visual storytelling | Color palette (sky blues, sandy ambers) already established; imagery and language execution is content work |
| DESIGN-06 | Consistent typography, color palette, spacing system across all pages | Tailwind v4 @theme inline directive already in use (app/globals.css); design tokens become CSS variables automatically |
| SEO-01 | Core Web Vitals passing (LCP <2.5s, CLS <0.1, INP <200ms) | next/image prevents CLS; priority prop optimizes LCP; existing font-display: swap helps; Vercel Speed Insights monitors real-user metrics |
| SEO-09 | Image optimization: WebP/AVIF, lazy loading, proper alt text | next.config.ts already configures WebP; AVIF available by adding to formats array; next/image handles lazy loading by default |
| SEO-10 | @vercel/analytics and @vercel/speed-insights installed | Official packages with <Analytics /> and <SpeedInsights /> components; add to app/layout.tsx; no env vars required |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| next/image | 16.2.1 (built-in) | Image optimization, lazy loading, CLS prevention | Official Next.js component; automatic WebP/AVIF serving, responsive srcset generation, built-in lazy loading |
| Tailwind CSS | v4.2 | Design system, utility-first styling, design tokens | v4 @theme directive replaces config file; CSS variables for tokens; existing project already on v4 |
| @vercel/analytics | latest | User behavior tracking, page views, custom events | Official Vercel package; zero-config installation; privacy-friendly (no cookies) |
| @vercel/speed-insights | latest | Core Web Vitals monitoring (LCP, CLS, INP) | Official Vercel package; real-user performance data; integrates with Vercel dashboard |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @tailwindcss/postcss | 4 (installed) | PostCSS integration for Tailwind v4 | Already configured; required for Tailwind v4 build pipeline |
| lucide-react | 0.577.0 (installed) | Icon library for UI elements | Existing project dependency; lightweight, tree-shakeable SVG icons |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| @vercel/analytics | Google Analytics 4 (GA4) | GA4 stub already in codebase via @next/third-parties; can coexist with Vercel Analytics; GA4 better for cross-domain tracking, Vercel Analytics better for Vercel-specific features |
| Tailwind CSS v4 | Tailwind CSS v3 | v3 uses JavaScript config file; v4 uses CSS-native @theme directive; project already on v4, no reason to downgrade |
| next/image | Custom img with srcset | Lose automatic optimization, format serving, lazy loading; significantly more code to achieve same result |

**Installation:**
```bash
npm install @vercel/analytics @vercel/speed-insights
```

## Architecture Patterns

### Recommended Project Structure
```
public/
├── images/
│   ├── hero/           # Hero/banner images (priority loading)
│   ├── projects/       # Before/after project photos
│   ├── services/       # Service-specific images
│   └── areas/          # Area-specific landmarks/buildings
app/
├── globals.css         # Tailwind @theme design tokens
components/
├── sections/
│   └── ProjectGallery.tsx  # Before/after gallery component
└── ui/
    └── ImageWithFallback.tsx  # Reusable image wrapper (optional)
```

### Pattern 1: Design Tokens via Tailwind v4 @theme
**What:** Define custom colors, fonts, spacing, animations in CSS using @theme directive
**When to use:** All design system customization; replaces tailwind.config.js approach
**Example:**
```css
/* app/globals.css */
@import "tailwindcss";

@theme inline {
  /* Colors - already defined in project */
  --color-navy: #2A6895;
  --color-sky: #7BA7BC;
  --color-amber: #C6A355;
  
  /* Custom animations for micro-interactions */
  --animate-fade-in: fade-in 0.3s ease-out;
  --animate-slide-up: slide-up 0.4s ease-out;
  
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slide-up {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
}
```
**Usage:**
```tsx
<div className="bg-navy text-white animate-fade-in">
  Content with custom brand color and animation
</div>
```

### Pattern 2: Optimized Hero Image with Priority Loading
**What:** Use next/image with priority prop for above-the-fold images to optimize LCP
**When to use:** Hero images, banner images, any image visible without scrolling
**Example:**
```tsx
// components/sections/Hero.tsx
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/hero/roof-installation-wilmington.jpg"
        alt="Breeze Roofing team installing roof in Wilmington NC"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Hero content overlay */}
    </div>
  );
}
```
**Why:** Priority prop preloads image, preventing LCP delays; fill prop with sizes="100vw" generates responsive srcset; alt text helps SEO and accessibility.

### Pattern 3: Before/After Project Gallery with CLS Prevention
**What:** Grid layout with fixed aspect ratios to prevent layout shift during image load
**When to use:** Project galleries, case studies, portfolio sections
**Example:**
```tsx
// components/sections/ProjectGallery.tsx
import Image from 'next/image';

const projects = [
  {
    id: 1,
    before: '/images/projects/hampstead-before.jpg',
    after: '/images/projects/hampstead-after.jpg',
    title: 'Roof Replacement - Hampstead NC',
    description: 'Complete tear-off and architectural shingle installation'
  },
  // ... more projects
];

export function ProjectGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={project.after}
              alt={project.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <h3 className="mt-3 font-semibold">{project.title}</h3>
          <p className="text-gray-600 text-sm">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
```
**Why:** aspect-[4/3] reserves space before image loads (prevents CLS); fill prop with sizes optimizes for responsive breakpoints; lazy loading automatic below fold.

### Pattern 4: Subtle Micro-Interactions with Motion-Safe
**What:** Add hover/focus animations respecting user's reduced-motion preference
**When to use:** Buttons, cards, navigation items, CTAs
**Example:**
```tsx
// components/ui/ServiceCard.tsx
export function ServiceCard({ title, icon, href }) {
  return (
    <Link
      href={href}
      className="block p-6 rounded-lg border border-gray-200 
                 transition-all duration-300
                 hover:border-navy hover:shadow-lg
                 motion-safe:hover:-translate-y-1
                 motion-reduce:hover:translate-y-0"
    >
      <div className="text-navy mb-4 motion-safe:transition-transform motion-safe:group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </Link>
  );
}
```
**Why:** motion-safe prefix only applies transforms for users without reduced-motion; transition-all handles color/shadow changes; smooth, accessible UX.

### Anti-Patterns to Avoid
- **Using img instead of next/image:** Loses automatic optimization, lazy loading, format serving, CLS prevention
- **Lazy loading hero images:** Always use priority prop on above-fold images; lazy loading delays LCP
- **Hardcoded image dimensions in JSX:** Use aspect-ratio utilities (aspect-[4/3]) instead of fixed px values for responsive layouts
- **CSS animations without motion-safe:** Breaks UX for users with vestibular disorders or reduced-motion preferences
- **Stock photos instead of real projects:** Reduces trust signals; requirement DESIGN-02 explicitly requires real photos

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Image optimization pipeline | Custom webpack loader, manual WebP conversion, responsive srcset generation | next/image component | Handles format conversion, srcset generation, lazy loading, CLS prevention automatically; battle-tested by millions of Next.js sites |
| Design token management | Custom CSS variables with manual utility class generation | Tailwind v4 @theme directive | Automatically generates utility classes from theme variables; typed autocomplete in editors; no build config needed |
| Core Web Vitals monitoring | Custom PerformanceObserver, manual metric calculation, data pipeline | @vercel/speed-insights | Captures real-user metrics (not synthetic); integrates with Vercel dashboard; handles edge cases (bfcache, navigation timing) |
| Animation library | Framer Motion, React Spring | Tailwind animate-* utilities + custom @keyframes | Adds 50-100KB bundle size; Tailwind animations are CSS-only (no JS); sufficient for subtle micro-interactions |
| Before/after image slider | Custom comparison component with drag handlers | Simple grid with hover effects (MVP) or react-compare-image (if needed) | Custom sliders are accessibility nightmares; grid layout works on all devices; add interactivity only if user testing demands it |

**Key insight:** Next.js and Tailwind have evolved to handle 90% of visual/performance needs out-of-the-box. Resist urge to add heavy libraries for problems the stack already solves.

## Common Pitfalls

### Pitfall 1: Forgetting Priority Prop on Hero Images
**What goes wrong:** Hero images load with default lazy loading, delaying LCP by 2-4 seconds
**Why it happens:** priority prop feels optional; default behavior (lazy) seems safe
**How to avoid:** Audit all images in viewport on page load; add priority={true} to hero, banner, logo
**Warning signs:** Lighthouse reports high LCP (>2.5s) despite optimized images; hero image fades in slowly on load

### Pitfall 2: Missing Width/Height or Aspect Ratio on Images
**What goes wrong:** Layout shifts as images load, causing poor CLS score and jarring UX
**Why it happens:** fill prop doesn't require dimensions; developers forget to set aspect ratio on container
**How to avoid:** If using fill, parent must have position: relative and aspect-ratio (or fixed dimensions); if using width/height props, always provide both
**Warning signs:** Content jumps/shifts during page load; Lighthouse reports CLS >0.1

### Pitfall 3: Oversized Source Images
**What goes wrong:** Even with next/image optimization, serving 5MB source images slows first load
**Why it happens:** Designers provide high-res originals; developers assume next/image handles everything
**How to avoid:** Resize source images to max 2x largest display size (e.g., 3000px wide for 1500px hero); compress before adding to repo
**Warning signs:** Slow local dev server; Vercel build warnings about image sizes; high CDN bandwidth usage

### Pitfall 4: Not Testing Reduced Motion
**What goes wrong:** Animations cause nausea/discomfort for users with vestibular disorders
**Why it happens:** Developers test with default OS settings; forget motion-safe variants
**How to avoid:** Test with prefers-reduced-motion enabled (Chrome DevTools > Rendering tab); wrap all animations in motion-safe: prefix
**Warning signs:** User complaints about animations; accessibility audit flags; no motion-reduce variants in code

### Pitfall 5: Blocking Render with Custom Fonts
**What goes wrong:** Text is invisible (FOIT) or flashes (FOUT) during font load, hurting CLS
**Why it happens:** Default font-display behavior blocks rendering; missing font preload
**How to avoid:** Use next/font/google with display: 'swap' (already configured in project); preload critical fonts
**Warning signs:** Blank text on slow connections; text style shifts after page load; Lighthouse warns about font loading

## Code Examples

Verified patterns from official sources:

### Priority Hero Image (LCP Optimization)
```tsx
// Source: https://nextjs.org/docs/app/api-reference/components/image
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/images/hero/wilmington-roofing.jpg"
        alt="Professional roofing installation in Wilmington, North Carolina"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white">
          Wilmington's Trusted Roofing Experts
        </h1>
      </div>
    </section>
  );
}
```

### Responsive Project Gallery (CLS Prevention)
```tsx
// Source: https://nextjs.org/docs/app/api-reference/components/image
import Image from 'next/image';

const projects = [
  { id: 1, src: '/images/projects/project-1.jpg', title: 'Hampstead Roof Replacement' },
  { id: 2, src: '/images/projects/project-2.jpg', title: 'Wrightsville Beach Storm Repair' },
  // ...
];

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="group cursor-pointer">
          {/* Fixed aspect ratio prevents CLS */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <h3 className="mt-3 font-semibold">{project.title}</h3>
        </div>
      ))}
    </div>
  );
}
```

### Custom Animation with Motion-Safe
```css
/* Source: https://tailwindcss.com/docs/animation */
/* app/globals.css */
@import "tailwindcss";

@theme inline {
  --animate-breeze-in: breeze-in 0.6s ease-out;
  
  @keyframes breeze-in {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
}
```

```tsx
// Usage with motion-safe variant
export function ServiceCard() {
  return (
    <div className="motion-safe:animate-breeze-in motion-reduce:opacity-100">
      <h3>Residential Roofing</h3>
      <p>Expert installation and repair services</p>
    </div>
  );
}
```

### Vercel Analytics & Speed Insights Installation
```tsx
// Source: https://vercel.com/docs/analytics/quickstart
// Source: https://vercel.com/docs/speed-insights/quickstart
// app/layout.tsx
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Tailwind v3 config file | Tailwind v4 @theme directive | v4.0 (2024) | Design tokens in CSS, not JS; better IDE support; no build config changes needed |
| Manual image optimization | next/image automatic optimization | Next.js 10+ (2020) | Eliminated manual WebP conversion, srcset generation; still best practice in 2026 |
| Google Analytics only | @vercel/analytics + Speed Insights | 2023-2024 | Privacy-friendly (no cookies), real-user Core Web Vitals, tighter Vercel integration |
| font-display: block (FOIT) | font-display: swap | Web standards update (2019) | Text visible during font load; project already uses swap via next/font/google |
| JavaScript animation libraries | CSS-only animations + motion-safe | Accessibility standards evolution | Smaller bundles, respects user preferences, better performance |

**Deprecated/outdated:**
- next/legacy/image: Deprecated in Next.js 13; use next/image instead (project already using correct version)
- Tailwind JIT mode: No longer needed in v4; always-on by default
- manual srcset generation: next/image handles automatically; don't hand-code picture/source elements

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None detected — recommend Vitest 3.x for Next.js 16 compatibility |
| Config file | None — see Wave 0 |
| Quick run command | `npm run test -- --run --reporter=verbose` (after setup) |
| Full suite command | `npm run test` (after setup) |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| DESIGN-01 | Custom color palette generates utility classes | unit | `vitest run tests/design-tokens.test.ts -x` | ❌ Wave 0 |
| DESIGN-02 | Hero images load with priority prop | integration | `vitest run tests/hero-image.test.tsx -x` | ❌ Wave 0 |
| DESIGN-03 | Project gallery images have aspect ratio | integration | `vitest run tests/project-gallery.test.tsx -x` | ❌ Wave 0 |
| DESIGN-04 | Animations respect reduced-motion | unit | `vitest run tests/motion-safe.test.ts -x` | ❌ Wave 0 |
| DESIGN-06 | Design tokens accessible as CSS variables | unit | `vitest run tests/design-tokens.test.ts -x` | ❌ Wave 0 |
| SEO-01 | Images have width/height or aspect ratio | integration | `vitest run tests/image-dimensions.test.tsx -x` | ❌ Wave 0 |
| SEO-09 | next/image components have alt text | integration | `vitest run tests/image-accessibility.test.tsx -x` | ❌ Wave 0 |
| SEO-10 | Analytics and SpeedInsights render in layout | integration | `vitest run tests/monitoring.test.tsx -x` | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `npm run test -- --run --changed` (tests affected by changes only)
- **Per wave merge:** `npm run test` (full suite)
- **Phase gate:** Full suite green + manual Lighthouse audit (LCP <2.5s, CLS <0.1) before `/gsd:verify-work`

### Wave 0 Gaps
- [ ] `vitest.config.ts` — Configure Vitest with Next.js environment, TypeScript support
- [ ] `tests/design-tokens.test.ts` — Verify @theme variables become CSS variables
- [ ] `tests/hero-image.test.tsx` — Assert hero Image component has priority={true}
- [ ] `tests/project-gallery.test.tsx` — Assert all gallery images have aspect ratio or dimensions
- [ ] `tests/motion-safe.test.ts` — Verify animations use motion-safe/motion-reduce variants
- [ ] `tests/image-accessibility.test.tsx` — Assert all next/image components have descriptive alt text
- [ ] `tests/monitoring.test.tsx` — Assert Analytics and SpeedInsights components present in layout
- [ ] Framework install: `npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom happy-dom`
- [ ] Add test script to package.json: `"test": "vitest"`

## Open Questions

1. **Before/After Gallery UI Pattern**
   - What we know: Requirement DESIGN-03 needs before/after gallery; next/image handles optimization
   - What's unclear: Should use comparison slider (interactive) or side-by-side grid (simple)?
   - Recommendation: Start with side-by-side grid (Wave 1); add comparison slider if user testing shows demand (defer to Wave 2 or Phase 2)

2. **Real Project Photo Sourcing**
   - What we know: DESIGN-02 requires real photos, not stock images; placeholders exist in ProjectGallery component
   - What's unclear: How many photos does Brett have? What format/resolution? Where are they currently stored?
   - Recommendation: Coordinate with Brett to gather 12-24 high-quality project photos (min 1920px wide); resize to 3000px max width before committing to repo

3. **AVIF Format Addition**
   - What we know: next.config.ts currently only specifies WebP format; AVIF has better compression
   - What's unclear: Does AVIF browser support (98%+ as of 2026) justify adding to formats array?
   - Recommendation: Add AVIF to formats array (`formats: ["image/avif", "image/webp"]`); next/image serves WebP fallback automatically; marginal performance gain

4. **Animation Intensity Level**
   - What we know: DESIGN-04 requires "subtle" micro-interactions reinforcing "Breeze" brand
   - What's unclear: How much animation is "subtle"? Cloud drift animation already exists in globals.css
   - Recommendation: Use cloud drift as intensity benchmark; hover transforms (-translate-y-1), fade-ins (0.3s), scale (1.05 on hover); avoid continuous animations except background elements

## Sources

### Primary (HIGH confidence)
- Next.js Image Component API: https://nextjs.org/docs/app/api-reference/components/image (verified 2026-04-03)
- Vercel Speed Insights Quickstart: https://vercel.com/docs/speed-insights/quickstart (verified 2026-04-03)
- Vercel Analytics Quickstart: https://vercel.com/docs/analytics/quickstart (verified 2026-04-03)
- Tailwind CSS v4 Theme Documentation: https://tailwindcss.com/docs/theme (verified 2026-04-03)
- Tailwind CSS v4 Animation Utilities: https://tailwindcss.com/docs/animation (verified 2026-04-03)
- Web.dev Core Web Vitals: https://web.dev/articles/vitals (verified 2026-04-03, updated Oct 2024)

### Secondary (MEDIUM confidence)
- Web.dev LCP Optimization: https://web.dev/articles/optimize-lcp (verified 2026-04-03)
- Web.dev CLS Optimization: https://web.dev/articles/optimize-cls (verified 2026-04-03)
- MDN Multimedia Performance: https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia (verified 2026-04-03)
- Next.js Learn SEO Images: https://nextjs.org/learn/seo/improve/images (verified 2026-04-03)

### Tertiary (LOW confidence)
- None — all findings verified with official documentation

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All recommendations use built-in Next.js/Tailwind features; official docs verified
- Architecture: HIGH - Patterns extracted from official examples; align with existing codebase structure
- Pitfalls: HIGH - Common issues documented in Next.js/Vercel support channels; prevention strategies tested

**Research date:** 2026-04-03
**Valid until:** 2026-05-03 (30 days — stack is stable, but Vercel packages update frequently)
