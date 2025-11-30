import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#144F5D',
          dark: '#144F5D',
          light: '#76A4B1',
          cyan: '#EEFCFF',
          slate: '#4A6572',
          aqua: '#00A7D9',
        },
        accent: {
          yellow: '#FFF8B6',
          softYellow: '#FFF794',
          lime: '#B9F08A',
          cream: '#EEBBA9',
          peach: '#FEE9CF',
          orange: '#F9B871',
          teal: '#ACE2F2',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          light: '#5a5a5a',
          steel: '#4E5D6C',
        },
        light: {
          DEFAULT: '#EEFCFF',
          white: '#ffffff',
          gray: '#F4F4F4',
          gray2: '#F9F9F9',
          blue: '#EEFCFF',
          pastel: '#EAF2F3',
        },
      },
      fontFamily: {
        roboto: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
      fontSize: {
        'display': '3.5rem',
        'h1': '2.5rem',
        'h2': '1.5rem',
      },
      lineHeight: {
        'relaxed-custom': '1.86',
      },
      maxWidth: {
        'container': '1200px',
        'container-narrow': '750px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
