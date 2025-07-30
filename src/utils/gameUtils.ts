
import { Color, GameMode } from '../types/game';
import { Brain, Zap, Skull } from 'lucide-react';

export const getAvailableColors = (gameMode: GameMode): Color[] => {
  if (gameMode === 'hard') {
    return ['blue', 'purple', 'pink', 'green', 'orange', 'cyan'];
  }
  return ['blue', 'purple', 'pink', 'green'];
};

export const getRandomColor = (gameMode: GameMode): Color => {
  const availableColors = getAvailableColors(gameMode);
  return availableColors[Math.floor(Math.random() * availableColors.length)];
};

export const getGameModeInfo = (gameMode: GameMode) => {
  switch (gameMode) {
    case 'speed':
      return { icon: Zap, name: 'VELOCIDADE', color: 'text-neon-orange' };
    case 'hard':
      return { icon: Skull, name: 'DIFÍCIL', color: 'text-red-400' };
    default:
      return { icon: Brain, name: 'NORMAL', color: 'text-neon-blue' };
  }
};

export const calculateScore = (level: number, gameMode: GameMode): number => {
  let bonusMultiplier = 1;
  if (gameMode === 'speed') bonusMultiplier = 2;
  if (gameMode === 'hard') bonusMultiplier = 2.5;
  
  return Math.floor((level * 10) * bonusMultiplier);
};

export const getGameTimings = (gameMode: GameMode, level: number) => {
  if (gameMode === 'speed') {
    return {
      baseDelay: Math.max(100, 500 - (level * 40)),
      showDuration: Math.max(80, 300 - (level * 20)),
      waitTime: 100,
      initialDelay: 200
    };
  } else if (gameMode === 'hard') {
    return {
      baseDelay: Math.max(200, 600 - (level * 25)),
      showDuration: Math.max(150, 400 - (level * 15)),
      waitTime: 200,
      initialDelay: 400
    };
  } else {
    return {
      baseDelay: Math.max(400, 700 - (level * 15)),
      showDuration: Math.max(300, 450 - (level * 10)),
      waitTime: 300,
      initialDelay: 600
    };
  }
};
