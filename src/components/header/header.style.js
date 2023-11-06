import styled, { css } from "styled-components";
import { RESPONSIBLE_SIZE } from "utils/constants";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: var(--linkbrary--color--gray5);

  ${(props) =>
    props.$isHeaderFixed &&
    css`
      position: fixed;
      top: 0;
      z-index: 1;
    `}
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 192rem;
  height: 9.4rem;
  margin: 0 auto;
  padding: 0 20rem;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    width: 76.8rem;
    padding: 0 3.2rem;
    margin: 0 auto;
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    width: 100%;
    height: 6.3rem;
    padding: 1.3rem 3.2rem;
  }
`;

export const HeaderHomeButton = styled.button`
  width: 13.3rem;
  cursor: pointer;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    width: 8.8rem;
  }
`;

export const HeaderProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  pointer-events: none;
`;

export const ProfileIcon = styled.img`
  border-radius: 50%;
`;

export const ProfileEmail = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  color: var(--linkbrary--color--gray0);

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    display: none;
  }
`;

export const HeaderSignInButton = styled.button`
  padding: 1.6rem 4.05rem;
  border-radius: 0.8rem;
  background: var(--linkbrary--gra--purpleblue);
  font-size: 1.8rem;
  color: var(--linkbrary--color--white);
  cursor: pointer;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
  }
`;
