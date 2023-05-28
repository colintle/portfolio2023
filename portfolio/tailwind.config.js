/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SF Pro', 'SF Pro Regular', 'SF Pro Display Thin']
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0.0deg)' },
          '1%': { transform: 'rotate(14deg)' },
          '2%': { transform: 'rotate(-8deg)' },
          '3%': { transform: 'rotate(14deg)' },
          '4%': { transform: 'rotate(-4deg)' },
          '5%': { transform: 'rotate(10.0deg)' },
          '6%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(0.0deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
      },
      animation: {
        rotate: 'rotate 10s 2s linear infinite',
        'fade-in': 'fade-in 1s forwards',
        'fade-out': 'fade-out 1s forwards'
      },
    },
  },
  plugins: [],
};
