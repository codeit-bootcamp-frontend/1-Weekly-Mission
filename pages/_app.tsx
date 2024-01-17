import Head from "next/head";
import type { AppProps } from "next/app";

import { ObserverProvider } from "@/contexts/ObserverContext";
import { UserProvider } from "@/contexts/UserContext";

import useLoading from "@/hooks/useLoading";

import "@/assets/styles/colors.css";
import "@/assets/styles/reset.css";
import "@/assets/styles/loadingSpinner.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const isLoading = useLoading();
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
    <>
      <Head>
        <title>LinkBrary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Linkbrary" key="title" />
        <meta
          name="description"
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
          key="description"
        />
        <meta
          property="og:image"
          content="https://visitbusan.net/uploadImgs/files/cntnts/20211130150754165_wufrotr"
          key="image"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@linkbrary" />
        <meta name="twitter:title" content="Linkbrary" />
        <meta
          name="twitter:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta
          name="twitter:image"
          content="https://visitbusan.net/uploadImgs/files/cntnts/20211130150754165_wufrotr"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <UserProvider>
            <ObserverProvider>
              {isLoading && (
                <div className="loading">
                  <div className="spinner"></div>
                </div>
              )}
              <Component {...pageProps} />
              <ReactQueryDevtools />
            </ObserverProvider>
          </UserProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
