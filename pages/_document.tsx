import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta
          property="og:image"
          content="https://i.postimg.cc/pLgbQxSd/main-img.png"
        />
        <meta property="og:site_name" content="Linkbrary" />
        <meta property="og:title" content="Linkbrary" />
        <meta
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta
          property="og:url"
          content="https://hayden-linkbrary.vercel.app/"
        />
        <meta property="og:locale" content="kr_KR" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="768" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Linkbrary" />
        <meta
          name="twitter:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/pLgbQxSd/main-img.png"
        />
        <meta
          name="twitter:domain"
          content="https://hayden-linkbrary.vercel.app/"
        />
        <meta name="twitter:site" content="@HaydenDevK" />
        <meta name="twitter:creator" content="@HaydenDevK" />
      </Head>
      <body>
        <div id="root"></div>
        <div id="modal-root"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
