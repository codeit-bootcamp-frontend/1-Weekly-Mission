import React, { useState } from "react";
import { useGetFolders } from "folder/data-access-folder";
import { AddLinkModal } from "link/ui-add-link-modal";
import { LinkForm as UiLinkForm } from "link/ui-link-form";

export const LinkForm = () => {
  const { data: folders } = useGetFolders();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const [selectedLinkUrl, setSelectedLinkUrl] = useState<string | null>(null);

  const closeModal = () => {
    setSelectedFolderId(null);
    setSelectedLinkUrl(null);
    setIsModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  // 필요한 경우 selectedLinkUrl 상태를 업데이트하는 로직 추가

  return (
    <>
      <UiLinkForm onSubmit={() => setIsModalOpen(true)} />
      <AddLinkModal
        isOpen={isModalOpen}
        folders={folders}
        selectedLinkUrl={selectedLinkUrl}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
