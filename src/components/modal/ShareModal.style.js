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
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
`;

export const FolderName = styled.p`
  color: var(--linkbrary-gray-60);
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2rem;
`;
export const ModalTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const ModalTitle = styled.h3`
  color: var(--linkbrary-gray-100);
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ShareButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.2rem;
`;

export const ShareButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const ShareIcon = styled.img`
  border-radius: 3.7333rem;
`;

export const shareText = styled.p`
  color: var(--linkbrary-gray-100);
  text-align: center;
  font-family: Inter;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;
`;
