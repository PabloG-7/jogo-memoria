
import React from 'react';
import { Code, Palette } from 'lucide-react';

const CreditsTechnology: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm border border-neon-purple/30 p-6 sm:p-8 hover:border-neon-purple/60 transition-all duration-500 hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Tecnologias</h3>
          </div>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
            <li className="flex items-center"><span className="text-neon-purple mr-2">•</span> React + TypeScript</li>
            <li className="flex items-center"><span className="text-neon-pink mr-2">•</span> Tailwind CSS</li>
            <li className="flex items-center"><span className="text-neon-blue mr-2">•</span> Vite</li>
            <li className="flex items-center"><span className="text-neon-green mr-2">•</span> Web Audio API</li>
            <li className="flex items-center"><span className="text-neon-orange mr-2">•</span> Lucide Icons</li>
          </ul>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm border border-neon-pink/30 p-6 sm:p-8 hover:border-neon-pink/60 transition-all duration-500 hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple flex items-center justify-center">
              <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Design</h3>
          </div>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
            <li className="flex items-center"><span className="text-neon-pink mr-2">•</span> Design System Neon</li>
            <li className="flex items-center"><span className="text-neon-purple mr-2">•</span> Animações CSS</li>
            <li className="flex items-center"><span className="text-neon-blue mr-2">•</span> Responsivo</li>
            <li className="flex items-center"><span className="text-neon-green mr-2">•</span> Acessível</li>
            <li className="flex items-center"><span className="text-neon-orange mr-2">•</span> PWA Ready</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditsTechnology;
