//- app/page.tsx

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import TestimonialSection from "@/components/testimonial-section";
import FinalCtaSection from "@/components/final-cta-section";
import Footer from "@/components/footer";

const SmartWatchPage = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 py-12 pt-24">
        <HeroSection />

        <FeatureSection />

        <TestimonialSection />
      </div>

      <FinalCtaSection />

      <Footer />
    </div>
  );
}

export default SmartWatchPage;
