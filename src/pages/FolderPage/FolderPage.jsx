import AddLinkForm from "components/AddLinkForm";
import CardList from "components/CardList";
import FolderList from "components/FolderList";
import SearchBar from "components/SearchBar";
import { MainDiv } from "styles/MainDiv";

function FolderPage() {
  return (
    <>
      <AddLinkForm />
      <MainDiv>
        <SearchBar />
        <FolderList />
        <CardList />
      </MainDiv>
    </>
  );
}

export default FolderPage;
