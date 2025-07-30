
export type GameState = 'idle' | 'showing' | 'waiting' | 'checking' | 'gameover' | 'paused';
export type Color = 'blue' | 'purple' | 'pink' | 'green' | 'orange' | 'cyan';
export type GameMode = 'normal' | 'speed' | 'hard';

export interface GamePlayProps {
  onBackToMenu: () => void;
  onGameOver: (score: number) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  gameMode?: GameMode;
  highScore: number;
}

export interface GameModeInfo {
  icon: any;
  name: string;
  color: string;
}
