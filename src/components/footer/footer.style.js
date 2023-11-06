import styled from "styled-components";
import { RESPONSIBLE_SIZE } from "utils/constants";

export const FooterWrapper = styled.footer`
  background-color: var(--linkbrary--color--black);
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 192rem;
  height: 16rem;
  padding: 3.2rem 10.4rem 10.8rem;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    flex-wrap: wrap;
    padding: 3.2rem;
  }
`;

export const Copyright = styled.p`
  font-size: 1.6rem;
  color: rgba(103, 103, 103, 1);

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    order: 3;
    align-self: flex-end;
  }
`;
export const FooterMenuContainer = styled.nav`
  display: flex;
  gap: 3rem;
  font-size: 1.6rem;
  & a {
    color: rgba(207, 207, 207, 1);
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    flex-basis: 50%;
    height: fit-content;
  }
`;

export const FooterSnsContainer = styled.nav`
  display: flex;
  gap: 1.2rem;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    justify-content: end;
    flex-basis: 50%;
    height: fit-content;
  }
`;
