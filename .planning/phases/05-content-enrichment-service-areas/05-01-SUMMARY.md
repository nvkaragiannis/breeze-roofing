---
phase: 05-content-enrichment-service-areas
plan: 01
subsystem: content-data-model
tags: [tdd, interfaces, validation, area-content]
dependency_graph:
  requires: [phase-04-complete]
  provides: [area-data-model-extended, area-content-validation-tests]
  affects: [lib/data/areas.ts, lib/data/reviews.ts, tests/area-content.test.ts]
tech_stack:
  added: []
  patterns: [tdd-red-phase, interface-extension, validation-testing]
key_files:
  created:
    - tests/area-content.test.ts
  modified:
    - lib/data/areas.ts
    - lib/data/reviews.ts
decisions:
  - title: "TDD RED phase approach"
    rationale: "Created validation tests that fail before content exists, establishing contract for Plan 02"
    alternatives: ["Write content first then add tests", "Skip testing entirely"]
    chosen: "RED-first TDD for clear contract definition"
  - title: "Optional fields for backward compatibility"
    rationale: "All new interface fields are optional to avoid breaking existing area data objects"
    alternatives: ["Required fields with immediate content", "Separate extended interface"]
    chosen: "Optional fields on existing interface"
  - title: "Jaccard similarity for uniqueness"
    rationale: "Simple word-set overlap metric (30% threshold) validates content uniqueness across areas"
    alternatives: ["Levenshtein distance", "Manual review only", "No uniqueness check"]
    chosen: "Jaccard similarity with 30% threshold"
metrics:
  duration: 848s
  tasks_completed: 2
  files_modified: 3
  commits: 2
  tests_created: 12
  tests_passing: 3
  tests_failing: 9
  completed_date: 2026-04-04
---

# Phase 05 Plan 01: Area Data Model Extension Summary

**One-liner:** Extended ServiceArea interface with localContext, coastalFactors, social proof, and internal linking fields plus comprehensive TDD validation suite (RED phase)

## What Was Built

Extended the ServiceArea data model with rich content fields for local context (landmarks, geographic position, building characteristics, community profile), coastal factors (wind zones, salt air exposure, hurricane history, building considerations), social proof (testimonial names, featured projects), and internal linking (related blog slugs, priority services). Created comprehensive validation test suite covering all 5 AREA requirements (AREA-01 through AREA-05) following TDD RED phase - tests fail as expected because content has not yet been written.

## Requirements Fulfilled

- **AREA-01**: Word count (500+) and uniqueness (30% threshold) validation tests
- **AREA-02**: Local context interface fields and validation (landmarks, geographic position, building characteristics, community profile)
- **AREA-03**: Social proof interface fields and validation (testimonial names, featured projects)
- **AREA-04**: Coastal factors interface fields and validation (wind zone, salt air exposure, hurricane history, building considerations)
- **AREA-05**: Internal linking interface fields and validation (related blog slugs, priority services)

## Tasks Completed

### Task 1: Extend ServiceArea and Review interfaces

**Commit:** a3982bf

Extended ServiceArea interface with 6 new optional field groups:
- `localContext` - landmarks, geographicPosition, buildingCharacteristics, communityProfile
- `coastalFactors` - windZone, saltAirExposure, hurricaneHistory, buildingConsiderations
- `testimonialNames` - array of reviewer names from reviews.ts
- `featuredProjectDescription` - highlighted project for the area
- `relatedBlogSlugs` - 2-3 most relevant blog posts
- `priorityServices` - service slugs especially relevant to this area

Extended Review interface with optional `location` field for area attribution.

All fields are optional to maintain backward compatibility with existing area data objects. TypeScript compiles without errors.

**Files modified:**
- lib/data/areas.ts - ServiceArea interface extended
- lib/data/reviews.ts - Review interface extended

### Task 2: Create area content validation tests (TDD RED phase)

**Commit:** 5fadab1

Created comprehensive validation test suite with 12 tests covering all 5 AREA requirements:

**AREA-01 tests (2 tests):**
- 500+ word count validation across all text content fields
- Uniqueness validation using Jaccard similarity (30% threshold) between area pairs

**AREA-02 tests (4 tests):**
- localContext defined with at least 1 landmark
- Non-empty buildingCharacteristics
- Non-empty geographicPosition
- Non-empty communityProfile

**AREA-03 tests (1 test):**
- At least 2 areas have testimonialNames

**AREA-04 tests (1 test):**
- coastalFactors with all required fields (windZone, saltAirExposure enum, hurricaneHistory, buildingConsiderations)

**AREA-05 tests (4 tests):**
- At least 1 relatedBlogSlug per area
- At least 1 priorityService per area
- relatedBlogSlugs reference valid blog slugs (from known list)
- priorityServices reference valid service slugs (from services.ts)

**Test Results:** 9 tests fail, 3 tests pass (uniqueness tests pass because existing content is already unique). This is expected RED phase behavior - tests establish the contract for Plan 02 content writing.

**Files created:**
- tests/area-content.test.ts - Comprehensive validation suite

## Deviations from Plan

None - plan executed exactly as written.

## Technical Notes

- **Jaccard similarity calculation**: Uses word-set overlap for uniqueness validation. Formula: |intersection| / |union|. Filters words shorter than 3 characters to focus on meaningful content overlap.
- **Word count aggregation**: Concatenates intro, challenges, localContext paragraphs, coastalFactors paragraphs, and featuredProjectDescription. This reflects the total content a visitor would read on an area page.
- **Blog slug validation**: Hardcoded list of 7 valid blog slugs ensures referential integrity for internal linking.
- **Service slug validation**: Dynamically pulls slugs from services.ts to ensure all priorityServices reference actual service pages.
- **RED phase success**: Tests run and fail correctly. TypeScript compiles. Next.js builds successfully. No breaking changes to existing pages.

## Next Steps

**Plan 05-02** will implement the GREEN phase by adding rich content to all 8 area objects in lib/data/areas.ts. Content will include:
- Local landmarks and geographic descriptions for each area
- Building characteristics and community profiles
- Coastal factors and hurricane history specific to each location
- Testimonial attribution (pending Brett's input on reviewer locations)
- Featured project descriptions
- Internal linking to relevant blog posts and priority services

When Plan 02 content is complete, all 12 validation tests will pass (GREEN phase).

## Self-Check: PASSED

**Created files verified:**
- tests/area-content.test.ts: FOUND

**Modified files verified:**
- lib/data/areas.ts: FOUND (ServiceArea interface extended)
- lib/data/reviews.ts: FOUND (Review interface extended)

**Commits verified:**
- a3982bf: FOUND (feat: extend interfaces)
- 5fadab1: FOUND (test: RED phase validation)

**Build verification:**
- TypeScript compilation: PASSED
- Next.js build: PASSED
- Test execution: 9 failing / 3 passing (expected RED phase behavior)

All artifacts created, all commits present, build succeeds, tests fail as expected for RED phase.
