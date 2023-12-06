import type { Config } from 'tailwindcss';

const createPxrEntries = (size: number) => {
  return {
    ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return { ...accumulator, [`${i}pxr`]: `${i * 0.0625}rem` };
    }),
  };
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      mobile: '360px',
      tablet: '768px',
      pc: '1200px',
    },
    spacing: { ...createPxrEntries(100) },
    colors: {
      primary: 'var(--primary)',
      background: 'var(--background)',
      red: 'var(--red)',
      white: 'var(--white)',
      gray: {
        10: 'var(--gray-10)',
        20: 'var(--gray-20)',
        60: 'var(--gray-60)',
        100: 'var(--gray-100)',
      },
      'julge-black': 'var(--julge-black)',
      dark: '#222222',
    },
    zIndex: {
      base: '1',
      nav: '2',
      floating: '1000',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
