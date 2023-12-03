import Head from "next/head";

import type { AppProps } from "next/app";
import "sharing/styles/reset.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
