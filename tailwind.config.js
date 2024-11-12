/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'glow-smooth': 'glow-smooth 4s linear infinite',
        'glow-accent': 'glow-accent 5s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            opacity: 0.35,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.45,
            transform: 'scale(1.05)',
          },
        },
        'glow-smooth': {
          '0%, 100%': {
            opacity: 0.3,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.4,
            transform: 'scale(1.05)',
          },
        },
        'glow-accent': {
          '0%, 100%': {
            opacity: 0.2,
            transform: 'scale(1.05)',
          },
          '50%': {
            opacity: 0.3,
            transform: 'scale(1)',
          },
        },
      },
      backgroundImage: {
        'scanlines': 'repeating-linear-gradient(transparent 0px, transparent 1px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 3px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'scanlines': 'repeating-linear-gradient(0deg, transparent 0px, rgba(255, 255, 255, 0.05) 1px, transparent 2px)',
      },
    },
  },
  plugins: [],
};