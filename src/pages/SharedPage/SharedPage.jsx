import FolderInfo from "components/FolderInfo";
import SearchBar from "components/SearchBar";
import SampleCardList from "components/SampleCardList";
import { MainDiv } from "styles/MainDiv";

function SharedPage() {
  return (
    <>
      <FolderInfo />
      <MainDiv>
        <SearchBar />
        <SampleCardList />
      </MainDiv>
    </>
  );
}

export default SharedPage;
