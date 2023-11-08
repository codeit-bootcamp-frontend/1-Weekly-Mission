import styled from "styled-components";
import { DefaultBtnContainer } from "../btn/DefaultBtn";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
`;

export const OuterModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.4;
`;

export const ModalMainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 36rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 1.5rem;
  border: 1px solid #dee2e6;
  padding: 3.2rem 4rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  .closeIcon {
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    cursor: pointer;
  }

  .modalTitleContainer {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    align-items: center;

    .title {
      color: var(--gray100);
      font-size: 2rem;
      font-weight: 700;
    }

    .link {
      color: var(--gray60);
      text-align: center;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.2rem;
    }
  }

  .modalContentContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  ${DefaultBtnContainer} {
    width: 100%;
    font-size: 1.6rem;
  }
`;
