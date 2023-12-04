import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/components/styled-component/GlobalStyledComponent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
