import { BaseButton } from "@/components/Main/FolderSelect/FolderSelect.styled";
import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  width: 34rem;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    width: 68rem;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`;

export const Li = styled.li`
  height: 3.2rem;

  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  background-color: var(--White);
  color: var(--Black);
  border: 0.1px solid var(--Primary);
  border-radius: 0.5rem;
  font-size: 1.4rem;

  &:hover,
  &.active {
    background-color: var(--Primary);
    color: var(--White);
  }
`;

export const ButtonAdd = styled(BaseButton)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 0.2rem;
    height: 3rem;
    color: var(--Primary);
  }
`;
