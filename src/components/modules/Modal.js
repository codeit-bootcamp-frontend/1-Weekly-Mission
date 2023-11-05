import React from "react";
import styled from "styled-components";
import ModalButtonBlue from "../atoms/ModalButtonBlue";
import ModalButtonRed from "../atoms/ModalButtonRed";
import ModalTitle from "../atoms/ModalTitle";
import ModalInput from "../atoms/ModalInput";
import closeButton from "../../images/modalClose.png";
const StyledModal = styled.div`
  width: 36rem;
  height: 23.9rem;
  border-radius: 15px;
  padding: 3.5rem 4rem;
  border: 1px solid var(--linkbrary-gray-20);
  background: var(--linkbrary-white);
  z-index: 1;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  & img {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
  }
`;
const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

const Modal = ({ title, color, buttonText }) => {
  return (
    <StyledModal>
      <img src={closeButton} alt="모달 닫기" />
      <ModalTitle>{title}</ModalTitle>
      <ModalInner>
        <ModalInput />
        {color === "blue" ? (
          <ModalButtonBlue>{buttonText}</ModalButtonBlue>
        ) : (
          <ModalButtonRed>{buttonText}</ModalButtonRed>
        )}
      </ModalInner>
    </StyledModal>
  );
};

export default Modal;
