---
phase: 1
slug: visual-foundation-performance
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-03
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | vitest |
| **Config file** | none — Wave 0 installs |
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
| 1-01-01 | 01 | 0 | DESIGN-06 | unit | `npx vitest run` | ❌ W0 | ⬜ pending |
| 1-02-01 | 02 | 1 | DESIGN-01 | build | `npx next build` | ✅ | ⬜ pending |
| 1-02-02 | 02 | 1 | DESIGN-04 | manual | N/A | N/A | ⬜ pending |
| 1-03-01 | 03 | 1 | DESIGN-02 | build | `npx next build` | ✅ | ⬜ pending |
| 1-03-02 | 03 | 1 | DESIGN-03 | build | `npx next build` | ✅ | ⬜ pending |
| 1-04-01 | 04 | 2 | SEO-01 | lighthouse | manual audit | N/A | ⬜ pending |
| 1-04-02 | 04 | 2 | SEO-09 | build | `npx next build` | ✅ | ⬜ pending |
| 1-04-03 | 04 | 2 | SEO-10 | build | `npx next build` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Install vitest + @testing-library/react
- [ ] Create vitest.config.ts
- [ ] Stub tests for design token consistency (DESIGN-06)

*If none: "Existing infrastructure covers all phase requirements."*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Distinctive visual identity | DESIGN-01 | Subjective design quality | Visual comparison against generic contractor templates |
| Micro-interactions feel smooth | DESIGN-04 | Animation quality is perceptual | Browser test: verify animations at 60fps, no jank |
| Coastal storytelling resonates | DESIGN-05 | Content/imagery quality | Review imagery and language for NC coastal references |
| Core Web Vitals passing | SEO-01 | Requires real browser metrics | Run Lighthouse on deployed URL, verify LCP <2.5s |

*If none: "All phase behaviors have automated verification."*

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
