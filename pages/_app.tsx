import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/index.css";
import type { AppProps } from "next/app";
import { AccountProvider } from "@/contexts/AccountContext";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AccountProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AccountProvider>
    </>
  );
}
