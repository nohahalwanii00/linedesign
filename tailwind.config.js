/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          400: '#d4af7a',
          300: '#e0c898',
        },
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
plugins: [
  require('@tailwindcss/line-clamp'),
]