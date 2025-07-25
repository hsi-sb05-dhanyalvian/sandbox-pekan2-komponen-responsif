//- components/hero-section.tsx

import Image from "next/image";
import { handleBuyNow } from "./button";

const HeroSection = () => {
  return (
    <section className="text-center">
      <Image
        priority={true}
        rel="preload"
        src="/images/apple-watch-se-500x395.png"
        alt="Apple Watch SE"
        width={500}
        height={395}
        className="mx-auto mb-12"
      />
      <div className="text-5xl font-extrabold tracking-tight text-lucide-title">
        Apple Watch SE
      </div>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-lucide-subtitle">
        Kemampuan memukau yang terjangkau.
      </p>

      <button className="
          mt-8 px-8 py-3
          bg-lucide-red
          text-white font-semibold
          cursor-pointer transition-colors
          rounded-full
          shadow-lg hover:shadow-xl"
        onClick={handleBuyNow}
      >
        Beli Sekarang
      </button>
    </section>
  );
}

export default HeroSection;
