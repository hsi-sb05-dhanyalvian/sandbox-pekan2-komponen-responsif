//- components/feature-section.tsx

import FeatureCard from "@/components/feature-card";

interface paramProps {
  features: feature[];
}

interface feature {
  title: string;
  icon: string;
  description: string;
}

const FeatureSection = (params: paramProps) => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-lucide-title">
        Fitur Unggulan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mx-auto">
        {params.features.map((feature) => (
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
