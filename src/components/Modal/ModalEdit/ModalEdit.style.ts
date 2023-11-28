import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const ModalBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 36rem;
  padding: 3.5rem 4rem;
  background-color: ${COLORS.WHITE};
  border: 0.1rem solid #CCD5E3;
  border-radius: 1.5rem;
  z-index: 100;
`;

export const ModalCloseButton = styled.img`
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.h1`
  color: #373740;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;