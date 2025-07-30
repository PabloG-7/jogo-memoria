
import React from 'react';
import { Facebook, Instagram, Linkedin, Github, ExternalLink } from 'lucide-react';

interface SocialLink {
  name: string;
  username: string;
  url: string;
  icon: React.ComponentType<{ className?: string; size?: string | number }>;
  color: string;
}

const CreditsSocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      username: 'Pablo Gomes',
      url: 'https://www.facebook.com/profile.php?id=100024656091863',
      icon: Facebook,
      color: 'from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400'
    },
    {
      name: 'Instagram',
      username: 'pablogomesss__',
      url: 'https://www.instagram.com/pablogomesss__/',
      icon: Instagram,
      color: 'from-pink-400 to-purple-500 hover:from-pink-300 hover:to-purple-400'
    },
    {
      name: 'LinkedIn',
      username: 'Pablo Gomes',
      url: 'https://www.linkedin.com/in/pablo-gomes-8b574321a/',
      icon: Linkedin,
      color: 'from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500'
    },
    {
      name: 'GitHub',
      username: 'PabloG-7',
      url: 'https://github.com/PabloG-7',
      icon: Github,
      color: 'from-gray-300 to-gray-400 hover:from-white hover:to-gray-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/social relative overflow-hidden flex items-center justify-center space-x-3 p-4 sm:p-6 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-300 hover:bg-gray-700/30 hover:border-gray-600/50 hover:scale-105"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${social.color.split(' ')[0]} ${social.color.split(' ')[1]} opacity-0 group-hover/social:opacity-10 transition-opacity duration-300`}></div>
            <div className="relative flex items-center space-x-3 w-full">
              <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <div className="flex-1 text-left min-w-0">
                <p className="font-semibold text-base sm:text-lg text-white">{social.name}</p>
                <p className="text-gray-400 text-sm sm:text-base truncate">{social.username}</p>
              </div>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default CreditsSocialLinks;
