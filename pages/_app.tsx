import Footer from "@/components/layout/footer/Footer";
import Nav from "@/components/layout/nav/Nav";
import { AuthProvider } from "@/context/AuthProvider";
import "@/styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuthPage =
    router.pathname === "/signin" || router.pathname === "/signup";

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {isAuthPage ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Nav />
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
            <Footer />
          </>
        )}
      </AuthProvider>
    </QueryClientProvider>
  );
}
