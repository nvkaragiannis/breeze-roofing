import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { FortifiedCallout } from "@/components/sections/FortifiedCallout";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyBreeze } from "@/components/sections/WhyBreeze";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServiceAreasMap } from "@/components/sections/ServiceAreasMap";
import { CoastalExpertise } from "@/components/sections/CoastalExpertise";
import { EstimateSection } from "@/components/sections/EstimateSection";
import { BlogPreview } from "@/components/sections/BlogPreview";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <FortifiedCallout />
        <ServicesGrid />
        <WhyBreeze />
        <ReviewsSection />
        <ServiceAreasMap />
        <CoastalExpertise />
        <EstimateSection />
        <BlogPreview posts={[]} />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
