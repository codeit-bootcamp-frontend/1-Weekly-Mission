import Nav from "../components/nav/Nav";
import HeaderAddLink from "../components/header/HeaderAddLink";
import Footer from "../components/footer/Footer";
import FolderContainer from "../components/folder/FolderContainer";

const FolderPage = () => {
  return (
    <>
      <Nav pageType="folder" />
      <HeaderAddLink />
      <FolderContainer />
      <Footer />
    </>
  );
};

export default FolderPage;
