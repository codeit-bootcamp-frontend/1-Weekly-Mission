import { ReactNode } from "react";

export default interface ModalProps {
  children?: ReactNode;
  onClick?: () => void;
}
