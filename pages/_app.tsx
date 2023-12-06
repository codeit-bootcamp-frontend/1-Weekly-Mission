import "@/styles/reset.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

export const Pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={Pretendard.className}>
      <Component {...pageProps} />
    </main>
  );
}
