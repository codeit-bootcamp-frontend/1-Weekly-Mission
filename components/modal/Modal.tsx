import React, { ReactNode } from "react";
import closeIconImage from "@/images/modalClose.png";
import * as S from "@/components/modal/Modal.style";
import Image from "next/image";
import { ModalProps } from "@/types/type";
import ModalLayout from "@/layouts/modalLayout/ModalLayout";

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <ModalLayout onClose={onClose}>
      <S.ModalWrap>
        <S.CloseButton onClick={onClose}>
          <Image src={closeIconImage} alt="모달 닫기" />
        </S.CloseButton>
        <S.Modal>{children}</S.Modal>
      </S.ModalWrap>
    </ModalLayout>
  );
};

const Title = ({ children }: { children: ReactNode }) => {
  return <S.ModalTitle>{children}</S.ModalTitle>;
};

const BlueButton = ({ children }: { children: ReactNode }) => {
  return <S.Button $isDelete={false}>{children}</S.Button>;
};
const RedButton = ({ children }: { children: ReactNode }) => {
  return <S.Button $isDelete={true}>{children}</S.Button>;
};

const TargetName = ({ children }: { children: ReactNode }) => {
  return <S.FolderName>{children}</S.FolderName>;
};

const SelectButtonWrap = ({ children }: { children: ReactNode }) => {
  return <S.SelectButtonWrap>{children}</S.SelectButtonWrap>;
};

Modal.Title = Title;
Modal.BlueButton = BlueButton;
Modal.RedButton = RedButton;
Modal.TargetName = TargetName;
Modal.SelectButtonWrap = SelectButtonWrap;

export default Modal;
