
import React from 'react';

const CreditsThankYou: React.FC = () => {
  return (
    <div className="text-center relative overflow-hidden bg-gradient-to-r from-neon-purple/10 via-neon-pink/10 to-neon-blue/10 rounded-2xl p-8 sm:p-12 border border-neon-purple/30 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.6s' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-neon-pink/5 to-neon-blue/5 animate-pulse"></div>
      <div className="relative">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
          Obrigado por jogar! 🎉
        </h3>
        <p className="text-gray-300 mb-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Este jogo foi criado com amor e atenção aos detalhes.
          Esperamos que você se divirta testando sua memória e desafiando seus limites!
        </p>
        <div className="flex justify-center space-x-6 text-2xl sm:text-3xl">
          <span className="animate-pulse">🎮</span>
          <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>🧠</span>
          <span className="animate-pulse" style={{ animationDelay: '1s' }}>⚡</span>
        </div>
      </div>
    </div>
  );
};

export default CreditsThankYou;
