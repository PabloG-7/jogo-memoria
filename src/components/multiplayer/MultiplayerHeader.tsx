import React from 'react';
import { Home, Volume2, VolumeX, Users } from 'lucide-react';

interface MultiplayerHeaderProps {
  onBackToMenu: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

const MultiplayerHeader: React.FC<MultiplayerHeaderProps> = ({
  onBackToMenu,
  soundEnabled,
  onToggleSound
}) => {
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
        <div className="flex items-center text-neon-purple">
          <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
          <span className="text-xs sm:text-sm font-semibold">MULTIPLAYER</span>
        </div>
        
        <button
          onClick={onToggleSound}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
      </div>
    </div>
  );
};

export default MultiplayerHeader;