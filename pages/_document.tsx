import KaKao from "@/components/socialshare/KaKao";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <script
        defer
        src="https://developers.kakao.com/sdk/js/kakao.min.js"
        onLoad={KaKao}
      ></script>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
