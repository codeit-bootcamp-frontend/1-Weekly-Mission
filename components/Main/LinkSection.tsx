import CardList from "@/components/Main/CardList/CardList";
import FolderSelect from "@/components/Main/FolderSelect/FolderSelect";
import SearchBar from "@/components/Main/FolderSelect/SearchBar";
import { PATHS } from "@/constants/path";
import { memo } from "react";

interface Props {
  id: number;
}

export default memo(function LinkSection({ id }: Props) {
  return (
    <>
      <SearchBar />
      <FolderSelect id={id} />
      <CardList id={id} path={PATHS.FOLDER_LINKS} />
    </>
  );
});
