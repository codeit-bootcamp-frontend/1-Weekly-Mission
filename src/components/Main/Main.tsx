import { ReactNode } from "react";
import { StyledMain } from "src/components/Main/Main.styled";

interface Props {
  children: ReactNode;
}

function Main({ children }: Props) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
