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
    <div className="w-full max-w-md mx-auto mb-6 sm:mb-8 px-4">
      <div className="flex justify-center items-center gap-6 sm:gap-12">
        {/* Pontos */}
        <div className="text-center">
          <p className="text-neon-blue text-xs sm:text-sm">PONTOS</p>
          <p className="text-lg sm:text-2xl font-bold text-white">{score}</p>
          {gameMode !== 'normal' && (
            <p className={`text-xs ${modeInfo.color}`}>
              {gameMode === 'hard' ? '2.5x' : '2x'}
            </p>
          )}
        </div>

        {/* Nível */}
        <div className="text-center">
          <p className="text-neon-purple text-xs sm:text-sm">NÍVEL</p>
          <p className="text-lg sm:text-2xl font-bold text-white">{level}</p>
        </div>

        {/* Recorde */}
        <div className="text-center">
          <p className="text-neon-orange text-xs sm:text-sm">RECORDE</p>
          <div className="flex items-center justify-center gap-1">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-neon-orange" />
            <p className="text-base sm:text-xl font-bold text-white">{highScore}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
