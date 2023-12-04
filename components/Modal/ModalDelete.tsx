import { RefObject, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import CloseImage from "@/public/images/close.svg";
import Button from "../Button/Button";

interface ModalDeleteProps {
  modalOpen: boolean;
  title: string;
  btnColor: string;
  btnText: string;
  description: string;
  setModalOpen: (value: boolean) => void;
}

const ModalDelete = ({
  modalOpen,
  title,
  btnColor,
  btnText,
  description,
  setModalOpen,
}: ModalDeleteProps) => {
  const outside = useRef<HTMLDivElement>(null);
  return (
    <>
      {modalOpen &&
        createPortal(
          <>
            <StyledBackground
              ref={outside}
              onClick={(e) => {
                if (e.target == outside.current) setModalOpen(false);
              }}
            ></StyledBackground>
            <StyledModalBox>
              <StyledModalFrameBox>
                <h2>{title}</h2>
                <StyledModalInnerBox>
                  <p>{description}</p>
                  <Button text={btnText} size="long" buttonColor={btnColor} />
                </StyledModalInnerBox>
              </StyledModalFrameBox>
              <StyledModalCloseButton onClick={() => setModalOpen(false)}>
                <CloseImage alt="CLOSE" />
              </StyledModalCloseButton>
            </StyledModalBox>
          </>,
          document.querySelector("#modal-root") as HTMLDivElement
        )}
    </>
  );
};

export default ModalDelete;

const StyledBackground = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.56);
`;

const StyledModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 36rem;
  height: 23.9rem;
  flex-shrink: 0;
`;

const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledModalFrameBox = styled.div`
  display: inline-flex;
  padding: 3.2rem 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  border-radius: 1.5rem;
  border: 1px solid var(--linkbrary-gray-20);
  background-color: var(--linkbrary-white);

  h2 {
    color: var(--linkbrary-gray-100);
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const StyledModalInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  p {
    color: var(--linkbrary-gray-60);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`;

const ModalInput = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--linkbrary-primary-color);
  background: var(--linkbrary-white);
  color: var(--linkbrary-gray-100);
`;
