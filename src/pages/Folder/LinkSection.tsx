import CardList from "src/components/Main/Card/CardList";
import FolderSelect from "src/components/Main/FolderSelect";
import SearchBar from "src/components/Main/SearchBar";
import { URLS } from "src/utils/getData.type";

interface Props {
  id: number;
}

function LinkSection({ id }: Props) {
  return (
    <>
      <SearchBar />
      <FolderSelect id={id} />
      <CardList id={id} path={URLS.FOLDER_LINKS} />
    </>
  );
}

export default LinkSection;
