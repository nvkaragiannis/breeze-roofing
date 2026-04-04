import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Building2,
  RefreshCcw,
  Wrench,
  Clock,
  CloudLightning,
  Search,
  HardHat,
  Award,
  Settings,
} from "lucide-react";
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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  RefreshCcw,
  Wrench,
  Clock,
  CloudLightning,
  Search,
  HardHat,
  Award,
  Settings,
};

// Blog slug to title mapping for related resources
const blogTitles: Record<string, string> = {
  'best-roofing-materials-coastal-north-carolina': 'Best Roofing Materials for Coastal NC',
  'fortified-roof-vs-regular-roof-comparison': 'Fortified Roof vs Regular Roof Comparison',
  'how-long-does-a-roof-last-coastal-nc': 'How Long Does a Roof Last in Coastal NC?',
  'how-much-does-a-new-roof-cost-wilmington-nc': 'How Much Does a New Roof Cost in Wilmington, NC?',
  'how-to-file-roof-insurance-claim-hurricane-nc': 'How to File a Roof Insurance Claim After a Hurricane in NC',
  'signs-your-roof-has-storm-damage-wilmington': 'Signs Your Roof Has Storm Damage',
  'what-is-ibhs-fortified-roof-nc-insurance-savings': 'What Is an IBHS Fortified Roof? NC Insurance Savings',
};

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

            {/* Local Context Section */}
            {area.localContext && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why {area.city} Roofing Requires Local Expertise
                </h2>

                {/* Landmarks */}
                {area.localContext.landmarks && area.localContext.landmarks.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Local Landmarks</h3>
                    <div className="flex flex-wrap gap-2">
                      {area.localContext.landmarks.map((landmark) => (
                        <span
                          key={landmark}
                          className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Geographic Position */}
                {area.localContext.geographicPosition && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Geographic Position</h3>
                    <p className="text-gray-600 leading-relaxed">{area.localContext.geographicPosition}</p>
                  </div>
                )}

                {/* Building Characteristics */}
                {area.localContext.buildingCharacteristics && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Building Characteristics</h3>
                    <p className="text-gray-600 leading-relaxed">{area.localContext.buildingCharacteristics}</p>
                  </div>
                )}

                {/* Community Profile */}
                {area.localContext.communityProfile && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Community Profile</h3>
                    <p className="text-gray-600 leading-relaxed">{area.localContext.communityProfile}</p>
                  </div>
                )}
              </section>
            )}

            {/* Coastal Conditions Section */}
            {area.coastalFactors && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Coastal Conditions in {area.city}
                </h2>

                {/* Wind Zone and Salt Air Info Card */}
                <div className="bg-sky-50 border-l-4 border-sky-600 p-4 mb-4">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {area.coastalFactors.windZone && (
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Wind Zone</p>
                        <p className="text-gray-900">{area.coastalFactors.windZone}</p>
                      </div>
                    )}
                    {area.coastalFactors.saltAirExposure && (
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Salt Air Exposure</p>
                        <p className="text-gray-900 capitalize">{area.coastalFactors.saltAirExposure}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hurricane History */}
                {area.coastalFactors.hurricaneHistory && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Hurricane History</h3>
                    <p className="text-gray-600 leading-relaxed">{area.coastalFactors.hurricaneHistory}</p>
                  </div>
                )}

                {/* Building Considerations */}
                {area.coastalFactors.buildingConsiderations && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Building Considerations</h3>
                    <p className="text-gray-600 leading-relaxed">{area.coastalFactors.buildingConsiderations}</p>
                  </div>
                )}
              </section>
            )}

            {/* Related Resources Section */}
            {area.relatedBlogSlugs && area.relatedBlogSlugs.length > 0 && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Resources for {area.city} Homeowners
                </h2>
                <div className="space-y-3">
                  {area.relatedBlogSlugs.map((slug) => (
                    <Link
                      key={slug}
                      href={`/blog/${slug}`}
                      className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-navy hover:shadow-md transition-all"
                    >
                      <p className="text-navy font-medium hover:underline">
                        {blogTitles[slug] || slug}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

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

            {/* Our Services in City */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Services in {area.city}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {/* Priority services first with visual indicator */}
                {area.priorityServices && area.priorityServices.length > 0 && (
                  <>
                    {services
                      .filter((s) => area.priorityServices?.includes(s.slug))
                      .map((s) => {
                        const Icon = iconMap[s.icon];
                        return (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="flex items-center gap-3 text-sm text-gray-700 hover:text-navy transition-colors p-3 rounded-lg bg-amber/10 hover:bg-amber/20 border border-amber/30 relative"
                          >
                            {Icon && <Icon className="w-5 h-5 text-amber shrink-0" />}
                            <span className="flex-1">{s.shortTitle}</span>
                            <span className="text-xs font-semibold text-amber uppercase tracking-wide">
                              Recommended
                            </span>
                          </Link>
                        );
                      })}
                  </>
                )}

                {/* Remaining services */}
                {services
                  .filter((s) => !area.priorityServices?.includes(s.slug))
                  .map((s) => {
                    const Icon = iconMap[s.icon];
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 text-sm text-gray-700 hover:text-navy transition-colors p-3 rounded-lg hover:bg-gray-50 border border-gray-100"
                      >
                        {Icon && <Icon className="w-5 h-5 text-amber shrink-0" />}
                        {s.shortTitle}
                      </Link>
                    );
                  })}
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
