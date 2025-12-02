import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { GameRoom, MultiplayerGameState } from '@/types/multiplayer';
import { Color } from '@/types/game';
import { getRandomColor } from '@/utils/gameUtils';

export const useMultiplayer = () => {
  const [gameState, setGameState] = useState<MultiplayerGameState>({
    room: null,
    playerName: '',
    isPlayer1: false,
    isMyTurn: false,
    gameSequence: [],
    playerSequence: [],
    currentStep: 0,
    gameOver: false,
    winner: null,
  });

  const [availableRooms, setAvailableRooms] = useState<GameRoom[]>([]);
  const [loading, setLoading] = useState(false);

  // Carregar salas disponíveis
  const loadAvailableRooms = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('game_rooms')
        .select('*')
        .eq('status', 'esperando')
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setAvailableRooms((data || []) as GameRoom[]);
    } catch (error) {
      console.error('Erro ao carregar salas:', error);
    }
  }, []);

  // Criar nova sala - CORREÇÃO DO BUG DA PRIMEIRA VEZ
  const createRoom = useCallback(async (playerName: string) => {
    setLoading(true);
    try {
      const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      const firstColor = getRandomColor('normal');
      
      // 1. Primeiro cria a sala
      const { data, error } = await supabase
        .from('game_rooms')
        .insert({
          player1: playerName,
          status: 'esperando',
          turn: 'player1',
          sequence: JSON.stringify([firstColor]),
          level: 1,
          code: roomCode,
        })
        .select()
        .single();

      if (error) throw error;

      // 2. AGUARDAR 1 SEGUNDO - ESSA É A CHAVE PARA O BUG
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 3. Buscar a sala NOVAMENTE para garantir sincronização
      const { data: verifiedRoom, error: verifyError } = await supabase
        .from('game_rooms')
        .select('*')
        .eq('id', data.id)
        .single();

      if (verifyError) {
        // Se falhar, tentar mais uma vez
        await new Promise(resolve => setTimeout(resolve, 500));
        const { data: retryRoom, error: retryError } = await supabase
          .from('game_rooms')
          .select('*')
          .eq('id', data.id)
          .single();
        
        if (retryError) throw retryError;
        
        setGameState(prev => ({
          ...prev,
          room: retryRoom as GameRoom,
          playerName,
          isPlayer1: true,
          isMyTurn: false,
        }));
        
        return retryRoom;
      }

      setGameState(prev => ({
        ...prev,
        room: verifiedRoom as GameRoom,
        playerName,
        isPlayer1: true,
        isMyTurn: false,
      }));

      return verifiedRoom;
    } catch (error) {
      console.error('Erro ao criar sala:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  // Entrar em sala - CORREÇÃO DO BUG DA PRIMEIRA VEZ
  const joinRoom = useCallback(async (roomId: string, playerName: string) => {
    setLoading(true);
    try {
      // 1. Verificar SE a sala existe (com retry)
      let existingRoom = null;
      let retryCount = 0;
      
      while (retryCount < 3 && !existingRoom) {
        const { data, error } = await supabase
          .from('game_rooms')
          .select('*')
          .eq('id', roomId)
          .eq('status', 'esperando')
          .single();
        
        if (error) {
          retryCount++;
          await new Promise(resolve => setTimeout(resolve, 500));
        } else {
          existingRoom = data;
        }
      }
      
      if (!existingRoom) {
        throw new Error('Sala não encontrada ou já em jogo');
      }

      // 2. Entrar na sala
      const { data, error } = await supabase
        .from('game_rooms')
        .update({ 
          player2: playerName,
          status: 'jogando',
          turn: 'player1',
          level: 1,
        })
        .eq('id', roomId)
        .eq('status', 'esperando') // IMPORTANTE: Só atualiza se ainda estiver esperando
        .select()
        .single();

      if (error) throw error;

      // 3. Aguardar sincronização
      await new Promise(resolve => setTimeout(resolve, 500));

      setGameState(prev => ({
        ...prev,
        room: data as GameRoom,
        playerName,
        isPlayer1: false,
        isMyTurn: false,
      }));

      return data;
    } catch (error) {
      console.error('Erro ao entrar na sala:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  // Fazer jogada
  const makeMove = useCallback(async (newSequence: Color[]) => {
    if (!gameState.room || !gameState.isMyTurn) return;

    try {
      const nextTurn = gameState.isPlayer1 ? 'player2' : 'player1';
      
      const { error } = await supabase
        .from('game_rooms')
        .update({
          sequence: JSON.stringify(newSequence),
          turn: nextTurn,
          level: newSequence.length,
        })
        .eq('id', gameState.room.id);

      if (error) throw error;
    } catch (error) {
      console.error('Erro ao fazer jogada:', error);
    }
  }, [gameState.room, gameState.isMyTurn, gameState.isPlayer1]);

  // Adicionar nova cor à sequência
  const addToSequence = useCallback(async () => {
    if (!gameState.room || !gameState.isMyTurn) return;

    const currentSequence = JSON.parse(gameState.room.sequence || '[]');
    const newColor = getRandomColor('normal');
    const newSequence = [...currentSequence, newColor];
    const nextTurn = gameState.isPlayer1 ? 'player2' : 'player1';

    try {
      const { error } = await supabase
        .from('game_rooms')
        .update({
          sequence: JSON.stringify(newSequence),
          turn: nextTurn,
          level: newSequence.length,
        })
        .eq('id', gameState.room.id);

      if (error) throw error;
    } catch (error) {
      console.error('Erro ao adicionar cor à sequência:', error);
    }
  }, [gameState.room, gameState.isMyTurn, gameState.isPlayer1]);

  // Finalizar jogo
  const endGame = useCallback(async (winner: string) => {
    if (!gameState.room) return;

    try {
      const { error } = await supabase
        .from('game_rooms')
        .update({
          status: 'finalizado',
          turn: winner === gameState.playerName ? 
            (gameState.isPlayer1 ? 'player1' : 'player2') : 
            (gameState.isPlayer1 ? 'player2' : 'player1')
        })
        .eq('id', gameState.room.id);

      if (error) throw error;

      setGameState(prev => ({
        ...prev,
        gameOver: true,
        winner,
      }));
    } catch (error) {
      console.error('Erro ao finalizar jogo:', error);
    }
  }, [gameState.room, gameState.playerName, gameState.isPlayer1]);

  // Configurar Realtime - COM RETRY PARA PRIMEIRA VEZ
  useEffect(() => {
    if (!gameState.room?.id) return;

    let retryCount = 0;
    const maxRetries = 2;

    const setupSubscription = () => {
      const channel = supabase
        .channel(`room-${gameState.room!.id}`)
        .on(
          'postgres_changes',
          {
            event: 'UPDATE',
            schema: 'public',
            table: 'game_rooms',
            filter: `id=eq.${gameState.room!.id}`,
          },
          (payload) => {
            const updatedRoom = payload.new as GameRoom;
            
            setGameState(prev => {
              const isMyTurn = (updatedRoom.turn === 'player1' && prev.isPlayer1) || 
                             (updatedRoom.turn === 'player2' && !prev.isPlayer1);
              
              const sequence = JSON.parse(updatedRoom.sequence || '[]');
              
              let winner = prev.winner;
              if (updatedRoom.status === 'finalizado' && !prev.gameOver) {
                if (updatedRoom.turn === 'player1') {
                  winner = updatedRoom.player1;
                } else {
                  winner = updatedRoom.player2;
                }
              }
              
              return {
                ...prev,
                room: updatedRoom,
                isMyTurn,
                gameSequence: sequence,
                gameOver: updatedRoom.status === 'finalizado',
                winner,
              };
            });
          }
        )
        .subscribe((status) => {
          if (status === 'SUBSCRIBED') {
            console.log('✅ Conexão Realtime estabelecida');
          } else if (status === 'CHANNEL_ERROR' && retryCount < maxRetries) {
            retryCount++;
            console.log(`🔄 Tentando reconectar... (${retryCount}/${maxRetries})`);
            setTimeout(setupSubscription, 1000);
          }
        });

      return channel;
    };

    const channel = setupSubscription();

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, [gameState.room?.id]);

  // Carregar salas disponíveis periodicamente
  useEffect(() => {
    loadAvailableRooms();
    const interval = setInterval(loadAvailableRooms, 3000);
    return () => clearInterval(interval);
  }, [loadAvailableRooms]);

  // Resetar estado do multiplayer
  const resetGameState = useCallback(() => {
    setGameState({
      room: null,
      playerName: '',
      isPlayer1: false,
      isMyTurn: false,
      gameSequence: [],
      playerSequence: [],
      currentStep: 0,
      gameOver: false,
      winner: null,
    });
  }, []);

  return {
    gameState,
    availableRooms,
    loading,
    createRoom,
    joinRoom,
    makeMove,
    endGame,
    addToSequence,
    loadAvailableRooms,
    setGameState,
    resetGameState,
  };
};