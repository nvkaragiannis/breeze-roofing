---
phase: 5
slug: content-enrichment-service-areas
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-04
---

# Phase 5 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | vitest (installed in Phase 1) |
| **Config file** | vitest.config.ts |
| **Quick run command** | `npx vitest run --reporter=verbose` |
| **Full suite command** | `npx vitest run && npx next build` |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npx next build`
- **After every plan wave:** Run `npx vitest run && npx next build`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 30 seconds

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Content reads naturally | AREA-01 | Content quality is subjective | Read each area page, verify it doesn't feel template-generated |
| Local landmarks are accurate | AREA-02 | Factual accuracy check | Verify landmarks/neighborhoods mentioned actually exist in each area |
| Testimonials feel authentic | AREA-03 | Authenticity assessment | Check testimonials reference real-sounding projects and locations |
| Coastal references are area-specific | AREA-04 | Content differentiation | Compare two area pages to ensure coastal concerns are distinct, not copy-pasted |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
