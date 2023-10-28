import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const FolderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const FolderNavLink = styled(NavLink)`
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  border: 1px solid var(--linkbrary--color--primary);
  font-size: 1.6rem;
  font-weight: 400;
  ${(props) =>
    props.$isActive
      ? css`
          background-color: var(--linkbrary--color--primary);
          color: var(--linkbrary--color--white);
        `
      : css`
          background-color: var(--linkbrary--color--white);
          color: var(--linkbrary--color--primary);
        `}
`;
