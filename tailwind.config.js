const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E9C548",
        background: "#1E1E1E",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        // mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [nextui()],
};
