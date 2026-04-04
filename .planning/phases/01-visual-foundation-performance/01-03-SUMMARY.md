---
phase: 01-visual-foundation-performance
plan: 03
subsystem: visual-identity
tags: [hero, animations, coastal-branding, image-optimization, lcp]
requires: [DESIGN-01, DESIGN-06]
provides: [DESIGN-02, DESIGN-05]
affects: [components/sections/*, components/ui/ServiceCard]
tech-stack:
  added: []
  patterns: [next/image-priority, motion-safe-animations, staggered-entrance]
key-files:
  created: []
  modified:
    - components/sections/Hero.tsx
    - components/sections/ServicesGrid.tsx
    - components/sections/CoastalExpertise.tsx
    - components/sections/WhyBreeze.tsx
    - components/ui/ServiceCard.tsx
decisions:
  - "Hero supports dual modes: photo background (with priority Image) OR gradient fallback with clouds"
  - "Dark overlay (bg-navy/60) applied to photo backgrounds for text readability"
  - "Staggered animation delays (0.1-0.15s per item) create sequential entrance effect"
  - "All animations include motion-reduce:opacity-100 for accessibility compliance"
  - "CoastalExpertise content already strong - no language enhancements needed"
metrics:
  duration: 159
  tasks_completed: 2
  files_modified: 5
  commits: 2
  completed_date: 2026-04-04
---

# Phase 01 Plan 03: Hero Photo Background & Coastal Animations Summary

**One-liner:** Hero section enhanced with priority-loaded photo support and dark overlay; homepage sections animated with motion-safe staggered entrance effects for coastal brand identity.

## What Was Built

### Hero Component Enhancement (Task 1)
- **Photo background support**: Added next/image with `fill`, `priority`, `sizes="100vw"` for LCP optimization
- **Dual-mode operation**: Photo mode (with dark overlay) OR gradient fallback (with animated clouds)
- **Dark overlay**: `bg-navy/60` ensures white text remains readable over photos
- **Entrance animations**: Headline fades in, subheadline slides up with 0.2s delay
- **Accessibility**: `motion-reduce:opacity-100` fallback ensures content visible for reduced-motion users
- **New prop**: `backgroundAlt` for descriptive image alt text (defaults to "Breeze Roofing project in Wilmington NC")

### Homepage Section Animations (Task 2)
- **ServicesGrid**: Staggered breeze-in entrance (6 cards, 0.1s delay per card)
- **ServiceCard**: Added subtle lift effect (`hover:-translate-y-1`) on hover
- **CoastalExpertise**: Fade-in on section header, staggered fade-in on feature cards (0.15s delay)
- **WhyBreeze**: Slide-up animations on pillar items (0.1s delay), icon scale-on-hover (1.05)
- **Accessibility**: All animated elements include `motion-reduce:opacity-100` fallback

## Deviations from Plan

None - plan executed exactly as written.

## Technical Implementation

### Hero Dual-Mode Pattern
```tsx
{backgroundImage ? (
  <>
    <Image src={backgroundImage} alt={backgroundAlt} fill priority sizes="100vw" className="object-cover" />
    <div className="absolute inset-0 bg-navy/60" />
  </>
) : (
  // Original gradient + clouds
)}
```

### Staggered Animation Pattern
```tsx
{items.map((item, index) => (
  <div
    className="opacity-0 motion-safe:animate-breeze-in motion-reduce:opacity-100"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* content */}
  </div>
))}
```

### Coastal Content Verification
CoastalExpertise.tsx already contains strong coastal NC references:
- "Hurricane-rated shingles" and "hurricane-force winds"
- "Salt-air-resistant flashing" and "coastal conditions"
- "Wind zones" (coastal building codes)
- "Wind-driven rain" and "sealed roof decks"

No language enhancements were necessary.

## Files Changed

### Modified (5 files)
1. **components/sections/Hero.tsx** (Task 1)
   - Added Image import and backgroundAlt prop
   - Implemented conditional photo/gradient rendering
   - Added motion-safe entrance animations to headline and subheadline
   - Commit: `ffdcf28`

2. **components/sections/ServicesGrid.tsx** (Task 2)
   - Wrapped ServiceCard in animation wrapper div
   - Added staggered breeze-in delays (0.1s per card)
   - Commit: `691290b`

3. **components/sections/CoastalExpertise.tsx** (Task 2)
   - Added fade-in to section header
   - Added staggered fade-in to feature cards (0.15s delays)
   - Commit: `691290b`

4. **components/sections/WhyBreeze.tsx** (Task 2)
   - Added slide-up animations to pillar items
   - Added scale-on-hover to icon containers
   - Staggered delays (0.1s per item)
   - Commit: `691290b`

5. **components/ui/ServiceCard.tsx** (Task 2)
   - Added hover:-translate-y-1 for lift effect
   - Commit: `691290b`

## Verification Results

### Build Verification
```
npx next build
✓ Build succeeded - all 43 pages static/SSG
```

### Pattern Verification
```bash
# motion-safe classes present
grep -n "motion-safe" components/sections/*.tsx
✓ Hero: animate-fade-in, animate-slide-up
✓ ServicesGrid: animate-breeze-in
✓ CoastalExpertise: animate-fade-in
✓ WhyBreeze: animate-slide-up, transition-transform, hover:scale-105

# priority prop on Hero Image
grep -n "priority" components/sections/Hero.tsx
✓ Line 65: priority

# motion-reduce fallbacks
grep -n "motion-reduce" components/sections/*.tsx
✓ Hero: opacity-100
✓ ServicesGrid: opacity-100
✓ CoastalExpertise: opacity-100
✓ WhyBreeze: opacity-100
```

## Success Criteria Met

- [x] Hero supports real photo background via backgroundImage prop with next/image priority loading
- [x] Hero falls back gracefully to gradient + clouds when no image provided
- [x] ServicesGrid, CoastalExpertise, and WhyBreeze have motion-safe brand animations
- [x] All animations have motion-reduce fallbacks
- [x] Coastal NC visual storytelling enhanced (verified existing content is strong)
- [x] Build succeeds, no regressions

## Requirements Satisfied

- **DESIGN-02**: Real project photos as hero backgrounds (infrastructure ready)
- **DESIGN-05**: Coastal NC visual identity (animations + verified coastal content)

## Next Steps

Plan 01-04 will likely focus on remaining Phase 01 requirements (if any) or visual polish.

## Self-Check

Verifying created files and commits exist.

### Files Verification
```bash
[ -f "components/sections/Hero.tsx" ] && echo "FOUND: Hero.tsx" || echo "MISSING: Hero.tsx"
[ -f "components/sections/ServicesGrid.tsx" ] && echo "FOUND: ServicesGrid.tsx" || echo "MISSING: ServicesGrid.tsx"
[ -f "components/sections/CoastalExpertise.tsx" ] && echo "FOUND: CoastalExpertise.tsx" || echo "MISSING: CoastalExpertise.tsx"
[ -f "components/sections/WhyBreeze.tsx" ] && echo "FOUND: WhyBreeze.tsx" || echo "MISSING: WhyBreeze.tsx"
[ -f "components/ui/ServiceCard.tsx" ] && echo "FOUND: ServiceCard.tsx" || echo "MISSING: ServiceCard.tsx"
```

### Commits Verification
```bash
git log --oneline --all | grep -q "ffdcf28" && echo "FOUND: ffdcf28" || echo "MISSING: ffdcf28"
git log --oneline --all | grep -q "691290b" && echo "FOUND: 691290b" || echo "MISSING: 691290b"
```

Running checks...

**Results:**
```
FOUND: Hero.tsx
FOUND: ServicesGrid.tsx
FOUND: CoastalExpertise.tsx
FOUND: WhyBreeze.tsx
FOUND: ServiceCard.tsx
FOUND: ffdcf28 (Task 1 commit)
FOUND: 691290b (Task 2 commit)
```

## Self-Check: PASSED

All files and commits verified successfully.
