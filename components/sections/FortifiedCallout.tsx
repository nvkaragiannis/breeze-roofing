import { Award, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const benefits = [
  "Sealed roof deck with secondary water barrier for hurricane protection",
  "Enhanced roof-to-wall connections rated for coastal NC wind zones",
  "NC homeowners are saving 20-40% annually on insurance premiums",
];

export function FortifiedCallout() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="w-16 h-16 rounded-full bg-amber/20 flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-amber" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Save 20-40% on Homeowner&apos;s Insurance with a Fortified Roof
            </h2>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                  <span className="text-white/80 leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                href="/services/fortified-roof"
              >
                Learn About Fortified Roofs
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-5xl md:text-6xl font-bold text-amber">
                20-40%
              </p>
              <p className="mt-3 text-xl text-white font-semibold">
                Insurance Savings
              </p>
              <p className="mt-2 text-white/60 text-sm">
                Average annual premium reduction for Fortified-designated homes
                in coastal NC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
