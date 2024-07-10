import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "small-space": "calc(100% - 16px)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-greeen": "#03D69D",
        "primary-gray": "#E5E5E5",
        "secondary-gray": "#4D4D4D",
        "primary-blue": "#133A6F"
      },
      borderColor: {
        "gray-border": "#E5E5E5"
      }
    },
  },
  plugins: [],
};
export default config;
