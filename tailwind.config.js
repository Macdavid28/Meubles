/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      darkMode: "class",

      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
    },
    fontFamily: {
      cinzel: "Cinzel Decorative",
      quicksand: "Quicksand",
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      screens: {
        xs: "540px",
        // => @media (min-width: 360px) { ... }
        sm: "712px",
        // => @media (min-width: 712px) { ... }
        md: "769px",
        // => @media (min-width: 769px) { ... }
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
        768: "768px",
        // => @media (min-width: 768px) { ... }
        // => @media (min-width: 400px) { ... }
        884: "884px",
        // => @media (min-width: 768px) { ... }
        912: "912px",
        // => @media (min-width: 912px) { ... }
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
