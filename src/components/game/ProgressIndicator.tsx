
import React from 'react';
import { Color, GameState } from '../../types/game';

interface ProgressIndicatorProps {
  sequence: Color[];
  playerSequence: Color[];
  gameState: GameState;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  sequence,
  playerSequence,
  gameState
}) => {
  return (
    <div className="mt-6 sm:mt-8 pb-4">
      <div className="flex justify-center space-x-1 sm:space-x-2 flex-wrap">
        {sequence.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
              index < playerSequence.length
                ? 'bg-neon-green'
                : index === playerSequence.length && gameState === 'waiting'
                ? 'bg-neon-blue animate-pulse'
                : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
