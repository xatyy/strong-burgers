/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    colors: {
      "burger-accent": "#B72515",
      "burger-sauce": "#F8F1C0",
      "burger-menu": "#FAE6D3",
      "burger-about": "#F9C071",
      "burger-burnt": "#212121",
    },
    extend: {
      height: {
        128: "32rem",
        160: "50rem",
      },
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
      },
      screens: {
        phone: "700px",
        sm: "1000px",
        md: "1240px",
        lg: "1400px",
        xl: "1880px",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
