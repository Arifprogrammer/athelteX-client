/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0f9b8d",

          secondary: "#a369ea",

          accent: "#f473cb",

          neutral: "#22272B",

          "base-100": "#F1F2F9",

          info: "#3B73E3",

          success: "#119C8A",

          warning: "#9D6510",

          error: "#F1736A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
