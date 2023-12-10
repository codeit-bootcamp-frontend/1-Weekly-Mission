// PC: 1200px 이상 Tablet: 768px 이상 ~ 1199px 이하 Mobile: 375px 이상 ~ 767px 이하
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import "/public/static/fonts/style.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Pretendard";
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        <title>Linkbrary</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
