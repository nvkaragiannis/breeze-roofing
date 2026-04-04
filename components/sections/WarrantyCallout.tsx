import { Shield, CheckCircle } from "lucide-react";

interface WarrantyCalloutProps {
  title?: string;
  warranties: string[];
}

export function WarrantyCallout({ title = "Our Warranty & Guarantee", warranties }: WarrantyCalloutProps) {
  return (
    <section className="py-12 bg-sky/10 border-y border-sky/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
            <ul className="space-y-3">
              {warranties.map((warranty, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{warranty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
