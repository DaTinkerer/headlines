module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'fira': ['Fira Sans', 'sans-serif']
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightRed: "#F16A6A",
        darkBlue: "#282A36",
        lighterBlue: "#333543",
        gray: "#B9B9B9",
        darkerGray: "#737373",
        
      },
    },
  },
  plugins: [],
};
