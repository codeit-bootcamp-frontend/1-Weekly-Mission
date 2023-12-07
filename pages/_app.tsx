import "../styles/globals.css";
import "../styles/reset.css";
import "../public/fonts/pretendard/pretendard.css";
import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Head from "next/head";

/* NextPageWithLayout으로 Page의 타입을 지정하면, getLayout 속성함수를 사용할 수 있게된다. (사용해도 되고 안해도 되고) */
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}; // 기존 AppProps타입에 Layout을 추가한 것.

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // 페이지 단위에서 정의한 레이아웃이 있다면 해당 레이아웃을 적용한다.
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <title>Linkbrary</title>
        <style>{``}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
