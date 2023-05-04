/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        outfit: '"Outfit", sans-serif',
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
