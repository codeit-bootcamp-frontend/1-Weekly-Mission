import type { Config } from 'tailwindcss';

const createPxrEntries = (size: number) => {
  return {
    0: '0',
    ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return { ...accumulator, [`${i}pxr`]: `${i * 0.1}rem` };
    }),
  };
};

const PXR_ENTRIES = createPxrEntries(100);

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      mobile: '360px',
      tablet: '768px',
      pc: '1200px',
    },
    spacing: PXR_ENTRIES,
    fontSize: PXR_ENTRIES,
    zIndex: {
      base: '1',
      nav: '2',
      popup: '999',
      floating: '1000',
    },
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
        light: 'var(--gray-light)',
      },
      'julge-black': 'var(--julge-black)',
      dark: '#222222',
      transparent: 'transparent',
    },
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeOut: 'fade 2s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
