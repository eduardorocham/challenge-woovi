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
        "rectangle": "url('/images/Rectangle.png')"
      },
      colors: {
        "primary-greeen": "#03D69D",
        "primary-gray": "#E5E5E5",
        "secondary-gray": "#4D4D4D",
        "primary-blue": "#133A6F"
      },
      borderColor: {
        "gray-border": "#E5E5E5"
      },
      screens: {
        'sm': '449px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
};
export default config;
