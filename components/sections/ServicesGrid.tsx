import { services } from "@/lib/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesGrid() {
  const homepageServices = services.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Roofing Services Across Coastal NC
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From emergency repairs to Fortified Roof installations, Breeze
            Roofing handles every roofing need for homes and businesses across
            the Cape Fear coast.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homepageServices.map((service, index) => (
            <div
              key={service.slug}
              className="opacity-0 motion-safe:animate-breeze-in motion-reduce:opacity-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                title={service.shortTitle}
                description={service.description}
                href={`/services/${service.slug}`}
                icon={service.icon}
                featured={service.featured}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
