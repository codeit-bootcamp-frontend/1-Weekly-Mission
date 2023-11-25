import { useState } from "react";
import AddLinktoFolderModal from "../AddLinktoFolderModal";

function AddLinktoFolderModalContainer({ onShow, folders, link }) {
  const [selectedFolder, setSelectedFolder] = useState(0);

  if (!folders) {
    return;
  }

  const handleSelectFolder = (itemIdx) => {
    setSelectedFolder(itemIdx);
  };

  const handleCloseButton = () => {
    onShow(false, "");
  };

  return (
    <>
      <AddLinktoFolderModal
        folders={folders}
        onClose={handleCloseButton}
        link={link}
        onSelect={handleSelectFolder}
        isActive={selectedFolder}
      />
    </>
  );
}

export default AddLinktoFolderModalContainer;
