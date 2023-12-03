import type { AppProps } from 'next/app';
import GlobalStyle from '@/styles/GlobalStyle';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyle>
      <Nav userProfile />
      <Component {...pageProps} />
      <Footer />
    </GlobalStyle>
  );
}
