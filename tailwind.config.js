/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tomorrow: ["Tomorrow", "sans-serif"],
      },
      colors: {
        space: {
          100: "#ECF0FF",
          200: "#737BAE",
          300: "#5A5F7D",
          400: "#1B1F34",
          500: "#14172B",
        },
        profit: "#00FFA3",
        loss: "#FF4D4D",
      },
    },
  },
  plugins: [],
};
