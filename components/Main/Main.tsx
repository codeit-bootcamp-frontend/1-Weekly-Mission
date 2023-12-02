import { ReactNode } from "react";
import { StyledMain } from "@/components/Main/Main.styled";

interface Props {
  children: ReactNode;
}

export default function Main({ children }: Props) {
  return <StyledMain>{children}</StyledMain>;
}
