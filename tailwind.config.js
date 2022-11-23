/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        skip: {
          "0% , 100%": {
            transform: "translateY(-2.5%)",
          },
          "50%": { transform: "translateY(0)" },
        },
        light_pulse: {},
      },
      animation: {
        skip: "skip 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
