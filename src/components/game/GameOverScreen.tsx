
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
  onBackToMenu
}) => {
  const modeInfo = getGameModeInfo(gameMode);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-1000 opacity-40"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500 opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-700 opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-md w-full mx-auto">
        {/* Game Over Title */}
        <div className="text-center mb-8 animate-bounce">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-2 animate-pulse">
              GAME OVER
            </h1>
            <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl font-bold text-red-400 blur-sm opacity-50 animate-pulse">
              GAME OVER
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Stats Card */}
        <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-8 shadow-2xl">
          <div className="space-y-6">
            {/* Score */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300 text-sm font-medium">PONTUAÇÃO FINAL</span>
              </div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                {score.toLocaleString()}
              </p>
            </div>

            {/* Level */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm font-medium">NÍVEL ALCANÇADO</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-blue-400">
                {level}
              </p>
            </div>

            {/* Game Mode */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 text-sm font-medium">MODO DE JOGO</span>
              </div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${modeInfo.color === 'text-green-400' ? 'from-green-500/20 to-green-600/20 border-green-400/30' : modeInfo.color === 'text-orange-400' ? 'from-orange-500/20 to-orange-600/20 border-orange-400/30' : 'from-red-500/20 to-red-600/20 border-red-400/30'} border`}>
                <span className={`text-sm font-bold ${modeInfo.color}`}>
                  {modeInfo.name.toUpperCase()}
                </span>
                <span className="text-xs text-gray-300">
                  {gameMode === 'hard' ? '2.5x' : gameMode === 'speed' ? '2x' : '1x'} pts
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button 
            onClick={onPlayAgain} 
            className="w-full py-4 px-6 rounded-xl font-bold text-white text-base sm:text-lg flex items-center justify-center gap-3 group transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-xl"
          >
            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span>JOGAR NOVAMENTE</span>
          </button>
          
          <button 
            onClick={onBackToMenu} 
            className="w-full py-4 px-6 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-3 group text-base sm:text-lg hover:scale-105 active:scale-95"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>MENU PRINCIPAL</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center space-x-4 opacity-30">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default GameOverScreen;
