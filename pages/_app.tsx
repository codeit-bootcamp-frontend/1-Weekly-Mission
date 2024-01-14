import Footer from "@/components/footer/Footer";
import GlobalNav from "@/components/globalNav/GlobalNav";
import GlobalStyle from "@/layouts/GlobalStyle";
import * as S from "@/layouts/globalLayout/GlobalLayout.style";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
const queryClient = new QueryClient();
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const noLayoutPages = ["/user/signup", "/user/signin"];
  const useLayout = !noLayoutPages.includes(router.pathname);

  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Linkbrary" />
        <meta name="description" content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://a1b2c3d4zzzzzznextts.vercel.app" />
        <meta property="og:title" content="Linkbrary" />
        <meta property="og:description" content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요" />
        <meta
          property="og:image"
          content="https://a1b2c3d4zzzzzznextts.vercel.app/images/image-for-meta-tag-test.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://a1b2c3d4zzzzzznextts.vercel.app" />
        <meta property="twitter:title" content="Linkbrary" />
        <meta property="twitter:description" content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요" />
        <meta
          property="twitter:image"
          content="https://a1b2c3d4zzzzzznextts.vercel.app/images/image-for-meta-tag-test.jpg"
        />
      </Head>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          {useLayout ? (
            <S.GlobalLayout>
              <GlobalNav />
              <S.MainContent>
                <Component {...pageProps} />
              </S.MainContent>
              <Footer />
            </S.GlobalLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}
