# Breeze Roofing NC — Integrations

## Overview
No custom backend. No database. All lead capture flows through Roofr. Simple email fallback via Resend.

---

## 1. Roofr Instant Estimator (Primary Lead Capture)

### What It Does
- Homeowner enters their address
- Roofr satellite imagery measures the roof automatically
- Homeowner selects materials and gets instant pricing
- Brett receives a fully-qualified Job Card in his Roofr dashboard with: contact info, address, roof size, material preference, timeline/urgency

### How to Get the Embed Code
Brett does this in his Roofr dashboard:
1. Settings → Instant Estimator
2. Click on the estimator name
3. Click "Embed code" → "Copy code"
4. Paste into the site

### Implementation

Create `/components/roofr/InstantEstimatorEmbed.tsx`:

```tsx
'use client';

import { useEffect } from 'react';

interface InstantEstimatorEmbedProps {
  className?: string;
}

export function InstantEstimatorEmbed({ className }: InstantEstimatorEmbedProps) {
  useEffect(() => {
    // Roofr embed loads via script tag
    // The actual script URL is specific to Brett's account
    // Brett provides this from: Roofr Dashboard → Settings → Instant Estimator → Embed Code
  }, []);

  return (
    <div className={`roofr-embed-container min-h-[650px] w-full ${className}`}>
      {/* 
        INTEGRATION POINT:
        Brett pastes his Roofr embed code here.
        It will look something like:
        <script src="https://app.roofr.com/instant-estimator/embed/[BRETT'S-ID]" async></script>
        <div id="roofr-estimator"></div>
        
        Until Brett provides the code, show a placeholder:
      */}
      <div className="flex items-center justify-center h-[650px] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300">
        <div className="text-center">
          <p className="text-gray-500 font-medium">Roofr Instant Estimator</p>
          <p className="text-gray-400 text-sm mt-1">Brett's embed code goes here</p>
        </div>
      </div>
    </div>
  );
}
```

### Roofr Estimator Event Tracking (Google Analytics 4)
Add this to the pages that contain the estimator to track conversions:

```typescript
// In the page or in a useEffect on the embed component
useEffect(() => {
  const handleRoofrEvent = (event: MessageEvent) => {
    if (!event.origin.includes('roofr.com')) return;
    
    if (typeof window.gtag === 'undefined') return;
    
    switch (event.data?.event) {
      case 'estimator_viewed':
        window.gtag('event', 'roofr_estimator_viewed');
        break;
      case 'address_entered':
        window.gtag('event', 'roofr_address_entered');
        break;
      case 'estimate_completed':
        window.gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
          event_category: 'lead',
          event_label: 'roofr_estimate_completed'
        });
        break;
      case 'contact_submitted':
        window.gtag('event', 'generate_lead', {
          event_category: 'lead',
          event_label: 'roofr_contact_submitted'
        });
        break;
    }
  };

  window.addEventListener('message', handleRoofrEvent);
  return () => window.removeEventListener('message', handleRoofrEvent);
}, []);
```

### Multiple Estimator Links
Brett can create different estimator links for different traffic sources (homepage, blog, social ads). Track which converts best.

---

## 2. Resend (Email Fallback)

Used only for the simple contact form on `/contact/` — for people who want to message Brett without going through the estimator (e.g., "I have a question before I get an estimate").

### Setup
```bash
npm install resend
```

Environment variable:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

### API Route: `/app/api/contact/route.ts`

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, phone, email, message } = await request.json();

  // Basic validation
  if (!name || !phone || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'Website Contact <noreply@breezeroofingnc.com>',
      to: 'brett@breezeroofingnc.com',  // Update with Brett's actual email
      replyTo: email,
      subject: `New Website Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <p><em>Submitted via breezeroofingnc.com contact form</em></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

### Contact Form Component
Simple form — 4 fields max:
- Name (required)
- Phone (required)
- Email (optional)
- Message (required)

On submit: POST to `/api/contact`, show success/error state. No page reload.

---

## 3. Google Analytics 4

### Setup
Use `next/third-parties` (built into Next.js 14+):

```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
```

### Key Events to Track
- `click_call` — any phone number tap
- `click_estimate_cta` — any "Get Estimate" button click
- `roofr_estimate_completed` — via Roofr postMessage
- `generate_lead` — contact form submission

### Conversion Goals in GA4
Set these as conversions:
- Roofr estimate completed
- Contact form submitted
- Phone click (tel: link)

---

## 4. Google Search Console
- Verify via DNS TXT record (Vercel makes this easy)
- Submit sitemap: `https://breezeroofingnc.com/sitemap.xml`
- Monitor: Core Web Vitals, Coverage, Search Performance

---

## Environment Variables

Create `.env.local` (never commit this):
```
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://breezeroofingnc.com
```

For Vercel deployment, add these in the Vercel project settings under Environment Variables.

---

## Zapier (Optional, Future Enhancement)
If Brett wants to connect Roofr leads to his email/CRM automatically:
- Roofr → Zapier → Gmail (send Brett a text-formatted summary email)
- Roofr → Zapier → Google Sheets (lead log)
- Not needed for v1, but Roofr natively supports Zapier triggers
