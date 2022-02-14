// eslint-disable-next-line no-unused-vars
const colors = require('tailwindcss/colors') 
module.exports = { 
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}", 
  ], 
  theme: { 
    extend: { 
      colors:{ 
        primary: "#23252b",
        secondary: "#141519", 
        gray: { 
          900: '#111213', 
          800: '#1d1e20', 
          700: '#2f3237', 
          600: '#5e636e', 
          500: '#8f96a3',
          400: '#c2c9d6', 
          300: '#dee3ed', 
          200: '#f1f3f9', 
          100: '#f8f9fc', 
        }, 
      }, 
    }, 
  }, 
  plugins: [ 
  ], 
}