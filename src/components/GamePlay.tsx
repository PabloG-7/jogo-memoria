
import React, { useState, useEffect, useCallback } from 'react';
import { useAudio } from '../hooks/useAudio';
import { GameState, Color, GamePlayProps } from '../types/game';
import { colors } from '../constants/gameColors';
import { getRandomColor, calculateScore, getGameTimings } from '../utils/gameUtils';
import GameStartScreen from './game/GameStartScreen';
import GameOverScreen from './game/GameOverScreen';
import GameHeader from './game/GameHeader';
import GameInfo from './game/GameInfo';
import GameStatus from './game/GameStatus';
import GamePad from './game/GamePad';
import ProgressIndicator from './game/ProgressIndicator';

const GamePlay: React.FC<GamePlayProps> = ({ 
  onBackToMenu, 
  onGameOver, 
  soundEnabled, 
  onToggleSound, 
  gameMode = 'normal', 
  highScore 
}) => {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [sequence, setSequence] = useState<Color[]>([]);
  const [playerSequence, setPlayerSequence] = useState<Color[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [activeColor, setActiveColor] = useState<Color | null>(null);
  const [showingIndex, setShowingIndex] = useState(0);

  const { playBeep, playSuccessSound, playErrorSound, playGameOverSound, playLevelUpSound } = useAudio();

  const startNewGame = useCallback(() => {
    const firstColor = getRandomColor(gameMode);
    setSequence([firstColor]);
    setPlayerSequence([]);
    setCurrentStep(0);
    setScore(0);
    setLevel(1);
    setGameState('showing');
    setShowingIndex(0);
  }, [gameMode]);

  const showSequence = useCallback(() => {
    if (showingIndex < sequence.length) {
      const color = sequence[showingIndex];
      setActiveColor(color);
      
      if (soundEnabled) {
        playBeep(colors[color].sound, 400, 0.15);
      }

      const { showDuration } = getGameTimings(gameMode, level);

      setTimeout(() => {
        setActiveColor(null);
        setShowingIndex(showingIndex + 1);
      }, showDuration);
    } else {
      const { waitTime } = getGameTimings(gameMode, level);
      setTimeout(() => {
        setGameState('waiting');
        setCurrentStep(0);
        setPlayerSequence([]);
      }, waitTime);
    }
  }, [sequence, showingIndex, soundEnabled, playBeep, gameMode, level]);

  useEffect(() => {
    if (gameState === 'showing') {
      const { initialDelay } = getGameTimings(gameMode, level);
      const timer = setTimeout(showSequence, initialDelay);
      return () => clearTimeout(timer);
    }
  }, [gameState, showSequence, gameMode, level]);

  const handleColorClick = useCallback((color: Color) => {
    if (gameState !== 'waiting') return;

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);
    setActiveColor(color);

    if (soundEnabled) {
      playBeep(colors[color].sound, 200, 0.12);
    }

    setTimeout(() => setActiveColor(null), 200);

    if (newPlayerSequence[currentStep] === sequence[currentStep]) {
      if (newPlayerSequence.length === sequence.length) {
        // Sequência completa correta
        const newScore = score + calculateScore(level, gameMode);
        setScore(newScore);
        setLevel(level + 1);
        
        setTimeout(() => {
          if (soundEnabled) {
            playSuccessSound();
          }
          
          const nextSequence = [...sequence, getRandomColor(gameMode)];
          setSequence(nextSequence);
          setPlayerSequence([]);
          setCurrentStep(0);
          setGameState('showing');
          setShowingIndex(0);

          if (level % 5 === 0 && soundEnabled) {
            setTimeout(() => playLevelUpSound(), 500);
          }
        }, 500);
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      // Erro - fim de jogo
      setGameState('gameover');
      if (soundEnabled) {
        playErrorSound();
        setTimeout(() => playGameOverSound(), 300);
      }
      onGameOver(score);
    }
  }, [gameState, playerSequence, currentStep, sequence, score, level, soundEnabled, playBeep, playSuccessSound, playErrorSound, playGameOverSound, playLevelUpSound, gameMode, onGameOver]);

  const pauseGame = () => {
    setGameState(gameState === 'paused' ? 'waiting' : 'paused');
  };

  if (gameState === 'idle') {
    return <GameStartScreen gameMode={gameMode} onStartGame={startNewGame} />;
  }

  if (gameState === 'gameover') {
    return (
      <GameOverScreen
        score={score}
        level={level}
        gameMode={gameMode}
        onPlayAgain={startNewGame}
        onBackToMenu={onBackToMenu}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-4 no-select">
      <GameHeader
        onBackToMenu={onBackToMenu}
        soundEnabled={soundEnabled}
        onToggleSound={onToggleSound}
        gameState={gameState}
        onPauseGame={pauseGame}
        gameMode={gameMode}
      />

      <GameInfo
        score={score}
        level={level}
        highScore={highScore}
        gameMode={gameMode}
      />

      <GameStatus
        gameState={gameState}
        gameMode={gameMode}
        level={level}
      />

      <GamePad
        gameState={gameState}
        gameMode={gameMode}
        activeColor={activeColor}
        onColorClick={handleColorClick}
      />

      <ProgressIndicator
        sequence={sequence}
        playerSequence={playerSequence}
        gameState={gameState}
      />
    </div>
  );
};

export default GamePlay;
