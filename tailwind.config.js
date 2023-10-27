/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          '0%': { transform: 'translateX(400px)', width: '400px', opacity: 0 },
          '100%': { transform: 'translateX(0)', width: '400px', opacity: 1 },
        },
      },
      animation: {
        slideinRegular: 'slidein 1.5s',
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