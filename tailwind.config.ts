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
        sandstone: {
          DEFAULT: '#F7F2E6',
          light: '#FDFCF8',
          dark: '#EDE6D6',
        },
        terracotta: {
          DEFAULT: '#BF5B3D',
          light: '#D4704A',
          dark: '#A04A28',
        },
        'ocean-blue': {
          DEFAULT: '#2B5B7D',
          light: '#4A7BA7',
          dark: '#1E4259',
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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
