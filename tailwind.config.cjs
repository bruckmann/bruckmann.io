/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#292929",
        "dark-grey": "#4D4D4D",
        "light-grey": "#808080",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
