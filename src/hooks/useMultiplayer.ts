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

  // Criar nova sala
  const createRoom = useCallback(async (playerName: string) => {
    setLoading(true);
    try {
      const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      const firstColor = getRandomColor('normal');
      
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

      setGameState(prev => ({
        ...prev,
        room: data as GameRoom,
        playerName,
        isPlayer1: true,
        isMyTurn: false,
      }));

      return data;
    } catch (error) {
      console.error('Erro ao criar sala:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  // Entrar em sala
  const joinRoom = useCallback(async (roomId: string, playerName: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('game_rooms')
        .update({ 
          player2: playerName,
          status: 'jogando',
          turn: 'player1',
          level: 1,
        })
        .eq('id', roomId)
        .select()
        .single();

      if (error) throw error;

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

  // Finalizar jogo
  const endGame = useCallback(async (winner: string) => {
    if (!gameState.room) return;

    try {
      // Marcar como finalizado e definir o vencedor para que ambos vejam
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

  // Configurar Realtime
  useEffect(() => {
    if (!gameState.room) return;

    const channel = supabase
      .channel(`room-${gameState.room.id}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'game_rooms',
          filter: `id=eq.${gameState.room.id}`,
        },
        (payload) => {
          const updatedRoom = payload.new as GameRoom;
          
          setGameState(prev => {
            const isMyTurn = (updatedRoom.turn === 'player1' && prev.isPlayer1) || 
                           (updatedRoom.turn === 'player2' && !prev.isPlayer1);
            
            const sequence = JSON.parse(updatedRoom.sequence || '[]');
            
            // Se o jogo foi finalizado, determinar o vencedor
            let winner = prev.winner;
            if (updatedRoom.status === 'finalizado' && !prev.gameOver) {
              // O vencedor é determinado pelo turn quando finalizado
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
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
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