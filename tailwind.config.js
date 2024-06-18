/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#c5a7ac',
      },
      width:{
        23: '22%',
        22: '23%',
        35: '35%',
        65: '66.64%',
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

