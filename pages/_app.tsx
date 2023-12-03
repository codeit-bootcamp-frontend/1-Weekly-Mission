import GlobalStyle from '@/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import Script from 'next/script';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const kakaoInit = () => {
    if (!window.Kakao.isInitialized())
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  };

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Script
        src='https://developers.kakao.com/sdk/js/kakao.js'
        onLoad={kakaoInit}
      />
    </>
  );
}
