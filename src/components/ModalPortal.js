import { createPortal } from "react-dom";

export default function ModalPortal({ children }) {
  const node = document.getElementById("portal");
  return createPortal(children, node);
}
