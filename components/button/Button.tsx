import { ReactNode } from "react";
import { ButtonContainer } from "./buttonStyled";

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit";
}

const Button = ({ children, onClick, type = "button" }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} type={type}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
