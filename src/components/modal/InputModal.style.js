import styled from "styled-components";

export const ModalWrap = styled.div`
  width: 36rem;
  height: 23.9rem;
  border-radius: 1.5rem;
  padding: 3.5rem 4rem;
  border: 0.1rem solid var(--linkbrary-gray-20);
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
`;
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
`;

export const Input = styled.input`
  width: 28rem;
  padding: 1.8rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--linkbrary-primary-color);
  background: var(--linkbrary-white);
  outline: var(--linkbrary-primary-color);
`;

export const Button = styled.button`
  display: flex;
  width: 28rem;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  color: var(--button-grey-light);
  font-size: 1.6rem;
  font-weight: 600;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
  cursor: pointer;
`;

export const ModalTitle = styled.h3`
  color: var(--linkbrary-gray-100);
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
