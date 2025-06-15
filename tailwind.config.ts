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
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        thai: {
          gold: '#FFD700',
          red: '#FF0000',
          blue: '#0F4C81',
        }
      },
      fontFamily: {
        thai: ['Noto Sans Thai', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

export default config
