import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: Props) {
  const node = document.getElementById("portal") as HTMLElement;
  return createPortal(children, node);
}
