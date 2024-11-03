/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: { min: "300px", max: "640px" },
      },

      animation: {
        scroll: "scroll 40s linear infinite",

        slideLeft: "slideLeft 2s forwards", // New animation for sliding left
        slideRight: "slideRight 2s forwards", // New animation for sliding right
        returnLeft: "returnLeft 8s forwards", // New animation for returning left
        returnRight: "returnRight 8s forwards", // New animation for returning right
        fontmove: "fontmove 0.5s forwards",
        servicesLtoR: "servicesLtoR 2s forwards",
        servicesRtoL: "servicesRtoL 2s forwards",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 14))" },
        },

        slideLeft: {
          "0%": { transform: "translateX(0)", opacity: 0 },
          "100%": { transform: "translateX(-60%)", opacity: 0 }, // Move left
        },
        slideRight: {
          "0%": { transform: "translateX(0)", opacity: 0 },
          "100%": { transform: "translateX(60%)", opacity: 0 }, // Move right
        },
        returnLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0.5 }, // Start from moved left
          "100%": { transform: "translateX(0)", opacity: 1 }, // Return to original
        },
        returnRight: {
          "0%": { transform: "translateX(100%)", opacity: 0.5 }, // Start from moved right
          "100%": { transform: "translateX(0)", opacity: 1 }, // Return to original
        },

        fontmove: {
          "0%": { transform: "translateY(6%)", opacity: 0 },
          "50%": { transform: "translateY(-90%)", opacity: 0.5 },
          "100%": { transform: "translateY(-130%)", opacity: 1 },
        },
        servicesLtoR: {
          "0%": { transform: "translateX(130%)", opacity: 0.5 }, // Start from moved right
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        servicesRtoL: {
          "0%": { transform: "translateX(-130%)", opacity: 0.5 }, // Start from moved right
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
