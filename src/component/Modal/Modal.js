import ModalPortal from "pages/portal";
import * as Style from "./Modal.style.js";
import closeImg from "assets/_close.png";

const Modal = ({title, trigger, closeModal}) => {

  return (
    <>
      <ModalPortal>
        <Style.BackGround onClick={closeModal} />
        <Style.Container>
          <Style.Title>{title}</Style.Title>
          {trigger}
          <Style.Img src={closeImg} onClick={closeModal} />
        </Style.Container>
      </ModalPortal>
    </>
  );
};

export default Modal;
