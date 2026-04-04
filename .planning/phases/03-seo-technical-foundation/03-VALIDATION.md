---
phase: 3
slug: seo-technical-foundation
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-04
---

# Phase 3 — Validation Strategy

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

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 3-01-01 | 01 | 1 | SEO-02, SEO-05 | build | `npx next build` | ✅ | ⬜ pending |
| 3-01-02 | 01 | 1 | SEO-03, SEO-04 | build | `npx next build` | ✅ | ⬜ pending |
| 3-02-01 | 02 | 1 | SEO-06 | build | `npx next build` | ✅ | ⬜ pending |
| 3-02-02 | 02 | 1 | SEO-07, SEO-08 | build | `npx next build` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements — Vitest and build pipeline from Phase 1.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| RoofingContractor rich results | SEO-02 | Requires Google Rich Results Test | Paste page URL into search.google.com/test/rich-results |
| FAQPage rich results | SEO-03 | Requires Google Rich Results Test | Test FAQ page and service pages with FAQ sections |
| Article rich results | SEO-04 | Requires Google Rich Results Test | Test blog post URLs for Article schema validation |
| BreadcrumbList rich results | SEO-05 | Requires Google Rich Results Test | Test any page for breadcrumb schema validation |
| No duplicate meta titles | SEO-06 | Requires Search Console or crawl | Run site crawl or check Search Console for duplicate titles |
| Sitemap indexed | SEO-07 | Requires Search Console | Submit sitemap.xml and verify indexing status |
| Canonical URLs recognized | SEO-08 | Requires Search Console | Verify canonical URLs in Search Console coverage report |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
