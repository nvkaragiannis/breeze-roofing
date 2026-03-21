import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { FortifiedCallout } from "@/components/sections/FortifiedCallout";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyBreeze } from "@/components/sections/WhyBreeze";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ServiceAreasMap } from "@/components/sections/ServiceAreasMap";
import { CoastalExpertise } from "@/components/sections/CoastalExpertise";
import { EstimateSection } from "@/components/sections/EstimateSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { getReviewSchema } from "@/lib/schema";
import { reviews } from "@/lib/data/reviews";

export default function HomePage() {
  const reviewSchemas = getReviewSchema(reviews);

  return (
    <>
      {reviewSchemas.map((schema, index) => (
        <SchemaScript key={index} schema={schema} />
      ))}
      <Header transparent />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <FortifiedCallout />
        <ServicesGrid />
        <WhyBreeze />
        <ReviewsSection />
        <ProjectGallery />
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
