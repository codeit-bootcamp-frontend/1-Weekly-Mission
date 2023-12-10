import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";
import Footer from "src/components/Footer";
import Nav from "src/components/Nav";
import { AUTH_URL } from "src/constants/routes";
import { queryClient } from "src/libs/apis/queryClient";
import GlobalStyle from "src/styles/GlobalStyle";
import theme from "src/styles/Theme/theme";
import { ThemeProvider } from "styled-components";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {AUTH_URL.includes(router.pathname) ? "" : <Nav />}
        {getLayout(<Component {...pageProps} />)}
        {AUTH_URL.includes(router.pathname) ? "" : <Footer />}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
