import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/global-styles";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
