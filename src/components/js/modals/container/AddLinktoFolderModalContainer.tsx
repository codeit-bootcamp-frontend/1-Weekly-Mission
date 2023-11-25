import { useState } from "react";
import AddLinktoFolderModal from "../AddLinktoFolderModal";
import type { modalType } from "../../../../types/modalType";

function AddLinktoFolderModalContainer({ onShow, folders, link }: modalType) {
  const [selectedFolder, setSelectedFolder] = useState(0);

  if (!folders) {
    return;
  }

  const handleSelectFolder = (itemIdx: number) => {
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
