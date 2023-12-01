import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components"; // 0)

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet(); // 1)
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />), //2)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()], // 2)
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="Linkbrary" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="http://www.chaeg.co.kr/chaegBravo/wp-content/uploads/2017/05/June2017_SpecialReport_04.jpg" />
          <meta property="og:image:alt" content="클릭하면 사이트로 연결됩니다" />
          <meta property="og:url" content="www.onlyone-library-in-world.com" />
          <meta property="og:description" content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요" />
          <link
            rel="stylesheet"
            as="style"
            crossOrigin=""
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
