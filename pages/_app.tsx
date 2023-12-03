import Head from "next/head";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import { LoginProvider } from "@/lib/utils/LoginContext";
import { StyledGlobal } from "@/style/StyledGlobal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <StyledGlobal />
      <LoginProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <div id="modal"></div>
      </LoginProvider>
    </>
  );
}
