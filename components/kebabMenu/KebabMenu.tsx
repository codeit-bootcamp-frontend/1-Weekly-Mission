import * as S from "@/components/kebabMenu/KebabMenu.style";
import Modal from "@/components/modal/Modal";
import ModalSelectButton from "@/components/modalSelectButton/ModalSelectButton";
import { KEBAB_MENUS, MODALS_ID } from "@/constants/constants";
import { Folder } from "@/types/type";
import { MouseEvent, useState } from "react";

interface KebabMenusProps {
  linkUrl: string;
  isKebabOpen: boolean;
  folderId: number;
  folders?: Folder[];
  setIsKebabOpen: (isOpen: boolean) => void;
}

interface KebabProps {
  iconTitle: string;
  modalId: string;
}
const KebabMenu = ({ linkUrl, isKebabOpen, setIsKebabOpen, folderId, folders }: KebabMenusProps) => {
  const [modalComponent, setModalComponent] = useState("");

  const handleMenuClick = (e: MouseEvent<HTMLButtonElement>, kebab: KebabProps) => {
    e.stopPropagation();

    setModalComponent(kebab.modalId);
    setIsKebabOpen(false);
  };

  return (
    <>
      <S.KebabButtonList $isOpen={isKebabOpen}>
        {KEBAB_MENUS.map((kebab) => (
          <li key={folderId + kebab.iconTitle}>
            <S.KebabMenuButton onClick={(e) => handleMenuClick(e, kebab)}>{kebab.iconTitle}</S.KebabMenuButton>
          </li>
        ))}
      </S.KebabButtonList>
      {modalComponent === MODALS_ID.delete && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>링크 삭제</Modal.Title>
          <Modal.TargetName>{linkUrl}</Modal.TargetName>
          <Modal.RedButton>삭제하기</Modal.RedButton>
        </Modal>
      )}
      {modalComponent === MODALS_ID.addLinkToFolder && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>폴더에 추가</Modal.Title>
          <Modal.TargetName>{linkUrl}</Modal.TargetName>
          <Modal.SelectButtonWrap>
            {folders?.map((folder) => (
              <li key={folder.id}>
                <ModalSelectButton folderName={folder.name} linkCount={folder?.link.count} />
              </li>
            ))}
          </Modal.SelectButtonWrap>
          <Modal.BlueButton>추가하기</Modal.BlueButton>
        </Modal>
      )}
    </>
  );
};

export default KebabMenu;
