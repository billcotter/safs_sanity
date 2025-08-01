import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors (STRICT ADHERENCE REQUIRED)
        sandstone: {
          DEFAULT: '#F7F2E6',
          light: '#FDFCF8',
          dark: '#EDE6D6',
        },
        terracotta: {
          DEFAULT: '#BF5B3D',
          light: '#D4704A',
          dark: '#A04A28',
          hover: '#A04A28',
        },
        'ocean-blue': {
          DEFAULT: '#2B5B7D',
          light: '#4A7BA7',
          dark: '#1E4259',
          hover: '#1E4259',
        },
        ochre: {
          DEFAULT: '#E3A85B',
          light: '#F0C888',
          dark: '#C6883A',
        },
        charcoal: {
          DEFAULT: '#333333',
          light: '#4D4D4D',
          dark: '#1A1A1A',
        },

        // Semantic State Colors
        error: '#c0392b',
        success: '#27ae60',
        warning: '#f39c12',
        info: '#2B5B7D', // ocean-blue

        // Interactive States
        'terracotta-hover': '#A04A28',
        'ocean-blue-hover': '#1E4259',
        'sandstone-hover': '#F0DEB0',

        // Neutral System
        gray: {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
        },

        // Accessibility
        focus: '#4c8ef7',
        disabled: '#ced4da',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
