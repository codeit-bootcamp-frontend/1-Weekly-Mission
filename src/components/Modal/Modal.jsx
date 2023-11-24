import ModalPortal from "Portal";
import * as Styled from "./StyledModal";

const Modal = ({ trigger, title, btnContent, color, closeModal }) => {
  return (
    <ModalPortal>
      <Styled.ModalBackground onClick={closeModal} />
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
