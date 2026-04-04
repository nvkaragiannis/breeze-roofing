import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Roofing FAQ — Wilmington, NC",
  description:
    "Answers to common roofing questions for Wilmington NC homeowners. Roof replacement costs, insurance, Fortified Roofs, storm damage, and more.",
  alternates: {
    canonical: "https://breezeroofingnc.com/faq",
  },
};

const faqs = [
  {
    question: "How much does a new roof cost in Wilmington, NC?",
    answer:
      "A typical residential roof replacement in Wilmington costs between $8,000 and $20,000 depending on the size of your home, materials chosen, and complexity of the roof. Architectural shingles are the most popular choice, while metal roofing and Fortified Roof installations are at the higher end. We provide free detailed estimates.",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of the roof, weather conditions, and the materials being installed. We'll give you a clear timeline before work begins.",
  },
  {
    question: "What is a Fortified Roof and is it worth the investment?",
    answer:
      "A Fortified Roof meets the IBHS (Insurance Institute for Business & Home Safety) standards for wind and storm resistance. In coastal NC, a Fortified designation can lower your homeowner's insurance premiums by 20-40% annually. The upgrade typically costs 10-20% more than a standard installation but pays for itself through insurance savings over time.",
  },
  {
    question: "Do you help with insurance claims for storm damage?",
    answer:
      "Yes. Brett meets with your insurance adjuster on-site, provides detailed documentation of all damage, and ensures the scope of work matches the actual damage. If the adjuster misses something, we file supplements with supporting documentation.",
  },
  {
    question: "How do I know if I need a roof repair or full replacement?",
    answer:
      "Generally, if your roof is under 15 years old and the damage is isolated (a few missing shingles, a single leak point), a repair is usually sufficient. If your roof is over 20 years old, has widespread damage, or multiple leak points, replacement is typically more cost-effective. Brett will give you an honest assessment — if a repair will fix the problem, that's what we'll recommend.",
  },
  {
    question: "What roofing materials do you recommend for coastal NC?",
    answer:
      "For most Wilmington-area homes, we recommend architectural asphalt shingles rated for high winds (130+ mph), or standing seam metal roofing for maximum longevity. Impact-resistant (Class 4) shingles are a good choice for hail-prone areas. For the best protection and insurance savings, we recommend Fortified Roof specifications with any of these materials.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes, we offer flexible financing options to help make your new roof affordable. Ask Brett about available financing plans during your free estimate. We want to make sure a quality roof is accessible to every homeowner.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Breeze Roofing is fully licensed in North Carolina and carries both general liability insurance and workers' compensation coverage. We're happy to provide proof of insurance upon request.",
  },
  {
    question: "Do you provide emergency roof repair?",
    answer:
      "Yes, we offer 24/7 emergency roof repair service. When you call (910) 665-5277, Brett answers — not a call center. We provide emergency tarping, temporary repairs to prevent further damage, and documentation for insurance claims.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Breeze Roofing serves Wilmington, Hampstead, Leland, Carolina Beach, Wrightsville Beach, Southport, Topsail Island, Surf City, and surrounding communities across the Cape Fear coast in southeastern North Carolina.",
  },
];

export default function FAQPage() {
  const faqSchema = getFAQSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "FAQ", url: `${company.url}/faq` },
  ]);

  return (
    <>
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        </div>

        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Roofing FAQ &mdash; Wilmington, NC
            </h1>
            <p className="text-gray-600 mb-10">
              Answers to common roofing questions from Wilmington-area homeowners.
            </p>

            <div className="space-y-4">
              {faqs.map((faq) => (
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
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
