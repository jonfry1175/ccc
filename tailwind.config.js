/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-main': '#334155', // Slate-700 color, you can adjust this
        'blue-primary': '#2563eb', // Blue-600 color, you can adjust this
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} 