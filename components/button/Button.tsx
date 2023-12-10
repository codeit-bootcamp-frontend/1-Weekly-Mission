import { ReactNode } from "react";
import { ButtonContainer } from "./buttonStyled";

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
