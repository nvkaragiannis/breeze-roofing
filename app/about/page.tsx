import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data/company";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Breeze Roofing — A Local Family Business",
  description:
    "Breeze Roofing is a family-owned roofing contractor in Wilmington, NC. Meet Brett — the owner who answers his own phone and stands behind every roof.",
  alternates: {
    canonical: "https://breezeroofingnc.com/about",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "About", url: `${company.url}/about` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Home", href: "/" }, { name: "About" }]} />
        </div>

        <article className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              About Breeze Roofing &mdash; A Local Family Business
            </h1>

            {/* Owner Story */}
            <div className="prose-content space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                Breeze Roofing was founded by Brett with a simple idea: Wilmington homeowners deserve a roofer who answers his own phone, shows up when he says he will, and does the job right the first time.
              </p>

              <p className="text-gray-600 leading-relaxed">
                After years working in the roofing industry across coastal North Carolina, Brett saw the same problems over and over — storm chasers who disappear after collecting payment, big companies that treat homeowners like ticket numbers, and sloppy work that doesn&apos;t hold up to the first real storm.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Brett started Breeze Roofing to do things differently. When you call, Brett picks up. When you need an estimate, Brett comes out personally. When the crew is on your roof, Brett is either up there with them or checking their work. And when the job is done, Brett is the one who does the final walkthrough with you.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We&apos;re not the biggest roofing company in Wilmington — and that&apos;s by design. We do fewer jobs, but we do them right. Every roof we install is built for the conditions we actually face on the Cape Fear coast: salt air, humidity, and hurricane-force winds.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Breeze Roofing is also one of the few contractors in the region certified to install IBHS Fortified Roofs — a designation that can save NC homeowners 20-40% on their homeowner&apos;s insurance premiums annually. It&apos;s the smart investment for coastal living, and we handle the entire certification process.
              </p>
            </div>

            {/* Team Photo */}
            <div className="my-12">
              <ImagePlaceholder label="Brett and the Breeze Roofing team" aspectRatio="video" />
            </div>

            {/* Credentials */}
            <section className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Credentials &amp; Certifications
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">License</h3>
                  <p className="text-gray-600 text-sm">
                    NC Contractor License #{company.license}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Insurance</h3>
                  <p className="text-gray-600 text-sm">
                    Fully insured — general liability and workers&apos; compensation
                  </p>
                </div>
                {company.certifications.map((cert) => (
                  <div key={cert}>
                    <h3 className="font-semibold text-gray-900 mb-2">Certification</h3>
                    <p className="text-gray-600 text-sm">{cert}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Ready to work with a roofer who treats your home like his own?
              </p>
              <Button href="/estimate" variant="primary" size="lg">
                Get Your Free Estimate
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
