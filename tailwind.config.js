module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: '#EDE9FE',
          light: '#C4B5FD',
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
          darker: '#5B21B6',
        },
        secondary: {
          lighter: '#CFFAFE',
          light: '#A5F3FC',
          DEFAULT: '#06B6D4',
          dark: '#0891B2',
          darker: '#0E7490',
        },
        accent: {
          lighter: '#FEF3C7',
          light: '#FDE68A',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          darker: '#B45309',
        },
        success: {
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        kidsDark: '#0F0A2E',
        kidsCard: '#1A0A4E',
        kidsText: '#1E1B4B',
        kidsGray: '#6B7280',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        xl2: '16px',
        xl3: '20px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delay': 'float 3s ease-in-out 1.5s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0F0A2E 0%, #1A0A4E 50%, #0F172A 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(124, 58, 237, 0.15)',
        'card-hover': '0 8px 40px rgba(124, 58, 237, 0.3)',
        'btn': '0 4px 14px rgba(124, 58, 237, 0.4)',
        'btn-accent': '0 4px 14px rgba(245, 158, 11, 0.4)',
        'glow': '0 0 30px rgba(124, 58, 237, 0.4)',
      },
    },
  },
  plugins: [],
};
