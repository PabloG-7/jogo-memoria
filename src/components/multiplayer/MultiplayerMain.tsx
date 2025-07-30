import React, { useState, useEffect } from 'react';
import { useMultiplayer } from '@/hooks/useMultiplayer';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import MultiplayerEntry from './MultiplayerEntry';
import RoomList from './RoomList';
import WaitingRoom from './WaitingRoom';
import MultiplayerGame from './MultiplayerGame';

type MultiplayerScreen = 'entry' | 'roomList' | 'waitingRoom' | 'game';

interface MultiplayerMainProps {
  onBack: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

const MultiplayerMain: React.FC<MultiplayerMainProps> = ({
  onBack,
  soundEnabled,
  onToggleSound
}) => {
  const [currentScreen, setCurrentScreen] = useState<MultiplayerScreen>('entry');
  const [pendingPlayerName, setPendingPlayerName] = useState('');
  
  const {
    gameState,
    availableRooms,
    loading,
    createRoom,
    joinRoom,
    makeMove,
    endGame,
    addToSequence,
    loadAvailableRooms,
    resetGameState,
  } = useMultiplayer();

  const { toast } = useToast();

  // Monitorar mudanças no estado do jogo
  useEffect(() => {
    if (gameState.room) {
      if (gameState.room.status === 'esperando') {
        setCurrentScreen('waitingRoom');
      } else if (gameState.room.status === 'jogando') {
        setCurrentScreen('game');
      }
    }
  }, [gameState.room?.status]);

  const handleCreateRoom = async (playerName: string) => {
    try {
      await createRoom(playerName);
      toast({
        title: "Sala criada!",
        description: "Aguardando outro jogador entrar...",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Erro ao criar sala",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleJoinRoomRequest = (playerName: string) => {
    setPendingPlayerName(playerName);
    setCurrentScreen('roomList');
  };

  const handleJoinRoom = async (roomId: string) => {
    try {
      await joinRoom(roomId, pendingPlayerName);
      toast({
        title: "Entrando na sala...",
        description: "O jogo começará em instantes!",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Erro ao entrar na sala",
        description: "A sala pode estar cheia ou não existir mais.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleBackToEntry = () => {
    setCurrentScreen('entry');
    setPendingPlayerName('');
    
    // Reset do estado do jogo
    if (gameState.room) {
      // Se o jogo não terminou, deletar a sala
      if (!gameState.gameOver) {
        const deleteRoom = async () => {
          try {
            await supabase
              .from('game_rooms')
              .delete()
              .eq('id', gameState.room!.id);
          } catch (error) {
            console.error('Erro ao deletar sala:', error);
          }
        };
        deleteRoom();
      }
    }
    
    // Sempre resetar o estado do jogo
    resetGameState();
  };

  const handleBackToRoomList = () => {
    setCurrentScreen('roomList');
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'entry':
        return (
          <MultiplayerEntry
            onCreateRoom={handleCreateRoom}
            onJoinRoom={handleJoinRoomRequest}
            onBack={onBack}
            loading={loading}
          />
        );

      case 'roomList':
        return (
          <RoomList
            rooms={availableRooms}
            onJoinRoom={handleJoinRoom}
            onBack={handleBackToEntry}
            onRefresh={loadAvailableRooms}
            loading={loading}
            playerName={pendingPlayerName}
          />
        );

      case 'waitingRoom':
        return (
          <WaitingRoom
            room={gameState.room!}
            playerName={gameState.playerName}
            isPlayer1={gameState.isPlayer1}
            onBack={handleBackToEntry}
          />
        );

      case 'game':
        return (
          <MultiplayerGame
            gameState={gameState}
            onMakeMove={makeMove}
            onAddToSequence={addToSequence}
            onEndGame={endGame}
            onBack={handleBackToEntry}
            soundEnabled={soundEnabled}
            onToggleSound={onToggleSound}
          />
        );

      default:
        return (
          <MultiplayerEntry
            onCreateRoom={handleCreateRoom}
            onJoinRoom={handleJoinRoomRequest}
            onBack={onBack}
            loading={loading}
          />
        );
    }
  };

  return renderCurrentScreen();
};

export default MultiplayerMain;