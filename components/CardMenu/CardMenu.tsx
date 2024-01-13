import { useState, useRef, RefObject, useEffect } from "react";
import Image from "next/image";

import useModal from "@/hooks/useModal";

import AddLinkModalContent from "@/components/Modal/AddLinkModalContent/AddLinkModalContent";
import DeleteLinkModalContent from "@/components/Modal/DeleteLinkModalContent/DeleteLinkModalContent";
import ModalContainer from "@/components/Modal/ModalContainer/ModalContainer";

import kebabImg from "@/assets/images/kebab.svg";

import styles from "./CardMenu.module.css";

interface Props {
  folderListData: UserFolders[];
  url: string;
}

function CardMenu({ folderListData, url }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    isOpenModal: isOpenDeleteLinkModal,
    openModal: openDeleteLinkModal,
    closeModal: closeDeleteLinkModal,
  } = useModal(false);
  const {
    isOpenModal: isOpenAddFolderModal,
    openModal: openAddFolderModal,
    closeModal: closeAddFolderModal,
  } = useModal(false);
  const menuRef: RefObject<HTMLDivElement> = useRef(null);
  const buttonRef: RefObject<HTMLButtonElement> = useRef(null);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClickOutsideMenu = (event: MouseEvent) => {
    const isMenuClicked =
      menuRef.current && menuRef.current.contains(event.target as Node);
    const isButtonClicked =
      buttonRef.current && buttonRef.current.contains(event.target as Node);

    if (!isMenuClicked && !isButtonClicked) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);
  return (
    <>
      <button ref={buttonRef} onClick={handleToggleMenu}>
        <Image src={kebabImg} alt="케밥 이미지" />
      </button>
      {isMenuOpen && (
        <div ref={menuRef} className={styles.menu}>
          <button onClick={openDeleteLinkModal}>삭제하기</button>
          <button onClick={openAddFolderModal}>폴더에 추가</button>
        </div>
      )}
      {isOpenDeleteLinkModal && (
        <ModalContainer onClose={closeDeleteLinkModal}>
          <DeleteLinkModalContent>{url}</DeleteLinkModalContent>
        </ModalContainer>
      )}
      {isOpenAddFolderModal && (
        <ModalContainer onClose={closeAddFolderModal}>
          <AddLinkModalContent
            inputValue={url}
            folderListData={folderListData}
          />
        </ModalContainer>
      )}
    </>
  );
}

export default CardMenu;
