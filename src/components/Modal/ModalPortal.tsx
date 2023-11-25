import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ImodalPortal {
  children: ReactNode;
}

const ModalPortal = ({ children }: ImodalPortal) => {
  const el = document.getElementById("modal") as HTMLElement;
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
