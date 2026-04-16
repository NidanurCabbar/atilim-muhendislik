import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold:    '#C8A96E',
          'gold-light': '#D4BA88',
          'gold-dark':  '#A8893E',
          dark:    '#0A0A0A',
          'dark-2': '#111111',
          'dark-3': '#1A1A1A',
          gray:    '#8A8A8A',
          'gray-light': '#C0C0C0',
        },
      },
      fontFamily: {
        sans:    ["'Manrope'", 'system-ui', 'sans-serif'],
        display: ["'Clash Display'", 'system-ui', 'sans-serif'],
        serif:   ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'slide-right':  'slideRight 0.4s ease-out forwards',
        'slide-left':   'slideLeft 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient':   'linear-gradient(135deg, #C8A96E 0%, #D4BA88 50%, #A8893E 100%)',
      },
    },
  },
  plugins: [],
}

export default config
