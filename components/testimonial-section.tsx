//- components/testimonial-section.tsx

import TestimonialCard from "./testimonial-card";

const testimonials = [
  {
    photo: '/photos/hacker.png',
    name: 'Khalid',
    role: 'Software Engineer',
    quote: 'Apple Watch SE saya sangat awet. Saya bekerja di lingkungan yang cukup padat, dan sempat terbentur beberapa kali, tetapi layarnya tetap kokoh. Integrasinya dengan iPhone saya lancar, dan saya sangat senang bisa menggunakan Apple Pay tanpa perlu mengeluarkan dompet. Jam tangan ini praktis dan tangguh untuk penggunaan sehari-hari.',
  },
  {
    photo: '/photos/man.png',
    name: 'Zubayr',
    role: 'Marketing Professional',
    quote: 'Awalnya saya membeli Apple Watch SE untuk notifikasi dasar dan pelacakan kebugaran, dan ternyata melebihi ekspektasi saya. Cincin aktivitasnya benar-benar memotivasi saya untuk lebih banyak bergerak, dan saya senang bisa dengan cepat memeriksa pesan dan mengontrol musik langsung dari pergelangan tangan saya. Jam tangan ini benar-benar menjadi pendamping yang tak tergantikan untuk gaya hidup aktif saya.',
  },
  {
    photo: '/photos/circle-user.png',
    name: 'Aisha',
    role: 'Freelance Designer',
    quote: 'Saya mendapatkan Apple Watch SE sebagai hadiah, dan saya sangat senang menerimanya. Jam tangan ini membuat saya tetap terhubung tanpa harus terus-menerus terpaku pada ponsel. Saya menggunakannya untuk mencatat waktu lari, mengatur timer, dan mendapatkan petunjuk arah sambil berjalan-jalan di Tangerang. Daya tahan baterainya bisa bertahan seharian penuh, bahkan dengan penggunaan yang konsisten. Jam tangan ini benar-benar membuat rutinitas harian saya lebih efisien.',
  },
];

const TestimonialSection = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-lucide-title">
        Apa Kata Mereka
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto gap-8">
        {testimonials.map((testimony) => (
          <TestimonialCard
            key={testimony.name}
            photo={testimony.photo}
            name={testimony.name}
            role={testimony.role}
            quote={testimony.quote}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
