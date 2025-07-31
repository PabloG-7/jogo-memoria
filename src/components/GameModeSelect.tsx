import React from 'react';
import { ArrowLeft, Brain, Zap, Skull } from 'lucide-react';

interface GameModeSelectProps {
  onBack: () => void;
  onSelectMode: (mode: 'normal' | 'speed' | 'hard') => void;
}

const GameModeSelect: React.FC<GameModeSelectProps> = ({ onBack, onSelectMode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in relative overflow-hidden bg-gray-900">
      {/* Enhanced Background (same as menu) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 z-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #7c3aed 1px, transparent 1px), linear-gradient(to bottom, #7c3aed 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
        
        {/* Floating Neon Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-3000"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-pink-600/10 blur-2xl animate-pulse delay-2000"></div>
        
        {/* Subtle Moving Lines */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-moveLine"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-moveLine delay-2000"></div>
      </div>

      {/* Header with Back Button */}
      <div className="w-full max-w-6xl flex items-center mb-4 md:mb-8 relative z-10">
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base"
        >
          <div className="p-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 group-hover:border-purple-500/50 transition-colors">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
          </div>
          <span className="hidden sm:inline">Voltar</span>
        </button>
      </div>

      {/* Title Section */}
      <div className="text-center mb-8 md:mb-12 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            MODOS DE JOGO
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light tracking-wider animate-pulse">
          Escolha seu desafio e mostre sua memória!
        </p>
      </div>

      {/* Game Modes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4 relative z-10">
        {/* Normal Mode */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/40 via-purple-500/40 to-pink-500/40 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          <button
            onClick={() => onSelectMode('normal')}
            className="relative w-full h-full bg-gray-900/80 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 transition-all duration-500 hover:border-purple-500/50 hover:shadow-lg hover:shadow-blue-400/20 flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
              Normal
            </h3>
            
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              Perfeito para iniciantes! Aprenda no seu ritmo com 4 cores e tempo constante.
            </p>
            
            <div className="space-y-2 text-blue-300 text-xs sm:text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>4 cores diferentes</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>Tempo fixo</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>Ideal para aprender</span>
              </div>
            </div>
          </button>
        </div>

        {/* Speed Mode */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/40 via-orange-500/40 to-pink-500/40 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          <button
            onClick={() => onSelectMode('speed')}
            className="relative w-full h-full bg-gray-900/80 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6 transition-all duration-500 hover:border-orange-500/50 hover:shadow-lg hover:shadow-yellow-400/20 flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
              </div>
              <div className="absolute -inset-2 bg-yellow-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
              Velocidade
            </h3>
            
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              Para os corajosos! Sequências cada vez mais rápidas que testam seus reflexos.
            </p>
            
            <div className="space-y-2 text-yellow-300 text-xs sm:text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <span>4 cores</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <span>Velocidade extrema</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <span>Pontuação 2x</span>
              </div>
            </div>
          </button>
        </div>

        {/* Hard Mode */}
        <div className="group relative md:col-span-2 lg:col-span-1">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/40 via-pink-600/40 to-purple-600/40 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          <button
            onClick={() => onSelectMode('hard')}
            className="relative w-full h-full bg-gray-900/80 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 transition-all duration-500 hover:border-pink-500/50 hover:shadow-lg hover:shadow-red-500/20 flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Skull className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="absolute -inset-2 bg-red-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
              Difícil
            </h3>
            
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              Apenas para mestres! 6 cores, alta velocidade e recompensas épicas.
            </p>
            
            <div className="space-y-2 text-red-400 text-xs sm:text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>6 cores diferentes</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Velocidade alta</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Pontuação 2.5x</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Footer Tip */}
      <div className="text-center mt-8 md:mt-12 relative z-10">
        <p className="text-gray-400 text-xs sm:text-sm bg-gray-900/50 backdrop-blur-sm rounded-full px-4 py-2 inline-block border border-gray-700/50">
          💡 Dica: Comece pelo modo Normal e evolua gradualmente!
        </p>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        @keyframes moveLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default GameModeSelect;