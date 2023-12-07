import { Body, Mask } from "@/components/Modal/ModalFrame.styled";
import useNotScroll from "@/hooks/useNotScroll";
import { ReactNode } from "react";

interface ImodalFrame {
  children: ReactNode;
  onClick: (event: React.SyntheticEvent) => void;
}

export default function ModalFrame({ children, onClick }: ImodalFrame) {
  useNotScroll();

  return (
    <>
      <Mask tabIndex={0} onClick={onClick} onFocus={onClick} />
      <Body>{children}</Body>
    </>
  );
}
