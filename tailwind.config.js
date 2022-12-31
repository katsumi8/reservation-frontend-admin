/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        15: "repeat(15, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        15: "repeat(15, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
