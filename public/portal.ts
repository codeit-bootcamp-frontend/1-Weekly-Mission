import { ReactNode } from "react";
import reactDOM from "react-dom";

const ModalPortal = ({children} : {children : ReactNode}) => {
  const el = document.getElementById("modal") as HTMLDivElement;
  return reactDOM.createPortal(children, el);
}

export default ModalPortal;