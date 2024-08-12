import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'base-white': '#FBFFFF',
        'base-black': '#1F2125',
        'accent-orange': '#FF8109',
        'accent-purple': '#948FA8',
        'accent-dark-purple': '#2C2732',
        'accent-blue': '#50AFFF',
        'accent-smoky-blue': '#91AECC',
        'accent-red': '#D95103',
        'accent-dark-green': '#354135',
      },
      fontFamily: {
        main: ['Senobi Gothic', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        numeric: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
