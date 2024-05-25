/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      dark: "rgb(9, 9, 9)",
      light: "rgb(255, 255, 255)",
      borderLight: "rgb(216, 219, 222)",
      borderDark: "rgb(36, 36, 36)",
    },
    extend: {
      backgroundImage: {
                distortion: "url(/distortion.png)",
              },
    },
  },
  plugins: [],
};

