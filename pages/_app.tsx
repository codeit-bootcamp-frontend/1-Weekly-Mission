import type { AppProps } from "next/app";
import Header from "@/components/common/Header";
import { GlobalStyle } from "@/styles/globalStyle";
import Footer from "@/components/common/Footer";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import { useRouter } from "next/router";
import { QueryClient } from "@tanstack/react-query";
import ReactQueryProviders from "@/lib/reactQueryProvider";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <RecoilRoot>
      <ReactQueryProviders>
        <GlobalStyle />
        <Root>
          {pathname !== "/signin" && pathname !== "/signup" && <Header />}

          <Component {...pageProps} />

          {pathname !== "/signin" && pathname !== "/signup" && <Footer />}
        </Root>
      </ReactQueryProviders>
    </RecoilRoot>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;
