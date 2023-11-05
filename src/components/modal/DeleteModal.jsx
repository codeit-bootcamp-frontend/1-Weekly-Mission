import React from "react";
import * as S from "./DeleteModal.style";
import closeIconImage from "../../images/modalClose.png";

const DeleteModal = ({ modalTitle, modalTarget, onClose }) => {
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
        <S.Button>삭제하기</S.Button>
      </S.Modal>
    </S.ModalWrap>
  );
};

export default DeleteModal;
