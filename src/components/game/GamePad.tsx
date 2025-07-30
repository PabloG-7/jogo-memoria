
import React from 'react';
import { Color, GameState, GameMode } from '../../types/game';
import { colors } from '../../constants/gameColors';
import { getAvailableColors } from '../../utils/gameUtils';

interface GamePadProps {
  gameState: GameState;
  gameMode: GameMode;
  activeColor: Color | null;
  onColorClick: (color: Color) => void;
}

const GamePad: React.FC<GamePadProps> = ({
  gameState,
  gameMode,
  activeColor,
  onColorClick
}) => {
  const availableColors = getAvailableColors(gameMode);

  return (
    <div className="flex-1 flex items-center justify-center px-2 sm:px-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        <div className={`grid gap-2 sm:gap-3 md:gap-4 aspect-square ${
          gameMode === 'hard' ? 'grid-cols-3' : 'grid-cols-2'
        }`}>
          {availableColors.map((color) => (
            <button
              key={color}
              onClick={() => onColorClick(color)}
              disabled={gameState !== 'waiting'}
              className={`
                aspect-square rounded-lg sm:rounded-xl transition-all duration-200 border-2
                ${activeColor === color
                  ? `${colors[color].active} border-white/50 scale-95`
                  : `${colors[color].bg} border-transparent hover:border-white/20`
                }
                ${gameState === 'waiting' 
                  ? 'hover:scale-105 cursor-pointer' 
                  : 'cursor-not-allowed opacity-70'
                }
              `}
              style={{
                boxShadow: activeColor === color 
                  ? '0 0 20px currentColor, 0 8px 25px rgba(0,0,0,0.3)' 
                  : '0 4px 15px rgba(0,0,0,0.3)'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePad;
