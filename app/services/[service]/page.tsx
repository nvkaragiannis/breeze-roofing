import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { MarkdownContent } from "@/components/ui/MarkdownContent";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { EstimateSection } from "@/components/sections/EstimateSection";
import { WarrantyCallout } from "@/components/sections/WarrantyCallout";
import { TimelineCallout } from "@/components/sections/TimelineCallout";
import { services, getServiceBySlug } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from "@/lib/schema";
import { company } from "@/lib/data/company";
import { getPostBySlug, type BlogPost } from "@/lib/blog";

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

  const serviceSchema = getServiceSchema(service);
  const faqSchema = service.faqs.length > 0 ? getFAQSchema(service.faqs) : null;

  const relatedPosts = (service.relatedBlogSlugs || [])
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, 3);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={serviceSchema} />
      {faqSchema && <SchemaScript schema={faqSchema} />}
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            {service.image && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={960}
                  height={540}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover"
                  priority
                />
              </div>
            )}
            <MarkdownContent content={service.content} />
          </div>
        </article>

        {/* We Serve These Areas */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              We Serve These Areas
            </h2>
            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:border-navy hover:text-navy transition-colors"
                >
                  <MapPin className="w-4 h-4 text-amber shrink-0" />
                  {area.city}, {area.state}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {service.faqs.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-white rounded-lg border border-gray-200 shadow-sm"
                  >
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-gray-900 hover:text-navy transition-colors">
                      <span className="pr-4">{faq.question}</span>
                      <svg
                        className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Warranty Section */}
        {service.warranties && service.warranties.length > 0 && (
          <WarrantyCallout warranties={service.warranties} />
        )}

        {/* Timeline Section */}
        {service.timeline && (
          <TimelineCallout
            duration={service.timeline.duration}
            steps={service.timeline.steps}
          />
        )}

        {/* Related Resources */}
        {relatedPosts.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Related Resources
              </h2>
              <div className="space-y-4">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-navy hover:shadow-md transition-all duration-200 group"
                  >
                    {post.category && (
                      <span className="text-xs font-semibold text-amber uppercase tracking-wide">
                        {post.category}
                      </span>
                    )}
                    <h3 className="font-semibold text-gray-900 group-hover:text-navy transition-colors mb-1 mt-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600">{post.description}</p>
                    <span className="text-sm text-navy mt-2 inline-block">
                      {post.readingTime} min read
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {service.showEmergency && <EmergencyCTA />}
        <EstimateSection />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
