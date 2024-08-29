/** @type {import('tailwindcss').Config} */
import {
  color,
  backgroundColor,
  backgroundImage,
  boxShadow,
  safelist,
  fontSize,
  fontFamily,
  borderColor,
  borderRadius,
  fill,
  screens,
} from "./src/themes";

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      colors: color,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      backgroundImage: backgroundImage,
      boxShadow: boxShadow,
      borderRadius: borderRadius,
      fontSize: fontSize,
      fontFamily: fontFamily,
      screens: screens,
      fill: fill,
    },
  },
  safelist: safelist,
}
