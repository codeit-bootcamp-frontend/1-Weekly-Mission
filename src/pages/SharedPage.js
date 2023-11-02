import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import SharedContainer from "../components/SharedContainer/SharedContainer";

const SharedPage = () => {
  return (
    <>
      <Nav pageType="shared" />
      <SharedContainer />
      <Footer />
    </>
  );
};

export default SharedPage;
