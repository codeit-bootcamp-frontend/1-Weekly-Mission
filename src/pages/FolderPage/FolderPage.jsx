import AddLinkForm from "components/AddLinkForm";
import CardList from "components/CardList";
import SearchBar from "components/SearchBar";
import { MainDiv } from "styles/MainDiv";

function FolderPage() {
  return (
    <>
      <AddLinkForm />
      <MainDiv>
        <SearchBar />
        <CardList />
      </MainDiv>
    </>
  );
}

export default FolderPage;
