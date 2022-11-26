/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
      1000:"1000ms",
    },
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        moveCold1: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '20%'},
          '50%': { transform: 'translateY(-10px)', opacity: '100%'}
        },
        moveCold2: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '100%'},
          '50%': { transform: 'translateY(10px)', opacity: '20%'}
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        moveColdOne: 'moveCold1 15s ease-in-out infinite',
        moveColdTwo: 'moveCold2 15s ease-in-out infinite',
      },
    },
    fontFamily: {
      sans: ['LORE', 'sans-serif'],
    },
  },
  plugins: [],
}
