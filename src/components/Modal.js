import React from "react";
import { styled } from "styled-components";

import closeImg from "../assets/images/_close.png";

const Overlay = styled.div`
  width: 100%;
  padding: 37rem;
  background: rgba(0, 0, 0, 0.4);
`;

const _Modal = styled.div`
  position: relative;
  z-index: 1;
  width: 36rem;
  height: 24rem;
  margin: 0 auto;
  padding: 3.2rem 4rem;

  border-radius: 15px;
  border: 1px solid var(--linkbrary-gray-20, #ccd5e3);
  background: var(--linkbrary-white, #fff);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 2.4rem;

  color: var(--linkbrary-gray-100, #373740);
  font-weight: 700;
  font-size: 2rem;
`;

const Content = styled.div``;

const XButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  width: 2.4rem;
  height: 2.4rem;

  border: none;
  background-color: transparent;
`;

function Modal({ data }) {
  const { isOpen, modalTitle, modalContent, closeModal } = data;

  console.log(modalTitle);
  if (!isOpen) return null;

  return (
    <Overlay>
      <_Modal>
        <Container>
          <Title>{modalTitle}</Title>
          <Content>{modalContent}</Content>
          <XButton onClick={closeModal}>
            <img src={closeImg} alt="" />
          </XButton>
        </Container>
      </_Modal>
    </Overlay>
  );
}

export default Modal;
