import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Nav, Footer } from "@/components/common";
import { AuthProvider } from "@/contexts/AuthProvider";
import "@/styles/reset.css";
import "@/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  const hasNav = ["/", "/folder", "/shared"];

  return (
    <>
      <AuthProvider>
        {hasNav.includes(route) && <Nav isSticky={route !== "/folder"} />}
        <Component {...pageProps} />
        {hasNav.includes(route) && <Footer />}
      </AuthProvider>
    </>
  );
}
