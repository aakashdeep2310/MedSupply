/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#0F9D58",  // Green
          secondary: "#FFFFFF", // White
          dark: "#000000", // Black
          grayish: "#333333", // Related shade
        },
      },
    },
    plugins: [],
  };
  