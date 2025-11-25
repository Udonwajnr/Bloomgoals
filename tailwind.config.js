/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F0F0F",
          light: "#F4F4F4",
          blue: "#235C7D",
          gray: "#4A4A4A",
        },
      },
      fontFamily: {
        serif: ["Judson", "serif"],
        sans: ["Karla", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to bottom, rgba(15, 15, 15, 0.7), rgba(15, 15, 15, 0.6)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
}