import { Html, Head, Main, NextScript } from "next/document";
import ReactModal from "react-modal";

export default function Document() {
  ReactModal.setAppElement("#react-modals");

  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="react-modals" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
