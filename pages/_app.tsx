import type { AppProps } from "next/app";
import GlobalStyle from "src/styles/GlobalStyle";
import theme from "src/styles/Theme/theme";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
