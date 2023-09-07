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
      fontFamily: {
        mono: ["Share Tech Mono"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        type_5: {
          "0%": { width: 0 },
          "100%": { width: "6ch" },
        },
        type_6: {
          "0%": { width: 0 },
          "100%": { width: "7ch" },
        },
        type_7: {
          "0%": { width: 0 },
          "100%": { width: "8ch" },
        },
        type_8: {
          "0%": { width: 0 },
          "100%": { width: "9ch" },
        },
        type_9: {
          "0%": { width: 0 },
          "100%": { width: "10ch" },
        },
        type_10: {
          "0%": { width: 0 },
          "100%": { width: "11ch" },
        },
        type_11: {
          "0%": { width: 0 },
          "100%": { width: "12ch" },
        },
        type_12: {
          "0%": { width: 0 },
          "100%": { width: "13ch" },
        },
        type_13: {
          "0%": { width: 0 },
          "100%": { width: "14ch" },
        },
        type_14: {
          "0%": { width: 0 },
          "100%": { width: "15ch" },
        },
        type_15: {
          "0%": { width: 0 },
          "100%": { width: "16ch" },
        },
        type_16: {
          "0%": { width: 0 },
          "100%": { width: "17ch" },
        },
        type_17: {
          "0%": { width: 0 },
          "100%": { width: "18ch" },
        },
        type_18: {
          "0%": { width: 0 },
          "100%": { width: "19ch" },
        },
        type_19: {
          "0%": { width: 0 },
          "100%": { width: "20ch" },
        },
        type_20: {
          "0%": { width: 0 },
          "100%": { width: "21ch" },
        },
        type_21: {
          "0%": { width: 0 },
          "100%": { width: "22ch" },
        },
        type_22: {
          "0%": { width: 0 },
          "100%": { width: "23ch" },
        },
        type_23: {
          "0%": { width: 0 },
          "100%": { width: "24ch" },
        },
        type_24: {
          "0%": { width: 0 },
          "100%": { width: "25ch" },
        },
        type_25: {
          "0%": { width: 0 },
          "100%": { width: "26ch" },
        },
        type_26: {
          "0%": { width: 0 },
          "100%": { width: "27ch" },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "secondary" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        type_5: "type_5 1s steps(10) 2 alternate, blink 0.7s infinite",
        type_6: "type_6 1.2s steps(12) 2 alternate, blink 0.7s infinite",
        type_7: "type_7 1.4s steps(14) 2 alternate, blink 0.7s infinite",
        type_8: "type_8 1.6s steps(16) 2 alternate, blink 0.7s infinite",
        type_9: "type_9 1.8s steps(18) 2 alternate, blink 0.7s infinite",
        type_10: "type_10 2s steps(20) 2 alternate, blink 0.7s infinite",
        type_11: "type_11 2.2s steps(22) 2 alternate, blink 0.7s infinite",
        type_12: "type_12 2.4s steps(24) 2 alternate, blink 0.7s infinite",
        type_13: "type_13 2.6s steps(26) 2 alternate, blink 0.7s infinite",
        type_14: "type_14 2.8s steps(28) 2 alternate, blink 0.7s infinite",
        type_15: "type_15 3s steps(30) 2 alternate, blink 0.7s infinite",
        type_16: "type_16 3.2s steps(32) 2 alternate, blink 0.7s infinite",
        type_17: "type_17 3.4s steps(34) 2 alternate, blink 0.7s infinite",
        type_18: "type_18 3.6s steps(36) 2 alternate, blink 0.7s infinite",
        type_19: "type_19 3.8s steps(38) 2 alternate, blink 0.7s infinite",
        type_20: "type_20 4s steps(40) 2 alternate, blink 0.7s infinite",
        type_21: "type_21 4.2s steps(42) 2 alternate, blink 0.7s infinite",
        type_22: "type_22 4.4s steps(44) 2 alternate, blink 0.7s infinite",
        type_23: "type_23 4.6s steps(46) 2 alternate, blink 0.7s infinite",
        type_24: "type_24 4.8s steps(48) 2 alternate, blink 0.7s infinite",
        type_25: "type_25 5s steps(50) 2 alternate, blink 0.7s infinite",
        type_26: "type_26 5.2s steps(52) 2 alternate, blink 0.7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
