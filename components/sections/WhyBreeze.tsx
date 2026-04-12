import { Phone, FileText, Award, Waves } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { LucideIcon } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: Phone,
    title: "Brett Answers the Phone",
    description:
      "You call, the owner picks up. No call centers, no runaround. Brett personally handles every estimate and oversees every job.",
  },
  {
    icon: FileText,
    title: "Honest Estimates",
    description:
      "If a repair will fix the problem, that's what we recommend. No upselling, no pressure. Detailed written estimates with no hidden costs.",
  },
  {
    icon: Award,
    title: "Fortified Roof Certified",
    description:
      "We're IBHS-certified to install Fortified Roofs that can reduce your insurance premiums 20-40%. The smart long-term investment.",
  },
  {
    icon: Waves,
    title: "Coastal Expertise",
    description:
      "We build roofs specifically for salt air, humidity, and hurricane-force winds. Standard inland roofing methods don't hold up here.",
  },
];

export function WhyBreeze() {
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Wilmington Homeowners Choose Breeze
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="order-2 lg:order-1">
            <ImagePlaceholder
              label="Photo of Brett / Breeze Roofing crew"
              aspectRatio="square"
              className="max-w-md mx-auto lg:mx-0"
            />
          </div>

          {/* Pillars */}
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex flex-col gap-3 opacity-0 motion-safe:animate-slide-up motion-reduce:opacity-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center motion-safe:transition-transform motion-safe:hover:scale-105">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
