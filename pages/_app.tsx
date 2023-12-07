import "@/styles/reset.css";
import type { AppProps } from "next/app";
import { fontFace } from "next/font";

const Pretendard = fontFace({
  src: "url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css)",
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
