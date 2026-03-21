import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Roofing Materials & Products | Breeze Roofing Wilmington NC",
  description:
    "Learn about roofing materials for coastal NC homes. Architectural shingles, metal roofing, impact-resistant shingles, and flat roof systems from Breeze Roofing.",
  alternates: {
    canonical: "https://breezeroofingnc.com/roofing-products",
  },
};

const products = [
  {
    title: "Architectural Shingles",
    description:
      "The most popular choice for Wilmington-area homes. Architectural (dimensional) shingles offer a rich, multi-layered appearance and superior wind resistance compared to traditional 3-tab shingles.",
    features: [
      "Wind ratings up to 130+ mph for coastal NC",
      "30-50 year manufacturer warranties",
      "Wide range of colors and styles",
      "Algae-resistant options for humid coastal conditions",
    ],
    bestFor: "Most residential roofing projects, balancing performance, appearance, and cost.",
  },
  {
    title: "Metal Roofing",
    description:
      "Standing seam and exposed-fastener metal roofing systems offer the longest lifespan and highest wind resistance of any residential roofing material. Metal roofs are becoming increasingly popular on the NC coast.",
    features: [
      "50+ year expected lifespan",
      "Wind ratings up to 160+ mph",
      "Energy-efficient — reflects heat, lowering cooling costs",
      "Salt-air resistant coatings available",
      "Standing seam systems have no exposed fasteners",
    ],
    bestFor: "Homeowners seeking maximum longevity and wind resistance, especially oceanfront and near-beach properties.",
  },
  {
    title: "Impact-Resistant Shingles",
    description:
      "Class 4 impact-resistant shingles are designed to withstand hail, flying debris, and severe weather without cracking or losing granules. Many insurers offer additional discounts for Class 4 rated roofing.",
    features: [
      "Class 4 rated — highest impact resistance",
      "Additional insurance discounts in many cases",
      "Look and install like standard architectural shingles",
      "Enhanced protection during storm season",
    ],
    bestFor: "Areas with frequent severe storms and homeowners wanting maximum weather protection.",
  },
  {
    title: "Flat Roof Systems",
    description:
      "Commercial and residential flat or low-slope roofs require specialized membrane systems. We install TPO, EPDM, and modified bitumen systems designed for the coastal NC climate.",
    features: [
      "TPO — energy-efficient, UV-resistant white membrane",
      "EPDM — durable rubber membrane, cost-effective for large areas",
      "Modified bitumen — multi-layer system for high-traffic roof areas",
      "Proper drainage design for flat roof applications",
    ],
    bestFor: "Commercial buildings, modern residential designs, and additions with flat or low-slope sections.",
  },
];

export default function RoofingProductsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Home", href: "/" }, { name: "Roofing Products" }]} />
        </div>

        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Roofing Materials &amp; Products
            </h1>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Choosing the right roofing material is one of the most important decisions you&apos;ll make. Here&apos;s what we install and when each option makes the most sense for coastal NC homes and businesses.
            </p>

            <div className="space-y-12">
              {products.map((product) => (
                <div
                  key={product.title}
                  className="bg-white rounded-xl border border-gray-200 p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-700 text-sm">
                        <svg className="w-4 h-4 text-amber mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm">
                    <span className="font-semibold text-navy">Best for:</span>{" "}
                    <span className="text-gray-600">{product.bestFor}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Not sure which material is right for your home? Brett will walk you through the options.
              </p>
              <Button href="/estimate" variant="primary" size="lg">
                Get Your Free Estimate
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
