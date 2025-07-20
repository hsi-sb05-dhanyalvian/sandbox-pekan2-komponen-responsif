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
      bg-slate-800
      rounded-2xl
      shadow-xl hover:shadow-xl/20
      cursor-pointer
      text-center
    ">
      <div className="flex justify-center items-center mb-4 h-12 w-12 rounded-full bg-slate-700 mx-auto text-slate-400">
        <Icons icon={icon} />
      </div>
      <h3 className="text-slate-100 text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}

export default FeatureCard;
