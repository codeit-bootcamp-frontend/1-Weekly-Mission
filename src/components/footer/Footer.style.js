import styled from "styled-components";
import { RESPONSIBLE_MEDIA_QUERIES } from "../../constants/mediaQueries";

export const Footer = styled.footer`
  display: flex;
  padding: 3.2rem 10.4rem 6.4rem;
  background: var(--the-julge-black);
  justify-content: space-between;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    display: grid;
    height: 16rem;
    padding: 3.2rem 3.2rem;
    grid-template-areas:
      "footer__support footer__social"
      "footer__company .";
    row-gap: 6rem;
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const FooterCompany = styled.span`
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
  min-width: 10.5rem;
  grid-area: footer__company;
`;

export const FooterSupport = styled.div`
  display: flex;
  gap: 3rem;
  grid-area: footer__support;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    grid-area: footer__support;
  }
  & a {
    color: #cfcfcf;
    font-family: Arial;
    font-size: 1.6rem;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 1.2rem;
  min-width: 11.6rem;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    grid-area: footer__social;
  }
  & a {
    color: #cfcfcf;
    font-family: Arial;
    font-size: 1.6rem;
  }
`;
