import { CloudLightning, Phone } from "lucide-react";
import { company } from "@/lib/data/company";

export function EmergencyCTA() {
  return (
    <section className="bg-emergency text-white motion-safe:animate-[pulse_3s_ease-in-out_infinite]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <CloudLightning className="w-10 h-10 md:w-12 md:h-12 shrink-0 motion-safe:animate-[bounce_2s_ease-in-out_infinite]" />
          <div>
            <p className="text-xl md:text-2xl font-bold">
              Storm Damage? We&apos;re Available 24/7
            </p>
            <p className="text-white/80 text-sm md:text-base">
              Emergency roof repairs available day or night
            </p>
          </div>
          <a
            href={company.phoneTel}
            className="inline-flex items-center gap-2 bg-white text-emergency px-6 py-3 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors shrink-0 shadow-lg"
          >
            <Phone className="w-4 h-4" />
            {company.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
