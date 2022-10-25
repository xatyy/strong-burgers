/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    colors: {
      "burger-accent": "#B72515",
      "burger-sauce": "#F8F1C0",
      "burger-menu": "#FAE6D3",
    },
    extend: {
      height: {
        128: "32rem",
        160: "50rem",
      },
      fontFamily: {
        clash: ["Clash", "Display"],
      },
    },
    container: {
      center: true,
      padding: "1rem",
      /*screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },*/
    },
  },
  plugins: [],
};
