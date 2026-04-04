import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { AreaCard } from "@/components/ui/AreaCard";
import { areas } from "@/lib/data/areas";
import { getBreadcrumbSchema } from "@/lib/schema";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Service Areas — Wilmington NC & Cape Fear Coast",
  description:
    "Breeze Roofing serves Wilmington, Hampstead, Leland, Carolina Beach, Wrightsville Beach, Southport, Topsail Island, and Surf City. Free estimates.",
  alternates: {
    canonical: "https://breezeroofingnc.com/areas",
  },
};

export default function AreasPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Service Areas", url: `${company.url}/areas` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Home", href: "/" }, { name: "Service Areas" }]} />
        </div>
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h1>
            <p className="text-gray-600 max-w-3xl mb-12 leading-relaxed">
              Breeze Roofing proudly serves Wilmington and the surrounding Cape Fear coast communities. Click on your city to learn about our local roofing services.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {areas.map((area) => (
                <AreaCard key={area.slug} city={area.city} slug={area.slug} />
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
