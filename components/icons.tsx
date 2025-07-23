//- components/icons.tsx

import {
  Atom,
  Bluetooth,
  HeartPulse,
  WavesLadder,
  Droplet,
  Activity,
  Mars,
  Venus,
  LaptopMinimal,
  Maximize,
  BatteryFull,
  Mic,
  ClockPlus,
  Sun,
  InspectionPanel,
  ShieldCheck,
} from 'lucide-react';

export const Icons = ({ icon, size }: { icon: string, size: number }) => {
  let result = (<Atom />);

  switch (icon) {
    case 'connect':
      result = <Bluetooth size={size} />;
      break;
    case 'heart':
      result = <HeartPulse size={size} />;
      break;
    case 'sport':
      result = <WavesLadder size={size} />;
      break;
    case 'water-resist':
      result = <Droplet size={size} />;
      break;
    case 'activity':
      result = <Activity size={size} />;
      break;
    case 'male':
      result = <Mars size={size} />;
      break;
    case 'female':
      result = <Venus size={size} />;
      break;
    case 'display':
      result = <LaptopMinimal size={size} />;
      break;
    case 'screen':
      result = <Maximize size={size}/>;
      break;
    case 'battery':
      result = <BatteryFull size={size} />;
      break;
    case 'record':
      result = <Mic size={size} />;
      break;
    case 'clock':
      result = <ClockPlus size={size} />;
      break;
    case 'brightness':
      result = <Sun size={size} />;
      break;
    case 'metal':
      result = <InspectionPanel size={size} />;
      break;
    case 'ceramic':
      result = <ShieldCheck size={size} />;
      break;
  }

  return result;
}
