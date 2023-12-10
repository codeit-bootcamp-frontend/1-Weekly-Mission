import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/components/styled-component/GlobalStyledComponent';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <GlobalStyle />
      {!router.pathname.includes('sign') ? (
        <>
          <Nav />
          <Component {...pageProps} />
          <Footer />{' '}
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
