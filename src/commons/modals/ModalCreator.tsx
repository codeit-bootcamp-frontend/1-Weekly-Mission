import ReactDom from "react-dom";
import { ReactNode } from "react";
import { ModalBackground, ModalContainer } from "./ModalBackground";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const ModalCreator = ({ children, onClick }: Props) => {
  const modalDiv = document.getElementById("modal-root") as HTMLDivElement;
  return ReactDom.createPortal(
    <>
      <ModalContainer>{children}</ModalContainer>
      <ModalBackground onClick={onClick} />
    </>,
    modalDiv
  );
};

export default ModalCreator;
