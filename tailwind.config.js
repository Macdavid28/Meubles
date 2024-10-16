/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "540px",
        // => @media (min-width: 360px) { ... }
        sm: "712px",
        // => @media (min-width: 712px) { ... }
        360: "360px",
        // => @media (min-width: 360px) { ... }
        375: "375px",
        // => @media (min-width: 375px) { ... }
        320: "320px",
        // => @media (min-width: 320px) { ... }
        390: "390px",
        // => @media (min-width: 390px) { ... }
        400: "400px",
        // => @media (min-width: 400px) { ... }
        912: "912px",
        // => @media (min-width: 912px) { ... }
      },
      fontFamily: {
        cinzel: "Cinzel Decorative",
        quicksand: "Quicksand",
      },
    },
    backgroundImage: {
      linear: "linear-gradient(to bottom, #D1D5DB 50%, #ffffff 50%)",
      secondLinear: "linear-gradient(to left, #b0b0b0 40%, #fff 40%)",
      addLinear: "linear-gradient(to top, #b0b0b0 40%, #fff 40%)",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-ribbon": {
          clipPath: "polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)",
        },
      });
    },
  ],
};
