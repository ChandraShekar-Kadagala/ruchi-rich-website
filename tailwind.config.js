/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#006633',
          forest: '#004B2C',
          gold: '#D6A52A',
          red: '#D92720',
          ivory: '#FFFDF7',
          charcoal: '#242321'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      }
    },
  },
  plugins: [],
}
