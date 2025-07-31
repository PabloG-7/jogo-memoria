
import { Color } from '../types/game';

export const colors: Record<Color, { bg: string; active: string; sound: number }> = {
  blue: { bg: 'bg-neon-blue/30', active: 'bg-neon-blue shadow-lg shadow-neon-blue/50', sound: 523.25 },
  purple: { bg: 'bg-neon-purple/30', active: 'bg-neon-purple shadow-lg shadow-neon-purple/50', sound: 659.25 },
  pink: { bg: 'bg-neon-pink/30', active: 'bg-neon-pink shadow-lg shadow-neon-pink/50', sound: 783.99 },
  green: { bg: 'bg-neon-green/30', active: 'bg-neon-green shadow-lg shadow-neon-green/50', sound: 880.00 },
  orange: { 
  bg: 'bg-neon-orange/30', 
  active: 'bg-neon-orange shadow-lg shadow-neon-orange/50', 
  sound: 587.33
},
  cyan: { bg: 'bg-yellow-400/30', active: 'bg-yellow-400 shadow-lg shadow-yellow-400/50', sound: 1046.50 }
};
