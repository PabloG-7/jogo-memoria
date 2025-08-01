import { useCallback, useRef } from 'react';

export const useAudio = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const unlockAudioContext = useCallback(() => {
    const audioContext = initAudioContext();
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }, [initAudioContext]);

  const playBeep = useCallback((frequency: number, duration: number = 200, volume: number = 0.1) => {
    try {
      const audioContext = initAudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration / 1000);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration / 1000);
    } catch (error) {
      console.log('Audio não suportado neste dispositivo');
    }
  }, [initAudioContext]);

  const playSuccessSound = useCallback(() => {
    playBeep(523.25, 150, 0.15); // C note
  }, [playBeep]);

  const playErrorSound = useCallback(() => {
    playBeep(220, 300, 0.15); // A note (lower)
  }, [playBeep]);

  const playClickSound = useCallback(() => {
    playBeep(440, 100, 0.1); // A note
  }, [playBeep]);

  const playGameOverSound = useCallback(() => {
    setTimeout(() => playBeep(220, 200, 0.1), 0);
    setTimeout(() => playBeep(196, 200, 0.1), 200);
    setTimeout(() => playBeep(174.61, 400, 0.1), 400);
  }, [playBeep]);

  const playLevelUpSound = useCallback(() => {
    setTimeout(() => playBeep(523.25, 150, 0.1), 0);
    setTimeout(() => playBeep(659.25, 150, 0.1), 150);
    setTimeout(() => playBeep(783.99, 300, 0.1), 300);
  }, [playBeep]);

  return {
    playSuccessSound,
    playErrorSound,
    playClickSound,
    playGameOverSound,
    playLevelUpSound,
    playBeep,
    unlockAudioContext,
  };
};
