import React from 'react';
import { ArrowLeft, Eye, MousePointer, Brain, Zap, Skull } from 'lucide-react';

interface InstructionsScreenProps {
  onBack: () => void;
}

const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in relative overflow-hidden bg-gray-900">
      {/* Enhanced Background (same as menu) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 z-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #7c3aed 1px, transparent 1px), linear-gradient(to bottom, #7c3aed 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
        
        {/* Floating Neon Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-3000"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-pink-600/10 blur-2xl animate-pulse delay-2000"></div>
        
        {/* Subtle Moving Lines */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-moveLine"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-moveLine delay-2000"></div>
      </div>

      {/* Header with Back Button */}
      <div className="w-full max-w-6xl flex items-center mb-4 md:mb-8 relative z-10">
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base"
        >
          <div className="p-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 group-hover:border-purple-500/50 transition-colors">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
          </div>
          <span className="hidden sm:inline">Voltar</span>
        </button>
      </div>

      {/* Title Section */}
      <div className="text-center mb-8 md:mb-12 relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mb-6 animate-pulse">
          <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            COMO JOGAR
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light tracking-wider animate-pulse">
          Aprenda as regras do Neon Memory e domine o jogo!
        </p>
      </div>

      {/* Instructions */}
      <div className="space-y-6 w-full max-w-4xl relative z-10">
        {/* Step 1 */}
        <div className="group relative overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-blue-400/20 p-6 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-start space-x-4 sm:space-x-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
              <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mr-3">1.</span>
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
        <div className="group relative overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-purple-500/20 p-6 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-start space-x-4 sm:space-x-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <MousePointer className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mr-3">2.</span>
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
        <div className="group relative overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-pink-500/20 p-6 hover:border-pink-500/50 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-start space-x-4 sm:space-x-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-pink-500 to-blue-400 flex items-center justify-center">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center">
                <span className="bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent mr-3">3.</span>
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
        <div className="group relative overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-green-400/20 p-6 hover:border-green-400/50 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-start space-x-4 sm:space-x-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mr-3">4.</span>
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
      <div className="mt-12 w-full max-w-4xl relative z-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            MODOS DE JOGO
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Normal Mode */}
          <div className="group relative overflow-hidden rounded-xl bg-gray-900/80 backdrop-blur-sm border border-blue-400/30 p-6 hover:border-blue-400/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex flex-col items-center text-center">
              <Brain className="w-8 h-8 text-blue-400 mb-2" />
              <h4 className="text-blue-400 font-bold text-lg mb-2">Normal</h4>
              <p className="text-gray-300 text-sm">4 cores • Ritmo padrão para aprender</p>
            </div>
          </div>

          {/* Speed Mode */}
          <div className="group relative overflow-hidden rounded-xl bg-gray-900/80 backdrop-blur-sm border border-yellow-400/30 p-6 hover:border-yellow-400/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex flex-col items-center text-center">
              <Zap className="w-8 h-8 text-yellow-400 mb-2 animate-pulse" />
              <h4 className="text-yellow-400 font-bold text-lg mb-2">Velocidade</h4>
              <p className="text-gray-300 text-sm">4 cores • Sequências rápidas • 2x pontos</p>
            </div>
          </div>

          {/* Hard Mode */}
          <div className="group relative overflow-hidden rounded-xl bg-gray-900/80 backdrop-blur-sm border border-red-400/30 p-6 hover:border-red-400/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex flex-col items-center text-center">
              <Skull className="w-8 h-8 text-red-400 mb-2" />
              <h4 className="text-red-400 font-bold text-lg mb-2">Difícil</h4>
              <p className="text-gray-300 text-sm">6 cores • Alta velocidade • 2.5x pontos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Pad Preview */}
      <div className="mt-12 w-full max-w-4xl relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            BOTÕES DO JOGO
          </span>
        </h3>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Normal and Speed mode colors */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Modo Normal & Velocidade (4 cores)</p>
            <div className="w-40 h-40 mx-auto">
              <div className="grid grid-cols-2 gap-3 aspect-square">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-400/40 to-blue-400/20 border-2 border-blue-400/60 animate-pulse hover:scale-110 transition-transform duration-300"></div>
                <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/40 to-purple-500/20 border-2 border-purple-500/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.2s' }}></div>
                <div className="aspect-square rounded-xl bg-gradient-to-br from-pink-500/40 to-pink-500/20 border-2 border-pink-500/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.4s' }}></div>
                <div className="aspect-square rounded-xl bg-gradient-to-br from-green-400/40 to-green-400/20 border-2 border-green-400/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
          
          {/* Hard mode colors */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Modo Difícil (6 cores)</p>
            <div className="w-48 h-40 mx-auto">
              <div className="grid grid-cols-3 gap-2 aspect-[3/2]">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-400/40 to-blue-400/20 border-2 border-blue-400/60 animate-pulse hover:scale-110 transition-transform duration-300"></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500/40 to-purple-500/20 border-2 border-purple-500/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.1s' }}></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-pink-500/40 to-pink-500/20 border-2 border-pink-500/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.2s' }}></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-green-400/40 to-green-400/20 border-2 border-green-400/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.3s' }}></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-yellow-400/40 to-yellow-400/20 border-2 border-yellow-400/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.4s' }}></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-red-400/40 to-red-400/20 border-2 border-red-400/60 animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-12 w-full max-w-2xl relative z-10">
        <div className="relative overflow-hidden bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-pink-500/10 opacity-30"></div>
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                DICAS DE SUCESSO
              </span>
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Concentre-se totalmente na sequência
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Use os sons para ajudar na memória
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                Comece devagar, a velocidade vem com a prática
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Respire fundo e mantenha a calma
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
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

      {/* Animation styles */}
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        @keyframes moveLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default InstructionsScreen;