//- components/testimonial-card.tsx

import Image from 'next/image'

interface TestimonialCardProps {
  photo: string;
  name: string;
  role: string;
  quote: string;
}

const TestimonialCard = ({ photo, name, role, quote }: TestimonialCardProps) => {
  return (
    <div className="
      p-6
      bg-lucide-panel
      rounded-2xl
      cursor-pointer
      text-center
      border border-gray-200
      hover:shadow-xl
    ">
      <div className="flex justify-center items-center mb-6 size-18 mx-auto rounded-full bg-lucide-frame text-lucide-red border border-gray-200">
        <Image src={photo} alt={name} width={46} height={46} />
      </div>
      <p className="text-lucide-subtitle text-sm leading-6">{quote}</p>
      <div className="text-lucide-title text-lg font-bold mt-6">{name}</div>
      <div className="text-lucide-subtitle text-sm">{role}</div>
    </div>
  );
}

export default TestimonialCard;
