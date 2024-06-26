/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0077B6',
        secondary:'#00B4D8',
        accent:'#90E0EF',
        neutral:'#CAF0F8'
      },
      fontFamily:{
        Poppins:["Poppins","sans-serif"],
        PlayfairDisplay:["PlayfaiPlayfair+Display","sans-serif"],
        Archivo:["Archivo","sans-serif"]
      }
    },
  },
  plugins: [],
}