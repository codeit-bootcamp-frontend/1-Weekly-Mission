import styled from "styled-components";

function ModalBg({ children }: any) {
  return <ModalBackground>{children}</ModalBackground>;
}

export default ModalBg;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 4;
`;
