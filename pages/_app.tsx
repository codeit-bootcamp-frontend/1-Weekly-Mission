import type { AppProps } from "next/app";
import { useState, useEffect, useRef, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { Nav, Footer } from "@/components";
import GlobalStyle from "@/styles/global-style";
import theme from "@/styles/display";

export const footerContext = createContext<any>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Nav />
          <footerContext.Provider value={footerRef}>
            <Component {...pageProps} />
          </footerContext.Provider>
          <Footer ref={footerRef} />
        </ThemeProvider>
      )}
    </>
  );
}
