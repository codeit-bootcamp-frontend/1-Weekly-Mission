import styled from "styled-components";
import { onMobile } from "styles/mediaQuery";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  padding-top: 3.2rem;
  background-color: var(--black);

  ${onMobile} {
    margin-top: 4rem;
  }
`;

export const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 192rem;
  height: fit-content;
  padding: 0 10.4rem;

  ${onMobile} {
    display: grid;
    grid-template:
      "links sns"
      "copyright .";
    grid-row-gap: 6rem;
    padding: 0 3.2rem;
  }
`;

export const Copyright = styled.span`
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;

  ${onMobile} {
    grid-area: copyright;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;

  ${onMobile} {
    grid-area: links;
  }
`;

export const FooterLink = styled.a`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
`;

export const SNS = styled.div`
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;

  ${onMobile} {
    grid-area: sns;
  }
`;
