import { ReactNode, memo } from "react";
import { StyledMain } from "@/components/Main/Main.styled";

interface Props {
  children: ReactNode;
}

export default memo(function Main({ children }: Props) {
  return <StyledMain>{children}</StyledMain>;
});
