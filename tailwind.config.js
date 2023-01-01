/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primaryColor: '#DA9F5B',
        secondaryColor: '#33211D',
        backgroundColor: '#fffcf4',
        paragraph: '#555555',
      },
      container:{
        center: true,
      },
      fontFamily:{
        montserrat: 'Montserrat',
      }
    },
  },
  plugins: [],
}