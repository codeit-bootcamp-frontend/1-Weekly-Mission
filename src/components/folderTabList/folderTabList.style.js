import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { RESPONSIBLE_SIZE } from "utils/constants";

export const FolderTabList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const FolderNavLink = styled(NavLink)`
  display: block;
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
          color: #000;
        `}

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    padding: 0.6rem 1rem;
    font-size: 1.4rem;
  }
`;
