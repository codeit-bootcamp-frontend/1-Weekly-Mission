import { createPortal } from "react-dom";
import * as S from "./modalLayout.style.js";

export default function Modal({ closeModal, children }) {
  return createPortal(
    <S.ModalLayoutWrapper onClick={closeModal}>
      {children}
    </S.ModalLayoutWrapper>,
    document.getElementById("modal-root")
  );
}
