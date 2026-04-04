---
phase: 02-conversion-architecture
plan: 03
subsystem: conversion-optimization
tags: [estimate-page, roofr-embed, trust-signals, cta-optimization, iframe]
dependency_graph:
  requires: [02-01-TrustBar-compact-variant]
  provides: [production-ready-roofr-embed, enhanced-estimate-conversion]
  affects: [conversion-funnel, user-trust]
tech_stack:
  added: []
  patterns: [secure-iframe-embed, postMessage-height-resize, conversion-funnel-optimization]
key_files:
  created: []
  modified:
    - components/roofr/InstantEstimatorEmbed.tsx
    - app/estimate/page.tsx
decisions:
  - "Chose secure iframe approach with explicit src attribute for Roofr embed security"
  - "Added optional embedUrl prop to support placeholder state until Brett provides code"
  - "Implemented dynamic height with postMessage resize handler for responsive UX"
  - "Added compact TrustBar above estimator to build trust before user engagement"
  - "Created 4-column trust grid highlighting key differentiators (Licensed, Fortified, Rating, Emergency)"
  - "Added closing CTA section with dual action (phone + scroll-to-estimate) for conversion recovery"
metrics:
  duration: 130
  tasks_completed: 2
  files_modified: 2
  commits: 2
  completed_date: "2026-04-04"
---

# Phase 02 Plan 03: Estimate Page Conversion Enhancement Summary

**One-liner:** Production-ready Roofr iframe embed with responsive height handling and multi-layered trust signal architecture for estimate page conversion optimization.

## What Was Built

Enhanced the /estimate page — the primary conversion endpoint for all "Get Free Estimate" CTAs across the site — with production-ready Roofr embed infrastructure and multi-point trust reinforcement to reduce abandonment and increase form completion.

**Core enhancements:**

1. **InstantEstimatorEmbed Component (Production-Ready)**
   - Added `embedUrl` optional prop for Brett's Roofr iframe src
   - Implemented dynamic height state (650px default) with postMessage resize handling
   - Secure iframe rendering with origin validation maintained
   - Dual-mode operation: placeholder when no URL, iframe when URL provided
   - Added `containerRef` for future enhancements
   - Geolocation permission included for address-based estimates
   - Smooth height transitions (0.3s ease) for responsive mobile UX

2. **Estimate Page Trust Architecture**
   - **Pre-engagement trust:** Compact TrustBar above estimator (rating, licensed, fortified)
   - **Mid-flow trust grid:** "Why Breeze Roofing?" section with 4 trust pillars
     - Licensed & Insured (Shield icon)
     - Fortified Certified (Award icon)
     - 4.9 Star Rating (Star icon)
     - 24/7 Emergency (Clock icon)
   - **Post-FAQ closing CTA:** Navy background section with dual action
     - Phone call link (outlined white)
     - "Get Free Estimate" anchor to #main-content (amber solid)
     - Reinforces "no obligation" message

3. **Conversion Flow Optimization**
   - Trust signals visible at 3 points: pre-engagement, mid-consideration, and post-FAQ
   - Closing CTA recovers potential abandonments after FAQ reads
   - All existing content preserved (steps, FAQs, phone reference)
   - Mobile-responsive trust grid (2 columns on small screens, 4 on desktop)

## Task Breakdown

### Task 1: Enhance InstantEstimatorEmbed with iframe support
**Files:** `components/roofr/InstantEstimatorEmbed.tsx`
**Commit:** `01ae4d4`

Added production-ready iframe embedding with:
- Optional `embedUrl` prop (string) for Brett's Roofr dashboard URL
- Dynamic height state with `useState(650)` for responsive container
- postMessage handler enhanced to handle `resize` events: checks `data.type === "resize"` and `typeof data.height === "number"`, then calls `setHeight(data.height)`
- Secure iframe with `src={embedUrl}`, `allow="geolocation"`, `loading="lazy"`
- Origin validation maintained: `event.origin !== "https://app.roofr.com"` returns early
- Placeholder state preserved: when no `embedUrl`, shows calculator icon and "Brett's embed code goes here" message
- Added `containerRef` via `useRef<HTMLDivElement>(null)` for future use
- Smooth transitions: `height 0.3s ease` for responsive height changes

**Key decision:** Chose secure iframe src approach (standard pattern for third-party embeds) over unsafe HTML injection methods.

### Task 2: Enhance estimate page with trust signals
**Files:** `app/estimate/page.tsx`
**Commit:** `007c44a`

Added three layers of trust reinforcement:

1. **Pre-engagement trust (above estimator):**
   - Imported `TrustBar` from `@/components/sections/TrustBar`
   - Added `<TrustBar variant="compact" className="justify-center mt-6 mb-8 text-gray-600" />`
   - Shows 3 key signals: 4.9 Google Rating, Licensed & Insured, Fortified Certified
   - Builds trust before user engages with estimator

2. **Why Breeze Roofing trust grid (between steps and FAQ):**
   - Created 4-column grid (`sm:grid-cols-2 md:grid-cols-4 gap-6`)
   - Each item: lucide-react icon (8×8, navy) + title + description
   - Responsive: 2 columns on mobile, 4 on desktop
   - Highlights key differentiators to reinforce authority

3. **Closing CTA section (after FAQ):**
   - Navy background (`bg-navy text-white`) for visual impact
   - "Ready to Get Started?" heading with no-obligation message
   - Dual CTA buttons:
     - Phone link: outlined white, hover flips to white bg + navy text
     - "Get Free Estimate": amber solid, anchors to `#main-content` (scroll to top)
   - Recovers potential abandonments after FAQ engagement

**Imported:** `TrustBar`, `Shield`, `Award`, `Star`, `Clock` from lucide-react

All existing content preserved: hero, steps section, FAQ accordion, phone reference.

## Deviations from Plan

None — plan executed exactly as written. No auto-fixes, blocking issues, or architectural changes needed.

## Verification

✅ **Build:** `npx next build` passes with no TypeScript errors (compiled successfully in 2.9s, 44 static pages generated)
✅ **InstantEstimatorEmbed:** Renders placeholder when `embedUrl` undefined (current production state)
✅ **InstantEstimatorEmbed:** Ready to accept Brett's Roofr URL via iframe `src` (secure pattern)
✅ **postMessage security:** Origin validation maintained (`event.origin !== "https://app.roofr.com"`)
✅ **Estimate page:** Compact TrustBar visible above estimator
✅ **Estimate page:** Trust grid section renders with 4 trust points and icons
✅ **Estimate page:** Closing CTA section with dual actions renders correctly
✅ **Mobile UX:** No horizontal scroll, responsive grid adjusts to 2 columns on small screens

## Impact Assessment

**User Experience:**
- Trust signals visible at 3 touchpoints in conversion funnel reduce abandonment risk
- Pre-engagement trust (compact TrustBar) builds confidence before estimator interaction
- Closing CTA recovers users who read FAQs but haven't converted yet
- Responsive iframe height eliminates scroll issues on mobile devices

**Technical:**
- Production-ready for Brett's Roofr embed URL (no code changes needed when provided)
- Secure iframe pattern prevents XSS risks from third-party embed code
- postMessage height handling ensures optimal mobile UX without manual height adjustments
- All "Get Free Estimate" CTAs across site link to optimized /estimate page

**Conversion Architecture:**
- /estimate is now the primary conversion endpoint with multi-layered trust reinforcement
- Users can enter conversion funnel via instant estimator OR phone call
- Trust signals appear at decision points: pre-engagement, consideration, and post-FAQ
- Dual CTA in closing section captures both phone preference and form preference users

## Next Steps

**Immediate:**
- ✅ Plan complete — no blockers
- Ready for Phase 3 planning or next phase in roadmap

**When Brett provides Roofr embed URL:**
- Update `.env.local` or hardcode `embedUrl` prop in `app/estimate/page.tsx`
- Example: `<InstantEstimatorEmbed embedUrl="https://app.roofr.com/embed/xyz" />`
- No component changes needed — already production-ready

**Future enhancements (out of scope):**
- Add conversion tracking to measure estimator completion rate
- A/B test trust signal placement and messaging
- Add exit-intent modal for additional conversion recovery
- Track scroll depth to optimize CTA placement

## Self-Check

Verifying all claimed artifacts exist and commits are present.

**Files created/modified:**
- ✅ FOUND: InstantEstimatorEmbed.tsx
- ✅ FOUND: app/estimate/page.tsx

**Commits exist:**
- ✅ FOUND: 01ae4d4 (Task 1: InstantEstimatorEmbed iframe support)
- ✅ FOUND: 007c44a (Task 2: Estimate page trust signals)

## Self-Check: PASSED
