/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      wide: '.1em',
      widest: '.3em',
    },
    extend: {
      colors: {
        'cream': '#c5a7ac',
      },
      width:{
        23: '22%',
        22: '23%',
        35: '35%',
        65: '66.2%',
        45: '45%',
        612: '635px'


      },
      height:{
        90: '24rem',
        100: '30rem',
        1: '1px',
        357: '357px'
      },
      padding:{
        'cus': '10px',
        'five': "5px"
        
      },
      

    },
  },
  plugins: [],
}

