module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(345, 95%, 68%)",
        grayishBlue: "hsl(237, 18%, 59%)",
        darkDeBlue: "hsl(236, 21%, 26%)",
        veryDarkBlue: "hsl(235, 16%, 14%)",
        blackishBlue: "hsl(234, 17%, 12%)",
        purple: "hsl(251, 18%, 14%)",
      },
      fontFamily: {
        sans: ["Red Hat Text", "sans-serif"],
      },
      animation: {
        fold: "fold 1s infinite",
        unfold: "unfold 1s infinite",
      },
      keyframes: {
        fold: {
          "0%": {
            transform: "rotateX(0deg)",
          },
          // "50%":{
          //   transform: 'rotateX(-60deg)',
          // },
          "100%": {
            transform: "rotateX(-180deg)",
          },
        },
        unfold: {
          "0%": {
            transform: "rotateX(180deg)",
          },
          // "50%":{
          //   transform: 'rotateX(120deg)',
          // },
          "100%": {
            transform: "rotateX(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
