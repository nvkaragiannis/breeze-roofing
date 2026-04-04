---
phase: 04-local-seo-hardening
plan: 02
subsystem: local-seo-content
tags: [local-context, citations, service-pages, directory-strategy]
completed: 2026-04-04T02:38:58Z
duration: 320s

dependency_graph:
  requires: []
  provides: [coastal-service-content, citation-strategy]
  affects: [service-pages, local-seo-foundation]

tech_stack:
  added: []
  patterns: [natural-local-context, citation-strategy-documentation]

key_files:
  created:
    - .planning/phases/04-local-seo-hardening/CITATIONS.md
  modified:
    - lib/data/services.ts

decisions:
  - Local context added naturally without keyword stuffing (1-2 mentions per section)
  - Citation document organized by priority tiers (Essential/Industry-Specific/Local)
  - Focus on top 15 directories rather than exhaustive 100+ directory submission
  - Maintenance schedule built into citation strategy (quarterly checks, annual audit)

metrics:
  tasks_completed: 2
  files_modified: 1
  files_created: 1
  commits: 2
---

# Phase 04 Plan 02: Add Coastal NC Local Context and Citation Strategy

**One-liner:** Enhanced all service pages with natural coastal NC references (salt air, hurricanes, wind zones) and created actionable citation strategy document with 15 prioritized directories.

## Objective

Add coastal NC local context to all service page content and create citation strategy document for directory submissions.

**Why:** LOCAL-03 requires service pages to include local references beyond just area pages. LOCAL-04 requires a citation strategy document listing directories with NAP verification checklist. These are content enhancements that strengthen local SEO signals without structural changes.

**Result:** All 10 service pages now contain natural local context. Brett has actionable citation strategy document with NAP master data, directory tiers, submission checklist, and maintenance schedule.

## What Was Built

### Task 1: Add Coastal NC Local Context to Service Pages

Enhanced 6 service pages (commercial-roofing, roof-replacement, roof-repair, roof-inspection, new-construction, maintenance) with natural coastal NC local context.

**Services already had good local context:**
- residential-roofing: "Why Coastal NC Homes Need Specialized Roofing" section
- emergency-repair: Cape Fear coast references
- storm-damage: Hurricane Atlantic references
- fortified-roof: Inherently coastal due to hurricane focus

**Services enhanced with new local context:**

1. **commercial-roofing**: Added "Why Coastal Commercial Roofs Need Special Attention" section covering hurricane-force winds creating uplift forces, salt air corrosion on HVAC penetrations, coastal humidity + flat roof drainage challenges.

2. **roof-replacement**: Added paragraph about coastal NC roofs not lasting as long as inland (salt air, high humidity, hurricane exposure accelerate wear). References Cape Fear coast specifically and mentions material selection for coastal wind zones.

3. **roof-repair**: Added "Why Coastal NC Repairs Differ" section covering salt air corrosion on flashing, wind-lifted shingles from coastal storms, moisture infiltration from humid air hiding rot beneath surface leaks.

4. **roof-inspection**: Added "Coastal-Specific Inspection Concerns" section covering salt damage on metal components, wind uplift assessment based on Atlantic weather patterns, moisture detection from humidity and wind-driven rain.

5. **new-construction**: Added "Building in the Wilmington Area Construction Boom" section covering population growth, increased building department scrutiny on coastal wind zone requirements (130+ mph ratings, enhanced connections, hurricane strapping), Cape Fear region reference.

6. **maintenance**: Added paragraph about roofs on coast wearing out faster than inland (salt spray, high humidity, frequent storm exposure). References Charlotte vs Wilmington comparison for relatability.

**Local context elements used:**
- Geographic challenges: salt air corrosion, hurricane-force winds, humid subtropical climate, coastal flooding
- Local area mentions: Wilmington, Cape Fear region, coastal NC, Atlantic
- Building code references: coastal wind zones, 130+ mph wind ratings, hurricane strapping
- Storm/weather references: Hurricane Florence (in other services), hurricane season, tropical storms

**Pattern followed:** 1-2 local mentions per paragraph maximum. Varied references (Wilmington, coastal NC, Cape Fear region, Wilmington-area). Focused on local challenges and expertise, not keyword density. Content reads like expert explaining why location matters.

### Task 2: Create Citation Strategy Document

Created comprehensive citation strategy document at `.planning/phases/04-local-seo-hardening/CITATIONS.md` (212 lines).

**Document structure:**

1. **NAP Master Data** — Exact NAP format to copy-paste to every directory:
   - Business Name: "Breeze Roofing"
   - Address: "1234 Market Street, Wilmington, NC 28401"
   - Phone: "(910) 665-5277"
   - Website: "https://breezeroofingnc.com"
   - Email: "Letsgo@breezeroofingnc.com"
   - Primary Category: "Roofing Contractor"
   - Secondary Categories: "Home Improvement, Construction Company"
   - Business Description: 100-word description emphasizing Wilmington service area, Fortified Roof certification, coastal NC expertise

2. **Directory Tiers** — 15 directories organized by priority:
   - **Tier 1 (Essential):** Google Business Profile, Bing Places, Apple Maps, Facebook Business Page, Yelp
   - **Tier 2 (Industry-Specific):** Angi, HomeAdvisor, Houzz, BBB, Porch, Thumbtack
   - **Tier 3 (Local/Regional):** YellowPages.com, Manta, Foursquare, Nextdoor Business

   Each directory includes: Name, URL, Priority level, Notes (free/paid, verification method, cost considerations)

3. **Submission Checklist** — Markdown table with 15 rows:
   - Columns: [ ] checkbox | Directory name | Date submitted | Profile URL | Status
   - Status options: Pending / Submitted / Verified / Live
   - Pre-filled with all Tier 1-3 directories unchecked

4. **Consistency Rules** — Specific formatting rules:
   - Name: Always "Breeze Roofing" (not "Breeze Roofing NC" or variations)
   - Address: Always full street address (not abbreviated, no P.O. boxes)
   - Phone: Always "(910) 665-5277" formatted exactly
   - Website: Always "https://breezeroofingnc.com" (include https://)
   - Categories: Primary = Roofing Contractor, Secondary = Home Improvement + Construction
   - Photos: Upload same logo and project photos to each platform

5. **Maintenance Schedule** — Three-tier schedule:
   - **Quarterly:** Check top 5 directories for accuracy, respond to reviews
   - **After NAP change:** Update all directories within 48 hours, prioritize Tier 1
   - **Annually:** Full audit of all 15+ directories, refresh photos and description

6. **Tips for Submission** — Practical guidance:
   - Claim existing listings before creating new ones (avoid duplicates)
   - Verification methods (phone, email, postcard timelines)
   - Avoid paid directories initially, focus on free listings
   - Save screenshots and verification emails for documentation

7. **Common Issues and Solutions** — Troubleshooting guide:
   - Can't claim existing listing → Look for "Claim this business" link
   - Directory requires different address format → Enter as close as possible
   - Can't find exact category → Use closest equivalent
   - Duplicate listings exist → Claim all, request merge

**Document is actionable:** Brett can pick it up and start submitting without additional context. No technical knowledge required. Copy-paste NAP data, work through Tier 1-3 in order, track progress in checklist.

## Deviations from Plan

None. Plan executed exactly as written.

## Key Decisions

1. **Natural local context approach:** Added 1-2 local references per section without keyword stuffing. Varied terminology (Wilmington, coastal NC, Cape Fear region, Atlantic) for natural readability. Focused on explaining why location matters (challenges, building codes) rather than just inserting location keywords.

2. **Citation tiers reflect priority:** Organized 15 directories into 3 tiers based on authority (Tier 1), industry relevance (Tier 2), and local/regional value (Tier 3). Recommended starting with free listings (Tier 1, most of Tier 3) before evaluating paid directories (Angi, HomeAdvisor, BBB).

3. **Maintenance built into strategy:** Added quarterly/annual maintenance schedule to prevent citation decay. Many businesses build citations once and forget—stale data hurts local SEO. Maintenance schedule ensures ongoing accuracy.

4. **Practical over exhaustive:** Focused on top 15 directories rather than exhaustive 100+ directory submission. Research shows diminishing returns after major directories. For single-location business, manual focus on quality > automated quantity.

## Verification

All verification steps passed:

- [x] `npx next build` completes without errors
- [x] All 10 service content blocks contain coastal NC local references (verified via grep for "coastal\|Wilmington\|Cape Fear\|hurricane\|salt air")
- [x] CITATIONS.md exists and contains Tier 1, Tier 2, Tier 3 sections (8 tier mentions found)
- [x] CITATIONS.md contains submission checklist with checkbox format (15 checkboxes found)

## Files Changed

### Created Files
- `.planning/phases/04-local-seo-hardening/CITATIONS.md` (212 lines) — Complete citation strategy document with NAP master data, directory tiers, submission checklist, consistency rules, maintenance schedule, and troubleshooting guide

### Modified Files
- `lib/data/services.ts` — Added coastal NC local context to 6 service entries (commercial-roofing, roof-replacement, roof-repair, roof-inspection, new-construction, maintenance). Added new content sections explaining why coastal NC conditions differ from inland areas.

## Commits

| Task | Commit | Message | Files |
|------|--------|---------|-------|
| 1 | b9d6e1b | feat(04-02): add coastal NC local context to service pages | lib/data/services.ts |
| 2 | 441b848 | feat(04-02): create citation strategy document | .planning/phases/04-local-seo-hardening/CITATIONS.md |

## Testing

**Build verification:** `npx next build` succeeded. All 44 pages generated successfully (static + SSG).

**Content verification:** Grep verified coastal NC references present across all services:
- "coastal" appears 15+ times in services.ts
- "Wilmington" appears 30+ times
- "Cape Fear" appears 5+ times
- "hurricane" appears 10+ times
- "salt air" appears 5+ times

**Citation document verification:**
- Tier sections verified (8 tier mentions)
- Submission checklist verified (15 checkboxes)
- NAP master data section present
- Maintenance schedule section present
- File exists at expected path

## Success Criteria Met

- [x] All tasks executed (2/2 complete)
- [x] Each task committed individually (2 commits made)
- [x] All deviations documented (none occurred)
- [x] SUMMARY.md created with substantive content
- [x] STATE.md will be updated with position and decisions (next step)
- [x] ROADMAP.md will be updated with plan progress (next step)

## Requirements Fulfilled

- **LOCAL-03:** Service pages now include local references and context beyond just area pages. All 10 services contain coastal NC geographic challenges, local area mentions, or storm/weather references.
- **LOCAL-04:** Citation strategy document created listing top directories organized by tier with NAP submission checklist and maintenance schedule.

## Next Steps

1. Update STATE.md with plan completion (advance plan counter, record metrics, add decisions)
2. Update ROADMAP.md with plan progress (04-02 complete, 2/2 plans done in phase 04)
3. Mark requirements LOCAL-03 and LOCAL-04 complete in REQUIREMENTS.md
4. Final metadata commit
5. Return completion format to orchestrator

## Self-Check: PASSED

Verified all claims in this summary:

**Created files exist:**
```
FOUND: .planning/phases/04-local-seo-hardening/CITATIONS.md
```

**Modified files have expected content:**
```
FOUND: "Why Coastal Commercial Roofs Need Special Attention" in lib/data/services.ts
FOUND: "Why Coastal NC Repairs Differ" in lib/data/services.ts
FOUND: "Coastal-Specific Inspection Concerns" in lib/data/services.ts
FOUND: "Building in the Wilmington Area Construction Boom" in lib/data/services.ts
FOUND: "Roofs here on the coast wear out faster" in lib/data/services.ts
```

**Commits exist:**
```
FOUND: b9d6e1b feat(04-02): add coastal NC local context to service pages
FOUND: 441b848 feat(04-02): create citation strategy document
```

**Build succeeds:**
```
PASSED: npx next build completed successfully with 44 pages generated
```

All verification passed. Summary is accurate.
