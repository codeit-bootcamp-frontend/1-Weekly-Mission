import { DefaultTheme } from "styled-components";

const color = {
  white: "#ffffff",
  black: "#000000",
  background: "#f0f6ff",
  blueBackground: "#edf7ff",
  primary: "#6d6afe",
  gray: "#f5f5f5",
};

const fontWeight = {
  light: 300,
  normal: 500,
  semibold: 600,
  bold: 700,
};

export type ColorsTypes = typeof color;
export type FontWeightTypes = typeof fontWeight;

const theme: DefaultTheme = {
  color,
  fontWeight,
};

export default theme;
