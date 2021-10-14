module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
      },
      colors: {
        "gray-dark": "#29292a",
        "red-block": "#DA3B01",
        "red-dark": "#731f01",
      },
      fontFamily: {
        custom: ["Waiting for the Sunrise"],
      },
      backgroundImage: theme => ({
        "hero-pattern": "url('/src/images/background.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      scale: ["active", "hover"],
      gradientColorStops: ["active", "hover"],
      backgroundClip: ["hover", "focus"],
    },
  },
  plugins: [],
}
