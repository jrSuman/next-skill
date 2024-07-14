/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
    container: {
      padding: {
        DEFAULT: '1rem',
        // sm: '1rem',
        // lg: '1rem',
        xl: '2rem',
        // '2xl': '4rem',
      },
    },
  },
  plugins: [],
}

