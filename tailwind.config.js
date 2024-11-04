import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "default-color": "#9538E2",
      "default-hover": "#cb8bff",
    },
    extend: {},
  },
  plugins: [daisyui],
};
