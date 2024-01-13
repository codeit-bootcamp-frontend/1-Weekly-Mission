import CardList from "@/components/Main/CardList/CardList";
import FolderSelect from "@/components/Main/FolderSelect/FolderSelect";
import SearchBar from "@/components/Main/FolderSelect/SearchBar";
import { memo } from "react";

export default memo(function LinkSection() {
  return (
    <>
      <SearchBar />
      <FolderSelect />
      <CardList />
    </>
  );
});
