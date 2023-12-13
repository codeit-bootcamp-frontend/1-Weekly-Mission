import { ReactNode } from "react";
import * as Styled from "./Modal.styled";

interface Props {
  url?: ReactNode;
  children?: ReactNode;
}

const ModalContentName = ({ url }: Props) => {
  return <Styled.ModalContentName>{url}</Styled.ModalContentName>;
};

export default ModalContentName;
