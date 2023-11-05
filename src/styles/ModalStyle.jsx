import styled from 'styled-components';
import { Button } from './Button';

export const ModalBody = styled.div`
  display: inline-flex;
  position: fixed;
  z-index: 5;
  top: 50%;
  left: 50%;
  width: 36rem;
  height: 23.8rem;
  transform: translate(-50%, -50%);
  padding: 3.2rem 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  border-radius: 15px;
  border: 1px solid #CCD5E3;
  background: #FFF;
`;

export const CloseButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  left: 32rem;
  top: 1.6rem;
  cursor: pointer;
`;

export const ModalTitle = styled.h1`
  color: #373740;
  font-family: Pretendard, sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
`;

export const ModalInput = styled.input`
  display: flex;
  width: 100%;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #6D6AFE;
  background: #FFF;

  &:focus::placeholder {
    color: transparent;
  }
`;

export const ModalFolderButton = styled(Button)`
  width: 100%;
  font-size: 1.6rem;
  padding: 1.6rem 2rem;
`;
