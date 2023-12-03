import "@/styles/reset.scss";
import "@/styles/font.scss";
import "@/styles/color.scss";
import "@/styles/global.scss";

import { UserProfileContextProvider } from "@/contexts/UserProfileContext.js";

import PageContainer from "@/components/pageContainer/PageContainer";
import ContentContainer from "@/components/contentContainer/ContentContainer";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UserProfileContextProvider>
        <PageContainer>
          <Header />
          <ContentContainer>
            <Component {...pageProps} />
          </ContentContainer>
          <Footer />
        </PageContainer>
      </UserProfileContextProvider>
    </>
  );
}
