import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data/services";
import { getBreadcrumbSchema } from "@/lib/schema";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Roofing Services Wilmington NC",
  description:
    "Complete roofing services in Wilmington NC. Residential, commercial, storm damage, emergency repair, Fortified Roof installation, and more. Free estimates from Breeze Roofing.",
  alternates: {
    canonical: "https://breezeroofingnc.com/services",
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Services", url: `${company.url}/services` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
        </div>
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Roofing Services Wilmington NC
            </h1>
            <p className="text-gray-600 max-w-3xl mb-12 leading-relaxed">
              Breeze Roofing provides a full range of roofing services for homes and businesses across Wilmington and the Cape Fear coast. Every service is backed by our commitment to quality craftsmanship and honest assessments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.shortTitle}
                  description={service.description}
                  href={`/services/${service.slug}`}
                  icon={service.icon}
                  featured={service.featured}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
