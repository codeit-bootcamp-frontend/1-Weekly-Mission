// import "./Main.css";
import CardList from "../card/CardList";
// import SearchBar from "./SearchBar";
// import FolderList from "./FolderList";
import { useState } from "react";
import SearchBar from "../main/SearchBar";
import FolderList from "./FolderList";

const FolderContainer = () => {
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const onFolderSelect = (folderId, isAll) => {
    if (isAll) {
      setSelectedFolderId(null);
    } else {
      setSelectedFolderId(folderId);
    }
  };

  return (
    <main>
      <div className="content_wrapper">
        <SearchBar />
        <FolderList onFolderSelect={onFolderSelect} />
        <CardList folderId={selectedFolderId} />
      </div>
    </main>
  );
};

export default FolderContainer;
