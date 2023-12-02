import Footer from "@/components/Footer/Footer";
import HomeHeader from "@/components/Header/index/HomeHeader";
import Section from "@/components/Main/index/Section";
import Navigation from "@/components/Nav/Navigation";
import Head from "next/head";

export default function home() {
  return (
    <>
      <Head>
        <title>Linkabrary</title>
      </Head>
      <Navigation page="/" />
      <HomeHeader />
      <Section contents="link" />
      <Section contents="folder" reverse />
      <Section contents="share" />
      <Section contents="search" reverse />
      <Footer />
    </>
  );
}
