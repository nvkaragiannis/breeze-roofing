import { CloudLightning, Phone } from "lucide-react";
import { company } from "@/lib/data/company";

export function EmergencyCTA() {
  return (
    <section className="bg-emergency text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <CloudLightning className="w-8 h-8 shrink-0" />
          <p className="text-lg md:text-xl font-bold">
            Storm Damage? We&apos;re Available 24/7
          </p>
          <a
            href={company.phoneTel}
            className="inline-flex items-center gap-2 bg-white text-emergency px-6 py-2.5 rounded-lg font-semibold hover:bg-white/90 transition-colors shrink-0"
          >
            <Phone className="w-4 h-4" />
            {company.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
