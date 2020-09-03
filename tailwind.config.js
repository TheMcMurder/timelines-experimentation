module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './public/index.html',
    './src/**/*.js'
  ],
  theme: {
    fontFamily: {
      header: ['Open Sans', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
