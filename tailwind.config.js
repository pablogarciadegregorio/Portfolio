/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gr adient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontSize: {
        'type':'1.700rem', 
      },

      borderRadius:{
        'circleImage':'56% 44% 48% 52% / 40% 41% 59% 60%',
        'aboutImage': '56% 44% 50% 50% / 42% 46% 54% 58% ',
      },
      backgroundImage:{
        'gradienteFondo':'radial-gradient(circle, rgba(39,21,77,1) 0%, rgba(16,8,29,1) 65%)',
        'gradienteNavbar':'radial-gradient(circle, rgba(29,15,58,1) 0%, rgba(16,8,29,1) 65%)',
        'gradienteBoton': 'linear-gradient(90deg, rgba(180,125,242,1) 0%, rgba(102,65,211,1) 90%)',
        'gradienteBotonHover': 'linear-gradient(270deg, rgba(144,111,241,1) 0%, rgba(202,169,240,1) 83%)',
        'gradienteModal': 'linear-gradient(90deg, rgba(86,64,111,1) 0%, rgba(24,21,54,1) 83%)',
      },

      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },

      animation: {
        border: 'border 4s ease infinite',
      },

      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      }

    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      background1:'#121212',
      footer:'rgba(29,15,58,1)',
      modal:'rgba(75,54,136,0.8)',
      modalHiglight:'rgba(180,125,242,1)',

      
    },
    
  },
  plugins: [

    require('tailwind-scrollbar-hide')
  ],
}
