//- components/FeatureCard.tsx

import React from "react";
import { HeartPulse, BatteryFull, Bluetooth, Cpu, Mic, Atom } from 'lucide-react';

const Icons = ({ icon }: { icon: string }) => {
  if (icon === 'heart') {
    return (<HeartPulse />);
  } else if (icon === 'battery') {
    return (<BatteryFull />);
  } else if (icon === 'bluetooth') {
    return (<Bluetooth />);
  } else if (icon === 'chip') {
    return (<Cpu />);
  } else if (icon === 'record') {
    return (<Mic />);
  } else {
    return (<Atom />);
  }
}

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
      hover:shadow-lg
    ">
      <div className="flex justify-center items-center mb-6 h-16 w-16 mx-auto rounded-full bg-lucide-frame text-lucide-red">
        <Icons icon={icon} />
      </div>
      <h3 className="text-lucide-title text-xl font-bold mb-3">{title}</h3>
      <p className="text-lucide-subtitle text-sm leading-6">{description}</p>
    </div>
  );
}

export default FeatureCard;
