// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        rotateSlow: "rotateSlow 20s linear infinite",
        rotateReverse: "rotateReverse 30s linear infinite",
        sway: "sway 6s ease-in-out infinite",
        swayReverse: "swayReverse 8s ease-in-out infinite",
      },
      keyframes: {
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotateReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        sway: {
          "0%, 100%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
        },
        swayReverse: {
          "0%, 100%": { transform: "translateX(10px)" },
          "50%": { transform: "translateX(-10px)" },
        },
      },
    },
  },
};
