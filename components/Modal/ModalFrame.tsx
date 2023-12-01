import { ReactNode } from "react";
import useNotScroll from "src/hooks/useNotScroll";
import styled from "styled-components";

interface ImodalFrame {
  children: ReactNode;
  onClick: (event: React.SyntheticEvent) => void;
}

function ModalFrame({ children, onClick }: ImodalFrame) {
  useNotScroll();

  return (
    <>
      <Mask tabIndex={0} onClick={onClick} onFocus={onClick} />
      <Body>{children}</Body>
    </>
  );
}

export default ModalFrame;

const Mask = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  background-color: black;
  opacity: 0.4;
`;
const Body = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
