import Footer from "@/components/layout/footer/Footer";
import Nav from "@/components/layout/nav/Nav";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "@/styles/global.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
