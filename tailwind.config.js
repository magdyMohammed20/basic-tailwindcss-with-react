/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveRight: {
          '0%': {transform: 'translateX(0%)'},
          '20%':  {transform: 'translateX(5%)'},
          '50%': { transform: 'translateX(10%)' },
          '70%': { transform: 'translateX(5%)' },
          '100%' :  {transform: 'translateX(0%)'},
        }
      },
      animation: {
        moveRight: 'moveRight 1s ease-in infinite'
      },
      zIndex: {
        '999': '999',
      },
      colors: {
        mainColor: '#00f'
      },
      backgroundColor: {
        mainColor: '#0F172A',
        secondColor: '#222',
        mobColor: '#151f35',
        sideNav: '#091123'
      },
      screens: {
        /* sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl' : '1400px' */
      }
    },
  },
  plugins: [],
}

