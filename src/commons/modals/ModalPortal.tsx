import ReactDom from "react-dom";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const el = document.getElementById("modal-root") as HTMLDivElement;

  return ReactDom.createPortal(children, el);
};

export default ModalPortal;
