import { BaseButton } from "@/components/Main/FolderSelect/FolderSelect.styled";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  ${({ title }) => title === "전체" && `display: none;`}
  gap: 1.2rem;
`;

export const H1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  width: 34rem;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    width: 68rem;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`;

export const ButtonControl = styled(BaseButton)`
  gap: 0.5rem;
  color: var(--Gray4);
  font-size: 1.4rem;
  font-weight: 600;
`;
