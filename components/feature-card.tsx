//- components/FeatureCard.tsx

import React from "react";
import { Icons } from "./icons";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="
      p-6
      bg-lucide-panel
      rounded-2xl
      cursor-pointer
      text-center
      border border-lucide-border
      hover:shadow-xl
    ">
      <div className="flex justify-center items-center mb-6 size-14 mx-auto rounded-full bg-lucide-frame text-lucide-red">
        <Icons icon={icon} size={32}/>
      </div>
      <div className="text-lucide-title text-xl font-bold mb-3">{title}</div>
      <p className="text-lucide-subtitle text-sm leading-6">{description}</p>
    </div>
  );
}

export default FeatureCard;
