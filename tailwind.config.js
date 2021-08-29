module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Waiting for the Sunrise"],
    },
    extend: {
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
