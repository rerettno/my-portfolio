/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#286ACD", // 💙 Biru utama
        soft: "#A3E4DB", // 💚 Tosca lembut
        blush: "#FED1E1", // 💖 Pink muda
      },
    },
  },
  plugins: [],
};
