import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "414px",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      colors: {
        primary: "#448c6c",
        "primary-hover": "#3b7b5d",
      },
    },
  },
  plugins: [],
};
export default config;
