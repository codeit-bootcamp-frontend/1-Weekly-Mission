import { ReactNode } from "react";
import { GradientButtonContainer } from "./buttonStyled";

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const GradientButton = ({ children, onClick }: ButtonProps) => {
  return (
    <GradientButtonContainer onClick={onClick}>
      {children}
    </GradientButtonContainer>
  );
};

export default GradientButton;
