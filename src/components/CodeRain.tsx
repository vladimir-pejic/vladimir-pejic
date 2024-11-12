import { useEffect, useRef } from 'react';

const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters to use (hexadecimal + some cyberpunk-ish characters)
    const chars = '0123456789ABCDEF⌭⌬⌘⌗⌖☢☣△▲▴▵⟁⟂⟃';
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    
    // Drops starting position
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    // Drawing animation
    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      ctx.fillStyle = '#00ff9f08'; // Very transparent neon green
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      drops.forEach((y, i) => {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw the character
        ctx.fillText(char, i * fontSize, y * fontSize);

        // Reset position if drop reaches bottom or randomly
        if (y * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        // Move drop
        drops[i]++;
      });
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ mixBlendMode: 'lighten' }}
    />
  );
};

export default CodeRain; 