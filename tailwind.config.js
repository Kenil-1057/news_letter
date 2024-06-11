/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*"
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl:'1320px',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xsm:'480px',
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1320px'
      },
    },
    extend: {
      colors:{
        'primary':'#1E1E1E',
        'secondary':'#5E5E5E',
        'tersary':'#65AEF2',
        'nav':'#262626',
        'booking':'#E9F3F6'
      },
      lineHeight: {
        '30': '30px',
      },
      borderRadius: {
        '18':'18px'
      },
      padding: {
        '18': '18px',
        '85':'85px',
      },
      borderRadius: {
        '42': '42px',
      }
    },
  },
  plugins: [],
}

