import React, { useState } from 'react';
import { Play, Plus, ArrowLeft, Users } from 'lucide-react';

interface MultiplayerEntryProps {
  onCreateRoom: (playerName: string) => void;
  onJoinRoom: (playerName: string) => void;
  onBack: () => void;
  loading: boolean;
}

const MultiplayerEntry: React.FC<MultiplayerEntryProps> = ({
  onCreateRoom,
  onJoinRoom,
  onBack,
  loading
}) => {
  const [playerName, setPlayerName] = useState('');

  const handleCreateRoom = () => {
    if (playerName.trim()) {
      onCreateRoom(playerName.trim());
    }
  };

  const handleJoinRoom = () => {
    if (playerName.trim()) {
      onJoinRoom(playerName.trim());
    }
  };

  return (
    <div className="h-screen flex flex-col items-center pt-16 p-4 relative overflow-hidden bg-gray-900">
      {/* Enhanced Background - Same as main menu */}
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

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center space-x-1 text-sm text-gray-300 hover:text-white transition-colors z-10"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Voltar</span>
      </button>

      {/* Main Content */}
      <div className="w-full max-w-md space-y-6 relative z-10 animate-fade-in">
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Modo Multiplayer
            </h1>
          </div>
          <p className="text-gray-300 text-sm sm:text-base tracking-wider">
            Jogue Neon Memory com seus amigos online!
          </p>
        </div>

        {/* Card */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6 shadow-lg shadow-purple-500/10">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-white mb-1">Digite seu nome</h2>
            <p className="text-sm text-gray-400">
              Como você gostaria de ser chamado no jogo?
            </p>
          </div>
          
          {/* Input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Seu nome de jogador"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700/80 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 text-center focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
              maxLength={20}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && playerName.trim()) {
                  handleCreateRoom();
                }
              }}
            />
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleCreateRoom}
              disabled={!playerName.trim() || loading}
              className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                !playerName.trim() || loading 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-600/90 hover:to-blue-500/90'
              }`}
            >
              <Plus className="w-5 h-5" />
              <span>Criar Nova Sala</span>
            </button>

            <button
              onClick={handleJoinRoom}
              disabled={!playerName.trim() || loading}
              className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                !playerName.trim() || loading 
                  ? 'bg-gray-700 cursor-not-allowed border-gray-600' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-500/90 hover:to-cyan-400/90 border border-blue-400/30'
              }`}
            >
              <Play className="w-5 h-5" />
              <span>Entrar em Sala</span>
            </button>
          </div>
        </div>

        {/* Footer Note - Removido o padding extra */}
        <div className="text-center pb-4">
          <p className="text-xs text-gray-500 tracking-wider">
            🎮 Desafie seus amigos em tempo real!
          </p>
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
        @supports (-webkit-touch-callout: none) {
          /* Safari-specific styles */
          body {
            height: 100vh;
            height: -webkit-fill-available;
            overflow: hidden;
          }
          .h-screen {
            height: 100vh;
            height: -webkit-fill-available;
          }
        }
      `}</style>
    </div>
  );
};

export default MultiplayerEntry;