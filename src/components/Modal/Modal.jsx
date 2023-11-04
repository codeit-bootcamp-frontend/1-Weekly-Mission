import { useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../../style/common";
const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  ${flexCenter};
  padding: 32px 40px;
`;
function Modal(modalName, featureName) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalWrapper>
      <ModalContainer>안녕</ModalContainer>
    </ModalWrapper>
  );
}

export default Modal;
