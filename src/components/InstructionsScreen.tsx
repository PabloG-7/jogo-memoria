
import React from 'react';
import { ArrowLeft, Eye, MousePointer, Brain, Zap, Skull } from 'lucide-react';

interface InstructionsScreenProps {
  onBack: () => void;
}

const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ onBack }) => {
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
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple mb-6 animate-pulse-neon">
          <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 text-neon-glow">
          Como Jogar
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto">
          Aprenda as regras do Neon Memory e domine o jogo!
        </p>
      </div>

      {/* Instructions */}
      <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-neon-blue/20 p-6 sm:p-8 hover:border-neon-blue/40 transition-all duration-500 hover:scale-[1.02] animate-slide-up">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-start space-x-4 sm:space-x-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center animate-glow">
              <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center">
                <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mr-3">1.</span>
                Observe a Sequência
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                O jogo mostrará uma sequência de cores que piscam na tela. 
                Preste atenção e memorize a ordem das cores com cuidado!
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-neon-purple/20 p-6 sm:p-8 hover:border-neon-purple/40 transition-all duration-500 hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-start space-x-4 sm:space-x-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center animate-glow">
              <MousePointer className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center">
                <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mr-3">2.</span>
                Repita a Sequência
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Depois que a sequência terminar, toque nos botões coloridos 
                na mesma ordem que foi mostrada. Seja preciso!
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-neon-pink/20 p-6 sm:p-8 hover:border-neon-pink/40 transition-all duration-500 hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-start space-x-4 sm:space-x-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-neon-pink to-neon-green flex items-center justify-center animate-glow">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center">
                <span className="bg-gradient-to-r from-neon-pink to-neon-green bg-clip-text text-transparent mr-3">3.</span>
                Avance os Níveis
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                A cada acerto, uma nova cor é adicionada à sequência, 
                tornando o jogo mais desafiador. Teste seus limites!
              </p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-neon-green/20 p-6 sm:p-8 hover:border-neon-green/40 transition-all duration-500 hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-start space-x-4 sm:space-x-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-neon-green to-neon-blue flex items-center justify-center animate-glow">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center">
                <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent mr-3">4.</span>
                Sistema de Vidas
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Você tem 3 vidas. Se errar, perde uma vida mas pode continuar jogando. 
                Perdeu todas? Game over!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Modes */}
      <div className="mt-12 sm:mt-16 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-neon-glow">Modos de Jogo</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-700/40 backdrop-blur-sm border border-neon-blue/30 p-6 hover:border-neon-blue/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-neon-blue mr-2" />
                <h4 className="text-neon-blue font-bold text-lg">Normal</h4>
              </div>
              <p className="text-gray-300 text-sm">4 cores • Ritmo padrão para aprender</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-700/40 backdrop-blur-sm border border-neon-orange/30 p-6 hover:border-neon-orange/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-neon-orange mr-2" />
                <h4 className="text-neon-orange font-bold text-lg">Velocidade</h4>
              </div>
              <p className="text-gray-300 text-sm">4 cores • Sequências super rápidas • 2x pontos</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-700/40 backdrop-blur-sm border border-red-400/30 p-6 hover:border-red-400/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <Skull className="w-8 h-8 text-red-400 mr-2" />
                <h4 className="text-red-400 font-bold text-lg">Difícil</h4>
              </div>
              <p className="text-gray-300 text-sm">6 cores • Velocidade alta • 2.5x pontos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Pad Preview */}
      <div className="mt-8 sm:mt-12 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Botões do Jogo</h3>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Normal and Speed mode colors */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Modo Normal & Velocidade (4 cores)</p>
            <div className="w-40 h-40 mx-auto">
              <div className="grid grid-cols-2 gap-3 aspect-square">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-neon-blue/40 to-neon-blue/20 border-2 border-neon-blue/60 animate-pulse hover:scale-110 transition-transform duration-300"></div>
                <div className="aspect-square rounded-xl bg-gradient-to-br from-neon-purple/40 to-neon-purple/20 border-2 border-neon-purple/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.2s' }}></div>
                <div className="aspect-square rounded-xl bg-gradient-to-br from-neon-pink/40 to-neon-pink/20 border-2 border-neon-pink/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.4s' }}></div>
                <div className="aspect-square rounded-xl bg-gradient-to-br from-neon-green/40 to-neon-green/20 border-2 border-neon-green/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
          {/* Hard mode colors */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Modo Difícil (6 cores)</p>
            <div className="w-48 h-40 mx-auto">
              <div className="grid grid-cols-3 gap-2 aspect-[3/2]">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-neon-blue/40 to-neon-blue/20 border-2 border-neon-blue/60 animate-pulse hover:scale-110 transition-transform duration-300"></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-neon-purple/40 to-neon-purple/20 border-2 border-neon-purple/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.1s' }}></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-neon-pink/40 to-neon-pink/20 border-2 border-neon-pink/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.2s' }}></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-neon-green/40 to-neon-green/20 border-2 border-neon-green/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.3s' }}></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-neon-orange/40 to-neon-orange/20 border-2 border-neon-orange/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.4s' }}></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-yellow-400/40 to-yellow-400/20 border-2 border-yellow-400/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-12 sm:mt-16 pb-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 rounded-2xl p-6 sm:p-8 border border-neon-blue/30 max-w-2xl mx-auto backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-pink/5 animate-pulse"></div>
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold text-neon-blue mb-4 sm:mb-6 flex items-center justify-center">
              🎯 Dicas de Sucesso
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">•</span>
                Concentre-se totalmente na sequência
              </li>
              <li className="flex items-start">
                <span className="text-neon-purple mr-2">•</span>
                Use os sons para ajudar na memória
              </li>
              <li className="flex items-start">
                <span className="text-neon-pink mr-2">•</span>
                Comece devagar, a velocidade vem com a prática
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-2">•</span>
                Respire fundo e mantenha a calma
              </li>
              <li className="flex items-start">
                <span className="text-neon-orange mr-2">•</span>
                No modo velocidade, confie nos seus reflexos!
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                No modo difícil, memorize por posições!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsScreen;
