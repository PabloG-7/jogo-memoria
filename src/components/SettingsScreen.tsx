import React from 'react';
import { ArrowLeft, Volume2, VolumeX, RotateCcw, Smartphone, Settings } from 'lucide-react';

interface SettingsScreenProps {
  onBack: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onResetHighScore: () => void;
  highScore: number;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({
  onBack,
  soundEnabled,
  onToggleSound,
  onResetHighScore,
  highScore
}) => {
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
      <div className="w-full max-w-4xl flex items-center mb-4 md:mb-8 relative z-10">
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
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 animate-pulse">
          <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            CONFIGURAÇÕES
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light tracking-wider animate-pulse">
          Personalize sua experiência de jogo
        </p>
      </div>

      {/* Settings Options */}
      <div className="space-y-6 w-full max-w-2xl relative z-10">
        {/* Sound Toggle */}
        <div className="group relative overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-green-400/30 p-6 hover:border-green-400/60 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                soundEnabled 
                  ? 'bg-gradient-to-r from-green-400 to-blue-400' 
                  : 'bg-gray-600/50'
              }`}>
                {soundEnabled ? (
                  <Volume2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                ) : (
                  <VolumeX className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                )}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Sons do jogo</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {soundEnabled ? 'Sons ativados' : 'Sons desativados'}
                </p>
              </div>
            </div>
            <button
              onClick={onToggleSound}
              className={`relative inline-flex h-6 w-11 sm:h-8 sm:w-14 items-center rounded-full transition-all duration-300 ${
                soundEnabled ? 'bg-gradient-to-r from-green-400 to-blue-400' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 sm:h-6 sm:w-6 transform rounded-full bg-white transition-transform duration-300 ${
                  soundEnabled ? 'translate-x-6 sm:translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* High Score */}
        <div className="group relative overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 p-6 hover:border-purple-500/60 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-lg sm:text-xl font-bold">#</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Recorde</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Sua melhor pontuação: <span className="text-purple-400 font-semibold">{highScore}</span>
                </p>
              </div>
            </div>
            <button
              onClick={onResetHighScore}
              className="group/button flex items-center space-x-2 py-3 px-4 sm:px-6 rounded-xl text-sm sm:text-base font-medium text-red-400 hover:text-red-300 bg-red-400/10 hover:bg-red-400/20 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105"
            >
              <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 group-hover/button:rotate-180 transition-transform duration-500" />
              <span>Resetar</span>
            </button>
          </div>
        </div>

        {/* Device Info */}
        <div className="group relative overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-blue-400/30 p-6 hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-start space-x-4 sm:space-x-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Compatibilidade</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Este jogo funciona perfeitamente em celulares, tablets e computadores.
                Otimizado para todos os tamanhos de tela com design responsivo!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-12 w-full max-w-lg relative z-10">
        <div className="relative overflow-hidden bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-pink-500/10 opacity-30"></div>
          <div className="relative text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                💡 DICA
              </span>
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Use fones de ouvido para uma experiência mais imersiva com os sons do jogo!
              A qualidade do áudio pode fazer toda a diferença na sua performance.
            </p>
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

export default SettingsScreen;