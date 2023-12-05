import styled from "styled-components";
import { ModalMainContainer } from "../ModalStyledComponents";

export const ModalMain = styled(ModalMainContainer)`
  .modalContentContainer {
    flex-direction: row;
    gap: 3.2rem;
    align-items: center;
    justify-content: center;
  }
`;

export const ModalContetnItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  .title {
    color: var(--gray100);
    text-align: center;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;
