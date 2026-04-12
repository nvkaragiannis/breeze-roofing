import { Wind, Droplets, FileCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Wind,
    title: "Hurricane & Storm Resistance",
    description:
      "We install roofing systems rated for coastal NC wind zones, using hurricane-rated shingles, enhanced fastening patterns, and sealed roof decks that resist wind-driven rain.",
  },
  {
    icon: Droplets,
    title: "Salt Air & Humidity Materials",
    description:
      "Standard roofing materials corrode and degrade faster on the coast. We use salt-air-resistant flashing, stainless steel fasteners, and materials tested for coastal conditions.",
  },
  {
    icon: FileCheck,
    title: "Insurance Claim Assistance",
    description:
      "When storms damage your roof, we handle the documentation, meet with your adjuster, and ensure the scope of work matches the actual damage. No detail gets missed.",
  },
];

export function CoastalExpertise() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 motion-safe:animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Built for the Coast
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Standard roofing practices from inland areas don&apos;t hold up on
            the NC coast. We specialize in materials and methods designed for
            your environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-8 text-center transition-all duration-200 opacity-0 motion-safe:animate-fade-in motion-reduce:opacity-100"
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
