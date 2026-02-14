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
        gold: {
          DEFAULT: '#d4af37',
          light: '#ffd700',
          300: '#fbbf24',
          400: '#f59e0b', 
          500: '#d97706',
          600: '#b45309',
        },
        'gold-light': '#ffd700',
        royal: {
          purple: '#6b46c1',
          blue: '#1e40af',
          indigo: '#3730a3'
        },
        'purple-dark': '#1a1030',
        'gray-dark': '#141418',
        'gray-medium': '#2a2a35',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'royal-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gold': 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
        'card-dark': 'rgba(20, 20, 24, 0.9)',
        'glass': 'rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
      textShadow: {
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '0 4px 8px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.bg-glass': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.bg-card-dark': {
          background: 'rgba(20, 20, 24, 0.9)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          backdropFilter: 'blur(8px)',
        },
        '.bg-gold': {
          background: 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
        },
        '.text-gold': {
          color: '#d4af37',
        },
        '.text-gold-light': {
          color: '#ffd700',
        },
        '.border-gold': {
          borderColor: '#d4af37',
        },
        '.border-gold-light': {
          borderColor: '#ffd700',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
export default config