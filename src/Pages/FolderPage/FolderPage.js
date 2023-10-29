import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import SearchBar from "../../components/SearchBar/SearchBar";
import Layout from "../Layout/Layout";
import AddLink from "./components/AddLink/AddLink";
import FolderAndLink from "./components/FolderAndLink/FolderAndLink";
import Nav from "./components/Nav/Nav";

function FolderPage() {
  return (
    <>
      <Nav />
      <AddLink />
      <Main>
        <SearchBar />
        <FolderAndLink />
      </Main>
      <Footer />
    </>
  );
}

export default FolderPage;
