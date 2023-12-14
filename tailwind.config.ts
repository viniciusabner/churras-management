import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      body: ['Raleway', 'sans-serif'],
      sans: ['Raleway', 'sans-serif'],
      heading: ['Raleway', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
      roboto: "'Roboto mono', sans-serif",
    },
  },
  plugins: [],
};
export default config;
