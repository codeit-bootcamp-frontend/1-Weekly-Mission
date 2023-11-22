import { Folder } from "folder/data-access-folder";
import { AddLinkModal } from "link/ui-add-link-modal";
import { EditableCard } from "link/ui-editable-card";
import { NoLink } from "link/ui-no-link";
import { KeyboardEvent, useCallback, useRef, useState } from "react";
import { CardList as UiCardList } from "link/ui-card-list";
import { AlertModal } from "sharing/ui-alert-modal";
import { MODALS_ID } from "./constant";
import { MappedLink } from "folder/util-map";

interface CardListProps {
  links: MappedLink[];
  folders: Folder[];
}

export const CardList = ({ folders, links }: CardListProps) => {
  const cardListRef = useRef<HTMLDivElement>(null);
  const [selectedFolderId, setSelectedFolderId] = useState(0);
  const [currentModal, setCurrentModal] = useState("");
  const [selectedLinkUrl, setSelectedLinkUrl] = useState("");

  const closeModal = () => setCurrentModal("");
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const getPopoverPosition = useCallback(
    (cardIndex: number) => {
      const count =
        cardListRef?.current !== null
          ? window.getComputedStyle(cardListRef?.current).getPropertyValue("grid-template-columns").split(" ").length
          : 1;
      if ((cardIndex + 1) % count === 0) {
        return { right: 0 };
      }
      return { left: 0 };
    },
    [cardListRef]
  );

  if (links.length === 0) return <NoLink />;
  return (
    <UiCardList ref={cardListRef}>
      {links.map((link, index) => (
        <EditableCard
          key={link?.id}
          {...link}
          popoverPosition={getPopoverPosition(index)}
          onDeleteClick={() => {
            setSelectedLinkUrl(link?.url);
            setCurrentModal(MODALS_ID.deleteLink);
          }}
          onAddToFolderClick={() => setCurrentModal(MODALS_ID.addToFolder)}
        />
      ))}
      <AlertModal
        isOpen={currentModal === MODALS_ID.deleteLink}
        title="링크 삭제"
        description={selectedLinkUrl}
        buttonText="삭제하기"
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
      <AddLinkModal
        isOpen={currentModal === MODALS_ID.addToFolder}
        folders={folders || []}
        selectedLinkUrl={selectedLinkUrl}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={() => {
          setSelectedFolderId(0);
          closeModal();
        }}
        onKeyDown={handleKeyDown}
      />
    </UiCardList>
  );
};
