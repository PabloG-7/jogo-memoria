import React from 'react';
import { ArrowLeft, Award, Code, Coffee, Cpu, Zap, Gamepad2, Heart, Github, Facebook, Instagram, Linkedin } from 'lucide-react';

interface CreditsScreenProps {
  onBack: () => void;
}

const CreditsScreen: React.FC<CreditsScreenProps> = ({ onBack }) => {
  // Suas redes sociais
  const socialNetworks = [
    {
      name: 'Facebook',
      username: 'Pablo Gomes',
      url: 'https://www.facebook.com/profile.php?id=100024656091863',
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-400'
    },
    {
      name: 'Instagram',
      username: 'pablogomesss__',
      url: 'https://www.instagram.com/pablog.dev/',
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'from-pink-700 to-purple-900 hover:from-pink-300 hover:to-purple-600'
    },
    {
      name: 'LinkedIn',
      username: 'Pablo Gomes',
      url: 'https://www.linkedin.com/in/pablo-gomes-8b574321a/',
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'from-blue-500 to-blue-900 hover:from-blue-400 hover:to-blue-500'
    },
    {
      name: 'GitHub',
      username: 'PabloG-7',
      url: 'https://github.com/PabloG-7',
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'from-gray-800 to-gray-400 hover:from-purple hover:to-gray-200'
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 py-6 sm:p-6 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(to right, #7c3aed 1px, transparent 1px), linear-gradient(to bottom, #7c3aed 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-2xl flex flex-col z-10">
        {/* Header */}
        <div className="w-full flex justify-start mb-6 sm:mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-all"
            aria-label="Voltar"
          >
            <div className="p-2 sm:p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-base sm:text-lg font-medium">VOLTAR</span>
          </button>
        </div>

        {/* Title Section - Totalmente responsivo */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-purple-500/30">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            CRÉDITOS
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">Feito com carinho e tecnologia</p>
        </div>

        {/* Content Sections */}
        <div className="w-full space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10">
          <SectionCard 
            title="Sobre o Jogo" 
            icon={<Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6" />}
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              Neon Memory é um jogo de memória com tema futurista que desafia suas habilidades cognitivas com cores vibrantes e efeitos visuais impressionantes.
            </p>
          </SectionCard>

          <SectionCard 
            title="Desenvolvedor" 
            icon={<Code className="w-5 h-5 sm:w-6 sm:h-6" />}
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
              Desenvolvido por Pablo Gomes! Um projeto criado com paixão por jogos e tecnologia.
            </p>
            
            {/* Redes Sociais - Totalmente responsivo */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              {socialNetworks.map((network) => (
                <SocialLink 
                  key={network.name}
                  name={network.name}
                  username={network.username}
                  url={network.url}
                  icon={network.icon}
                  color={network.color}
                />
              ))}
            </div>
          </SectionCard>

          <SectionCard 
            title="Tecnologias" 
            icon={<Cpu className="w-5 h-5 sm:w-6 sm:h-6" />}
          >
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
              <TechPill name="React" color="blue" />
              <TechPill name="TypeScript" color="blue" />
              <TechPill name="Tailwind CSS" color="purple" />
              <TechPill name="Vite" color="yellow" />
            </div>
          </SectionCard>

          <SectionCard 
            title="Recursos" 
            icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6" />}
          >
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-300 space-y-1 sm:space-y-2">
              <li>Modos de jogo variados</li>
              <li>Sistema de recordes</li>
              <li>Design responsivo</li>
              <li>Efeitos visuais impressionantes</li>
            </ul>
          </SectionCard>
        </div>

        {/* Thank You Section */}
        <div className="w-full bg-gradient-to-br from-gray-800/90 to-gray-900/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 md:p-7 border border-purple-500/30 shadow-lg shadow-purple-500/10 mb-8 sm:mb-10">
          <div className="flex flex-col items-center text-center">
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-500 mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">Obrigado por jogar!</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Esperamos que você se divirta tanto jogando quanto nós nos divertimos desenvolvendo!
            </p>
          </div>
        </div>

        {/* Footer - Responsivo */}
        <div className="w-full text-center text-gray-500 text-xs sm:text-sm md:text-base">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mb-2">
            <span className="flex items-center gap-1">
              <Coffee className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-500" />
              Feito com café
            </span>
            <span className="hidden sm:inline">•</span>
            <span>React + TypeScript</span>
            <span className="hidden sm:inline">•</span>
            <span>Tailwind CSS</span>
          </div>
          <p>© {new Date().getFullYear()} Neon Memory - Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
};

// Componente auxiliar para seções (totalmente responsivo)
const SectionCard: React.FC<{ 
  title: string; 
  icon: React.ReactNode; 
  children: React.ReactNode 
}> = ({ title, icon, children }) => {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-gray-700 hover:border-purple-500/50 transition-all">
      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="p-2 sm:p-3 rounded-lg bg-purple-500/10 text-purple-400">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{title}</h3>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

// Componente auxiliar para tecnologias (responsivo)
const TechPill: React.FC<{ 
  name: string; 
  color: 'blue' | 'purple' | 'green' | 'yellow' | 'pink' 
}> = ({ name, color }) => {
  const colorClasses = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    green: 'bg-green-500/10 text-green-400 border-green-500/30',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    pink: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
  };

  return (
    <span className={`text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border ${colorClasses[color]}`}>
      {name}
    </span>
  );
};

// Componente para redes sociais (totalmente responsivo)
const SocialLink: React.FC<{
  name: string;
  username: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}> = ({ name, username, url, icon, color }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex flex-col p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r ${color} transition-all border border-gray-700 hover:shadow-lg`}
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-1">
        {icon}
        <span className="text-sm sm:text-base font-medium text-white">{name}</span>
      </div>
      <span className="text-xs sm:text-sm text-gray-300 text-left truncate">{username}</span>
    </a>
  );
};

export default CreditsScreen;