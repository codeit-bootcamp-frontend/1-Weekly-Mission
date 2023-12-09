import CardList from "@/components/Main/CardList/CardList";
import FolderSelect from "@/components/Main/FolderSelect/FolderSelect";
import SearchBar from "@/components/Main/FolderSelect/SearchBar";
import { URLS } from "@/constants/path";

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
