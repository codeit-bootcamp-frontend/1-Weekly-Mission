import { ReactNode } from "react";
import * as Styled from "./StyledModal";

interface Props {
  url: ReactNode;
}

const ModalContentName = ({ url }: Props) => {
  return <Styled.ModalContentName>{url}</Styled.ModalContentName>;
};

export default ModalContentName;
