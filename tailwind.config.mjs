/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily : {
      "poppins" : "var(--font-poppins)",
      "lufga" : "lufga",
      "inter" : "var(--font-inter)",
    },
    extend: {
      colors: {
        primary: "#D86113",
        secondary: "#A995FF",
        body: "#4D4D4D",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
