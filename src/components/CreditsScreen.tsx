import React from 'react';
import { ArrowLeft, Award, Code, Coffee, Cpu, Zap, Gamepad2, Heart, Github, Facebook, Instagram, Linkedin } from 'lucide-react';

interface CreditsScreenProps {
  onBack: () => void;
}

const CreditsScreen: React.FC<CreditsScreenProps> = ({ onBack }) => {
  const socialNetworks = [
    {
      name: 'Facebook',
      username: 'Pablo Gomes',
      url: 'https://www.facebook.com/profile.php?id=100024656091863',
      icon: <Facebook className="w-5 h-5" />,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Instagram',
      username: '@pablog.dev',
      url: 'https://www.instagram.com/pablog.dev/',
      icon: <Instagram className="w-5 h-5" />,
      gradient: 'from-pink-600 to-purple-700'
    },
    {
      name: 'LinkedIn',
      username: 'Pablo Gomes',
      url: 'https://www.linkedin.com/in/pablo-gomes-8b574321a/',
      icon: <Linkedin className="w-5 h-5" />,
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'GitHub',
      username: 'PabloG-7',
      url: 'https://github.com/PabloG-7',
      icon: <Github className="w-5 h-5" />,
      gradient: 'from-gray-800 to-gray-600'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in relative overflow-hidden bg-gray-900">
      {/* Background - Igual ao GameMenu */}
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

      {/* Header - Igual ao GameMenu */}
      <div className="w-full max-w-4xl flex items-center mb-4 md:mb-8 relative z-10 px-4">
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

      {/* Title */}
      <div className="text-center mb-8 md:mb-12 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 animate-pulse">
          <Award className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 md:mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-shine">
            CRÉDITOS
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light tracking-wider animate-pulse">
          Desenvolvido com paixão e tecnologia
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl px-4 relative z-10">
        {/* About Game */}
        <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/40 via-purple-500/40 to-pink-500/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 transition-all duration-300 group-hover:border-blue-400/50 h-full">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Sobre o Jogo</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Neon Memory é um jogo de memória futurista que desafia suas habilidades cognitivas 
              com cores vibrantes, efeitos visuais impressionantes e diferentes modos de jogo.
            </p>
          </div>
        </div>

        {/* Developer */}
        <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-red-500/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 transition-all duration-300 group-hover:border-purple-500/50 h-full">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Desenvolvedor</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Criado por <span className="text-purple-300 font-semibold">Pablo Gomes</span>. 
              Um projeto desenvolvido com paixão por jogos e tecnologia.
            </p>
            
            {/* Social Links Grid */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {socialNetworks.map((network) => (
                <a
                  key={network.name}
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/link flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r ${network.gradient} bg-opacity-10 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300`}
                >
                  <div className="text-white opacity-80 group-hover/link:opacity-100">
                    {network.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-white truncate">
                      {network.name}
                    </div>
                    <div className="text-xs text-gray-400 truncate">
                      {network.username}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/40 via-cyan-500/40 to-blue-500/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 transition-all duration-300 group-hover:border-green-400/50 h-full">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Tecnologias</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 text-sm font-medium bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/40 via-orange-500/40 to-red-500/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-6 transition-all duration-300 group-hover:border-yellow-400/50 h-full">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Recursos</h3>
            </div>
            <ul className="space-y-2">
              {[
                '3 modos de jogo diferentes',
                'Sistema de recordes',
                'Design responsivo',
                'Efeitos visuais neon',
                'Sons imersivos'
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Thank You Section */}
      <div className="mt-8 w-full max-w-2xl relative z-10 px-4">
        <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/40 via-rose-500/40 to-purple-500/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 transition-all duration-300 group-hover:border-pink-500/50">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Heart className="w-12 h-12 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Obrigado por jogar!</h3>
              <p className="text-gray-300 leading-relaxed">
                Cada partida é uma nova aventura. Esperamos que você tenha se divertido 
                tanto quanto nós nos divertimos criando essa experiência.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center relative z-10">
        <div className="flex items-center justify-center space-x-2 text-gray-500 mb-2">
          <Coffee className="w-4 h-4 text-amber-600" />
          <span className="text-sm">Feito com paixão e café</span>
        </div>
        <p className="text-xs text-gray-500 tracking-widest">
          © {new Date().getFullYear()} NEON MEMORY • v1.0
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

export default CreditsScreen;