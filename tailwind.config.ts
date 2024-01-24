import type { Config } from "tailwindcss";

const createPxEntries = (size: number) => {
  return {
    0: "0",
    ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return { ...accumulator, [`${i}`]: `${i / 10}rem` };
    }),
  };
};

const PX_ENTRIES = createPxEntries(500);

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      mobile: "360px",
      tablet: "768px",
      pc: "1200px",
    },
    zIndex: {
      base: "1",
      nav: "2",
      popup: "999",
      floating: "1000",
    },
    colors: {
      transparent: "transparent",
      primary: {
        DEFAULT: "rgb(var(--primary) / <alpha-value>)",
        light: "rgb(var(--primary-light) / <alpha-value>)",
      },
      blue: "rgb(var(--blue) / <alpha-value>)",
      red: "rgb(var(--red) / <alpha-value>)",
      black: "rgb(var(--black) / <alpha-value>)",
      white: "rgb(var(--white) / <alpha-value>)",
      gray: {
        10: "rgb(var(--gray-10) / <alpha-value>)",
        20: "rgb(var(--gray-20) / <alpha-value>)",
        60: "rgb(var(--gray-60) / <alpha-value>)",
        100: "rgb(var(--gray-100) / <alpha-value>)",
      },
    },
    fontFamily: {
      sans: ["Pretendard", "Arial"],
    },
    fontSize: {
      12: "1.2rem",
      14: "1.4rem",
      16: "1.6rem",
      18: "1.8rem",
      24: "2.4rem",
      32: "3.2rem",
      40: "4rem",
      64: "6.4rem",
    },
    fontWeight: {
      400: "400",
      500: "500",
      600: "600",
      700: "700",
    },
    borderRadius: {
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      full: "9999px",
    },
    spacing: PX_ENTRIES,
    boxShadow: {
      md: "0 0.5rem 2.5rem 0 rgba(0,0,0,0.08)",
    },
  },

  plugins: [],
};
export default config;
