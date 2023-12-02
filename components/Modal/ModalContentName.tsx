import { ReactNode } from "react";
import * as Styled from "./StyledModal";

interface Props {
  children: ReactNode;
}

const ModalContentName = ({ children }: Props) => {
  return <Styled.ModalContentName>{children}</Styled.ModalContentName>;
};

export default ModalContentName;
