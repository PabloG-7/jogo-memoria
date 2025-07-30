
import React from 'react';
import { Award } from 'lucide-react';
import { GameMode } from '../../types/game';
import { getGameModeInfo } from '../../utils/gameUtils';

interface GameInfoProps {
  score: number;
  level: number;
  highScore: number;
  gameMode: GameMode;
}

const GameInfo: React.FC<GameInfoProps> = ({
  score,
  level,
  highScore,
  gameMode
}) => {
  const modeInfo = getGameModeInfo(gameMode);

  return (
    <div className="flex justify-between items-center mb-6 sm:mb-8">
      <div className="text-center">
        <p className="text-neon-blue text-xs sm:text-sm">PONTOS</p>
        <p className="text-lg sm:text-2xl font-bold text-white">{score}</p>
        {gameMode !== 'normal' && (
          <p className={`text-xs ${modeInfo.color}`}>
            {gameMode === 'hard' ? '2.5x' : '2x'}
          </p>
        )}
      </div>
      <div className="text-center">
        <p className="text-neon-purple text-xs sm:text-sm">NÍVEL</p>
        <p className="text-lg sm:text-2xl font-bold text-white">{level}</p>
      </div>
      <div className="text-center">
        <p className="text-neon-orange text-xs sm:text-sm">RECORDE</p>
        <div className="flex items-center justify-center space-x-1">
          <Award className="w-3 h-3 sm:w-4 sm:h-4 text-neon-orange" />
          <p className="text-base sm:text-xl font-bold text-white">{highScore}</p>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
