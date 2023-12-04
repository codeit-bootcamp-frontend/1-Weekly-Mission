import { Html, Head, Main, NextScript } from "next/document";
// 아래꺼는 왜 안되쥬
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ko">
      <script
        defer
        src="https://developers.kakao.com/sdk/js/kakao.min.js"
      ></script>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
