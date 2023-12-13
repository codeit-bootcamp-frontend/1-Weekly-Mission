import Footer from "@/components/layout/footer/Footer";
import Nav from "@/components/layout/nav/Nav";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuthPage =
    router.pathname === "/signin" || router.pathname === "/signup";

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
