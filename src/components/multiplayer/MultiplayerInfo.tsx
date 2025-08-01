import React from 'react';
import { Crown, Users } from 'lucide-react';
import { GameRoom } from '@/types/multiplayer';

interface MultiplayerInfoProps {
  room: GameRoom;
  playerName: string;
  isPlayer1: boolean;
  isMyTurn: boolean;
}

const MultiplayerInfo: React.FC<MultiplayerInfoProps> = ({
  room,
  playerName,
  isPlayer1,
  isMyTurn
}) => {
  const currentOpponent = isPlayer1 ? room.player2 : room.player1;

  return (
    <div className="grid grid-cols-3 gap-4 items-center mb-6 sm:mb-8 text-center">
      
      {/* Player */}
      <div>
        <div className="flex items-center justify-center space-x-1 mb-1">
          <Users className="w-4 h-4 text-neon-blue" />
          {isPlayer1 && isMyTurn && (
            <Crown className="w-4 h-4 text-yellow-400" />
          )}
        </div>
        <p className="text-[0.7rem] sm:text-sm text-neon-blue font-medium">VOCÊ</p>
        <p className="text-base sm:text-xl font-bold text-white break-words">{playerName}</p>
      </div>

      {/* Level */}
      <div>
        <p className="text-xs sm:text-sm text-neon-purple font-medium mb-1">NÍVEL</p>
        <p className="text-lg sm:text-2xl font-extrabold text-white">{room.level}</p>
      </div>

      {/* Opponent */}
      <div>
        <div className="flex items-center justify-center space-x-1 mb-1">
          <Users className="w-4 h-4 text-neon-orange" />
          {!isPlayer1 && isMyTurn && (
            <Crown className="w-4 h-4 text-yellow-400" />
          )}
        </div>
        <p className="text-[0.7rem] sm:text-sm text-neon-orange font-medium">OPONENTE</p>
        <p className="text-base sm:text-xl font-bold text-white break-words">
          {currentOpponent || '...'}
        </p>
      </div>

    </div>
  );
};

export default MultiplayerInfo;