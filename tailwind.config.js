module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    }

  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: { min: '300px', max: '1300px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        lg: { min: "1301px" }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
