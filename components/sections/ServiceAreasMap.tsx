import { areas } from "@/lib/data/areas";
import { AreaCard } from "@/components/ui/AreaCard";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function ServiceAreasMap() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Serving Wilmington &amp; the Cape Fear Coast
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Breeze Roofing provides residential and commercial roofing services
            across southeastern North Carolina.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Area links grid */}
          <div className="grid grid-cols-2 gap-4">
            {areas.map((area) => (
              <AreaCard key={area.slug} city={area.city} slug={area.slug} />
            ))}
          </div>

          {/* Map placeholder */}
          <div>
            <ImagePlaceholder
              label="Google Map embed - Wilmington NC service area"
              aspectRatio="square"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
