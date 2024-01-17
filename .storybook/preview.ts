import type { Preview } from "@storybook/react";
// import { withThemeFromJSXProvider } from "@storybook/addon-themes";
// import GlobalStyles from "../styles/GlobalStyle";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // parameters 내 모든 컴포넌트에 공통적으로 적용할 툴바 조정하기
    backgrounds: {
      values: [
        {
          name: "blue",
          value: "blue",
        },
        {
          name: "pink",
          value: "pink",
        },
      ],
    },
  },
};

export default preview;

// export const decorators = [
//   withThemeFromJSXProvider({
//     GlobalStyles,
//   }),
// ];
