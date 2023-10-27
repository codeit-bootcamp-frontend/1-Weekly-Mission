import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LinkInput from "../components/LinkInput";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import FolderList from "../components/FolderList";

const FolderPage = () => {
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [hasLinks, setHasLinks] = useState(true);

  const onFolderSelect = (folderId, isAll) => {
    if (isAll) {
      setSelectedFolderId(null);
    } else {
      setSelectedFolderId(folderId);
    }
  };

  return (
    <div>
      <Navbar isFolderPage={true} />
      <LinkInput />
      <SearchBar />
      {hasLinks && <FolderList onFolderSelect={onFolderSelect} />}
      <CardList
        isFolderPage={true}
        folderId={selectedFolderId}
        setHasLinks={setHasLinks}
      />
      <Footer />
    </div>
  );
};

export default FolderPage;
