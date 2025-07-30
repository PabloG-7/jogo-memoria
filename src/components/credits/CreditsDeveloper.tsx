
import React from 'react';
import CreditsSocialLinks from './CreditsSocialLinks';

const CreditsDeveloper: React.FC = () => {
  return (
    <div className="text-center relative overflow-hidden bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center justify-center">
          👨‍💻 <span className="ml-2">Desenvolvedor</span>
        </h3>
        <p className="text-neon-purple font-bold text-xl sm:text-2xl mb-6">Pablo Gomes</p>
        <p className="text-gray-300 mb-8 text-base sm:text-lg max-w-md mx-auto">
          Desenvolvedor apaixonado por criar experiências digitais incríveis
        </p>

        <CreditsSocialLinks />
      </div>
    </div>
  );
};

export default CreditsDeveloper;
