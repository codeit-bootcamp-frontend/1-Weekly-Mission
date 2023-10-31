import "./Main.css";
import CardList from "../card/CardList";
import SearchBar from "./SearchBar";
import FolderList from "./FolderList";
import { useState } from "react";

const Main = ({ pageType, dataType }) => {
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
        {pageType === "folder" && (
          <FolderList onFolderSelect={onFolderSelect} />
        )}
        <CardList
          pageType={pageType}
          dataType={dataType}
          folderId={selectedFolderId}
        />
      </div>
    </main>
  );
};

export default Main;
