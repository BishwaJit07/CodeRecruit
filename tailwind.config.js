/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#d8635d",
      
"secondary": "#38147f",
      
"accent": "#a1f4c1",
      
"neutral": "#1F282E",
      
"base-100": "#242F42",
      
"info": "#9DAEEC",
      
"success": "#3BE39D",
      
"warning": "#956B09",
      
"error": "#F73126",
      },
    },
  ],
  plugins: [require("daisyui")],
}

