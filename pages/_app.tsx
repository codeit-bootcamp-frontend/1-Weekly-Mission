import Head from "next/head";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import { AuthProvider } from "@/lib/utils/AuthContext";
import { StyledGlobal } from "@/style/Global.styled";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <StyledGlobal />
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <div id="modal"></div>
      </AuthProvider>
    </>
  );
}
