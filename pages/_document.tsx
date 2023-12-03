import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
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


        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
