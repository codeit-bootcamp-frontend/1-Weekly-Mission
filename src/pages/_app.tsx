import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import "@/styles/reset.css";
import "@/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  const hasNav = ["/", "/folder", "/shared"];

  return (
    <>
      {hasNav.includes(route) && <Nav isSticky={route !== "/folder"} />}
      <Component {...pageProps} />
      {hasNav.includes(route) && <Footer />}
    </>
  );
}
