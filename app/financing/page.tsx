import type { Metadata } from "next";
import Image from "next/image";
import { CreditCard, Clock, ShieldCheck, CalendarRange, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data/company";

const MOMNT_APPLY_URL =
  "https://app.momnt.com/widgets/?merchantId=51f213da-b9bc-4d76-bf95-e898abb76252&widget=ConsumerLoanApplicationWizard";

export const metadata: Metadata = {
  title: "Financing Your New Roof | Breeze Roofing Wilmington NC",
  description:
    "Flexible roof financing options from Breeze Roofing in Wilmington, NC. Pre-qualify in seconds without affecting your credit score. Terms up to 12 years. (910) 665-5277.",
  alternates: {
    canonical: "https://breezeroofingnc.com/financing",
  },
};

const faqs = [
  {
    q: "What credit score do I need?",
    a: "Our financing partner works with lenders offering options for various credit profiles. The pre-qualification process won't affect your credit score, so there's no risk in applying.",
  },
  {
    q: "How long does approval take?",
    a: "Most applications receive an instant decision. Once approved, you can start your roofing project right away.",
  },
  {
    q: "What are the loan terms?",
    a: "Flexible terms are available up to 12 years with competitive interest rates. Your specific terms will depend on your credit profile and loan amount.",
  },
  {
    q: "Is there a prepayment penalty?",
    a: "No. You can pay off your balance early at any time without any additional fees or penalties.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[{ name: "Home", href: "/" }, { name: "Financing" }]}
          />
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Financing Solutions
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Don&apos;t let budget constraints delay your roofing project. We
              offer convenient financing options to help you get the roof you
              need today.
            </p>
            <Button href={MOMNT_APPLY_URL} variant="primary" size="lg">
              Apply for Financing
            </Button>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <CreditCard className="w-8 h-8 text-navy mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Flexible Payment Options
                </h3>
                <p className="text-sm text-gray-600">
                  Choose from a variety of payment plans that fit your budget and
                  timeline.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Clock className="w-8 h-8 text-navy mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Instant Decisions
                </h3>
                <p className="text-sm text-gray-600">
                  Get pre-qualified in seconds without affecting your credit
                  score.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <ShieldCheck className="w-8 h-8 text-navy mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Competitive Rates
                </h3>
                <p className="text-sm text-gray-600">
                  Access competitive interest rates and flexible terms up to 12
                  years.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <CalendarRange className="w-8 h-8 text-navy mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  No Prepayment Penalties
                </h3>
                <p className="text-sm text-gray-600">
                  Pay off your balance early at any time without additional fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fortified ROI Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Fortified Roof: The Smart Investment
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Consider this: a Fortified Roof upgrade typically costs 10-20%
              more than a standard installation, but it can save you 20-40% on
              your homeowner&apos;s insurance every year. When you finance a
              Fortified Roof, the monthly payment is often offset — or more — by
              your insurance savings.
            </p>
            <Button href="/services/fortified-roof" variant="secondary" size="md">
              Learn About Fortified Roofing
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Financing FAQ
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white rounded-xl border border-gray-200"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-semibold text-gray-900 text-sm sm:text-base">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Apply for financing online in minutes, or call Brett at{" "}
              <a
                href={company.phoneTel}
                className="text-navy font-semibold hover:text-navy-light transition-colors"
              >
                {company.phoneFormatted}
              </a>{" "}
              to discuss your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={MOMNT_APPLY_URL} variant="primary" size="lg">
                Apply for Financing
              </Button>
              <Button href="/estimate" variant="secondary" size="lg">
                Get Free Estimate
              </Button>
            </div>

            {/* Momnt Financing Partner Banner */}
            <div className="mt-10">
              <Image
                src="/momnt-web-banner-1650x320-statement.webp"
                alt="Momnt - Affordable financing options. Pre-qualify for financing today without impacting your credit score."
                width={825}
                height={160}
                className="w-full max-w-2xl mx-auto rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
