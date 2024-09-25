/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,tsx}"],
    theme: {
      extend: {
        screens: {
          '2md': '992px',
        },
      },
    },
    plugins: [],
  }