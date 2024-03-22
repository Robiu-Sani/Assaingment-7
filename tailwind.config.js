/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     'node_modules/daisyui/dist/**/*.js',
//     'node_modules/react-daisyui/dist/**/*.js',
//   ],
//   plugins: [require('daisyui')],
// }