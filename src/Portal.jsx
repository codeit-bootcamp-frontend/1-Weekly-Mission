import { createPortal } from "react-dom";

const ModalPortal = ({ children }) => {
  const el = document.getElementById("modal"); // 독립 공간
  return createPortal(children, el);
};

export default ModalPortal;
