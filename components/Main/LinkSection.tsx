import CardList from "@/components/Main/Card/CardList";
import FolderSelect from "@/components/Main/FolderCatergory/FolderSelect";
import SearchBar from "@/components/Main/FolderCatergory/SearchBar";
import { URLS } from "@/utils/getData.type";

interface Props {
  id: number;
}

export default function LinkSection({ id }: Props) {
  return (
    <>
      <SearchBar />
      <FolderSelect id={id} />
      <CardList id={id} path={URLS.FOLDER_LINKS} />
    </>
  );
}
