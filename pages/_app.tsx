import type { AppProps } from "next/app";
import Header from "@/components/common/Header";
import { GlobalStyle } from "@/styles/globalStyle";
import Footer from "@/components/common/Footer";
import { RecoilRoot } from "recoil";
import Script from "next/script";
import styled from "styled-components";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const kakaoInit = () => {
    if (!window.Kakao.isInitialized())
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO);
  };

  return (
    <RecoilRoot>
      <GlobalStyle />
      <Root>
        <Header />
        <Component {...pageProps} />
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          onLoad={kakaoInit}
        />
        <Footer />
      </Root>
    </RecoilRoot>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;
