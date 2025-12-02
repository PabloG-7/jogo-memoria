import React from 'react';
import { ArrowLeft, Eye, MousePointer, Brain, Zap, Skull } from 'lucide-react';

interface InstructionsScreenProps {
  onBack: () => void;
}

const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in relative overflow-hidden bg-gray-900">
      {/* Background - Igual aos outros */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #7c3aed 1px, transparent 1px), linear-gradient(to bottom, #7c3aed 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-3000"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-pink-600/10 blur-2xl animate-pulse delay-2000"></div>
        
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-moveLine"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-moveLine delay-2000"></div>
      </div>

      {/* Header - Mesmo botão de voltar */}
      <div className="w-full max-w-6xl flex items-center mb-4 md:mb-8 relative z-10 px-4">
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <div className="p-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 group-hover:border-purple-500/50 transition-colors">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-sm sm:text-base font-medium tracking-wider">VOLTAR</span>
        </button>
      </div>

      {/* Title Section */}
      <div className="text-center mb-8 md:mb-12 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mb-6 animate-pulse">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 md:mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-shine">
            COMO JOGAR
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light tracking-wider animate-pulse">
          Domine o Neon Memory em 4 passos!
        </p>
      </div>

      {/* Instructions - Com glow igual aos botões */}
      <div className="space-y-4 w-full max-w-4xl relative z-10 px-4">
        {/* Step 1 */}
        <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/40 via-purple-500/40 to-pink-500/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 transition-all duration-300 group-hover:border-blue-400/50">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold text-blue-400 mr-3">1.</span>
                  <h3 className="text-xl font-bold text-white">Observe a Sequência</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  O jogo mostrará uma sequência de cores que piscam na tela. 
                  Preste atenção e memorize a ordem das cores com cuidado!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-blue-500/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 transition-all duration-300 group-hover:border-purple-500/50">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <MousePointer className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold text-purple-400 mr-3">2.</span>
                  <h3 className="text-xl font-bold text-white">Repita a Sequência</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Depois que a sequência terminar, clique nos botões coloridos 
                  na mesma ordem que foi mostrada. Seja preciso!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/40 via-blue-500/40 to-purple-500/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 transition-all duration-300 group-hover:border-pink-500/50">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-blue-400 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold text-pink-400 mr-3">3.</span>
                  <h3 className="text-xl font-bold text-white">Avance os Níveis</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A cada acerto, uma nova cor é adicionada à sequência, 
                  tornando o jogo mais desafiador. Teste seus limites!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/40 via-cyan-500/40 to-blue-500/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 transition-all duration-300 group-hover:border-green-400/50">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold text-green-400 mr-3">4.</span>
                  <h3 className="text-xl font-bold text-white">Acerte ou Game Over</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Se errar a sequência, é game over! Mas não desanime, 
                  cada partida é uma chance de bater seu recorde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Modes - Com estilo de cards */}
      <div className="mt-12 w-full max-w-4xl relative z-10 px-4">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            MODOS DE JOGO
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Normal Mode */}
          <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/40 to-purple-500/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative bg-gray-900/90 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 transition-all duration-300 group-hover:border-blue-400/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Normal</h4>
                <p className="text-gray-300 text-sm mb-3">Ideal para iniciantes</p>
                <div className="text-xs text-blue-300 space-y-1">
                  <div>✓ 4 cores diferentes</div>
                  <div>✓ Tempo constante</div>
                  <div>✓ Pontuação base</div>
                </div>
              </div>
            </div>
          </div>

          {/* Speed Mode */}
          <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/40 to-orange-500/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative bg-gray-900/90 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-6 transition-all duration-300 group-hover:border-yellow-400/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white animate-pulse" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Velocidade</h4>
                <p className="text-gray-300 text-sm mb-3">Para os destemidos</p>
                <div className="text-xs text-yellow-300 space-y-1">
                  <div>✓ 4 cores</div>
                  <div>✓ Velocidade crescente</div>
                  <div>✓ Pontuação 2x</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hard Mode */}
          <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/40 to-pink-600/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative bg-gray-900/90 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 transition-all duration-300 group-hover:border-red-500/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center mb-4">
                  <Skull className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Difícil</h4>
                <p className="text-gray-300 text-sm mb-3">Apenas para mestres</p>
                <div className="text-xs text-red-300 space-y-1">
                  <div>✓ 6 cores diferentes</div>
                  <div>✓ Velocidade extrema</div>
                  <div>✓ Pontuação 2.5x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-12 w-full max-w-2xl relative z-10 px-4">
        <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/40 via-purple-500/40 to-pink-500/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 transition-all duration-300 group-hover:border-cyan-500/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                DICAS DE SUCESSO
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300 text-sm">Concentre-se na sequência</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300 text-sm">Use os sons como guia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span className="text-gray-300 text-sm">Comece devagar</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-300 text-sm">Mantenha a calma</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span className="text-gray-300 text-sm">Confie nos reflexos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-gray-300 text-sm">Memorize por posições</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center relative z-10">
        <p className="text-xs text-gray-500 tracking-widest">
          BOA SORTE E DIVIRTA-SE! 🎮
        </p>
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
        @keyframes shine {
          0% {
            background-position: -200%;
          }
          100% {
            background-position: 200%;
          }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InstructionsScreen;