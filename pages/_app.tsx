import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Footer from "src/components/Footer";
import Nav from "src/components/Nav";
import { AUTH_URL } from "src/constants/url";
import { queryClient } from "src/libs/apis/queryClient";
import GlobalStyle from "src/styles/GlobalStyle";
import theme from "src/styles/Theme/theme";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {AUTH_URL.includes(router.pathname) ? "" : <Nav />}
        <Component {...pageProps} />
        {AUTH_URL.includes(router.pathname) ? "" : <Footer />}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
