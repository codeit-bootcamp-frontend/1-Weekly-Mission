import { MouseEvent } from "react";
import ModalPortal from "@/lib/utils/Portal";
import * as Styled from "./Modal.styled";

type closeModal = (e: MouseEvent) => void;

interface Props {
  title: string;
  trigger: JSX.Element;
  closeModal: closeModal;
  btnContent: string;
  color: string;
}

const Modal = ({ trigger, title, btnContent, color, closeModal }: Props) => {
  const scrollY = window.scrollY;

  return (
    <ModalPortal>
      <Styled.ModalBackground
        $scrollY={scrollY}
        onClick={closeModal}
        $back="BG"
      />
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
