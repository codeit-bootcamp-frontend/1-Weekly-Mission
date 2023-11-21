import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const ModalBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 36rem;
  height: 23.9rem;
  background-color: ${COLORS.WHITE};
  z-index: 100;
  border-radius: 1.5rem;
  
`;

// export const ModalCloseButton = styled.span`
//   border: 1px solid #000;
//   width: 2.4rem;
//   height: 2.4rem;
//   border-radius: 50%;
//   position: absolute;
//   left: 320px;
//   top: 16px;
// `;

export const ModalWrapper = styled.div`
  display: flex;
  padding: 3.5rem 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
export const ModalTitle = styled.h1`
  color: #373740;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;