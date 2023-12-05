import { ReactNode } from "react";
import { ButtonContainer } from "./buttonStyled";

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type: "primary" | "secondary";
}

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} type={type}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
