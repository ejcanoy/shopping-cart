/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideinRight: {
          '0%': { transform: 'translateX(400px)', width: '400px', opacity: 0 },
          '100%': { transform: 'translateX(0)', width: '400px', opacity: 1 },
        },
        slideinLeft: {
          '0%': { transform: 'translateX(-100vw)', width: '100vw', opacity: 1 },
          '100%': { transform: 'translateX(0)', width: '100vw', opacity: 1 },
        }
      },
      animation: {
        slideinRegular: 'slideinRight 1.5s',
        slideinOpposite: 'slideinLeft 1.5s'
      },
      screens: {
        'xs': '0px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}