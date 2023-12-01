import type { AppProps } from 'next/app';
import { useRef } from 'react';
import FooterRefContext from '@contexts/FooterRefContext';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import GlobalStyle from '@styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  const footerRef = useRef(null);

  return (
    <FooterRefContext.Provider value={footerRef}>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
      <div ref={footerRef}>
        <Footer />
      </div>
    </FooterRefContext.Provider>
  );
}
