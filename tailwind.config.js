export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffc001",
        secondary: "#ff9c1",
      },

      container: {
        center: "true",
        padding: {
          DEFAULT: "2rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
