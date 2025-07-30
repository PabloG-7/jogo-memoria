
import React from 'react';
import { Zap } from 'lucide-react';

const CreditsGameModes: React.FC = () => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm border border-neon-blue/30 p-6 sm:p-8 hover:border-neon-blue/60 transition-all duration-500 hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.5s' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">Modos de Jogo</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base text-gray-300">
          <div className="text-center p-4 bg-gray-700/30 rounded-xl border border-neon-blue/20 hover:border-neon-blue/40 transition-colors duration-300">
            <p className="text-neon-blue font-bold mb-2">🧠 Normal</p>
            <p>4 cores • Pontuação 1x</p>
          </div>
          <div className="text-center p-4 bg-gray-700/30 rounded-xl border border-neon-orange/20 hover:border-neon-orange/40 transition-colors duration-300">
            <p className="text-neon-orange font-bold mb-2">⚡ Velocidade</p>
            <p>4 cores • Pontuação 2x</p>
          </div>
          <div className="text-center p-4 bg-gray-700/30 rounded-xl border border-red-400/20 hover:border-red-400/40 transition-colors duration-300">
            <p className="text-red-400 font-bold mb-2">💀 Difícil</p>
            <p>6 cores • Pontuação 2.5x</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditsGameModes;
