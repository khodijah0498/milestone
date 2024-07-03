/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B321CA",
        secondary: "#961FA8",
        background: "#E7F3FE",
        green: "#74E14A",
        
      },
      fontSize: {
        md: "20px",
        small: "16px",
      },
      padding: {
        mid: "90px",
        tip: "24px",
      },
    },
  },
  plugins: [],
};
