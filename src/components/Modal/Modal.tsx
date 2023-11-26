import { MouseEvent } from "react";
import ModalPortal from "Portal";
import * as Styled from "./StyledModal";

type closeModal = (e: MouseEvent) => void;

interface Props {
  title: string;
  trigger: JSX.Element;
  closeModal: closeModal;
  btnContent: string;
  color: string;
}

const Modal = ({ trigger, title, btnContent, color, closeModal }: Props) => {
  return (
    <ModalPortal>
      <Styled.ModalBackground onClick={closeModal} $back="BG" />
      <Styled.Container>
        <Styled.ModalLabel>{title}</Styled.ModalLabel>
        {trigger}
        <Styled.ModalBtn $color={color}>{btnContent}</Styled.ModalBtn>
        <Styled.ModalCloseBtn onClick={closeModal} />
      </Styled.Container>
    </ModalPortal>
  );
};

export default Modal;
