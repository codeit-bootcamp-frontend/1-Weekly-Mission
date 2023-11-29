import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Footer from "src/components/Footer";
import Nav from "src/components/Nav";
import { queryClient } from "src/libs/apis/queryClient";
import GlobalStyle from "src/styles/GlobalStyle";
import theme from "src/styles/Theme/theme";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
