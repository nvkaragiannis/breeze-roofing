import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { company } from "@/lib/data/company";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for Breeze Roofing services in Wilmington, NC.",
  alternates: {
    canonical: "https://breezeroofingnc.com/terms",
  },
};

export default function TermsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Terms of Service", url: `${company.url}/terms` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[{ name: "Home", href: "/" }, { name: "Terms and Conditions" }]}
          />
        </div>

        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Terms and Conditions
            </h1>
            <p className="text-sm text-gray-400 mb-10">Last Updated: 9/22/2025</p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Agreement to Terms</h2>
                <p>By accessing or using the services provided by Breeze Roofing, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our services or website.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Services Offered</h2>
                <p>Breeze Roofing provides the following services:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Residential and commercial roof installation</li>
                  <li>Roof repair and maintenance</li>
                  <li>Emergency roofing services</li>
                  <li>Roof inspections</li>
                  <li>Insurance claim assistance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Estimates and Pricing</h2>
                <p>All estimates provided by Breeze Roofing are preliminary and subject to change based on actual conditions discovered during inspection or work commencement. Final pricing will be confirmed in a written agreement before work begins. We are committed to transparent pricing with no hidden fees.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Warranties</h2>
                <p>Warranty coverage varies by service type and materials used. Specific warranty terms will be outlined in your individual service agreement. All warranty claims must be submitted in writing. Manufacturer warranties are separate from and in addition to any workmanship warranty provided by Breeze Roofing.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Payment Terms</h2>
                <p>Payment methods and financing options vary by contract. Payment schedules are tied to project milestones as outlined in your individual service agreement. Financing is available through our partner, Momnt Financial, subject to credit approval.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Liability and Insurance</h2>
                <p>Breeze Roofing is fully licensed, bonded, and insured in the state of North Carolina. We maintain general liability insurance and workers&apos; compensation coverage for all crew members. Specific liability limitations are outlined in individual service contracts.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Force Majeure</h2>
                <p>Breeze Roofing shall not be held liable for delays or failure to perform services resulting from circumstances beyond our reasonable control, including but not limited to: severe weather events, natural disasters, material shortages, supply chain disruptions, or government-imposed restrictions.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Dispute Resolution</h2>
                <p>Any disputes arising from our services or these terms shall be resolved through binding arbitration in accordance with the laws of the State of North Carolina. Both parties agree to attempt mediation before proceeding to arbitration.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Modifications to Terms</h2>
                <p>Breeze Roofing reserves the right to modify these terms at any time. Changes will be posted on our website and customers will be notified via email when applicable. Continued use of our services after modifications constitutes acceptance of the updated terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Information</h2>
                <p>If you have questions about these terms, please contact us:</p>
                <ul className="mt-2 space-y-1">
                  <li>Email: <a href={`mailto:${company.email}`} className="text-navy hover:text-navy-light transition-colors">{company.email}</a></li>
                  <li>Phone: <a href={company.phoneTel} className="text-navy hover:text-navy-light transition-colors">{company.phoneFormatted}</a></li>
                  <li>Location: Wilmington, NC</li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
