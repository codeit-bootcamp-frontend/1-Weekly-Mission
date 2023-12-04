import type { AppProps } from "next/app";
import Head from "next/head";
import "sharing/styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <meta property="og:title" content="Linkbrary" key="title" />
        <meta
          name="description"
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
          key="description"
        />
        <meta
          property="og:image"
          content="https://visitbusan.net/uploadImgs/files/cntnts/20211130150754165_wufrotr"
          key="image"
        />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
