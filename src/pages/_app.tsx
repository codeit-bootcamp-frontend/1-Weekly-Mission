import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@/styles/reset.css";
import "@/styles/global.scss";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <Toaster />
          <Component {...pageProps} />
        </CookiesProvider>
      </QueryClientProvider>
    </>
  );
}
