import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { InstantEstimatorEmbed } from "@/components/roofr/InstantEstimatorEmbed";
import { TrustBar } from "@/components/sections/TrustBar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { company } from "@/lib/data/company";
import { getBreadcrumbSchema } from "@/lib/schema";
import { Shield, Award, Star, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Instant Roof Estimate | Breeze Roofing Wilmington NC",
  description:
    "Get an instant roof estimate in about 60 seconds. No obligation, no pressure. Enter your address for a ballpark price on your new roof.",
  alternates: {
    canonical: "https://breezeroofingnc.com/estimate",
  },
};

const steps = [
  {
    number: "1",
    title: "Enter Your Address",
    description: "Our tool uses satellite imagery to measure your roof automatically.",
  },
  {
    number: "2",
    title: "Get Your Estimate",
    description: "Receive a ballpark estimate for your roof replacement in about 60 seconds.",
  },
  {
    number: "3",
    title: "Schedule a Free Inspection",
    description: "Brett will come out, inspect your roof in person, and give you a detailed written estimate.",
  },
];

const faqs = [
  {
    q: "Is the instant estimate accurate?",
    a: "The instant estimate gives you a reliable ballpark range based on satellite measurements of your roof. For a precise quote, Brett will conduct a free on-site inspection.",
  },
  {
    q: "Is there any obligation?",
    a: "None at all. The estimate is free, and there's no pressure to move forward. We believe in earning your business with honest assessments.",
  },
  {
    q: "What happens after I get my estimate?",
    a: "You can schedule a free in-person inspection at your convenience. Brett will assess your roof, discuss material options, and provide a detailed written estimate.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes! We offer flexible financing options to help make your new roof affordable. Ask Brett about available plans.",
  },
];

export default function EstimatePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Free Estimate", url: `${company.url}/estimate` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Home", href: "/" }, { name: "Free Estimate" }]} />
        </div>
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Get Your Free Instant Roof Estimate
              </h1>
              <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                Enter your address below to get a ballpark estimate in about 60 seconds. No obligation. No pressure.
              </p>
              <TrustBar variant="compact" className="justify-center mt-6 mb-8 text-gray-600" />
            </div>
            <InstantEstimatorEmbed />
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              What Happens Next
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Breeze Roofing Trust Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              Why Breeze Roofing?
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Shield className="w-8 h-8 text-navy mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-sm text-gray-600">
                  Fully licensed and insured for your protection and peace of mind.
                </p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-navy mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Fortified Certified</h3>
                <p className="text-sm text-gray-600">
                  IBHS Fortified certified for superior hurricane protection.
                </p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-navy mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">4.9 Star Rating</h3>
                <p className="text-sm text-gray-600">
                  Rated 4.9/5 by hundreds of satisfied Wilmington area customers.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-navy mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency</h3>
                <p className="text-sm text-gray-600">
                  Emergency repair service available around the clock when you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mini FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-gray-50 rounded-lg border border-gray-200"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-gray-900">
                    {faq.q}
                    <svg
                      className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Prefer to talk? Call Brett directly at{" "}
                <a href={company.phoneTel} className="text-navy font-semibold hover:text-amber transition-colors">
                  {company.phoneFormatted}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-12 md:py-16 bg-navy text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Get your instant estimate above, or call Brett directly to schedule your free inspection. No obligation, no pressure—just honest advice and expert service.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={company.phoneTel}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-colors duration-300"
              >
                Call {company.phoneFormatted}
              </a>
              <a
                href="#main-content"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber text-navy font-semibold rounded-lg hover:bg-amber-light transition-colors duration-300"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
