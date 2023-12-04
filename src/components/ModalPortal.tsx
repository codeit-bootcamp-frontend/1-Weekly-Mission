import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: Props) {
  /** 모달이 서버상태에서는 실행되지 않도록 */
  if (typeof window === "undefined") {
    return null;
  }

  const node = document.getElementById("portal") as Element;
  return createPortal(children, node);
}
