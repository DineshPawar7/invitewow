export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7D29', // Mango clr
        secondary: '#ffdec9', // Blanched mango clr
        hover: '#cc5304', // hover/ 
        background: '#7B4019', // brown clr
        textPrimary: '#ffffff', // not used
        textSecondary: '#6B7280', // not used
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
