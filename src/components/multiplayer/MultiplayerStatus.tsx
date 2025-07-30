import React from 'react';

interface MultiplayerStatusProps {
  isShowingSequence: boolean;
  isMyTurn: boolean;
  showingIndex: number;
  sequenceLength: number;
  currentOpponent: string | null;
}

const MultiplayerStatus: React.FC<MultiplayerStatusProps> = ({
  isShowingSequence,
  isMyTurn,
  showingIndex,
  sequenceLength,
  currentOpponent
}) => {
  return (
    <div className="text-center mb-6 sm:mb-8">
      {isShowingSequence && (
        <p className="text-base sm:text-xl text-neon-green animate-pulse">
          Memorize a sequência... ({showingIndex + 1}/{sequenceLength})
        </p>
      )}
      {!isShowingSequence && isMyTurn && (
        <p className="text-base sm:text-xl text-neon-blue animate-pulse">
          Sua vez! Repita a sequência
        </p>
      )}
      {!isShowingSequence && !isMyTurn && (
        <p className="text-base sm:text-xl text-neon-orange">
          Vez de {currentOpponent}...
        </p>
      )}
    </div>
  );
};

export default MultiplayerStatus;