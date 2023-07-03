/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'pink-light': '#EADEFF',
        'violet-light': '#F3C4FF',
        'green-light': '#EDFDF5',
        'primary-light': '#005B3F',
        'violet-dark': '#211930',
        'purple-dark': '#4D2C53',
        'green-dark': '#0C3931',
        'primary-dark': '#00C9A4'
      },
      backgroundImage: {
        'home-light-mobile': 'url(\'assets/images/background/home-light-mobile.png\')',
        'home-dark-mobile': 'url(\'assets/images/background/home-dark-mobile.png\')',
        'home-light-desktop': 'url(\'assets/images/background/home-light-desktop.png\')',
        'home-dark-desktop': 'url(\'assets/images/background/home-dark-desktop.png\')'
      },
      fontFamily: {
        'Wix': 'Wix'
      }
    }
  },
  plugins: []
};

