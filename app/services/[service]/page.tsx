import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { MarkdownContent } from "@/components/ui/MarkdownContent";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { EstimateSection } from "@/components/sections/EstimateSection";
import { services, getServiceBySlug } from "@/lib/data/services";
import { getBreadcrumbSchema } from "@/lib/schema";
import { company } from "@/lib/data/company";

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://breezeroofingnc.com/services/${slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Services", url: `${company.url}/services` },
    { name: service.shortTitle, url: `${company.url}/services/${slug}` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.shortTitle },
            ]}
          />
        </div>
        <article className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {service.title}
            </h1>
            <MarkdownContent content={service.content} />
          </div>
        </article>

        {service.showEmergency && <EmergencyCTA />}
        <EstimateSection />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
