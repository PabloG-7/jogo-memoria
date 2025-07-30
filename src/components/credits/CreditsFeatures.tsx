
import React from 'react';
import { Heart } from 'lucide-react';

const CreditsFeatures: React.FC = () => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm border border-neon-green/30 p-6 sm:p-8 hover:border-neon-green/60 transition-all duration-500 hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.4s' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-neon-green to-neon-blue flex items-center justify-center">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">Características</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base text-gray-300">
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-center">✨ <span className="ml-2">Interface moderna e intuitiva</span></li>
            <li className="flex items-center">🎵 <span className="ml-2">Sons sintetizados em tempo real</span></li>
            <li className="flex items-center">📱 <span className="ml-2">Totalmente responsivo</span></li>
            <li className="flex items-center">🎮 <span className="ml-2">3 modos de jogo únicos</span></li>
          </ul>
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-center">⚡ <span className="ml-2">Carregamento ultrarrápido</span></li>
            <li className="flex items-center">🎯 <span className="ml-2">Sistema de pontuação</span></li>
            <li className="flex items-center">❤️ <span className="ml-2">Sistema de vidas</span></li>
            <li className="flex items-center">🏆 <span className="ml-2">Recordes salvos localmente</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditsFeatures;
