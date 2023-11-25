import CardList from "src/components/Main/Card/CardList";
import FolderSelect from "src/components/Main/FolderSelect";
import SearchBar from "src/components/Main/SearchBar";
import { URLS } from "src/utils/getData.type";

function LinkSection() {
  return (
    <>
      <SearchBar />
      <FolderSelect />
      <CardList path={URLS.FOLDER_LINKS} />
    </>
  );
}

export default LinkSection;
