import "@/styles/reset.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const Pretendard = localFont({
  src: "../public/font/PretendardVariable.woff2",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={Pretendard.className}>
      <Component {...pageProps} />
    </main>
  );
}
