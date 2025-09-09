/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "collection-1-button": "var(--collection-1-button)",
        "collection-1-dark": "var(--collection-1-dark)",
        "collection-1-dusk-steel": "var(--collection-1-dusk-steel)",
        "collection-1-light": "var(--collection-1-light)",
        "collection-1-light-medium": "var(--collection-1-light-medium)",
      },
    },
  },
  plugins: [],
};
