module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          800: '#1e3a8a',
          700: '#1e40af',
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}