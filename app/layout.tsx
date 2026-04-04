import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Roofing Contractor Wilmington NC | Breeze Roofing | Free Estimates",
    template: "%s | Breeze Roofing",
  },
  description:
    "Breeze Roofing — Wilmington NC's trusted family-owned roofer. Specializing in IBHS Fortified Roofs that lower your insurance. Free inspections, 24/7 emergency. (910) 665-5277",
  metadataBase: new URL("https://breezeroofingnc.com"),
  openGraph: {
    title: "Breeze Roofing | Wilmington NC Roofing Contractor",
    description:
      "Family-owned roofing contractor serving Wilmington NC and the Cape Fear coast. IBHS Fortified Roof specialists. Free estimates.",
    url: "https://breezeroofingnc.com",
    siteName: "Breeze Roofing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://breezeroofingnc.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function SchemaScript() {
  const schema = getLocalBusinessSchema();
  return (
    <script
      type="application/ld+json"
      // Safe: schema is hardcoded business data, not user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
        <SchemaScript />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
