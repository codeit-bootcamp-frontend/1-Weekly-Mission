import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet(); // 1)
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />), //2)
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

  return() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="icon" href="/Avatar.png" />
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
}
