
import React from 'react';
import { ArrowLeft, Award } from 'lucide-react';
import CreditsGameInfo from './credits/CreditsGameInfo';
import CreditsDeveloper from './credits/CreditsDeveloper';
import CreditsTechnology from './credits/CreditsTechnology';
import CreditsFeatures from './credits/CreditsFeatures';
import CreditsGameModes from './credits/CreditsGameModes';
import CreditsThankYou from './credits/CreditsThankYou';

interface CreditsScreenProps {
  onBack: () => void;
}

const CreditsScreen: React.FC<CreditsScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 p-4 sm:p-6 lg:p-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center mb-6 sm:mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm sm:text-base font-medium">Voltar</span>
        </button>
      </div>

      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple mb-6 animate-pulse-neon">
          <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 text-neon-glow">
          Créditos
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto">
          Feito com carinho e tecnologia
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8 sm:space-y-12 max-w-4xl mx-auto">
        <CreditsGameInfo />
        <CreditsDeveloper />
        <CreditsTechnology />
        
        <div className="space-y-8">
          <CreditsFeatures />
          <CreditsGameModes />
        </div>

        <CreditsThankYou />
      </div>

      {/* Footer */}
      <div className="mt-12 sm:mt-16 text-center text-gray-500 text-xs sm:text-sm space-y-2">
        <p>Desenvolvido com React, Tailwind CSS e muito café ☕</p>
        <p>
          © 2024 Neon Memory - Todos os direitos reservados
        </p>
      </div>
    </div>
  );
};

export default CreditsScreen;
