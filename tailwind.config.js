module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {  // To have custom breakpoints
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: { // To have custom colors
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily: { // To have custom font (Google)
        sans: ['Rubik', 'sans-serif'],
      },
      backgroundImage: () => ({ // To add a custom class for the bg image in the Download Boxes Section
        dots: "url('../images/bg-dots.svg')",
      }),
    },
  },
  plugins: [],
}
