//- components/testimonial-section.tsx

import TestimonialCard from "./testimonial-card";

interface paramProps {
  testimonies: testimony[];
}

interface testimony {
  photo: string;
  name: string;
  role: string;
  quote: string;
}

const TestimonialSection = (params: paramProps) => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-lucide-title">
        Apa Kata Mereka
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto gap-8">
        {params.testimonies.map((testimony) => (
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
