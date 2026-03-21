import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface HeroCTA {
  text: string;
  href: string;
}

interface HeroProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: HeroCTA;
  secondaryCTA?: HeroCTA;
  trustItems?: string[];
  backgroundImage?: string;
}

export function Hero({
  headline = "Wilmington's Trusted Roofing Contractor",
  subheadline = "Family-owned. Fortified Roof certified. Built for the coast. Free inspections and 24/7 emergency service.",
  primaryCTA = { text: "Get Your Free Estimate", href: "/estimate" },
  secondaryCTA = { text: "Call (910) 665-5277", href: "tel:+19106655277" },
  trustItems = [
    "4.9 Stars on Google",
    "NC Licensed & Insured",
    "Fortified Roof Certified",
    "24/7 Emergency Service",
  ],
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy via-navy to-navy-light overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-white/60 font-medium tracking-wide mb-4">
            4.9 Stars &middot; 50+ Google Reviews &middot; NC Licensed &middot; Fortified Certified
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            {subheadline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" href={primaryCTA.href}>
              {primaryCTA.text}
            </Button>
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-4 text-lg rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg border-2 border-white/30 text-white hover:bg-white/10"
            >
              {secondaryCTA.text}
            </a>
          </div>
        </div>

        {/* Trust Bar at bottom */}
        <div className="mt-16 md:mt-24 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber shrink-0" />
                <span className="text-sm text-white/80 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
