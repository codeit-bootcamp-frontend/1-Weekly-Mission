import React from "react";
import * as S from "@/components/modal/DeleteModal.style";
import closeIconImage from "@/images/modalClose.png";
import { ModalProps } from "@/types/type";
import Image from "next/image";

const DeleteModal = ({ modalTitle, modalTarget, onClose }: ModalProps) => {
  return (
    <S.ModalWrap>
      <S.Modal>
        <S.ModalTextWrap>
          <S.ModalTitle>{modalTitle}</S.ModalTitle>
          <S.FolderName>{modalTarget}</S.FolderName>
        </S.ModalTextWrap>
        <S.CloseButton onClick={onClose}>
          <Image src={closeIconImage} alt="모달 닫기" />
        </S.CloseButton>
        <S.Button>삭제하기</S.Button>
      </S.Modal>
    </S.ModalWrap>
  );
};

export default DeleteModal;
