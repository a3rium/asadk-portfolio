/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      current: "currentColor",
      primary: "#abb2bf",
      secondary: "#c778dd",
      tertiary: "#282c33",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        type: {
          "0%": { width: 0 },
          "50%": { width: "13ch" },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "white" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        type: "type 3s steps(26) 2 alternate, blink 0.7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
