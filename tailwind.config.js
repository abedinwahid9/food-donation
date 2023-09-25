/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryColor: "#FF444A",
      secondaryTextColor: "#0B0B0BB2",
    },
  },
  plugins: [require("daisyui")],
};
