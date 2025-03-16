/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'horror-red': '#8B0000',
        'horror-black': '#1A1A1A',
        'horror-gray': '#333333',
      },
      fontFamily: {
        horror: ['Creepster', 'cursive'],
        main: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/Fondo_unido.png')",
        'game-bg': "url('/assets/Recibidor_HD.jpeg')",
      },
    },
  },
  plugins: [],
}