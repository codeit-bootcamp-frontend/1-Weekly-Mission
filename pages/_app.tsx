import type { AppProps } from "next/app";
import Header from "@/components/common/Header";
import { GlobalStyle } from "@/styles/globalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
