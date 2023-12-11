import { useGetFolders } from "@/src/folder/data-access-folder";
import { AddLinkModal } from "@/src/link/ui-add-link-modal";
import { EditableCard } from "@/src/link/ui-editable-card";
import { NoLink } from "@/src/link/ui-no-link";
import { KeyboardEventHandler, useCallback, useRef, useState } from "react";
import { CardList as UiCardList } from "@/src/link/ui-card-list";
import { AlertModal } from "@/src/sharing/ui-alert-modal";
import { MODALS_ID } from "./constant";
import { Link } from "@/src/link/type";

type CardListProps = {
  links: Link[];
};

export const CardList = ({ links }: CardListProps) => {
  const { data: folders } = useGetFolders();
  const cardListRef = useRef(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [selectedLinkUrl, setSelectedLinkUrl] = useState<string>("");

  const closeModal = () => setCurrentModal(null);
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const getPopoverPosition = useCallback(
    (cardIndex: number) => {
      const count =
        cardListRef?.current !== null
          ? window
              .getComputedStyle(cardListRef?.current)
              .getPropertyValue("grid-template-columns")
              .split(" ").length
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
            setSelectedLinkUrl(link?.url ?? "");
            setCurrentModal(MODALS_ID.deleteLink);
          }}
          onAddToFolderClick={() => {
            setSelectedLinkUrl(link?.url ?? "");
            setCurrentModal(MODALS_ID.addToFolder);
          }}
        />
      ))}
      <AlertModal
        isOpen={currentModal === MODALS_ID.deleteLink}
        title="링크 삭제"
        description={selectedLinkUrl}
        buttonText="삭제하기"
        onClick={() => {}}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
      <AddLinkModal
        isOpen={currentModal === MODALS_ID.addToFolder}
        folders={folders}
        description={selectedLinkUrl}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={() => {
          setSelectedFolderId(null);
          closeModal();
        }}
        onKeyDown={handleKeyDown}
      />
    </UiCardList>
  );
};
