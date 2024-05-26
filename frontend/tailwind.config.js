module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blockbg: '#685484',
        blockbg2: '#8854bc',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
