import type { AppProps } from 'next/app';
import Script from 'next/script';
import '@/styles/reset.css';
import '@/styles/globals.css';
import '@/public/fonts/pretendard/font.css';

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
      <Component {...pageProps} />
      <Script
        src='https://developers.kakao.com/sdk/js/kakao.js'
        onLoad={kakaoInit}
      />
    </>
  );
}
