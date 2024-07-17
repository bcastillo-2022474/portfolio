/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        "main-ultra-dark": "#15191e",
        "main-dark": "#191e24",
        main: "#1d232a",
      },
    },
  },
  plugins: [],
};
