import React from 'react';
import { Home, RotateCcw, Trophy, Target, Zap } from 'lucide-react';
import { GameMode } from '../../types/game';
import { getGameModeInfo } from '../../utils/gameUtils';

interface GameOverScreenProps {
  score: number;
  level: number;
  gameMode: GameMode;
  onPlayAgain: () => void;
  onBackToMenu: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({
  score,
  level,
  gameMode,
  onPlayAgain,
  onBackToMenu,
}) => {
  const modeInfo = getGameModeInfo(gameMode);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      {/* Game Over Title */}
      <h1 className="text-4xl font-bold text-red-500 mb-8">FIM DO JOGO</h1>

      {/* Stats Card */}
      <div className="bg-gray-800 rounded-xl p-6 mb-8 w-full max-w-md">
        {/* Score */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-300">PONTUAÇÃO FINAL</span>
          </div>
          <p className="text-4xl font-bold text-yellow-400">{score.toLocaleString()}</p>
        </div>

        {/* Level */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Target className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">NÍVEL ALCANÇADO</span>
          </div>
          <p className="text-3xl font-bold text-blue-400">{level}</p>
        </div>

        {/* Game Mode */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300">MODO DE JOGO</span>
          </div>
          <div className={`text-sm font-medium px-4 py-2 rounded-full ${modeInfo.color} bg-opacity-20`}>
            {modeInfo.name.toUpperCase()} ({gameMode === 'hard' ? '2.5x' : gameMode === 'speed' ? '2x' : '1x'})
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4 w-full max-w-md">
        <button
          onClick={onPlayAgain}
          className="w-full py-3 rounded-lg font-bold text-white flex items-center justify-center gap-3
          bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          JOGAR DE NOVO
        </button>

        <button
          onClick={onBackToMenu}
          className="w-full py-3 rounded-lg font-bold text-white flex items-center justify-center gap-3
          bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          <Home className="w-5 h-5" />
          MENU PRINCIPAL
        </button>
      </div>
    </div>
  );
};

export default GameOverScreen;