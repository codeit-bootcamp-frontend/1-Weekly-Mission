const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      pre: ['Pretendard'],
    },
    colors: {
      primary: '#6D6AFE',
      red: '#FF5B56',
      black: '#111322',
      white: '#FFFFFF',
      bg: '#F0F6FF',
      gray10: '#E7EFFB',
      gray20: '#CCD5E3',
      gray60: '#9FA6B2',
      gray100: '#3E3E43',
    },
    screens: {
      tb: '768px',
      dt: '1200px',
    },
    extend: {},
  },
  plugins: [],
};
