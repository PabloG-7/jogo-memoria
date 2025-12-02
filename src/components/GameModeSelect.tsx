import React from 'react';
import { ArrowLeft, Brain, Zap, Skull } from 'lucide-react';

interface GameModeSelectProps {
  onBack: () => void;
  onSelectMode: (mode: 'normal' | 'speed' | 'hard') => void;
}

const GameModeSelect: React.FC<GameModeSelectProps> = ({ onBack, onSelectMode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in relative overflow-hidden bg-gray-900">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 z-0">
        {/* Animated Grid Pattern - Mais sutil */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, #7c3aed 1px, transparent 1px), linear-gradient(to bottom, #7c3aed 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridMove 30s linear infinite'
        }}></div>
        
        {/* Floating Gradient Orbs - Mais suaves */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-600/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/5 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-pink-600/5 to-transparent blur-2xl animate-pulse-slow delay-2000"></div>
        
        {/* Animated Lines - Mais clean */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-lineMove"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-lineMove delay-1500"></div>
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/10 to-transparent animate-lineMoveVertical delay-1000"></div>
      </div>

      {/* Header with Enhanced Back Button */}
      <div className="w-full max-w-6xl flex items-center mb-8 md:mb-12 relative z-10 px-4">
        <button
          onClick={onBack}
          className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-3 rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 group-hover:border-purple-500/40 group-hover:bg-gray-800/60 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/10">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-400 font-medium tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              Voltar para
            </span>
            <span className="text-sm sm:text-base font-semibold tracking-wider bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-pink-200 transition-all">
              MENU PRINCIPAL
            </span>
          </div>
        </button>
      </div>

      {/* Title Section */}
      <div className="text-center mb-8 md:mb-12 relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 md:mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-shine">
            ESCOLHA SEU MODO
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light tracking-wider animate-pulse">
          Desafie sua memória de diferentes formas!
        </p>
      </div>

      {/* Game Modes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 relative z-10">
        {/* Normal Mode */}
        <button
          onClick={() => onSelectMode('normal')}
          className="group relative overflow-hidden rounded-2xl transition-all duration-500"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(99, 102, 241, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {/* Background Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/40 via-purple-500/40 to-pink-500/40 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 transition-all duration-300 group-hover:border-blue-400/50 h-full">
            {/* Icon */}
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                  <Brain className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-3xl font-bold text-white mb-4 text-center group-hover:text-blue-300 transition-colors">
              NORMAL
            </h3>
            
            {/* Description */}
            <p className="text-gray-300 mb-6 text-center leading-relaxed">
              Perfeito para começar! Aprenda no seu ritmo com 4 cores e tempo constante.
            </p>
            
            {/* Features */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-blue-300">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>4 cores diferentes</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-300">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>Tempo constante</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-300">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>Ideal para iniciantes</span>
              </div>
            </div>
          </div>
        </button>

        {/* Speed Mode */}
        <button
          onClick={() => onSelectMode('speed')}
          className="group relative overflow-hidden rounded-2xl transition-all duration-500"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(245, 158, 11, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {/* Background Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/40 via-orange-500/40 to-pink-500/40 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 transition-all duration-300 group-hover:border-yellow-400/50 h-full">
            {/* Icon */}
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/30">
                  <Zap className="w-10 h-10 text-white animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-3xl font-bold text-white mb-4 text-center group-hover:text-yellow-300 transition-colors">
              VELOCIDADE
            </h3>
            
            {/* Description */}
            <p className="text-gray-300 mb-6 text-center leading-relaxed">
              Para os corajosos! Sequências cada vez mais rápidas que testam seus reflexos.
            </p>
            
            {/* Features */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-yellow-300">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <span>4 cores</span>
              </div>
              <div className="flex items-center space-x-3 text-yellow-300">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <span>Velocidade crescente</span>
              </div>
              <div className="flex items-center space-x-3 text-yellow-300">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <span>Pontuação 2x</span>
              </div>
            </div>
          </div>
        </button>

        {/* Hard Mode */}
        <button
          onClick={() => onSelectMode('hard')}
          className="group relative overflow-hidden rounded-2xl transition-all duration-500"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(239, 68, 68, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {/* Background Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/40 via-pink-600/40 to-purple-600/40 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 transition-all duration-300 group-hover:border-red-500/50 h-full">
            {/* Icon */}
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/30">
                  <Skull className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-3xl font-bold text-white mb-4 text-center group-hover:text-red-400 transition-colors">
              DIFÍCIL
            </h3>
            
            {/* Description */}
            <p className="text-gray-300 mb-6 text-center leading-relaxed">
              Apenas para mestres! 6 cores, alta velocidade e recompensas épicas.
            </p>
            
            {/* Features */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-red-400">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>6 cores diferentes</span>
              </div>
              <div className="flex items-center space-x-3 text-red-400">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Velocidade extrema</span>
              </div>
              <div className="flex items-center space-x-3 text-red-400">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Pontuação 2.5x</span>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Footer Tip */}
      <div className="text-center mt-8 md:mt-12 relative z-10">
        <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50">
          <span className="text-yellow-400 animate-pulse">💡</span>
          <p className="text-gray-300 text-sm font-medium tracking-wider">
            Dica: Comece pelo modo Normal e evolua gradualmente!
          </p>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        @keyframes lineMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes lineMoveVertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes shine {
          0% {
            background-position: -200%;
          }
          100% {
            background-position: 200%;
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-lineMove {
          animation: lineMove 15s linear infinite;
        }
        .animate-lineMoveVertical {
          animation: lineMoveVertical 20s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default GameModeSelect;