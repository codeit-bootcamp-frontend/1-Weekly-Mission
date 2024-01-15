import { ModalMainContainer } from "@/components/modal/ModalStyledComponents";
import styled from "styled-components";
import { ButtonContainer } from "@/components/button/buttonStyled";
import { InputContainer } from "@/components/input/inputStyled";

export const ModalMain = styled(ModalMainContainer)<{ $isDelete: boolean }>`
  ${InputContainer} {
    width: 100%;
    background: var(--white);
    border: 1px solid var(--gray20);
  }

  ${ButtonContainer} {
    margin-top: ${(props) => (props.$isDelete ? "0" : "-0.8rem")};
  }

  ${InputContainer}:focus-within {
    border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  }
`;
