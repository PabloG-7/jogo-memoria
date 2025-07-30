export interface GameRoom {
  id: string;
  player1: string | null;
  player2: string | null;
  status: 'esperando' | 'jogando' | 'finalizado';
  turn: 'player1' | 'player2';
  sequence: string;
  level: number;
  code: string | null;
  updated_at: string;
}

export interface MultiplayerGameState {
  room: GameRoom | null;
  playerName: string;
  isPlayer1: boolean;
  isMyTurn: boolean;
  gameSequence: string[];
  playerSequence: string[];
  currentStep: number;
  gameOver: boolean;
  winner: string | null;
}