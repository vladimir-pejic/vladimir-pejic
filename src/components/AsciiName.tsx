import React, { useState, useEffect, useCallback } from 'react';

const generateRandomAscii = (length: number) => {
  const chars = '▓▒░█▀■◤◢◣◥▲▼▶◀●○◌◍◎◉⬤⬡⬢⬣';
  return Array(length).fill(0).map(() => 
    chars[Math.floor(Math.random() * chars.length)]
  ).join('');
};

const nameAscii = `
██╗   ██╗██╗      █████╗ ██████╗ ██╗███╗   ███╗██╗██████╗ 
██║   ██║██║     ██╔══██╗██╔══██╗██║████╗ ████║██║██╔══██╗
██║   ██║██║     ███████║██║  ██║██║██╔████╔██║██║██████╔╝
╚██╗ ██╔╝██║     ██╔══██║██║  ██║██║██║╚██╔╝██║██║██╔══██╗
  ╚████╔╝ ███████╗██║  ██║██████╔╝██║██║ ╚═╝ ██║██║██║  ██║
  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═╝
                                                            
██████╗ ███████╗     ██╗██╗ ██████╗
██╔══██╗██╔════╝     ██║██║██╔════╝
██████╔╝█████╗       ██║██║██║     
██╔═══╝ ██╔══╝  ██   ██║██║██║     
██║     ███████╗╚█████╔╝██║╚██████╗
╚═╝     ╚══════╝ ╚════╝ ╚═╝ ╚═════╝`;

export const AsciiName: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [decodingInterval, setDecodingInterval] = useState<NodeJS.Timeout | null>(null);
  const [ambientInterval, setAmbientInterval] = useState<NodeJS.Timeout | null>(null);

  const startAmbientAnimation = useCallback(() => {
    if (ambientInterval) clearInterval(ambientInterval);
    if (decodingInterval) clearInterval(decodingInterval);
    
    // Start with more scrambled text
    const initialScramble = nameAscii.split('').map(char => {
      if (char === ' ' || char === '\n') return char;
      return generateRandomAscii(1);
    }).join('');
    setDisplayText(initialScramble);
    
    const id = setInterval(() => {
      const mixed = nameAscii.split('').map(char => {
        if (char === ' ' || char === '\n') return char;
        return Math.random() > 0.95 ? generateRandomAscii(1) : char;
      }).join('');
      
      setDisplayText(mixed);
    }, 150); // Slowed down ambient animation
    
    setAmbientInterval(id);
  }, []);

  const startDecodingAnimation = useCallback(() => {
    if (decodingInterval) clearInterval(decodingInterval);
    if (ambientInterval) clearInterval(ambientInterval);
    
    let iterations = 0;
    const maxIterations = 20; // Increased iterations for smoother transition
    
    const id = setInterval(() => {
      iterations++;
      const progress = iterations / maxIterations;
      
      const mixed = nameAscii.split('').map(char => {
        if (char === ' ' || char === '\n') return char;
        return Math.random() > progress ? generateRandomAscii(1) : char;
      }).join('');
      
      setDisplayText(mixed);
      
      if (iterations >= maxIterations) {
        clearInterval(id);
        setDisplayText(nameAscii);
        setDecodingInterval(null);
      }
    }, 60); // Slightly slower decoding for better visibility
    
    setDecodingInterval(id);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      startAmbientAnimation();
    }, 500); // Delay initial animation start

    return () => {
      clearTimeout(timer);
      if (ambientInterval) clearInterval(ambientInterval);
      if (decodingInterval) clearInterval(decodingInterval);
    };
  }, []);

  useEffect(() => {
    if (isHovered) {
      startDecodingAnimation();
    } else {
      // Add a small delay before starting ambient animation
      const timer = setTimeout(() => {
        startAmbientAnimation();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 transform hover:scale-105 transition-transform duration-300">
      <pre
        className="ascii-art ascii-shadow font-mono text-primary cursor-pointer select-none text-center mx-auto overflow-x-auto scrollbar-hide"
        style={{
          fontSize: 'clamp(6px, 2vw, 20px)',
          lineHeight: 'clamp(6px, 2vw, 20px)',
          transform: 'scale(1)',
          transformOrigin: 'center',
          overflowY: 'hidden',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {displayText || nameAscii}
      </pre>
    </div>
  );
};