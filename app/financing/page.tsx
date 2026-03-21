import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Financing Your New Roof | Breeze Roofing Wilmington NC",
  description:
    "Flexible roof financing options from Breeze Roofing in Wilmington, NC. Make your new roof affordable with monthly payment plans. Call (910) 665-5277.",
  alternates: {
    canonical: "https://breezeroofingnc.com/financing",
  },
};

export default function FinancingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Home", href: "/" }, { name: "Financing" }]} />
        </div>

        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Financing Your New Roof
            </h1>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                A new roof is one of the most important investments you can make in your home. We understand that it&apos;s also a significant expense, which is why Breeze Roofing offers flexible financing options to help make your new roof affordable.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                Financing Options Available
              </h2>
              <p>
                We work with trusted lending partners to offer a range of financing plans. Whether you need a full roof replacement, a Fortified Roof upgrade, or storm damage repair, we can help you find a payment plan that fits your budget.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Low Monthly Payments</h3>
                  <p className="text-sm">
                    Spread the cost of your new roof into manageable monthly payments that fit your household budget.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Competitive Rates</h3>
                  <p className="text-sm">
                    Our lending partners offer competitive interest rates for qualified applicants.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Approval</h3>
                  <p className="text-sm">
                    The application process is straightforward. Most approvals come back within minutes.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">No Prepayment Penalties</h3>
                  <p className="text-sm">
                    Pay off your balance early without any additional fees or penalties.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                Fortified Roof: The Smart Investment
              </h2>
              <p>
                Consider this: a Fortified Roof upgrade typically costs 10-20% more than a standard installation, but it can save you 20-40% on your homeowner&apos;s insurance every year. When you finance a Fortified Roof, the monthly payment is often offset — or more — by your insurance savings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                How to Get Started
              </h2>
              <p>
                Getting started is easy. Call Brett at{" "}
                <a href={company.phoneTel} className="text-navy font-semibold hover:text-amber transition-colors">
                  {company.phoneFormatted}
                </a>{" "}
                or get a free estimate online. During your consultation, Brett will walk you through the available financing options and help you choose the best plan for your situation.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/estimate" variant="primary" size="lg">
                Get Free Estimate
              </Button>
              <Button href={company.phoneTel} variant="secondary" size="lg">
                Call Brett: {company.phoneFormatted}
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
