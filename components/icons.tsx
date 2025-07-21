//- components/icons.tsx

import {
  Bluetooth,
  HeartPulse,
  WavesLadder,
  Droplet,
  Activity,
  Mars,
  Venus,
  Atom,
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
  }

  return result;
}
