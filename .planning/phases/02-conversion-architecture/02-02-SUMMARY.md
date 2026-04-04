---
phase: 02-conversion-architecture
plan: 02
subsystem: service-pages
tags: [conversion, trust-building, service-pages, warranties, timelines]
dependency_graph:
  requires: [design-system-foundation, service-data-structure]
  provides: [warranty-sections, timeline-sections, trust-signals]
  affects: [all-service-pages, conversion-rate]
tech_stack:
  added: []
  patterns: [reusable-section-components, conditional-rendering, data-driven-content]
key_files:
  created:
    - components/sections/WarrantyCallout.tsx
    - components/sections/TimelineCallout.tsx
  modified:
    - lib/data/services.ts
    - app/services/[service]/page.tsx
decisions:
  - title: "Distinct visual styling for warranty vs timeline"
    rationale: "Used sky/blue for warranty (trust/reliability association) and amber (warmth/urgency) for timeline to create clear visual distinction"
    alternatives: ["Same color scheme for both", "No background colors"]
  - title: "Optional fields in Service interface"
    rationale: "Made warranties and timeline optional to allow services like Roof Inspection to omit sections gracefully without breaking changes"
    alternatives: ["Required fields with empty arrays", "Separate service types"]
  - title: "Service-specific warranty customizations"
    rationale: "Tailored warranties to each service type (e.g., 10-year for commercial vs lifetime for residential) for authenticity"
    alternatives: ["Generic warranties for all services", "No customization"]
metrics:
  duration_seconds: 244
  tasks_completed: 2
  tasks_total: 2
  files_created: 2
  files_modified: 2
  commits: 2
  completed_date: "2026-04-04"
---

# Phase 02 Plan 02: Warranty & Timeline Sections Summary

**One-liner:** Added trust-building warranty guarantees and project timeline sections to all service pages with reusable components and data-driven content.

## What Was Built

Created two reusable section components (WarrantyCallout and TimelineCallout) and extended service data with warranty and timeline information for all 10 services. These sections appear on service pages between FAQ and CTA sections, providing concrete trust signals and setting clear expectations for project timelines.

### Components Created

1. **WarrantyCallout.tsx** - Displays warranty guarantees with Shield icon and checkmark list
   - Sky/blue background for trust association
   - Responsive flex layout with icon and content
   - Accepts customizable title and warranties array

2. **TimelineCallout.tsx** - Displays project timeline with numbered steps
   - Amber background for warmth and urgency
   - Clock icon with duration statement
   - Numbered step grid (2 columns on desktop)

### Service Data Extended

Extended `Service` interface with optional fields:
- `warranties?: string[]` - Array of warranty statements
- `timeline?: { duration: string; steps: { phase: string; time: string }[] }` - Timeline object with duration and steps

Added realistic, service-specific data for all 10 services:

**Residential Roofing**
- 5 warranties including lifetime workmanship, manufacturer coverage (25-50 years), new roof certification, 5-year inspections
- 2-5 day timeline: Free Inspection (1h) → Material Ordering (3-7d) → Installation (1-3d) → Final Inspection (same day)

**Commercial Roofing**
- 5 warranties with 10-year workmanship (not lifetime), preventive maintenance program
- 1-3 week timeline: Site Assessment → Proposal → Material Delivery (1-2 weeks) → Installation (3-10d) → Final Inspection

**Roof Replacement**
- 5 warranties matching residential (lifetime workmanship, certification letter)
- 2-5 day timeline similar to residential with Material Selection step

**Roof Repair**
- 3 warranties (shorter list): 1-year workmanship, material warranty, 30-day follow-up
- 1-2 day timeline: Inspection (30-60m) → Repair Work (2-6h) → Testing (30m)

**Emergency Repair**
- 4 warranties including "Emergency response within 2 hours" as first item
- Same day - 48h timeline: Emergency Call (Immediate) → Tarping (2h) → Stabilization (2-4h) → Permanent Scheduling (1-2d)

**Storm Damage**
- 5 warranties including insurance claim support, emergency tarping warranty
- 3-7 day timeline with Insurance Documentation and Adjuster Meeting steps

**Roof Inspection**
- No warranties (service is free inspection, not installation)
- 30-45 minute timeline: Exterior (15-20m) → Drone (10-15m) → Attic (5-10m) → Report (10-15m)

**New Construction**
- 5 warranties with builder partnership coordination
- 1-3 days per home: Pre-Construction Consultation → Material Scheduling → Deck Prep → Installation (1-2d) → Final Inspection

**Fortified Roof**
- 6 warranties (most comprehensive): Lifetime workmanship, IBHS documentation, insurance certification support
- 3-6 day timeline: Fortified Design Review → Material Ordering (5-10d) → Enhanced Installation (2-4d) → IBHS Inspection (1-2d) → Certification (1-2d)

**Maintenance**
- 3 warranties focused on maintenance-related repairs and priority scheduling
- 2-3 hour visit: Inspection (45-60m) → Cleaning (30-45m) → Minor Repairs (30-60m) → Documentation (15-30m)

### Template Integration

Updated `app/services/[service]/page.tsx`:
- Imported WarrantyCallout and TimelineCallout
- Added conditional sections after FAQ and before EmergencyCTA
- `{service.warranties && service.warranties.length > 0 && <WarrantyCallout warranties={service.warranties} />}`
- `{service.timeline && <TimelineCallout duration={service.timeline.duration} steps={service.timeline.steps} />}`

## Deviations from Plan

None - plan executed exactly as written. All 10 services received warranty and timeline data, components were styled as specified, and integration was completed without issues.

## Technical Highlights

- **Data-driven architecture**: Components are pure presentation, data lives in services.ts
- **Graceful degradation**: Optional fields allow services to omit sections (Roof Inspection has no warranties)
- **Visual distinction**: Sky vs amber backgrounds create clear section separation
- **Service-specific accuracy**: Warranties and timelines tailored to each service type (10-year for commercial vs lifetime for residential)
- **Conversion-focused**: Warranty guarantees and timeline expectations address key user concerns before contact

## Testing Results

- `npx next build` succeeded with no errors
- All 44 pages built successfully (10 service pages with new sections)
- TypeScript compilation passed
- Static generation completed in ~1 second

## Requirements Fulfilled

- **CONV-05**: Warranty/guarantee information visible on all service pages
- **CONV-06**: Expected project timeline with numbered steps on all service pages

## Files Changed

### Created (2 files)
- `components/sections/WarrantyCallout.tsx` (43 lines)
- `components/sections/TimelineCallout.tsx` (44 lines)

### Modified (2 files)
- `lib/data/services.ts` (+128 lines) - Extended interface and added data to all 10 services
- `app/services/[service]/page.tsx` (+10 lines) - Imported components and added conditional rendering

## Commits

1. **730c9ba** - `feat(02-02): create WarrantyCallout and TimelineCallout components`
   - Added WarrantyCallout with Shield icon and warranty list
   - Added TimelineCallout with Clock icon and numbered steps
   - Both components styled with distinct backgrounds

2. **bc7e04d** - `feat(02-02): add warranty and timeline sections to all service pages`
   - Extended Service interface with optional warranties and timeline fields
   - Added service-specific warranty data to all 10 services
   - Added realistic timelines for each service type
   - Integrated components into service page template

## Impact Assessment

**User-facing changes:**
- All service pages now display warranty guarantees (except Roof Inspection)
- All service pages now show project timeline expectations
- Trust signals increased with concrete warranty statements
- User expectations set with realistic timeline information

**Developer impact:**
- Reusable section components available for future pages
- Service data structure extended (backward compatible)
- Pattern established for conditional content sections

**Conversion funnel impact:**
- Addresses "What if something goes wrong?" objection with warranties
- Addresses "How long will this take?" question with timelines
- Builds trust before user reaches contact/estimate sections
- Expected to improve conversion rate on service pages

## Next Steps

This plan is complete. Next plan in phase (02-03) should focus on additional conversion elements like social proof, urgency indicators, or trust badges.

## Self-Check: PASSED

**Files created:**
- FOUND: components/sections/WarrantyCallout.tsx
- FOUND: components/sections/TimelineCallout.tsx

**Files modified:**
- FOUND: lib/data/services.ts (contains "warranties" and "timeline")
- FOUND: app/services/[service]/page.tsx (contains "WarrantyCallout" and "TimelineCallout")

**Commits exist:**
- FOUND: 730c9ba
- FOUND: bc7e04d

All artifacts created, all commits present, build passing. Plan execution verified.
