import { ReactNode } from "react";
import { GradientButtonContainer } from "./buttonStyled";

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: "submit" | "button";
}

const GradientButton = ({
  children,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <GradientButtonContainer onClick={onClick} type={type}>
      {children}
    </GradientButtonContainer>
  );
};

export default GradientButton;
