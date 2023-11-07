import { Helmet } from "react-helmet-async";
import Nav from "../components/nav/Nav";
import Footer from "../components/common/Footer";
import SharedContainer from "../components/shared/SharedContainer";

const SharedPage = () => {
  return (
    <>
      <Helmet>
        <title>Shared</title>
      </Helmet>
      <Nav pageType="shared" />
      <SharedContainer />
      <Footer />
    </>
  );
};

export default SharedPage;
