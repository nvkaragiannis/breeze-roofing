import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data/company";

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
  backgroundAlt?: string;
}

function Cloud({ variant = 0, className }: { variant?: number; className?: string }) {
  const paths = [
    // Wispy cumulus
    "M20,55 Q25,52 30,48 Q38,30 55,28 Q65,15 82,22 Q95,10 115,18 Q130,8 148,20 Q168,15 175,30 Q190,35 185,48 Q192,55 180,60 Q175,65 160,62 Q140,70 120,64 Q100,72 80,65 Q60,70 45,62 Q30,66 20,55 Z",
    // Flat-bottomed fluffy
    "M15,58 Q20,50 35,45 Q40,25 60,22 Q70,10 90,18 Q105,5 125,15 Q140,8 155,20 Q170,12 180,28 Q195,32 190,45 Q198,55 185,58 Q170,60 150,58 Q130,62 110,58 Q90,62 70,58 Q50,62 35,58 Q25,60 15,58 Z",
    // Tall billowy
    "M18,60 Q22,55 28,50 Q30,35 45,28 Q50,15 68,20 Q78,8 95,15 Q105,5 120,12 Q135,8 148,18 Q158,12 168,25 Q180,20 185,35 Q195,40 188,52 Q195,58 182,60 Q165,63 145,60 Q125,65 105,60 Q85,65 65,60 Q45,65 30,60 Q22,62 18,60 Z",
  ];

  return (
    <svg
      viewBox="0 0 200 70"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[variant % paths.length]} />
    </svg>
  );
}

export function Hero({
  headline = "Wilmington's Trusted Roofing Contractor",
  subheadline = "Family-owned. Fortified Roof certified. Built for the coast. Free inspections and 24/7 emergency service.",
  primaryCTA = { text: "Get Your Free Estimate", href: "/estimate" },
  secondaryCTA = { text: `Call ${company.phoneFormatted}`, href: company.phoneTel },
  trustItems = [
    "4.9 Stars on Google",
    "NC Licensed & Insured",
    "Fortified Roof Certified",
    "24/7 Emergency Service",
  ],
  backgroundImage,
  backgroundAlt = "Breeze Roofing project in Wilmington NC",
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy via-navy to-navy-light overflow-hidden">
      {/* Conditional background: photo or gradient pattern */}
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </>
      ) : (
        <>
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

          {/* Animated drifting clouds */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Cloud variant={0} className="absolute text-white/[0.03] w-64 top-[8%] animate-[drift_35s_linear_infinite]" />
            <Cloud variant={1} className="absolute text-white/[0.05] w-48 top-[22%] animate-[drift_45s_linear_infinite_5s]" />
            <Cloud variant={2} className="absolute text-white/[0.03] w-72 top-[48%] animate-[drift_55s_linear_infinite_12s]" />
            <Cloud variant={0} className="absolute text-white/[0.04] w-40 top-[68%] animate-[drift_40s_linear_infinite_20s]" />
            <Cloud variant={1} className="absolute text-white/[0.03] w-56 top-[14%] animate-[drift_50s_linear_infinite_28s]" />
            <Cloud variant={2} className="absolute text-white/[0.04] w-52 top-[35%] animate-[drift_42s_linear_infinite_8s]" />
            <Cloud variant={0} className="absolute text-white/[0.03] w-44 top-[58%] animate-[drift_48s_linear_infinite_18s]" />
            <Cloud variant={1} className="absolute text-white/[0.04] w-60 top-[78%] animate-[drift_38s_linear_infinite_25s]" />
            <Cloud variant={2} className="absolute text-white/[0.03] w-36 top-[42%] animate-[drift_52s_linear_infinite_32s]" />
          </div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-white/60 font-medium tracking-wide mb-4">
            4.9 Stars &middot; 50+ Google Reviews &middot; NC Licensed &middot; Fortified Certified
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight motion-safe:animate-fade-in">
            {headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl opacity-0 motion-safe:animate-slide-up motion-reduce:opacity-100" style={{ animationDelay: '0.2s' }}>
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
