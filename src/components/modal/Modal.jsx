import { createPortal } from "react-dom";
import * as S from "./modal.style.js";

export default function Modal({ closeModal, children }) {
  return createPortal(
    <S.ModalWrapper onClick={closeModal}>{children}</S.ModalWrapper>,
    document.getElementById("modal-root")
  );
}
