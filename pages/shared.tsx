import Nav from "@/components/nav/Nav";
import Footer from "@/components/common/Footer";
import SharedContainer from "@/components/shared/SharedContainer";
import Head from "next/head";

const SharedPage = () => {
  return (
    <>
      <Head>
        <title>Shared</title>
      </Head>
      <Nav pageType="shared" />
      <SharedContainer />
      <Footer />
    </>
  );
};

export default SharedPage;
