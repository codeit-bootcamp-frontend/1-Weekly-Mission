import React from "react";
import closeIconImage from "../../images/modalClose.png";
import * as S from "./SelectModal.style";
import ModalSelectButton from "../modalSelectButton/ModalSelectButton";

const SelectModal = ({ modalTitle, modalTarget, buttonText, folders, onClose }) => {
  return (
    <S.ModalWrap>
      <S.Modal>
        <S.ModalTextWrap>
          <S.ModalTitle>{modalTitle}</S.ModalTitle>
          <S.FolderName>{modalTarget}</S.FolderName>
        </S.ModalTextWrap>
        <S.CloseButton onClick={onClose}>
          <img src={closeIconImage} alt="모달 닫기" />
        </S.CloseButton>
        <S.SelectButtonWrap>
          {folders &&
            folders.map((folder) => (
              <li key={folder.id}>
                <ModalSelectButton folderName={folder.name} linkCount={folder.link.count} />
              </li>
            ))}
        </S.SelectButtonWrap>
        <S.Button>{buttonText}</S.Button>
      </S.Modal>
    </S.ModalWrap>
  );
};

export default SelectModal;
