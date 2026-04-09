/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sacred: {
          50: '#fdf8f6',
          100: '#fbe8e1',
          200: '#f5c7b8',
          300: '#efab94',
          400: '#e8936b',
          500: '#e17b42',
          600: '#d16934',
          700: '#a84f25',
          800: '#7f3a1a',
          900: '#56260f',
        },
      },
      fontFamily: {
        sacred: ['Baloo 2', 'system-ui', 'sans-serif'],
        mantra: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};