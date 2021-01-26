const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Heebo', ...defaultTheme.fontFamily.sans],
      },
      typography: theme => ({
        default: {
          css: {


          }
        },
      })
    },
  }
};
