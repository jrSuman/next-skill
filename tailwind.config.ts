import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: '#ebedf9',
          100: '#c4caed',
          200: '#9da7e2',
          300: '#7584d6',
          400: '#4e61ca',
          500: '#3548b1',
          600: '#29388a',
          700: '#1d2862',
          800: '#12183b',
          900: '#060814'
        }
      },
    },
  },
  plugins: [],
};
export default config;
