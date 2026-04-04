---
phase: 2
slug: conversion-architecture
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-04
---

# Phase 2 — Validation Strategy

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

- **After every task commit:** Run `npx vitest run --reporter=verbose`
- **After every plan wave:** Run `npx vitest run && npx next build`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 2-01-01 | 01 | 1 | CONV-04 | build | `npx next build` | ✅ | ⬜ pending |
| 2-01-02 | 01 | 1 | CONV-01, CONV-07 | build | `npx next build` | ✅ | ⬜ pending |
| 2-02-01 | 02 | 1 | CONV-05, CONV-06 | build | `npx next build` | ✅ | ⬜ pending |
| 2-03-01 | 03 | 2 | CONV-02, CONV-08 | build | `npx next build` | ✅ | ⬜ pending |
| 2-03-02 | 03 | 2 | CONV-03 | manual | N/A | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements — Vitest installed in Phase 1.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Click-to-call works on mobile | CONV-01 | Requires real device/emulator | Tap phone CTA on mobile, verify tel: link triggers dialer |
| Roofr estimator loads and is usable | CONV-03 | Third-party embed, requires Brett's code | Load /estimate, verify Roofr iframe renders, test on mobile |
| Dual CTAs equally prominent | CONV-07 | Visual prominence is subjective | Compare phone and estimate CTAs on desktop+mobile, verify neither is buried |
| Emergency CTA visible without scrolling | CONV-08 | Above-the-fold check varies by device | Load any page on 375px viewport, verify emergency CTA visible |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
