import { company } from "@/lib/data/company";
import { InstantEstimatorEmbed } from "@/components/roofr/InstantEstimatorEmbed";
import { Phone } from "lucide-react";

export function EstimateSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get Your Instant Roof Estimate
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get a ballpark estimate in about 60 seconds. No obligation, no
            pressure. Just enter your address and roof details.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <InstantEstimatorEmbed />

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Prefer to talk?{" "}
              <a
                href={company.phoneTel}
                className="inline-flex items-center gap-1 text-navy font-semibold hover:text-amber transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Brett at {company.phoneFormatted}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
