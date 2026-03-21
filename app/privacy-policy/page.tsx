import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Breeze Roofing NC website.",
  alternates: {
    canonical: "https://breezeroofingnc.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-sm text-gray-400">Last updated: January 2025</p>

            <p>
              {company.legalName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website at {company.url} (the &quot;Site&quot;). This Privacy Policy describes how we collect, use, and share information when you use our Site or contact us.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Contact Information:</strong> Name, phone number, email address, and any message you send through our contact form or email.</li>
              <li><strong>Estimate Information:</strong> Address and roof details you enter into our instant estimator tool.</li>
              <li><strong>Usage Data:</strong> We use Google Analytics to collect anonymous usage data such as pages visited, time on site, and referring sources.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, and IP address (collected automatically).</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 pt-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To respond to your inquiries and provide estimates</li>
              <li>To communicate with you about our services</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Service providers who assist in operating our website (hosting, analytics, email delivery)</li>
              <li>Our instant estimator tool provider (Roofr) when you use the estimator feature</li>
              <li>As required by law or to protect our legal rights</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Cookies</h2>
            <p>
              Our Site uses cookies and similar technologies for analytics purposes. You can control cookies through your browser settings. Disabling cookies may affect site functionality.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Third-Party Services</h2>
            <p>
              Our Site uses Google Analytics for website analytics and Roofr for the instant estimator feature. These services have their own privacy policies governing their collection and use of data.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Data Security</h2>
            <p>
              We take reasonable measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Your Rights</h2>
            <p>
              You may request to access, correct, or delete your personal information by contacting us at {company.email} or calling {company.phoneFormatted}.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Children&apos;s Privacy</h2>
            <p>
              Our Site is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:
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
