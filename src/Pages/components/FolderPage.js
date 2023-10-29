
import Main from "../../components/Main/Main";
import SearchBar from "../../components/SearchBar/SearchBar";
import Layout from "../Layout/Layout";
import AddLink from "./AddLink/AddLink";
import LinkList from "./LinkList/LinkList";

function FolderPage() {
  return (
    <Layout>
      <AddLink />
      <Main>
        <SearchBar />
        <LinkList/>

      </Main>
    </Layout>
  );
}

export default FolderPage;
