/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'rose-25': '#fef7f7',
        'orange-25': '#fefaf7', 
        'purple-25': '#faf8ff',
        'blue-25': '#f7f9ff',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}