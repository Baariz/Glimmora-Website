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
          maroon: '#70564b',           // Primary — warm terracotta brown
          'maroon-dark': '#5f4940',    // Hover state (darker shade of primary)
          'maroon-light': '#956e5d',   // Lighter variant
          orange: '#4a3830',           // Secondary warm brown
          'orange-light': '#956e5d',   // Light secondary
        },
      },
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans', 'Source Sans 3', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
}
