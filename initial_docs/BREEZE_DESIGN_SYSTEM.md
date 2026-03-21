# Breeze Roofing NC — Design System

## Design Philosophy
Clean, coastal professional. Not corporate-sterile, not contractor-cheap. Think: a company you'd trust with your biggest home investment, run by a guy who actually shows up. The visual language should communicate: **local, reliable, modern, coastal.**

Avoid the "big national roofing chain" look (dark red, aggressive fonts, stock photos of random houses). Lean into the coastal NC identity.

## Color Palette

```css
/* Primary */
--color-primary: #1B3A5C;        /* Deep navy — trust, authority */
--color-primary-light: #2A5298;  /* Medium navy — hover states */

/* Accent */
--color-accent: #E8A020;         /* Warm amber/gold — coastal sun, CTAs */
--color-accent-hover: #C8891A;   /* Darker amber for hover */

/* Neutrals */
--color-white: #FFFFFF;
--color-gray-50: #F8F9FA;        /* Page backgrounds */
--color-gray-100: #F1F3F5;       /* Card backgrounds */
--color-gray-300: #CED4DA;       /* Borders */
--color-gray-600: #6C757D;       /* Secondary text */
--color-gray-800: #343A40;       /* Body text */
--color-gray-900: #212529;       /* Headings */

/* Semantic */
--color-success: #2D7D32;        /* Trust badges, checkmarks */
--color-emergency: #C62828;      /* Emergency CTA only */
```

## Typography

**Font Stack:**
- Headings: `Inter` (700, 800) — clean, modern, legible on mobile
- Body: `Inter` (400, 500) — same family, consistent
- Load via `next/font/google`

**Scale (Tailwind classes):**
- Hero H1: `text-4xl md:text-5xl lg:text-6xl font-extrabold`
- Section H2: `text-3xl md:text-4xl font-bold`
- Card H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base` (16px) — never go below this for readability
- Small/caption: `text-sm`

## Spacing
- Section vertical padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Components Style Rules

### Buttons
Two variants only:

```
PRIMARY (amber — main CTA):
bg-amber-500 hover:bg-amber-600 text-white font-semibold
px-8 py-4 rounded-lg text-lg shadow-md hover:shadow-lg
transition-all duration-200

SECONDARY (navy outline):
border-2 border-navy text-navy hover:bg-navy hover:text-white
px-8 py-4 rounded-lg text-lg font-semibold
transition-all duration-200

EMERGENCY (red — use sparingly):
bg-red-700 hover:bg-red-800 text-white font-semibold
px-6 py-3 rounded-lg
```

CTA text hierarchy:
- Primary: "Get My Free Estimate" or "Get Free Roof Inspection"
- Secondary: "Call (910) 665-5277"
- Never use two equal-weight CTAs side by side

### Cards
```
bg-white rounded-xl shadow-sm hover:shadow-md
border border-gray-100
transition-shadow duration-200
p-6 md:p-8
```

### Trust Badges / Stat Numbers
Large numbers in `--color-primary`, label in gray-600.
Always back up stats with specifics (not "many years" — use the actual year).

### Section Alternation
- Odd sections: `bg-white`
- Even sections: `bg-gray-50`
- CTA sections: `bg-[#1B3A5C]` (navy) with white text

## Mobile-First Rules
- **Floating mobile CTA bar** — fixed to bottom of viewport on mobile only:
  ```
  fixed bottom-0 left-0 right-0 z-50 md:hidden
  grid grid-cols-2 gap-0
  [Call Now | Get Estimate]
  ```
- All tap targets minimum 44px height
- Phone number links: always `href="tel:19106655277"`
- Hero loads < 2 seconds — optimize all images with next/image

## Images
- Use `next/image` for all images (automatic WebP, lazy loading, sizing)
- Hero background: real photo of a Breeze Roofing job (actual NC home, not stock)
- Team photo: Brett + crew on a job site
- Project gallery: before/after pairs when possible
- Alt text: descriptive + location-specific ("roof replacement Wilmington NC home")

## Icons
- Use `lucide-react` — consistent, lightweight
- Key icons to use: `Shield`, `Phone`, `Star`, `CheckCircle`, `Clock`, `MapPin`, `Wrench`, `CloudLightning`, `Home`, `Award`

## Coastal NC Identity Touches
- Subtle wave or horizon line as section dividers (SVG, not image)
- Photography should show actual coastal NC homes when possible
- Copy should reference coastal specifics: salt air, hurricane season, wind ratings

## Accessibility
- All color combinations meet WCAG AA contrast
- Focus rings visible on all interactive elements
- `aria-label` on all icon-only buttons
- Skip to main content link
