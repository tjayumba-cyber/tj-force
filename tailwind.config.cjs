/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        perforce: {
          navy: '#003B5C',
          'navy-dark': '#002B44',
          'navy-light': '#004D73',
          orange: '#F58220',
          'orange-dark': '#D96E10',
          teal: '#00A9CE',
          gray: '#F0F2F5',
          'gray-dark': '#E2E6EA',
          text: '#333333',
          muted: '#5A6A7A',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px rgba(0, 59, 92, 0.08)',
        nav: '0 2px 8px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
