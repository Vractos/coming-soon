module.exports = {
  content: [
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/images/*.{js,jsx,ts,tsx}",
    "./src/images/svg/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/styles/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter'],
    },
    extend: {
      colors: {
        'atrati-gray': '#262C33'
      },
     }
  },
  plugins: [],
}