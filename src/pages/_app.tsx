import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

import "@/styles/reset.css";
import "@/styles/global.scss";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  const hasNav = ["/", "/folder", "/shared"];
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <Toaster />
          {hasNav.includes(route) && <Nav isSticky={route !== "/folder"} />}
          <Component {...pageProps} />
          {hasNav.includes(route) && <Footer />}
        </CookiesProvider>
      </QueryClientProvider>
    </>
  );
}
