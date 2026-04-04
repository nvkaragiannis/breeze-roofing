import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Droplets, Award, Layers } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data/company";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Leaf Solution Gutter Guards | Breeze Roofing Wilmington NC",
  description:
    "Professional-grade Leaf Solution gutter guards installed by Breeze Roofing in Wilmington, NC. Lifetime warranty, high-flow design, superior debris protection. (910) 665-5277.",
  alternates: {
    canonical: "https://breezeroofingnc.com/leaf-solutions",
  },
};

export default function LeafSolutionsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Leaf Solutions", url: `${company.url}/leaf-solutions` },
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
              { name: "Evelyn's Leaf Solutions" },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional-Grade Leaf Solution Gutter Guards
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Installed by Breeze Roofing — protect your gutters from leaves,
              debris, and clogs with industry-leading gutter guard systems
              backed by a lifetime limited warranty.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Quote
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Shield className="w-8 h-8 text-navy mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Lifetime Limited Warranty
                </h3>
                <p className="text-sm text-gray-600">
                  Protected against manufacturing defects for the life of your
                  roof.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Award className="w-8 h-8 text-navy mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Premium Quality
                </h3>
                <p className="text-sm text-gray-600">
                  Industry-leading materials and innovative design technology for
                  lasting performance.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Layers className="w-8 h-8 text-navy mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Superior Protection
                </h3>
                <p className="text-sm text-gray-600">
                  Enhanced corrosion and rust resistance for superior durability
                  in coastal NC conditions.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Droplets className="w-8 h-8 text-navy mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  High Flow Design
                </h3>
                <p className="text-sm text-gray-600">
                  Handles up to 60 gallons of water per minute — built for heavy
                  coastal NC rainstorms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Lines */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Our Gutter Guard Systems
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                <Image
                  src="/images/services/leaf-solution-self-shedding-xtreme.webp"
                  alt="XTreme Gutter Guard — aluminum gutter guard shedding leaves and debris from shingles"
                  width={960}
                  height={720}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    XTreme Gutter Guard
                  </h3>
                  <p className="text-gray-600">
                    Strong aluminum design for reliable leaf and debris protection.
                    Built to withstand the elements and keep your gutters flowing
                    freely year-round.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                <Image
                  src="/images/services/leaf-solution-self-shed-debris.webp"
                  alt="Leaf Solution Gutter Guard — stainless steel mesh blocking debris while water flows through"
                  width={960}
                  height={720}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Leaf Solution Gutter Guard
                  </h3>
                  <p className="text-gray-600">
                    Stainless steel mesh blocks debris with lasting durability.
                    The premium choice for homeowners who want maximum protection
                    and longevity.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                <Image
                  src="/images/services/leaf-solution-new-wave-miter.webp"
                  alt="Leaf Solution New Wave Gutter Guard — low-profile miter corner design blending with roofline"
                  width={960}
                  height={500}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Leaf Solution New Wave Gutter Guard
                  </h3>
                  <p className="text-gray-600">
                    Low-profile guard blends seamlessly with your roofline while
                    ensuring smooth water flow. The best option for homeowners who
                    want protection without changing the look of their home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Protect Your Gutters?
            </h2>
            <p className="text-gray-600 mb-8">
              Call Brett at{" "}
              <a
                href={company.phoneTel}
                className="text-navy font-semibold hover:text-navy-light transition-colors"
              >
                {company.phoneFormatted}
              </a>{" "}
              or request a free quote online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Get a Free Quote
              </Button>
              <Button href={company.phoneTel} variant="secondary" size="lg">
                Call {company.phoneFormatted}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
