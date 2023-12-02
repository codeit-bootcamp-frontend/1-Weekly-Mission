import type { AppProps } from "next/app";
import Header from "@/components/common/Header";
import { GlobalStyle } from "@/styles/globalStyle";
import Footer from "@/components/common/Footer";
import { RecoilRoot } from "recoil";
import Script from "next/script";
import styled from "styled-components";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { pathname } = router;

  return (
    <RecoilRoot>
      <GlobalStyle />
      <Root>
        {pathname !== "/signin" && pathname !== "/signup" && <Header />}

        <Component {...pageProps} />
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          onLoad={kakaoInit}
        />

        {pathname !== "/signin" && pathname !== "/signup" && <Footer />}
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
