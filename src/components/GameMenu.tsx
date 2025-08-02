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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in relative overflow-hidden bg-gray-900">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #7c3aed 1px, transparent 1px), linear-gradient(to bottom, #7c3aed 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-3000"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-pink-600/10 blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-moveLine"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-moveLine delay-2000"></div>
      </div>

      {/* Title */}
      <div className="text-center mb-8 md:mb-12 animate-bounce-in relative z-10">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-3 md:mb-4 relative overflow-hidden">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-shine">
            NEON MEMORY
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light tracking-wider animate-pulse">
          Teste sua memória no futuro!
        </p>
      </div>

      {/* High Score */}
      {highScore > 0 && (
        <div className="mb-6 md:mb-8 animate-slide-up relative z-10">
          <div className="flex items-center justify-center space-x-2 bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-2 md:px-8 md:py-3 border border-purple-500/30 shadow-lg shadow-purple-500/10">
            <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
            <span className="text-sm md:text-base text-white font-medium tracking-wider">
              Recorde: <span className="text-purple-300 font-bold">{highScore}</span>
            </span>
          </div>
        </div>
      )}

      {/* Menu Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full max-w-2xl px-4 animate-slide-up relative z-10">
        {/* Play Button */}
        <button
          onClick={onStartGame}
          className="group col-span-1 sm:col-span-2 flex items-center justify-center space-x-2 text-base md:text-lg py-3 md:py-4 px-6 rounded-lg md:rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.9), rgba(168, 85, 247, 0.9))',
            boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 30px rgba(139, 92, 246, 0.6)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.4)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <Play className="w-5 h-5 md:w-6 md:h-6 z-10" />
          <span className="z-10 tracking-wider">JOGAR</span>
        </button>

        {/* Multiplayer Button */}
        <button
          onClick={onShowMultiplayer}
          className="group flex items-center justify-center space-x-2 text-base md:text-lg py-3 md:py-4 px-6 rounded-lg md:rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, rgba(245, 158, 11, 0.9), rgba(239, 68, 68, 0.9))',
            boxShadow: '0 4px 20px rgba(239, 68, 68, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 30px rgba(239, 68, 68, 0.5)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(239, 68, 68, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <Users className="w-5 h-5 md:w-6 md:h-6 z-10" />
          <span className="z-10 tracking-wider">MULTIPLAYER</span>
        </button>

        {/* Instructions Button */}
        <button
          onClick={onShowInstructions}
          className="group flex items-center justify-center space-x-2 text-base md:text-lg py-3 md:py-4 px-6 rounded-lg md:rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.9), rgba(16, 185, 129, 0.9))',
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 30px rgba(59, 130, 246, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <HelpCircle className="w-5 h-5 md:w-6 md:h-6 z-10" />
          <span className="z-10 tracking-wider">COMO JOGAR</span>
        </button>

        {/* Settings Button */}
        <button
          onClick={onShowSettings}
          className="group flex items-center justify-center space-x-2 text-base md:text-lg py-3 md:py-4 px-6 rounded-lg md:rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden bg-gray-800/90 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <Settings className="w-5 h-5 md:w-6 md:h-6 z-10 text-gray-300" />
          <span className="z-10 tracking-wider text-gray-200">CONFIGURAÇÕES</span>
        </button>

        {/* Credits Button */}
        <button
          onClick={onShowCredits}
          className="group flex items-center justify-center space-x-2 text-base md:text-lg py-3 md:py-4 px-6 rounded-lg md:rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.9), rgba(244, 114, 182, 0.9))',
            boxShadow: '0 4px 20px rgba(236, 72, 153, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 30px rgba(236, 72, 153, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(236, 72, 153, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <Award className="w-5 h-5 md:w-6 md:h-6 z-10" />
          <span className="z-10 tracking-wider">CRÉDITOS</span>
        </button>
      </div>

      {/* Sound indicator */}
      <div className="mt-6 md:mt-8 flex items-center space-x-2 relative z-10">
        <div className={`p-2 rounded-full ${soundEnabled ? 'bg-green-500/20' : 'bg-gray-700'} backdrop-blur-sm border ${soundEnabled ? 'border-green-500/30' : 'border-gray-600'}`}>
          <Volume2 className={`w-4 h-4 ${soundEnabled ? 'text-green-400' : 'text-gray-400'}`} />
        </div>
        <span className="text-xs md:text-sm text-gray-300 tracking-wider">
          Som {soundEnabled ? 'ligado' : 'desligado'}
        </span>
      </div>

      {/* Extra styles */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        @keyframes moveLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shine {
          0% {
            background-position: -200%;
          }
          100% {
            background-position: 200%;
          }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GameMenu;
