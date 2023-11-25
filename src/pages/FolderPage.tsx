import { Helmet } from "react-helmet-async";
import Nav from "../components/nav/Nav";
import HeaderAddLink from "../components/header/HeaderAddLink";
import Footer from "../components/common/Footer";
import FolderContainer from "../components/folder/FolderContainer";

const FolderPage = () => {
  return (
    <>
      <Helmet>
        <title>Folder</title>
      </Helmet>
      <Nav pageType="folder" />
      <HeaderAddLink />
      <FolderContainer />
      <Footer />
    </>
  );
};

export default FolderPage;
