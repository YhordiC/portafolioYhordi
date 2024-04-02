/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bordergenial: {
          '0%, 100%': { transform: '' },
         
        }
      },
      animation: {
        bordergenial: 'bordergenial 0.3s ease-in-out ',
      }
    },
  },
  plugins: [],
}

