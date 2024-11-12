import React from 'react';

export const CyberGlitch: React.FC<{ text: string }> = ({ text }) => (
  <span className="glitch-text" data-text={text}>
    {text}
  </span>
);

export const CyberCorner: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ position }) => {
  const baseClasses = "absolute w-8 h-8";
  const positionClasses = {
    'top-left': 'top-0 left-0 border-l-2 border-t-2',
    'top-right': 'top-0 right-0 border-r-2 border-t-2',
    'bottom-left': 'bottom-0 left-0 border-l-2 border-b-2',
    'bottom-right': 'bottom-0 right-0 border-r-2 border-b-2'
  };

  return (
    <>
      <div className={`${baseClasses} ${positionClasses[position]} border-primary`} />
      <div className={`${baseClasses} ${positionClasses[position]} border-secondary opacity-50 blur-[2px] animate-pulse`} />
    </>
  );
};

export const CyberScanline: React.FC = () => (
  <div className="scanline" />
);

export const CyberNoise: React.FC = () => (
  <div className="noise" />
); 