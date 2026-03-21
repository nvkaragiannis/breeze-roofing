import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { InstantEstimatorEmbed } from "@/components/roofr/InstantEstimatorEmbed";
import { company } from "@/lib/data/company";

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
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Get Your Free Instant Roof Estimate
              </h1>
              <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                Enter your address below to get a ballpark estimate in about 60 seconds. No obligation. No pressure.
              </p>
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
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
