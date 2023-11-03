import CardList from "./CardList"
import FolderSelect from "./FolderSelect"
import SearchBar from "./SearchBar"

function LinkSection() {
  return (
    <>
      <SearchBar />
      <FolderSelect />
      <CardList type="FOLDER_LINKS" />
    </>
  )
}

export default LinkSection