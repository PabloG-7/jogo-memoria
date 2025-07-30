
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
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink mb-6 animate-pulse-neon">
          <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 text-neon-glow">
          Configurações
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto">
          Personalize sua experiência de jogo
        </p>
      </div>

      {/* Settings Options */}
      <div className="space-y-6 sm:space-y-8 max-w-2xl mx-auto">
        {/* Sound Toggle */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm border border-neon-green/30 p-6 sm:p-8 hover:border-neon-green/60 transition-all duration-500 hover:scale-[1.02] animate-slide-up">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                soundEnabled 
                  ? 'bg-gradient-to-r from-neon-green to-neon-blue animate-glow' 
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
                soundEnabled ? 'bg-gradient-to-r from-neon-green to-neon-blue' : 'bg-gray-600'
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
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm border border-neon-purple/30 p-6 sm:p-8 hover:border-neon-purple/60 transition-all duration-500 hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center animate-glow">
                <span className="text-white text-lg sm:text-xl font-bold">#</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Recorde</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Sua melhor pontuação: <span className="text-neon-purple font-semibold">{highScore}</span>
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
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm border border-neon-blue/30 p-6 sm:p-8 hover:border-neon-blue/60 transition-all duration-500 hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-start space-x-4 sm:space-x-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center animate-glow flex-shrink-0">
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
      <div className="mt-12 sm:mt-16 text-center">
        <div className="relative overflow-hidden bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 rounded-2xl p-6 sm:p-8 border border-neon-blue/30 max-w-lg mx-auto backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-pink/5 animate-pulse"></div>
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold text-neon-blue mb-4">💡 Dica</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Use fones de ouvido para uma experiência mais imersiva com os sons do jogo!
              A qualidade do áudio pode fazer toda a diferença na sua performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
