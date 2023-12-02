import React, { MouseEvent, useState } from "react";
import * as S from "./FolderToolBar.style";
import { FOLDER_MANAGE_MENUS, MODALS_ID } from "@/constants/constants";
import Modal from "@/components/modal/Modal";
import { FolderManageMenusProps, FolderToolbarProps } from "@/types/type";
import Image from "next/image";
import InputField from "../inputField/InputField";
import ShareButtons from "../shareButtons/ShareButtons";

const FolderToolbar = ({ folderName }: FolderToolbarProps) => {
  const [modalComponent, setModalComponent] = useState("");

  const handleMenuClick = (e: MouseEvent<HTMLButtonElement>, menu: FolderManageMenusProps) => {
    e.stopPropagation();
    setModalComponent(menu.modalId);
  };

  return (
    <>
      <S.ToolBarWrap>
        <S.FolderName>{folderName}</S.FolderName>
        <S.ManageButtonWrap>
          {folderName !== "전체" &&
            FOLDER_MANAGE_MENUS.map((menu, i) => (
              <li key={menu.iconTitle}>
                <S.ManageButton onClick={(e) => handleMenuClick(e, menu)}>
                  {menu.iconTitle}
                  <Image src={menu.imgSrc} alt={menu.iconTitle} />
                </S.ManageButton>
              </li>
            ))}
        </S.ManageButtonWrap>
      </S.ToolBarWrap>
      {modalComponent === MODALS_ID.share && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>폴더 공유</Modal.Title>
          <Modal.TargetName>{folderName}</Modal.TargetName>
          <ShareButtons />
        </Modal>
      )}
      {modalComponent === MODALS_ID.rename && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>폴더 이름 변경</Modal.Title>
          <InputField modalTarget={folderName} />
          <Modal.BlueButton>변경하기</Modal.BlueButton>
        </Modal>
      )}
      {modalComponent === MODALS_ID.delete && (
        <Modal onClose={() => setModalComponent("")}>
          <Modal.Title>폴더 삭제</Modal.Title>
          <Modal.TargetName>{folderName}</Modal.TargetName>
          <Modal.RedButton>삭제하기</Modal.RedButton>
        </Modal>
      )}
    </>
  );
};

export default FolderToolbar;
