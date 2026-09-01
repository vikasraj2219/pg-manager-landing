/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#12151B',
          soft: '#1C202A',
          line: '#2B3040',
        },
        paper: {
          DEFAULT: '#EFF1EA',
          dim: '#E4E7DE',
          card: '#F8F9F4',
        },
        brass: {
          DEFAULT: '#B8863A',
          soft: '#D9AE6B',
          deep: '#8C6528',
        },
        ledger: {
          DEFAULT: '#2F5D50',
          soft: '#4C7A6C',
        },
        rust: {
          DEFAULT: '#B1503A',
          soft: '#C97A67',
        },
        slate: {
          soft: '#5B6270',
        },
      },
      fontFamily: {
        serif: ['"Libre Caslon Text"', '"Iowan Old Style"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        lg: '10px',
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}
