import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  background-color: var(--black);
`;

export const FooterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  grid-template: "copyright footer-links sns";
  height: fit-content;
  max-width: 192rem;
  padding: 3.2rem 10.4rem 0;

  @media (max-width: 767px) {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 3.2rem;
  }
`;

export const Copyright = styled.span`
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;

  @media (max-width: 767px) {
    position: absolute;
    left: 3.2rem;
    bottom: 4rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }
`;

export const FooterLink = styled.a`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
`;
