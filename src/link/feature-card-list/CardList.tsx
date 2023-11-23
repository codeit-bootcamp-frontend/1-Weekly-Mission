import React, { useCallback, useRef, useState } from "react";
import { useGetFolders } from "folder/data-access-folder";
import { AddLinkModal } from "link/ui-add-link-modal";
import { EditableCard } from "link/ui-editable-card";
import { NoLink } from "link/ui-no-link";
import { CardList as UiCardList } from "link/ui-card-list";
import { AlertModal } from "sharing/ui-alert-modal";
import { MODALS_ID } from "./constant";

interface Link {
  id: string;
  url: string;
}

interface CardListProps {
  links: Link[];
}

interface Link {
  id: string;
  url: string;
  imageSource: string; // 이미지 소스 프로퍼티 추가
  alt: string; // 대체 텍스트 프로퍼티 추가
  elapsedTime: string; // 경과 시간 프로퍼티 추가
  description: string; // 설명 프로퍼티 추가
  createdAt: string; // 생성 날짜 프로퍼티 추가
}

export const CardList = ({ links }: CardListProps) => {
  const { data: folders } = useGetFolders();
  const cardListRef = useRef<HTMLDivElement>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [selectedLinkUrl, setSelectedLinkUrl] = useState<string | null>(null);

  const closeModal = () => setCurrentModal(null);
  const handleKeyDown = (event: React.KeyboardEvent) => {
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
          key={link.id}
          url={link.url}
          imageSource={link.imageSource}
          alt={link.alt}
          elapsedTime={link.elapsedTime}
          description={link.description}
          createdAt={link.createdAt}
          popoverPosition={getPopoverPosition(index)}
          onDeleteClick={() => {
            setSelectedLinkUrl(link.url);
            setCurrentModal(MODALS_ID.deleteLink);
          }}
          onAddToFolderClick={() => setCurrentModal(MODALS_ID.addToFolder)}
        />
      ))}
      <AlertModal
        isOpen={
          currentModal === MODALS_ID.deleteLink && selectedLinkUrl !== null
        }
        title="링크 삭제"
        description={selectedLinkUrl ?? ""}
        buttonText="삭제하기"
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
        onClick={() => {
          /* 여기에 onClick 핸들러 구현 */
        }} // onClick prop 추가
      />
      <AddLinkModal
        isOpen={currentModal === MODALS_ID.addToFolder}
        folders={folders}
        selectedLinkUrl={selectedLinkUrl ?? ""}
        selectedFolderId={selectedFolderId ?? null}
        setSelectedFolderId={(id) => setSelectedFolderId(id as string | null)}
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
