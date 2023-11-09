import colors from "tailwindcss/colors";

/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", 'html[class~="dark"]'],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      "blaze-orange": {
        50: "#fff8ec",
        100: "#fff0d3",
        200: "#ffdca5",
        300: "#ffc26d",
        400: "#ff9d32",
        500: "#ff7f0a",
        600: "#ff6600",
        700: "#cc4902",
        800: "#a1390b",
        900: "#82310c",
        950: "#461604",
      },
      "blue-ribbon": {
        50: "#edf8ff",
        100: "#d6eeff",
        200: "#b5e2ff",
        300: "#83d2ff",
        400: "#48b8ff",
        500: "#1e95ff",
        600: "#0674ff",
        700: "#0060ff",
        800: "#084ac5",
        900: "#0d429b",
        950: "#0e295d",
      },
    },
    extend: {},
  },
};

export default config;
