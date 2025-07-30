
import React from 'react';
import { Zap } from 'lucide-react';

const CreditsGameInfo: React.FC = () => {
  return (
    <div className="text-center relative overflow-hidden bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 rounded-2xl p-8 sm:p-12 border border-neon-blue/30 backdrop-blur-sm animate-slide-up">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-pink/5 animate-pulse"></div>
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center mx-auto mb-6 animate-glow">
          <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-neon-glow">NEON MEMORY</h2>
        <p className="text-gray-300 mb-6 text-base sm:text-lg">
          Um jogo de memória moderno e viciante
        </p>
        <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 border border-gray-600/50">
          <span className="text-sm text-gray-400">Versão 1.0.0</span>
          <span className="text-gray-600">•</span>
          <span className="text-sm text-gray-400">2024</span>
        </div>
      </div>
    </div>
  );
};

export default CreditsGameInfo;
