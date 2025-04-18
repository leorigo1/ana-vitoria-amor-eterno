
import React from 'react';

interface FloatingHeartsProps {
  active: boolean;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ active }) => {
  if (!active) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-heart text-red-500"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
