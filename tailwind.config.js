module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Julius Sans One"],
    },
    extend: {
      backgroundImage: theme => ({
        "hero-pattern": "url('/src/images/background.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
