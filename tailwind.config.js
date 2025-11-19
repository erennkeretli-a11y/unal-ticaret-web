/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#004aad",
        brandRed: "#d7263d",
        brandWhite: "#f5f7fb",
        brandNavy: "#01224f",
      },
      boxShadow: {
        card: "0 12px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
