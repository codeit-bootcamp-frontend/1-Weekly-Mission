import Nav from "../components/nav/Nav";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

const SharedPage = () => {
  return (
    <>
      <Nav pageType={"shared_page"} />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default SharedPage;
