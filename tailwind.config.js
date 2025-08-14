module.exports = {
  prefix: 'twcss-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1660px',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
      colors: {
        bgGray: '#f5f5f5',
        primaryGreen: '#416a38',
        primaryGreenDark: '#294634',
        highlightGreen: '#d9e8d9',
        pigGreen: '#b2cc36',
      },
    },
  },
  plugins: [],
};
