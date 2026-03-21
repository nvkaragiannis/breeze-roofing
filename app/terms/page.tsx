import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Breeze Roofing NC website.",
  alternates: {
    canonical: "https://breezeroofingnc.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-sm text-gray-400">Last updated: January 2025</p>

            <p>
              Welcome to {company.url}, the website of {company.legalName}. By accessing or using our Site, you agree to these Terms of Service.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Use of Website</h2>
            <p>
              This website is provided for informational purposes about our roofing services. The content on this Site does not constitute a contract or guarantee of services.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Instant Estimator</h2>
            <p>
              The instant estimator tool provides ballpark estimates based on satellite imagery and general pricing data. These estimates are not binding quotes. Actual pricing may vary based on on-site inspection, material selection, roof complexity, and other factors. A formal written estimate will be provided after an in-person inspection.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Service Agreements</h2>
            <p>
              All roofing work performed by {company.legalName} is governed by a separate written service agreement. No work will begin without a signed agreement between the homeowner/property owner and {company.legalName}.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Intellectual Property</h2>
            <p>
              All content on this Site — including text, images, logos, and design — is the property of {company.legalName} or its licensors and is protected by copyright law. You may not reproduce, distribute, or use any content without our written permission.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Accuracy of Information</h2>
            <p>
              We make reasonable efforts to ensure the information on this Site is accurate and up-to-date. However, we do not guarantee that all information is complete, current, or error-free. Pricing, availability, and service details are subject to change without notice.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Limitation of Liability</h2>
            <p>
              {company.legalName} is not liable for any damages arising from your use of this Site or reliance on information provided here. Our liability for roofing services is governed by our separate service agreements and applicable warranties.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of any third-party sites.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of North Carolina. Any disputes will be resolved in the courts of New Hanover County, North Carolina.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Site after changes are posted constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Contact Us</h2>
            <p>
              If you have questions about these Terms, contact us at:
            </p>
            <p>
              {company.legalName}<br />
              Email: {company.email}<br />
              Phone: {company.phoneFormatted}
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
