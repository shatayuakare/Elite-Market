import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js, html}"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  darkMode: 'selector'
}

