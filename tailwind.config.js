export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal': {
          50: '#f8f5e6',
          100: '#e6d5b8',
          200: '#d4b68c',
          300: '#c19661',
          400: '#af7736',
          500: '#8b5e2b',
          600: '#6b4720',
          700: '#4b3115',
          800: '#2c1c0a',
          900: '#0d0700',
        },
      },
      fontFamily: {
        'medieval': ['Cinzel Decorative', 'cursive'],
        'body': ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
}