import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { EstimateSection } from "@/components/sections/EstimateSection";
import { areas, getAreaBySlug } from "@/lib/data/areas";
import { services } from "@/lib/data/services";
import { getBreadcrumbSchema } from "@/lib/schema";
import { company } from "@/lib/data/company";

export function generateStaticParams() {
  return areas.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: `https://breezeroofingnc.com/areas/${slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Service Areas", url: `${company.url}/areas` },
    { name: area.city, url: `${company.url}/areas/${slug}` },
  ]);

  const neighboringAreas = areas.filter((a) => a.slug !== slug);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { name: "Home", href: "/" },
              { name: "Service Areas", href: "/areas" },
              { name: area.city },
            ]}
          />
        </div>
        <article className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Roofing Contractor {area.city}, {area.state}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-8">{area.intro}</p>

            {/* Challenges Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Roofing Challenges in {area.city}
              </h2>
              <p className="text-gray-600 leading-relaxed">{area.challenges}</p>
            </section>

            {/* Neighborhoods */}
            {area.neighborhoods && area.neighborhoods.length > 0 && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Neighborhoods We Serve in {area.city}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {area.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Services Available */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Services Available in {area.city}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-navy transition-colors p-2 rounded-lg hover:bg-gray-50"
                  >
                    <svg className="w-4 h-4 text-amber shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </section>

            {/* Zip Codes */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Zip Codes Served
              </h2>
              <div className="flex flex-wrap gap-2">
                {area.zipCodes.map((zip) => (
                  <span
                    key={zip}
                    className="inline-block bg-navy/5 text-navy px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {zip}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </article>

        <EstimateSection />

        {/* Neighboring Areas */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nearby Service Areas
            </h2>
            <div className="flex flex-wrap gap-3">
              {neighboringAreas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas/${a.slug}`}
                  className="inline-block bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:border-navy hover:text-navy transition-colors"
                >
                  {a.city}, {a.state}
                </Link>
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
