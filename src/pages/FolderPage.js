import Nav from "../components/nav/Nav";
import HeaderAddLink from "../components/header/HeaderAddLink";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

const FolderPage = () => {
  return (
    <>
      <Nav pageType="folder" />
      <HeaderAddLink />
      <Main pageType="folder" />
      <Footer />
    </>
  );
};

export default FolderPage;
