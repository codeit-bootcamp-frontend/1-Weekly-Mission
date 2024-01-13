import { GlobalStyle } from "@/styles/global-styles";
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Linkbrary" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://www.chaeg.co.kr/chaegBravo/wp-content/uploads/2017/05/June2017_SpecialReport_04.jpg" />
        <meta property="og:image:alt" content="클릭하면 사이트로 연결됩니다" />
        <meta property="og:url" content="www.onlyone-library-in-world.com" />
        <meta property="og:description" content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요" />
      </Head>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </HydrationBoundary>
      </QueryClientProvider>
      <div id="modal" />
    </>
  );
}
