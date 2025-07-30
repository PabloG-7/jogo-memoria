
import React from 'react';
import { GameMode } from '../../types/game';
import { getGameModeInfo } from '../../utils/gameUtils';

interface GameStartScreenProps {
  gameMode: GameMode;
  onStartGame: () => void;
}

const GameStartScreen: React.FC<GameStartScreenProps> = ({
  gameMode,
  onStartGame
}) => {
  const modeInfo = getGameModeInfo(gameMode);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <modeInfo.icon className={`w-8 h-8 ${modeInfo.color} mr-2`} />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Modo {modeInfo.name}
          </h2>
        </div>
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          {gameMode === 'speed' 
            ? 'Sequências MUITO mais rápidas! Tempo reduzido drasticamente!' 
            : gameMode === 'hard'
            ? '6 cores diferentes! Sequências mais rápidas e pontuação extra!'
            : 'Memorize a sequência de cores e repita!'
          }
        </p>
        {gameMode !== 'normal' && (
          <p className={`${modeInfo.color} text-xs sm:text-sm mb-4`}>
            {gameMode === 'speed' && '⚡ Pontuação dupla • ⚡ Velocidade extrema'}
            {gameMode === 'hard' && '💀 6 cores • 💀 Pontuação 2.5x • 💀 Velocidade alta'}
          </p>
        )}
      </div>
      <button onClick={onStartGame} className="neon-button text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4">
        COMEÇAR JOGO
      </button>
    </div>
  );
};

export default GameStartScreen;
