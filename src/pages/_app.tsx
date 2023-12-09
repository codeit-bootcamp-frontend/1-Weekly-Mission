import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '@styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
