//- app/page.tsx

import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";

const features = [
  {
    icon: 'heart',
    title: 'Health Tracking',
    description: 'Monitor your heart rate, sleep patterns, and daily activity 24/7.',
  },
  {
    icon: 'battery',
    title: 'Masa pakai baterai 24 hari',
    description: 'Bertahan hingga lebih dari 3 minggu. 24 hari Mode penggunaan umum. +20% Masa pakai baterai yang ditingkatkan.',
  },
  {
    icon: 'bluetooth',
    title: 'Bluetooth® 5.3',
    description: 'Mendukung panggilan telepon Bluetooth.',
  },
  {
    icon: 'chip',
    title: 'Chip AFE yang disempurnakan',
    description: 'Algoritma eksklusif terbaru. +5.2% Akurasi detak jantung. +10% Akurasi pengenalan tidur.',
  },
  {
    icon: 'record',
    title: 'Perekam independen',
    description: 'Dari catatan rapat hingga rekaman mendadak, kuliah kelas, dan bahkan mengumpulkan bukti investigasi. Inilah perekam suara portabel Anda, memungkinkan Anda untuk merekam setiap momen dengan mudah.',
  },
];

const SmartWatchPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center">
        <Image
          src="/photos/redmi-watch-5-300x300.png"
          alt="Redmi Watch 5"
          width={300}
          height={300}
          className="mx-auto mb-8"
        />

        <h1 className="text-5xl font-extrabold tracking-tight text-lucide-title">
          Redmi Watch 5
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-lucide-subtitle">
          Liat lebih, lakukan lebih.
        </p>

        <button className="
          mt-8 px-8 py-3
          bg-lucide-red
          text-white font-semibold
          cursor-pointer transition-colors
          rounded-full
          shadow-xl
        ">
          Beli Sekarang
        </button>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-lucide-title">
          Fitur Unggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default SmartWatchPage;
