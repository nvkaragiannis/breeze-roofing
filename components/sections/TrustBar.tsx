import { Star, Shield, Users, Award, Clock } from "lucide-react";
import { company } from "@/lib/data/company";
import { cn } from "@/lib/utils";

const trustItems = [
  {
    icon: Star,
    value: `${company.reviewRating}`,
    label: `${company.reviewCount}+ Reviews`,
  },
  {
    icon: Shield,
    value: "Licensed",
    label: "NC Licensed & Insured",
  },
  {
    icon: Users,
    value: "Family",
    label: "Family-Owned",
  },
  {
    icon: Award,
    value: "Fortified",
    label: "IBHS Certified",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Emergency Service",
  },
];

const compactTrustItems = [
  {
    icon: Star,
    label: `${company.reviewRating} Google Rating`,
  },
  {
    icon: Shield,
    label: "Licensed & Insured",
  },
  {
    icon: Award,
    label: "Fortified Certified",
  },
];

interface TrustBarProps {
  variant?: "section" | "compact";
  className?: string;
}

export function TrustBar({ variant = "section", className }: TrustBarProps) {
  // Compact variant for Header/Footer
  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        {compactTrustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-1.5 shrink-0">
              <Icon className="w-4 h-4" />
              <span className="text-sm whitespace-nowrap">{item.label}</span>
            </div>
          );
        })}
      </div>
    );
  }

  // Section variant for homepage (default)
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 shrink-0"
              >
                <Icon className="w-5 h-5 text-navy shrink-0" />
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-navy">
                    {item.value}
                  </span>
                  <span className="text-sm text-gray-600 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
