/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#1C1C1F",
        "primary_trans": "rgb(28 28 31 / 0.8)",
        "secondary": "#282830",
        "third":"#31313C",
        "primary_light": "#EBEEF1",
        "primary_l_trans":"rgb(255 255 255 / 0.8)",
        "secondary_light": "#8D8D8F",
        "third_light": "#FFFFFF",
        "text": "#9E9EB1",
        "text_dark" : "#B7B7C9",
        "text_darker" : "#7B7A8E",
        "text_drk": "#758592",
        "text_light":"rgb(57 57 64)",
        "pink": "#85417C",
        "pink_light": "#A7519C",
        "hover": "#29292D",
        "lol": "#5383E8",
        "lol_light": "rgb(83 131 232 / 50%)",
        "val": "#E84057",
        "val_light": "rgb(232 64 87 / 50%)",
        "tft": "#907659",
        "tft_light": "rgb(144 118 89 / 50%)",
        "inputColor": "#F0F0F0",
      }
    },
  },
  plugins: [],
}

