//- components/final-cta-section.tsx

import { handleBuyNow } from "./button";

const FinalCtaSection = () => {
  return (
    <div className="container mx-auto text-center justify-between py-8">
      <div className="text-3xl font-bold text-center mb-5 text-lucide-title">
        Segera dapatkan hari ini!
      </div>
      <div>
        Siap merasakan perpaduan sempurna antara gaya, fitur-fitur penting, dan nilai yang luar biasa?<br />
        <strong>Apple Watch SE</strong> adalah pendamping ideal Anda untuk hidup yang lebih sehat dan lebih terhubung.
      </div>

      <button className="
          mt-8 px-8 py-3
          bg-lucide-red
          text-white font-semibold
          cursor-pointer transition-colors
          rounded-full
          shadow-lg hover:shadow-xl"
        onClick={handleBuyNow}
      >
        Beli Sekarang Juga
      </button>
    </div>
  );
}

export default FinalCtaSection;
