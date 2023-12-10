import Footer from "src/components/Footer/Footer";
import Header from "src/components/Header/Header";
import LinkAdd from "src/components/LinkAdd/LinkAdd";
import MainSection from "src/components/MainSection/MainSection";
import NotFoundLink from "src/components/NotFoundLink/NotFoundLink";

function NotFoundPage() {
  return (
    <>
      <Header />
      <LinkAdd />
      <MainSection>
        <NotFoundLink />
      </MainSection>
      <Footer />
    </>
  );
}

export default NotFoundPage;
