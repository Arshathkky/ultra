/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customBlue: '#1a0179', // Your desired color
      },
    },
  },
  plugins: [],
};
