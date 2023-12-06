import "@/styles/reset.scss";
import "@/styles/font.scss";
import "@/styles/color.scss";
import "@/styles/global.scss";

import { UserProfileContextProvider } from "@/contexts/UserProfileContext.js";

import Layout from "@/components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UserProfileContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProfileContextProvider>
    </>
  );
}
