import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MultiplayerGameState } from '@/types/multiplayer';
import { Color } from '@/types/game';
import { colors } from '@/constants/gameColors';
import { useAudio } from '@/hooks/useAudio';
import { ArrowLeft } from 'lucide-react';
import MultiplayerHeader from './MultiplayerHeader';
import MultiplayerInfo from './MultiplayerInfo';
import MultiplayerStatus from './MultiplayerStatus';
import GamePad from '../game/GamePad';
import ProgressIndicator from '../game/ProgressIndicator';

interface MultiplayerGameProps {
  gameState: MultiplayerGameState;
  onMakeMove: (sequence: Color[]) => void;
  onAddToSequence: () => void;
  onEndGame: (winner: string) => void;
  onBack: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

const MultiplayerGame: React.FC<MultiplayerGameProps> = ({
  gameState,
  onMakeMove,
  onAddToSequence,
  onEndGame,
  onBack,
  soundEnabled,
  onToggleSound
}) => {
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [activeColor, setActiveColor] = useState<Color | null>(null);
  const [playerSequence, setPlayerSequence] = useState<Color[]>([]);
  const [showingIndex, setShowingIndex] = useState(0);
  const [gameStateLocal, setGameStateLocal] = useState<'waiting' | 'showing' | 'gameover'>('waiting');
  const [lastSequenceLength, setLastSequenceLength] = useState(0);

  const { playBeep, playSuccessSound, playErrorSound, playGameOverSound } = useAudio();

  const currentOpponent = gameState.isPlayer1 ? gameState.room?.player2 : gameState.room?.player1;


  // Executar sequência apenas quando o tamanho da sequência muda (nova rodada)
  useEffect(() => {
  const currentLength = gameState.gameSequence.length;

  const isFirstShow = lastSequenceLength === 0 && currentLength === 1;

  if ((currentLength > 0 && currentLength !== lastSequenceLength && !isShowingSequence) || isFirstShow) {
    setLastSequenceLength(currentLength);

    const showSequenceLocal = async () => {
      if (gameState.gameSequence.length === 0) return;

      setIsShowingSequence(true);
      setGameStateLocal('showing');
      setPlayerSequence([]);
      setShowingIndex(0);

      await new Promise(resolve => setTimeout(resolve, 1000));

      for (let i = 0; i < gameState.gameSequence.length; i++) {
        const color = gameState.gameSequence[i] as Color;
        setActiveColor(color);
        setShowingIndex(i);

        if (soundEnabled) {
          playBeep(colors[color].sound, 400, 0.15);
        }

        await new Promise(resolve => setTimeout(resolve, 600));
        setActiveColor(null);
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      setIsShowingSequence(false);
      setGameStateLocal('waiting');
    };

    showSequenceLocal();
  }
}, [gameState.gameSequence.length, lastSequenceLength, isShowingSequence, soundEnabled, playBeep]);


  // Clique em cor
  const handleColorClick = (color: Color) => {
    if (!gameState.isMyTurn || isShowingSequence || gameState.gameOver) return;

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);
    setActiveColor(color);

    if (soundEnabled) {
      playBeep(colors[color].sound, 200, 0.12);
    }

    setTimeout(() => setActiveColor(null), 200);

    // Verificar se a cor está correta
    const currentIndex = newPlayerSequence.length - 1;
    if (newPlayerSequence[currentIndex] === gameState.gameSequence[currentIndex]) {
      if (newPlayerSequence.length === gameState.gameSequence.length) {
        // Sequência completa e correta
        setTimeout(() => {
          if (soundEnabled) {
            playSuccessSound();
          }
          // Adicionar nova cor e passar o turno
          onAddToSequence();
          setPlayerSequence([]);
        }, 500);
      }
    } else {
      // Erro - fim de jogo
      setTimeout(() => {
        if (soundEnabled) {
          playErrorSound();
          setTimeout(() => playGameOverSound(), 300);
        }
        onEndGame(currentOpponent || 'Oponente');
      }, 500);
    }
  };


  if (gameState.gameOver) {
    const isWinner = gameState.winner === gameState.playerName;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-primary/20 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8 text-center space-y-6">
            <div className="text-6xl mb-4">
              {isWinner ? '🎉' : '😔'}
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {isWinner ? (
                  <span className="text-green-400">Vitória!</span>
                ) : (
                  <span className="text-red-400">Derrota</span>
                )}
              </h2>
              <p className="text-muted-foreground">
                {isWinner 
                  ? `Parabéns! Você venceu ${currentOpponent}!`
                  : `${gameState.winner} venceu esta partida!`
                }
              </p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Estatísticas da partida:</p>
              <p className="text-lg">
                <span className="text-primary font-semibold">Nível alcançado:</span> {gameState.room?.level || 1}
              </p>
            </div>

            <Button
              onClick={onBack}
              className="w-full bg-gradient-to-r from-primary to-primary/80"
              size="lg"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Menu
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-4 no-select">
      <MultiplayerHeader
        onBackToMenu={onBack}
        soundEnabled={soundEnabled}
        onToggleSound={onToggleSound}
      />

      <MultiplayerInfo
        room={gameState.room!}
        playerName={gameState.playerName}
        isPlayer1={gameState.isPlayer1}
        isMyTurn={gameState.isMyTurn}
      />

      <MultiplayerStatus
        isShowingSequence={isShowingSequence}
        isMyTurn={gameState.isMyTurn}
        showingIndex={showingIndex}
        sequenceLength={gameState.gameSequence.length}
        currentOpponent={currentOpponent}
      />

      <GamePad
        gameState={gameStateLocal}
        gameMode="normal"
        activeColor={activeColor}
        onColorClick={handleColorClick}
      />

      <ProgressIndicator
        sequence={gameState.gameSequence as Color[]}
        playerSequence={playerSequence}
        gameState={gameStateLocal}
      />
    </div>
  );
};

export default MultiplayerGame;