import Footer from "@/components/layout/footer/Footer";
import Nav from "@/components/layout/nav/Nav";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isAuthPage, setIsAuthPage] = useState(false);
  useEffect(() => {
    if (router.pathname === "/signin" || router.pathname === "/signup") {
      setIsAuthPage(true);
    } else {
      setIsAuthPage(false);
    }
  }, [router.pathname]);
  return (
    <>
      {isAuthPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
