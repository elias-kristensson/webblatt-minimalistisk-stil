/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: '#FAFAFA',
        surface: '#FFFFFF',
        text: '#111111',
        muted: '#888888',
        accent: '#111111',
        border: '#E5E5E5',
      },
      letterSpacing: {
        heading: '0.02em',
      },
      lineHeight: {
        generous: '1.7',
      },
    },
  },
  plugins: [],
}
