/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        monzo: `url('/src/images/Monzo.png')`,
        zoopla: `url('/src/images/Zoopla.png')`,
        google: `url('/src/images/Google.png')`,
        nike: `url('/src/images/Nike.png')`,
        amazon: `url('/src/images/Amazon.png')`,
      },
    },
  },
  plugins: [],
}
