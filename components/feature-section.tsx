//- components/feature-section.tsx

import FeatureCard from "@/components/feature-card";

const features = [
  {
    icon: 'connect',
    title: 'Konektivitas',
    description: 'Tetap terhubung di sini, di sana, di mana-mana. Jawab panggilan ketika sedang berlari. Balas pesan teks dengan cepat ketika sedang rapat. Atau dengarkan musik dalam perjalanan. Selama ponsel berada di dekat Anda, semua bisa Anda lakukan dari pergelangan tangan.',
  },
  {
    icon: 'heart',
    title: 'Detak Jantung',
    description: 'Pantau kesehatan jantung Anda tanpa ada yang terlewatkan. Periksa detak jantung Anda kapan saja dengan aplikasi Detak Jantung. Dapatkan pemberitahuan untuk detak jantung tinggi atau rendah atau ritme tidak teratur.',
  },
  {
    icon: 'sport',
    title: 'Partner olahraga canggih',
    description: 'Dari latihan kekuatan dan HIIT hingga Pilates dan yoga, Apple Watch menghadirkan berbagai cara sehat untuk memantau olahraga Anda. Dan menunjukkan kemajuan Anda dengan tampilan dan metrik canggih seperti Zona Detak Jantung, Tenaga, dan Elevasi.',
  },
  {
    icon: 'water-resist',
    title: 'Tahan air',
    description: 'Apple Watch SE memiliki level tahan air 50 meter. Lacak waktu dan set Anda di kolam renang, dan buat Olahraga Khusus untuk berenang di kolam. Dapatkan data pasang surut air laut untuk pantai favorit Anda dengan aplikasi Gelombang. Dipakai untuk main air, berenang, atau berselancar, tidak masalah.',
  },
  {
    icon: 'activity',
    title: 'Aktivitas',
    description: 'Pantau aktivitas harian Anda — seperti berdiri, bergerak, dan berolahraga — dengan lingkaran Aktivitas. Jeda lingkaran Aktivitas Anda dan sesuaikan target Anda untuk masing-masing hari dalam seminggu. Apa pun target kebugaran Anda, Apple Watch siap memotivasi Anda.',
  },
];

const FeatureSection = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-lucide-title">
        Fitur Unggulan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
  );
}

export default FeatureSection;
