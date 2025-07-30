
import React, { useState, useEffect } from 'react';
import GameMenu from '../components/GameMenu';
import GamePlay from '../components/GamePlay';
import GameModeSelect from '../components/GameModeSelect';
import SettingsScreen from '../components/SettingsScreen';
import InstructionsScreen from '../components/InstructionsScreen';
import CreditsScreen from '../components/CreditsScreen';
import MultiplayerMain from '../components/multiplayer/MultiplayerMain';
import { useToast } from '../hooks/use-toast';

type Screen = 'menu' | 'modeSelect' | 'game' | 'settings' | 'instructions' | 'credits' | 'multiplayer';
type GameMode = 'normal' | 'speed' | 'hard';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('menu');
  const [selectedGameMode, setSelectedGameMode] = useState<GameMode>('normal');
  const [highScore, setHighScore] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { toast } = useToast();

  // Load saved data on component mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem('neonMemoryHighScore');
    const savedSoundSetting = localStorage.getItem('neonMemorySoundEnabled');
    
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
    
    if (savedSoundSetting !== null) {
      setSoundEnabled(savedSoundSetting === 'true');
    }
  }, []);

  const handleStartGame = () => {
    setCurrentScreen('modeSelect');
  };

  const handleSelectGameMode = (mode: GameMode) => {
    setSelectedGameMode(mode);
    setCurrentScreen('game');
  };

  const handleBackToMenu = () => {
    setCurrentScreen('menu');
  };

  const handleBackToModeSelect = () => {
    setCurrentScreen('modeSelect');
  };

  const handleShowSettings = () => {
    setCurrentScreen('settings');
  };

  const handleShowInstructions = () => {
    setCurrentScreen('instructions');
  };

  const handleShowCredits = () => {
    setCurrentScreen('credits');
  };

  const handleShowMultiplayer = () => {
    setCurrentScreen('multiplayer');
  };

  const handleGameOver = (score: number) => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('neonMemoryHighScore', score.toString());
      toast({
        title: "🎉 Novo recorde!",
        description: `Parabéns! Você fez ${score} pontos!`,
        duration: 3000,
      });
    } else if (score > 0) {
      toast({
        title: "Bom jogo!",
        description: `Você fez ${score} pontos. Continue praticando!`,
        duration: 3000,
      });
    }
    // Removed automatic redirect to menu - let the user choose
  };

  const handleToggleSound = () => {
    const newSoundEnabled = !soundEnabled;
    setSoundEnabled(newSoundEnabled);
    localStorage.setItem('neonMemorySoundEnabled', newSoundEnabled.toString());
    
    toast({
      title: newSoundEnabled ? "🔊 Som ativado" : "🔇 Som desativado",
      description: newSoundEnabled ? "Os sons do jogo estão ligados" : "Os sons do jogo estão desligados",
      duration: 2000,
    });
  };

  const handleResetHighScore = () => {
    setHighScore(0);
    localStorage.removeItem('neonMemoryHighScore');
    toast({
      title: "🔄 Recorde resetado",
      description: "Seu recorde foi apagado. Hora de um novo desafio!",
      duration: 3000,
    });
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'menu':
        return (
          <GameMenu
            onStartGame={handleStartGame}
            onShowSettings={handleShowSettings}
            onShowInstructions={handleShowInstructions}
            onShowCredits={handleShowCredits}
            onShowMultiplayer={handleShowMultiplayer}
            highScore={highScore}
            soundEnabled={soundEnabled}
          />
        );

      case 'modeSelect':
        return (
          <GameModeSelect
            onBack={handleBackToMenu}
            onSelectMode={handleSelectGameMode}
          />
        );
      
      case 'game':
        return (
          <GamePlay
            onBackToMenu={handleBackToMenu}
            onGameOver={handleGameOver}
            soundEnabled={soundEnabled}
            onToggleSound={handleToggleSound}
            gameMode={selectedGameMode}
            highScore={highScore}
          />
        );
      
      case 'settings':
        return (
          <SettingsScreen
            onBack={handleBackToMenu}
            soundEnabled={soundEnabled}
            onToggleSound={handleToggleSound}
            onResetHighScore={handleResetHighScore}
            highScore={highScore}
          />
        );
      
      case 'instructions':
        return <InstructionsScreen onBack={handleBackToMenu} />;
      
      case 'credits':
        return <CreditsScreen onBack={handleBackToMenu} />;
      
      case 'multiplayer':
        return (
          <MultiplayerMain
            onBack={handleBackToMenu}
            soundEnabled={soundEnabled}
            onToggleSound={handleToggleSound}
          />
        );
      
      default:
        return (
          <GameMenu
            onStartGame={handleStartGame}
            onShowSettings={handleShowSettings}
            onShowInstructions={handleShowInstructions}
            onShowCredits={handleShowCredits}
            onShowMultiplayer={handleShowMultiplayer}
            highScore={highScore}
            soundEnabled={soundEnabled}
          />
        );
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentScreen()}
    </div>
  );
};

export default Index;
