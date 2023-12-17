import Footer from "@/components/layout/footer/Footer";
import Nav from "@/components/layout/nav/Nav";
import { AuthProvider } from "@/context/AuthProvider";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuthPage =
    router.pathname === "/signin" || router.pathname === "/signup";

  return (
    <AuthProvider>
      {isAuthPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </AuthProvider>
  );
}
