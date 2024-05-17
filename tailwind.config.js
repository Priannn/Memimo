/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primarryellow: "#FFDD87",
        biru: "#00215E",
        gradient1: "#006CD1",
        gradient2: "#8A8A8A",
      },
      fontFamily: {
        core: ["Coiny", "system-ui"],
      }
    },
  },
  plugins: [],
};
