import CardList from "@/components/Main/Card/CardList";
import FolderSelect from "@/components/Main/FolderSelect";
import SearchBar from "@/components/Main/SearchBar";
import { URLS } from "@/utils/getData.type";

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
