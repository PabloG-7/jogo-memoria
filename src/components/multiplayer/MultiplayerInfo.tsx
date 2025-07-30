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
    <div className="flex justify-between items-center mb-6 sm:mb-8">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-1 mb-1">
          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-neon-blue" />
          {isPlayer1 && isMyTurn && <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />}
        </div>
        <p className="text-xs sm:text-sm text-neon-blue">VOCÊ</p>
        <p className="text-base sm:text-xl font-bold text-white">{playerName}</p>
      </div>
      
      <div className="text-center">
        <p className="text-neon-purple text-xs sm:text-sm">NÍVEL</p>
        <p className="text-lg sm:text-2xl font-bold text-white">{room.level}</p>
      </div>
      
      <div className="text-center">
        <div className="flex items-center justify-center space-x-1 mb-1">
          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-neon-orange" />
          {!isPlayer1 && isMyTurn && <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />}
        </div>
        <p className="text-xs sm:text-sm text-neon-orange">OPONENTE</p>
        <p className="text-base sm:text-xl font-bold text-white">{currentOpponent || '...'}</p>
      </div>
    </div>
  );
};

export default MultiplayerInfo;