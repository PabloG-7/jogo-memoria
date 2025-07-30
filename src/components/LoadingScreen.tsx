
import React, { useState, useEffect } from 'react';
import { Zap, Brain, Gamepad2, Sparkles, Cpu, Rocket } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { progress: 15, text: 'Inicializando sistemas...', icon: Zap },
    { progress: 35, text: 'Carregando recursos...', icon: Cpu },
    { progress: 55, text: 'Preparando interface...', icon: Sparkles },
    { progress: 75, text: 'Configurando jogo...', icon: Brain },
    { progress: 90, text: 'Finalizando...', icon: Gamepad2 },
    { progress: 100, text: 'Pronto para jogar!', icon: Rocket }
  ];

  useEffect(() => {
    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < loadingSteps.length) {
        const step = loadingSteps[stepIndex];
        setProgress(step.progress);
        setCurrentStep(stepIndex);
        stepIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onLoadingComplete, 800);
      }
    }, 450);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const CurrentIcon = loadingSteps[currentStep]?.icon || Zap;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-30 animation-delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-15 animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-25 animation-delay-3000"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-md mx-auto text-center">
        
        {/* Logo Section */}
        <div className="mb-8 sm:mb-12">
          {/* Animated Icon Container */}
          <div className="relative inline-flex items-center justify-center mb-6">
            {/* Outer Ring */}
            <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-purple-500/20 animate-spin"></div>
            
            {/* Inner Ring */}
            <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-pink-500/30 animate-spin animation-reverse"></div>
            
            {/* Icon Container */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center relative overflow-hidden">
                {/* Icon Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse"></div>
                
                {/* Icon */}
                <CurrentIcon className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 text-white animate-bounce" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              NEON MEMORY
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light opacity-80">
              Prepare-se para o desafio
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Progress Container */}
          <div className="relative px-2">
            {/* Progress Background */}
            <div className="relative w-full h-3 sm:h-4 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
              
              {/* Progress Fill */}
              <div 
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                {/* Progress Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
            
            {/* Progress Percentage */}
            <div className="absolute -top-8 sm:-top-10 left-0 right-0 text-center">
              <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
                {progress}%
              </span>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center min-h-[2rem] sm:min-h-[2.5rem]">
            <p className="text-base sm:text-lg text-slate-300 font-medium animate-pulse">
              {loadingSteps[currentStep]?.text || 'Carregando...'}
            </p>
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-8 sm:mt-12 flex justify-center space-x-6 opacity-30">
          <div className="w-1 h-1 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="w-1 h-1 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-ping animation-delay-500"></div>
          <div className="w-1 h-1 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
