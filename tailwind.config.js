const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/images/*.{js,jsx,ts,tsx}",
    "./src/images/svg/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/styles/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'atrati-gray': '#262C33'
      },
     }
  },
  plugins: [],
}