module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // https://tailwindcss.com/docs/aspect-ratio#using-custom-values
      aspectRatio: {
        '2/3': '2 / 3',
        '4/5': '4 / 5',
        '5/7': '5 / 7',
        '4/3': '4 / 3',
        '7/5': '7 / 5'
      }
    }
  },
  plugins: []
}
