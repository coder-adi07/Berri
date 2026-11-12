/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        berri: {
          navy: '#0B1B3D',
          dark: '#081329',
          blue: '#134074',
          royal: '#1D4ED8',
          teal: '#00A896',
          cyan: '#028090',
          ice: '#EEF4F8',
          sand: '#F7F4EB',
          cream: '#FAF9F6'
        },
        flavor: {
          dragonfruit: '#FF2E93',
          tropical: '#FF5E3A',
          mango: '#FFAA00',
          strawberry: '#E63946',
          elderberry: '#7B2CBF',
          acai: '#5A189A',
          cherry: '#9D0208',
          fruitpunch: '#FF4757',
          wildberry: '#C71585',
          advanced: '#D90429'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'wave-slow': 'wave 12s ease-in-out infinite alternate',
        'float-gentle': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(-12px) scaleY(1.03)' },
          '100%': { transform: 'translateY(0) scaleY(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

