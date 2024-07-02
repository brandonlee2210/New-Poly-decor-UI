/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brown-strong": "#4B1D09",
        "brown-light": "#DDB671",
        "yellow-main": "#FCB813",
      },
    },
  },
  plugins: [],
};
