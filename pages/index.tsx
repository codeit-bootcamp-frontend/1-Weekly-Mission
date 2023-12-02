import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Header from "@/components/Header/Header";
import HeroSec from "@/components/HeroSec/HeroSec";
import ServiceExplainer from "@/components/ServiceExplainer/ServiceExplainer";
import Footer from "@/components/Footer/Footer";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeroSec />
      <ServiceExplainer />
    </>
  );
};
// (페이지 컴포넌트 이름).getLayout 으로 호출.
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header position="sticky" />
      <main>{page}</main>
      <Footer />
    </>
  );
};

export default Home;
