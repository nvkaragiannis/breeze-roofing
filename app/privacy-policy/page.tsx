import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Consumer Privacy Protection",
  description:
    "Privacy protection policy for Breeze Roofing. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://breezeroofingnc.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[{ name: "Home", href: "/" }, { name: "Consumer Privacy Protection" }]}
          />
        </div>

        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Consumer Privacy Protection
            </h1>
            <p className="text-sm text-gray-400 mb-10">Last Updated: 9/22/2025</p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <p>Breeze Roofing is committed to protecting the privacy and security of your personal information. This policy explains how we collect, use, and safeguard your data when you interact with our services.</p>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
                <p>We may collect personal information when you:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Request a quote or estimate</li>
                  <li>Schedule an appointment or service</li>
                  <li>Contact us by phone, email, or through our website</li>
                  <li>Apply for financing through our lending partners</li>
                  <li>Subscribe to updates or communications</li>
                </ul>
                <p className="mt-3">This information may include your name, address, phone number, email address, property details, and payment information.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
                <p>Your information is used to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Provide and deliver roofing services</li>
                  <li>Communicate about your project status and scheduling</li>
                  <li>Process payments and financing applications</li>
                  <li>Send service reminders and maintenance notifications</li>
                  <li>Improve our operations and customer experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>With your explicit consent</li>
                  <li>To financing partners (Momnt Financial) when you apply for financing</li>
                  <li>To insurance companies when assisting with claims on your behalf</li>
                  <li>When required by law or legal process</li>
                  <li>To service providers operating under confidentiality agreements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Partners</h2>
                <p>In the course of providing our services, we may share limited information with the following types of partners:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong className="text-gray-900">Momnt Financial</strong> — Financing applications and loan processing</li>
                  <li><strong className="text-gray-900">Insurance Companies</strong> — Claims documentation and coordination</li>
                  <li><strong className="text-gray-900">Material Suppliers</strong> — Order fulfillment and delivery coordination</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Security Measures</h2>
                <p>We implement a variety of security measures to protect your personal information, including:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>SSL encryption for all data transmission</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Regular security assessments</li>
                  <li>Secure storage of physical and digital records</li>
                  <li>Employee training on privacy practices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies and Tracking</h2>
                <p>Our website uses cookies to remember your preferences, analyze site traffic, improve functionality, and provide relevant content. You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Data Retention</h2>
                <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, including ongoing service obligations, warranty periods, legal compliance, and dispute resolution.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Children&apos;s Privacy</h2>
                <p>Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children. If we discover that we have inadvertently collected information from a child under 13, we will promptly delete it.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Information</h2>
                <p>If you have questions about this privacy policy or how your information is handled, please contact us:</p>
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
