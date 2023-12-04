import { ReactNode } from "react";
import ReactDOM from "react-dom";

export const ModalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById("modal") as HTMLDivElement;
  return ReactDOM.createPortal(children, el);
};
