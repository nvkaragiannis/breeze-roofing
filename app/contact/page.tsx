import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/data/company";
import { getBreadcrumbSchema } from "@/lib/schema";
import { Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Breeze Roofing — Wilmington, NC",
  description:
    "Contact Breeze Roofing in Wilmington, NC. Call (910) 665-5277 or send us a message. Free estimates, 24/7 emergency service.",
  alternates: {
    canonical: "https://breezeroofingnc.com/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Contact", url: `${company.url}/contact` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
        </div>

        <EmergencyCTA />

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Contact Breeze Roofing
            </h1>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Contact Info */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a
                        href={company.phoneTel}
                        className="text-navy font-semibold hover:text-amber transition-colors"
                      >
                        {company.phoneFormatted}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Brett answers directly — not a call center.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a
                        href={`mailto:${company.email}`}
                        className="text-navy hover:text-amber transition-colors"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Hours</h3>
                      <p className="text-gray-600 text-sm">{company.hours.weekday}</p>
                      <p className="text-gray-600 text-sm">{company.hours.saturday}</p>
                      <p className="text-amber font-semibold text-sm mt-1">
                        {company.hours.emergency}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <ImagePlaceholder label="Google Map — Breeze Roofing service area" aspectRatio="video" />
                </div>
              </div>

              {/* Right: Contact Form */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
