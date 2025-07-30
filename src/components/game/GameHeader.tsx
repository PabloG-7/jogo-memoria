
import React from 'react';
import { Home, Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { GameState, GameMode } from '../../types/game';
import { getGameModeInfo } from '../../utils/gameUtils';

interface GameHeaderProps {
  onBackToMenu: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  gameState: GameState;
  onPauseGame: () => void;
  gameMode: GameMode;
}

const GameHeader: React.FC<GameHeaderProps> = ({
  onBackToMenu,
  soundEnabled,
  onToggleSound,
  gameState,
  onPauseGame,
  gameMode
}) => {
  const modeInfo = getGameModeInfo(gameMode);

  return (
    <div className="flex justify-between items-center mb-4 sm:mb-6">
      <button
        onClick={onBackToMenu}
        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
      >
        <Home className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>Menu</span>
      </button>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className={`flex items-center ${modeInfo.color}`}>
          <modeInfo.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
          <span className="text-xs sm:text-sm font-semibold">{modeInfo.name}</span>
        </div>
        
        <button
          onClick={onToggleSound}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
        
        <button
          onClick={onPauseGame}
          className="text-gray-300 hover:text-white transition-colors"
          disabled={gameState === 'showing'}
        >
          {gameState === 'paused' ? <Play className="w-4 h-4 sm:w-5 sm:h-5" /> : <Pause className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
      </div>
    </div>
  );
};

export default GameHeader;
