import Nav from "../components/nav/Nav";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

const SharedPage = () => {
  return (
    <>
      <Nav pageType="shared" />
      <Header />
      <Main pageType="shared" dataType="folder" />
      <Footer />
    </>
  );
};

export default SharedPage;
