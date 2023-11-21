import { useGetFolders } from "folder/data-access-folder";
import { AddLinkModal } from "link/ui-add-link-modal";
import { LinkForm as UiLinkForm } from "link/ui-link-form";
import { useState } from "react";

export const LinkForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const closeModal = () => {
    setSelectedFolderId(null);
    setIsModalOpen(false);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  return (
    <>
      <UiLinkForm onSubmit={() => setIsModalOpen(true)} />
      <AddLinkModal
        isOpen={isModalOpen}
        folders={folders}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
