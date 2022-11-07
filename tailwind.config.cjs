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
        /* phone: { min: "700px", max: "999px" },*/
        sm: { min: "1000px", max: "1239px" },
        md: { min: "1240px", max: "1919px" },
        /* lg: { min: "1400px", max: "1880px" },
        xl: { min: "1880px", max: "1920px" },*/
        "2xl": { min: "1920px", max: "2048px" },
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
