import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
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

/**
 * Renders markdown-like service content as React elements.
 * Safe: content is hardcoded in lib/data/services.ts, not user input.
 */
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let olItems: string[] = [];
  let elementIndex = 0;

  function flushUl() {
    if (listItems.length > 0) {
      const items = [...listItems];
      listItems = [];
      elements.push(
        <ul key={`ul-${elementIndex++}`} className="my-4 space-y-2 list-disc list-inside text-gray-600">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
  }

  function flushOl() {
    if (olItems.length > 0) {
      const items = [...olItems];
      olItems = [];
      elements.push(
        <ol key={`ol-${elementIndex++}`} className="my-4 space-y-2 list-decimal list-inside text-gray-600">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    }
  }

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      flushUl();
      flushOl();
      elements.push(
        <h2
          key={`h2-${elementIndex++}`}
          className="text-2xl font-bold text-gray-900 mt-10 mb-4"
        >
          {trimmed.replace("## ", "")}
        </h2>
      );
    } else if (trimmed.startsWith("- ")) {
      flushOl();
      // Strip markdown bold markers for display
      const text = trimmed.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "$1");
      listItems.push(text);
    } else if (/^\d+\.\s/.test(trimmed)) {
      flushUl();
      const text = trimmed.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "$1");
      olItems.push(text);
    } else if (trimmed === "") {
      flushUl();
      flushOl();
    } else {
      flushUl();
      flushOl();
      const text = trimmed.replace(/\*\*(.*?)\*\*/g, "$1");
      elements.push(
        <p key={`p-${elementIndex++}`} className="text-gray-600 leading-relaxed my-3">
          {text}
        </p>
      );
    }
  }

  flushUl();
  flushOl();

  return elements;
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
            <div className="prose-content">{renderContent(service.content)}</div>
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
