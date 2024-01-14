import { PropsWithChildren } from "react";
import ReactDom from "react-dom";

import { ModalBackground, ModalContainer } from "./ModalBackground";

const ModalCreator = ({ children }: PropsWithChildren) => {
  const modalDiv = document.getElementById("modal-root") as HTMLDivElement;
  if (!modalDiv) return;

  return ReactDom.createPortal(
    <>
      <ModalContainer>{children}</ModalContainer>
      <ModalBackground />
    </>,
    modalDiv,
  );
};

export default ModalCreator;
