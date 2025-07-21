//- app/page.tsx

import FeatureSection from "@/components/feature-section";
import Navbar from "@/components/navbar";
import TestimonialSection from "@/components/testimonial-section";
import Image from "next/image";

const SmartWatchPage = () => {
  return (
    <div className="">
      <Navbar />

      <div className="container mx-auto px-4 py-12 pt-24">
        <section className="text-center">
          <Image
            rel="preload"
            src="/images/apple-watch-se-500x395.png"
            alt="Apple Watch SE"
            width={500}
            height={395}
            className="mx-auto mb-8"
          />
          <h1 className="text-5xl font-extrabold tracking-tight text-lucide-title">
            Apple Watch SE
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-lucide-subtitle">
            Kemampuan memukau yang terjangkau.
          </p>

          <button className="
            mt-8 px-8 py-3
            bg-lucide-red
            text-white font-semibold
            cursor-pointer transition-colors
            rounded-full
            shadow-lg hover:shadow-xl
          ">
            Beli Sekarang
          </button>
        </section>

        <FeatureSection />

        <TestimonialSection />
      </div>
    </div>
  );
}

export default SmartWatchPage;
