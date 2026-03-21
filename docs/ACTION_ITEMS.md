# Breeze Roofing NC — Action Items to Go Live

**Site**: https://breezeroofing.vercel.app
**Repo**: https://github.com/nvkaragiannis/breeze-roofing

---

## 1. Information Needed from Brett

These are hardcoded placeholders in the code. Once Brett provides them, update `lib/data/company.ts`:

- [ ] **NC Contractor License Number** — Currently shows `[LICENSE_NUMBER]`. Appears on every page (header trust bar, footer, about page, schema markup).
- [ ] **Year Founded** — Currently shows `[YEAR_FOUNDED]`. Appears in trust bar and about page.
- [ ] **Business Street Address** — Currently `[Address TBD]`. Needed for Google Maps embed, schema markup, and Google Business Profile consistency.
- [ ] **Brett's Last Name** — For about page and blog author attribution.
- [ ] **Confirm Email Address** — Currently using `Letsgo@breezeroofingnc.com`. Should this be updated to `brett@` or `info@`?
- [ ] **Current Google Review Count** — Hardcoded as "50+" in `lib/data/company.ts`. Check actual count and update.
- [ ] **Additional Certifications** — GAF Master Elite? Owens Corning Preferred? BBB membership?

### Photos Needed

- [ ] **Transparent Background Logo** — Current JPEG has white background. A PNG with transparent background will look much better on the gradient header and navy footer.
- [ ] **Photo of Brett / Team** — Used on about page and "Why Breeze" homepage section. Currently placeholder gray boxes.
- [ ] **Before/After Project Photos** — 6 slots on the homepage "Our Work" gallery section. Real project photos will massively boost trust.
- [ ] **Hero Background Image** — Currently a gradient. A real drone shot of a completed Breeze Roofing job would be ideal.

---

## 2. Environment Variables

Create a `.env.local` file in the project root (never commit this):

```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://breezeroofingnc.com
```

### For Vercel (production):
Go to https://vercel.com/nicksters-projects/breeze_roofing/settings/environment-variables and add:

| Variable | Value | Environment |
|----------|-------|-------------|
| `RESEND_API_KEY` | Your Resend API key | Production, Preview |
| `NEXT_PUBLIC_GA_ID` | Your GA4 Measurement ID (G-XXXXXXXX) | Production |
| `NEXT_PUBLIC_SITE_URL` | `https://breezeroofingnc.com` | Production |

Or use the CLI:
```bash
vercel env add RESEND_API_KEY
vercel env add NEXT_PUBLIC_GA_ID
vercel env add NEXT_PUBLIC_SITE_URL
```

---

## 3. Roofr Instant Estimator Embed

The estimator is the primary lead capture tool. Currently shows a placeholder box on `/estimate` and in the homepage estimate section.

### How to get the embed code:
1. Log into Brett's **Roofr Dashboard** (https://app.roofr.com)
2. Go to **Settings > Instant Estimator**
3. Click on the estimator name
4. Click **"Embed code"** > **"Copy code"**
5. It will look something like:
   ```html
   <script src="https://app.roofr.com/instant-estimator/embed/[BRETT'S-ID]" async></script>
   <div id="roofr-estimator"></div>
   ```

### Where to paste it:
**File**: `components/roofr/InstantEstimatorEmbed.tsx`

Replace the placeholder `<div>` (around line 50-65) with Brett's actual embed code. The component is already set up with:
- A `min-h-[650px]` wrapper to prevent layout shift
- GA4 event tracking for `roofr.com` postMessage events
- `'use client'` directive for client-side rendering

---

## 4. Google Analytics 4 (GA4) Setup

### Create a GA4 Property:
1. Go to https://analytics.google.com
2. Click **Admin** (gear icon) > **Create Property**
3. Property name: "Breeze Roofing NC"
4. Time zone: Eastern, Currency: USD
5. Business: Small, Industry: Home Services
6. Create a **Web** data stream
7. Website URL: `https://breezeroofingnc.com`
8. Copy the **Measurement ID** (starts with `G-`)
9. Add it as `NEXT_PUBLIC_GA_ID` in Vercel env vars (see section 2)

### Events that are already tracked (once GA is live):
- Page views (automatic)
- Roofr estimator interactions (via postMessage listener in InstantEstimatorEmbed.tsx)

### Recommended: Set up Conversion Goals in GA4
Go to **Admin > Events > Mark as conversion**:
- `roofr_estimate_completed` — When someone finishes an estimate
- `generate_lead` — Contact form submission
- Phone click events (add with Google Tag Manager)

---

## 5. Google Maps Embed

Two places need a real Google Map:

### 5a. Contact Page (`app/contact/page.tsx`, line 94)
Replace the `ImagePlaceholder` with a Google Maps embed iframe:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105894.xxx!2d-77.xxx!3d34.xxx!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zBreeze+Roofing!5e0!3m2!1sen!2sus"
  width="100%"
  height="400"
  style="border:0;"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
```

### How to get the embed URL:
1. Go to https://www.google.com/maps
2. Search for "Breeze Roofing Wilmington NC" (or the business address)
3. Click **Share** > **Embed a map** > Copy HTML
4. Paste into the contact page replacing the ImagePlaceholder

### 5b. Homepage Service Areas (`components/sections/ServiceAreasMap.tsx`, line 29)
Same process — embed a map showing the service area (Wilmington + 50 mile radius).

---

## 6. Google Business Profile

### Verify consistency:
The website NAP (Name, Address, Phone) MUST exactly match the Google Business Profile:
- **Name**: "Breeze Roofing" (exactly)
- **Phone**: (910) 665-5277
- **Address**: Must match once Brett provides the street address
- **Website**: Set GBP website link to `https://breezeroofingnc.com/estimate`

### Google Reviews:
Currently, 4 reviews are hardcoded in `lib/data/reviews.ts`. Options:

**Option A: Keep hardcoded (simplest)**
- Update the 4 featured reviews periodically by hand
- Update `company.reviewCount` and `company.reviewRating` in `lib/data/company.ts`
- Add a "View All Reviews on Google" link (already exists in ReviewsSection)

**Option B: Use a third-party widget (recommended for auto-updating)**
- **Elfsight Google Reviews** (https://elfsight.com/google-reviews-widget/) — Free tier, embed script
- **ReviewsOnMyWebsite** (https://reviewsonmywebsite.com) — Auto-pulls from GBP
- These embed as a script tag and auto-update when new reviews come in

**Option C: Google Places API (most technical)**
- Requires a Google Cloud project + Places API key
- Pulls reviews programmatically
- Has usage limits and costs money
- Overkill for this site

**Recommendation**: Option A for launch, upgrade to Option B later.

---

## 7. Contact Form Email (Resend)

### Setup Steps:
1. **Create Resend account**: https://resend.com (free tier: 100 emails/day)
2. **Get API key**: Dashboard > API Keys > Create
3. **Add to Vercel**: `RESEND_API_KEY=re_xxxxxxxxxxxx`

### Domain Verification (to send from @breezeroofingnc.com):
Without this, emails come from `onboarding@resend.dev` (fine for testing, not for production).

1. Go to https://resend.com/domains
2. Click **Add Domain** > enter `breezeroofingnc.com`
3. Add the DNS records Resend gives you (MX, SPF, DKIM) to your domain provider
4. Wait for verification (usually < 5 minutes)
5. Once verified, emails will send from `noreply@breezeroofingnc.com`

### Where emails go:
Currently hardcoded to `Letsgo@breezeroofingnc.com` in `app/api/contact/route.ts` line 121. Update if Brett wants them going to a different address.

### Test the form:
1. Set `RESEND_API_KEY` in `.env.local`
2. Run `npm run dev`
3. Go to `/contact` and submit a test message
4. Check Brett's email inbox

---

## 8. Custom Domain Setup

### Connect breezeroofingnc.com to Vercel:
```bash
vercel domains add breezeroofingnc.com
```

Or via Dashboard:
1. Go to https://vercel.com/nicksters-projects/breeze_roofing/settings/domains
2. Add `breezeroofingnc.com`
3. Vercel will provide DNS records (A record + CNAME)
4. Update DNS at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)
5. SSL certificate is automatic

### Also add www redirect:
```bash
vercel domains add www.breezeroofingnc.com
```
This will auto-redirect www to the root domain.

---

## 9. Google Search Console

### Setup:
1. Go to https://search.google.com/search-console
2. Add property: `https://breezeroofingnc.com`
3. Verify via DNS TXT record (Vercel makes this easy)
4. Submit sitemap: `https://breezeroofingnc.com/sitemap.xml`

### Monitor:
- Core Web Vitals
- Coverage / indexing errors
- Search performance (queries, impressions, clicks)
- Mobile usability

---

## 10. Optional Enhancements

### reCAPTCHA on Contact Form
Currently the form uses a honeypot field + rate limiting (5/hour per IP). This is effective for most bots. If spam becomes a problem:

1. Get a reCAPTCHA v3 site key from https://www.google.com/recaptcha
2. Add `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY` to env vars
3. Add the reCAPTCHA script to the contact form
4. Verify the token server-side in `/api/contact`

**Recommendation**: Launch without it. Add only if spam becomes a real issue.

### Google Tag Manager
If Brett wants to track phone clicks, button clicks, scroll depth, etc. without code changes:
1. Create a GTM container at https://tagmanager.google.com
2. Add the container ID as an env var
3. Set up click triggers for `tel:` links and CTA buttons

---

## 11. Quick Code Fixes Before Launch

### Fix: Homepage blog preview shows no posts
The blog posts exist in `content/blog/` but the homepage passes an empty array. **I will fix this** — it needs to import `getRecentPosts` from `lib/blog.ts` and pass the 3 most recent posts.

### Fix: Update company data
Once Brett provides the info, update these fields in `lib/data/company.ts`:
```typescript
street: "123 Main Street",       // Brett's actual address
license: "12345",                // NC contractor license #
yearFounded: "2019",             // actual year
```

---

## Priority Order

| # | Item | Who | Effort | Impact |
|---|------|-----|--------|--------|
| 1 | Get Brett's license #, address, year | Nick → Brett | 5 min | Critical (schema, trust) |
| 2 | Set up Resend API key | Nick | 10 min | Critical (contact form) |
| 3 | Set up GA4 + add env var | Nick | 15 min | Critical (analytics) |
| 4 | Get Roofr embed code from Brett | Nick → Brett | 10 min | Critical (lead capture) |
| 5 | Custom domain setup | Nick | 15 min | Critical (go-live) |
| 6 | Google Search Console | Nick | 10 min | High (SEO) |
| 7 | Verify GBP matches website | Nick | 10 min | High (local SEO) |
| 8 | Google Maps embeds | Nick | 10 min | Medium (trust) |
| 9 | Transparent logo PNG | Brett | Varies | Medium (design) |
| 10 | Team/Brett photos | Brett | Varies | Medium (trust) |
| 11 | Before/after project photos | Brett | Varies | Medium (conversion) |
| 12 | Resend domain verification | Nick | 15 min | Medium (professional email) |
| 13 | Hero background photo | Brett | Varies | Low (aesthetic) |
| 14 | reCAPTCHA (if needed) | Nick | 30 min | Low (only if spam) |

---

## Files Reference

| What | File Path |
|------|-----------|
| Company data (address, license, etc.) | `lib/data/company.ts` |
| Roofr embed placeholder | `components/roofr/InstantEstimatorEmbed.tsx` |
| Contact form API | `app/api/contact/route.ts` |
| Contact form UI | `components/ContactForm.tsx` |
| GA4 setup | `app/layout.tsx` (line 66) |
| Reviews data | `lib/data/reviews.ts` |
| Homepage | `app/page.tsx` |
| Contact page (map placeholder) | `app/contact/page.tsx` |
| Service areas map placeholder | `components/sections/ServiceAreasMap.tsx` |
| About page (photo placeholder) | `app/about/page.tsx` |
| Why Breeze (photo placeholder) | `components/sections/WhyBreeze.tsx` |
| Project gallery placeholders | `components/sections/ProjectGallery.tsx` |
| Blog utility | `lib/blog.ts` |
