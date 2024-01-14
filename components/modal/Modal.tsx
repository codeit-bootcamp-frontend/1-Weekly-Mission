import * as S from "@/components/modal/Modal.style";
import closeIconImage from "@/images/modalClose.png";
import ModalLayout from "@/layouts/modalLayout/ModalLayout";
import Image from "next/image";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

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

const BlueButton = ({ children, handleClick }: { children: ReactNode; handleClick: () => void }) => {
  return (
    <S.Button $isDelete={false} onClick={handleClick}>
      {children}
    </S.Button>
  );
};
const RedButton = ({ children, handleClick }: { children: ReactNode; handleClick: () => void }) => {
  return (
    <S.Button $isDelete={true} onClick={handleClick}>
      {children}
    </S.Button>
  );
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
