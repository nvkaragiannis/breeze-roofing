---
phase: 02-conversion-architecture
plan: 01
subsystem: conversion-ui
tags: [trust-signals, cta-optimization, mobile-ux, performance]
requirements: [CONV-01, CONV-04, CONV-07, CONV-08]
dependency_graph:
  requires: []
  provides:
    - trust-signals-header
    - trust-signals-footer
    - enhanced-mobile-cta
    - enhanced-emergency-cta
  affects:
    - components/sections/TrustBar.tsx
    - components/layout/Header.tsx
    - components/layout/Footer.tsx
    - components/layout/MobileCTABar.tsx
    - components/sections/EmergencyCTA.tsx
tech_stack:
  added: []
  patterns:
    - component-variants
    - motion-safe-animations
    - will-change-optimization
key_files:
  created: []
  modified:
    - components/sections/TrustBar.tsx
    - components/layout/Header.tsx
    - components/layout/Footer.tsx
    - components/layout/MobileCTABar.tsx
    - components/sections/EmergencyCTA.tsx
decisions:
  - Compact TrustBar shows 3 key signals (rating, licensed, fortified) vs 5 in section variant
  - Header trust signals adapt color based on transparent state (white when transparent, gray when scrolled)
  - Footer trust signals centered with muted styling for subtle reinforcement
  - EmergencyCTA uses 3s pulse on section and 2s bounce on icon for attention without overwhelming
  - All animations use motion-safe prefix to respect prefers-reduced-motion
  - MobileCTABar uses will-change: transform for scroll performance optimization
metrics:
  duration_seconds: 149
  tasks_completed: 2
  files_modified: 5
  commits: 2
  completed_date: "2026-04-04"
---

# Phase 02 Plan 01: Trust Signals and CTA Enhancement Summary

**One-liner:** Trust signals (rating, certifications, license) now visible on every page via Header and Footer compact TrustBar variants, with performance-optimized mobile CTA bar and attention-grabbing emergency CTA animations.

## Execution Overview

**Plan objective:** Add trust signals to every page via Header integration and enhance CTA components for maximum conversion.

**Status:** ✅ Complete — All tasks executed successfully with no deviations.

**Duration:** 149 seconds (~2.5 minutes)

## Tasks Completed

### Task 1: Add variant prop to TrustBar and integrate into Header
**Commit:** a3fdc28  
**Status:** ✅ Complete  
**Files modified:**
- `components/sections/TrustBar.tsx` — Added variant prop ("section" | "compact") with separate rendering logic
- `components/layout/Header.tsx` — Replaced inline Star/rating display with compact TrustBar, adapts to transparent state
- `components/layout/Footer.tsx` — Added compact TrustBar above footer content with centered muted styling

**Changes:**
- TrustBar now supports two variants: "section" (default, homepage full-width) and "compact" (Header/Footer inline row)
- Compact variant shows 3 key trust signals: Google rating (4.9), Licensed & Insured, Fortified Certified
- Section variant unchanged — preserves existing homepage behavior with 5 trust items
- Header desktop section now displays compact TrustBar with color adaptation (white when transparent, gray when scrolled)
- Footer includes compact TrustBar as trust reinforcement row above main content
- Accepts className prop for styling overrides

**Verification:** Build passed with no TypeScript errors.

### Task 2: Enhance MobileCTABar and EmergencyCTA for conversion
**Commit:** 370c21a  
**Status:** ✅ Complete  
**Files modified:**
- `components/layout/MobileCTABar.tsx` — Added will-change: transform for scroll performance
- `components/sections/EmergencyCTA.tsx` — Enhanced with animations, larger text, subheading, and button improvements

**Changes:**

**MobileCTABar enhancements:**
- Added `style={{ willChange: 'transform' }}` to outer fixed div for mobile scroll repaint optimization
- Dual CTA pattern preserved: Call Now (navy outlined) and Get Free Estimate (amber solid) with equal flex-1 width

**EmergencyCTA enhancements:**
- Increased padding: `py-8 md:py-10` (from py-6 md:py-8) for better prominence
- Added `motion-safe:animate-[pulse_3s_ease-in-out_infinite]` to section for attention
- CloudLightning icon enlarged to `w-10 h-10 md:w-12 md:h-12` with `motion-safe:animate-[bounce_2s_ease-in-out_infinite]`
- Heading increased to `text-xl md:text-2xl` (from text-lg md:text-xl)
- Added descriptive subheading: "Emergency roof repairs available day or night" (`text-white/80 text-sm md:text-base`)
- Button enhanced: `py-3`, `text-lg`, `shadow-lg` for better click prominence
- All animations use motion-safe prefix to respect prefers-reduced-motion

**Verification:** Build passed with no TypeScript errors or CLS regressions.

## Deviations from Plan

None — plan executed exactly as written. No bugs discovered, no blocking issues encountered, no architectural changes needed.

## Technical Decisions

1. **Compact TrustBar content:** Selected 3 most conversion-relevant signals (rating, licensed, fortified) vs all 5 for space efficiency in Header
2. **Color adaptation:** Used isTransparent logic from Header to pass className for white (transparent) vs gray (scrolled) text
3. **Footer placement:** Added trust signals above main footer content with centered alignment and muted styling for subtle reinforcement
4. **Animation timing:** Chose 3s pulse for section and 2s bounce for icon to create layered attention effect without overwhelming
5. **Motion-safe approach:** All animations respect prefers-reduced-motion via motion-safe: prefix
6. **Will-change optimization:** Applied to MobileCTABar for GPU-accelerated transforms during mobile scroll

## Requirements Satisfied

- **CONV-01:** Trust signals visible on every page via Header compact TrustBar
- **CONV-04:** Mobile CTA bar optimized with will-change for scroll performance
- **CONV-07:** Emergency CTA enhanced with animations and larger touch targets
- **CONV-08:** Dual CTA strategy maintained (phone + estimate equally prominent)

## Next Steps

Proceed to Plan 02-02 (next plan in phase 02-conversion-architecture).

## Commits

1. **a3fdc28** — `feat(02-01): integrate TrustBar compact variant into Header and Footer`
   - Added variant prop to TrustBar (section/compact)
   - Replaced inline Star rating in Header with compact TrustBar
   - Added compact TrustBar to Footer for trust reinforcement

2. **370c21a** — `feat(02-01): enhance MobileCTABar and EmergencyCTA for conversion`
   - Added will-change: transform to MobileCTABar for scroll performance
   - Increased EmergencyCTA padding, text size, and button prominence
   - Added motion-safe pulse and bounce animations
   - Added descriptive subheading

## Self-Check: PASSED

**Files created:** None (all modifications to existing files)

**Files modified:** All exist and contain expected changes
- ✅ `components/sections/TrustBar.tsx` — variant prop and compact rendering logic present
- ✅ `components/layout/Header.tsx` — TrustBar import and compact variant integration present
- ✅ `components/layout/Footer.tsx` — TrustBar import and compact variant present
- ✅ `components/layout/MobileCTABar.tsx` — willChange style attribute present
- ✅ `components/sections/EmergencyCTA.tsx` — animations and enhanced text present

**Commits:** Both exist in git history
- ✅ a3fdc28 — `feat(02-01): integrate TrustBar compact variant into Header and Footer`
- ✅ 370c21a — `feat(02-01): enhance MobileCTABar and EmergencyCTA for conversion`

**Build status:** ✅ Next.js build succeeds with no errors
