
import React from 'react';
import { Play, Settings, HelpCircle, Award, Volume2, Users } from 'lucide-react';

interface GameMenuProps {
  onStartGame: () => void;
  onShowSettings: () => void;
  onShowInstructions: () => void;
  onShowCredits: () => void;
  onShowMultiplayer: () => void;
  highScore: number;
  soundEnabled: boolean;
}

const GameMenu: React.FC<GameMenuProps> = ({
  onStartGame,
  onShowSettings,
  onShowInstructions,
  onShowCredits,
  onShowMultiplayer,
  highScore,
  soundEnabled
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in relative overflow-hidden">
      {/* Background Decorative Balls */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating balls */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-16 w-24 h-24 bg-gradient-to-r from-neon-pink/15 to-neon-green/15 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-full blur-md animate-pulse delay-2000" />
        <div className="absolute top-1/2 left-8 w-16 h-16 bg-gradient-to-r from-neon-green/10 to-neon-pink/10 rounded-full blur-sm animate-pulse delay-3000" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-neon-orange/10 to-neon-purple/10 rounded-full blur-lg animate-pulse delay-1500" />
        
        {/* Medium balls */}
        <div className="absolute top-40 right-1/3 w-12 h-12 bg-neon-blue/5 rounded-full blur-sm animate-pulse delay-500" />
        <div className="absolute bottom-40 left-1/3 w-14 h-14 bg-neon-purple/8 rounded-full blur-md animate-pulse delay-2500" />
        <div className="absolute top-60 left-1/2 w-10 h-10 bg-neon-pink/6 rounded-full blur-sm animate-pulse delay-4000" />
        
        {/* Small floating dots */}
        <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-neon-green/15 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-neon-blue/20 rounded-full animate-pulse delay-3500" />
        <div className="absolute top-3/4 right-1/3 w-8 h-8 bg-neon-pink/10 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-1/2 right-10 w-5 h-5 bg-neon-purple/15 rounded-full animate-pulse delay-4500" />
        <div className="absolute bottom-1/3 left-20 w-7 h-7 bg-neon-orange/12 rounded-full animate-pulse delay-1800" />
      </div>

      {/* Title */}
      <div className="text-center mb-12 animate-bounce-in relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-neon-glow mb-4">
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
            NEON MEMORY
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 animate-pulse">
          Teste sua memória no futuro!
        </p>
      </div>

      {/* High Score */}
      {highScore > 0 && (
        <div className="mb-8 animate-slide-up relative z-10">
          <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-lg px-6 py-3 border border-neon-purple/30">
            <Award className="w-5 h-5 text-neon-purple" />
            <span className="text-white font-semibold">
              Recorde: {highScore}
            </span>
          </div>
        </div>
      )}

      {/* Menu Buttons */}
      <div className="space-y-4 w-full max-w-sm animate-slide-up relative z-10">
        <button
          onClick={onStartGame}
          className="neon-button w-full flex items-center justify-center space-x-3 text-lg"
        >
          <Play className="w-6 h-6" />
          <span>JOGAR</span>
        </button>

        <button
          onClick={onShowMultiplayer}
          className="w-full flex items-center justify-center space-x-3 text-lg py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105"
          style={{
            background: 'linear-gradient(45deg, #FF8C00, #FF4500)',
            boxShadow: '0 0 20px rgba(255, 140, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 140, 0, 0.5), 0 0 40px rgba(255, 69, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 140, 0, 0.3)';
          }}
        >
          <Users className="w-6 h-6" />
          <span>MULTIPLAYER</span>
        </button>

        <button
          onClick={onShowSettings}
          className="w-full flex items-center justify-center space-x-3 text-lg py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 hover:scale-105"
        >
          <Settings className="w-6 h-6" />
          <span>CONFIGURAÇÕES</span>
        </button>

        <button
          onClick={onShowInstructions}
          className="w-full flex items-center justify-center space-x-3 text-lg py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 border border-neon-blue/30 hover:border-neon-blue/50 hover:scale-105"
        >
          <HelpCircle className="w-6 h-6" />
          <span>COMO JOGAR</span>
        </button>

        <button
          onClick={onShowCredits}
          className="w-full flex items-center justify-center space-x-3 text-lg py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-neon-orange/20 to-neon-pink/20 border border-neon-orange/30 hover:border-neon-orange/50 hover:scale-105"
        >
          <Award className="w-6 h-6" />
          <span>CRÉDITOS</span>
        </button>
      </div>

      {/* Sound indicator */}
      <div className="mt-8 flex items-center space-x-2 text-gray-400 relative z-10">
        <Volume2 className={`w-4 h-4 ${soundEnabled ? 'text-neon-green' : 'text-gray-500'}`} />
        <span className="text-sm">
          Som {soundEnabled ? 'ligado' : 'desligado'}
        </span>
      </div>
    </div>
  );
};

export default GameMenu;
