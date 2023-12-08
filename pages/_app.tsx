import type { AppProps } from "next/app";
import "@/styles/reset.css";
import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
