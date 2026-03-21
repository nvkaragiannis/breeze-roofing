import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4 py-24">
        <div className="max-w-lg text-center">
          <p className="text-6xl font-bold text-navy mb-4">404</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let us help you find what you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/estimate" variant="primary" size="lg">
              Get Free Estimate
            </Button>
            <Button href="/" variant="secondary" size="lg">
              Go Home
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="/services/residential-roofing" className="text-navy hover:text-amber transition-colors font-medium">
              Services
            </a>
            <span className="text-gray-300">|</span>
            <a href="/contact" className="text-navy hover:text-amber transition-colors font-medium">
              Contact
            </a>
            <span className="text-gray-300">|</span>
            <a href="/faq" className="text-navy hover:text-amber transition-colors font-medium">
              FAQ
            </a>
          </div>

          <p className="mt-8 text-gray-500 text-sm">
            Need immediate help? Call us at{" "}
            <a
              href="tel:+19106655277"
              className="text-navy font-semibold hover:text-amber transition-colors"
            >
              (910) 665-5277
            </a>
          </p>
        </div>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
