import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '@/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <meta name="description" content="나만의 Link 도서관 | 세상의 모든 정보를 쉽게 저장하고 관리해 보세요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/free-icon-kitty.png" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
