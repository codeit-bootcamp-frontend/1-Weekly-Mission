import Main from "../../components/Main/Main";
import SearchBar from "../../components/SearchBar/SearchBar";
import Layout from "../Layout/Layout";
import AddLink from "./components/AddLink/AddLink";
import FolderAndLink from "./components/FolderAndLink/FolderAndLink";

function FolderPage() {
  return (
    <Layout>
      <AddLink />
      <Main>
        <SearchBar />
        <FolderAndLink />
      </Main>
    </Layout>
  );
}

export default FolderPage;
