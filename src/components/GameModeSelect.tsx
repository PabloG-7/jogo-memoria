
import React from 'react';
import { ArrowLeft, Brain, Zap, Skull } from 'lucide-react';

interface GameModeSelectProps {
  onBack: () => void;
  onSelectMode: (mode: 'normal' | 'speed' | 'hard') => void;
}

const GameModeSelect: React.FC<GameModeSelectProps> = ({ onBack, onSelectMode }) => {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 lg:p-8 animate-slide-up">
      {/* Header */}
      <div className="flex items-center mb-6 sm:mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base group"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
          <span>Voltar</span>
        </button>
      </div>

      {/* Title Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
          Escolha seu Desafio
        </h1>
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-md mx-auto">
          Selecione o modo que melhor combina com seu nível
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Game Modes Grid */}
      <div className="flex-1 flex items-center justify-center px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
          
          {/* Normal Mode */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <button
              onClick={() => onSelectMode('normal')}
              className="relative bg-gray-900/80 backdrop-blur-sm border border-neon-blue/20 rounded-2xl p-6 sm:p-8 w-full transition-all duration-500 hover:scale-105 hover:border-neon-blue/50 hover:shadow-2xl hover:shadow-neon-blue/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-neon-blue/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  Normal
                </h3>
                
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                  Perfeito para iniciantes! Aprenda no seu ritmo com 4 cores e tempo constante.
                </p>
                
                <div className="space-y-2 text-neon-blue text-xs sm:text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                    <span>4 cores diferentes</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                    <span>Tempo fixo</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                    <span>Ideal para aprender</span>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Speed Mode */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange/30 to-neon-pink/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <button
              onClick={() => onSelectMode('speed')}
              className="relative bg-gray-900/80 backdrop-blur-sm border border-neon-orange/20 rounded-2xl p-6 sm:p-8 w-full transition-all duration-500 hover:scale-105 hover:border-neon-orange/50 hover:shadow-2xl hover:shadow-neon-orange/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-neon-orange to-neon-pink flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
                  </div>
                  <div className="absolute -inset-2 bg-neon-orange/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-neon-orange transition-colors">
                  Velocidade
                </h3>
                
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                  Para os corajosos! Sequências cada vez mais rápidas que testam seus reflexos.
                </p>
                
                <div className="space-y-2 text-neon-orange text-xs sm:text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse"></div>
                    <span>4 cores</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse"></div>
                    <span>Velocidade extrema</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse"></div>
                    <span>Pontuação 2x</span>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Hard Mode */}
          <div className="group relative md:col-span-2 xl:col-span-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <button
              onClick={() => onSelectMode('hard')}
              className="relative bg-gray-900/80 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 sm:p-8 w-full transition-all duration-500 hover:scale-105 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer tip */}
      <div className="text-center mt-8 opacity-70">
        <p className="text-gray-400 text-xs sm:text-sm">
          💡 Dica: Comece pelo modo Normal e evolua gradualmente!
        </p>
      </div>
    </div>
  );
};

export default GameModeSelect;
