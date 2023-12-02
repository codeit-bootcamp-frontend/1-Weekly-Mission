import type { AppProps } from 'next/app';
import { useRef } from 'react';
import FooterRefContext from '@contexts/FooterRefContext';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import Head from 'next/head';
import GlobalStyle from '@styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  const footerRef = useRef(null);

  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <GlobalStyle />
      <FooterRefContext.Provider value={footerRef}>
        <Nav />
        <Component {...pageProps} />
        <div ref={footerRef}>
          <Footer />
        </div>
      </FooterRefContext.Provider>
    </>
  );
}
