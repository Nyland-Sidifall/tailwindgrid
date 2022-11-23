/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem",
        "11xl": "9rem",
        "12xl": "10rem",
      },
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
