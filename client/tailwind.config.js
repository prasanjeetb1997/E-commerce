/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img': "url('/src/assets/banner.png')",
        'button-img': "url('/src/assets/button.png')",
        'banner2-img': "url('/src/assets/b2.jpg')",
        'banner3-1-img': "url('/src/assets/b17.jpg')",
        'banner3-2-img': "url('/src/assets/b10.jpg')",
        'banner4-1-img': "url('/src/assets/b7.jpg')",
        'banner4-2-img': "url('/src/assets/b4.jpg')",
        'banner4-3-img': "url('/src/assets/b18.jpg')",
        'newsletter-img': "url('/src/assets/b14.png')",
        'banner5-img': "url('/src/assets/b1.jpg')",
      }
    },
    screens: {
      'tablet': { 'max': '899px' },

      'mobile': { 'max': '499px' },
    }
  },
  plugins: [],
}

