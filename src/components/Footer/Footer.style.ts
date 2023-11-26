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
  height: fit-content;
  max-width: 192rem;
  padding: 0 10.4rem;

  ${onMobile} {
    display: grid;

    padding: 0 3.2rem;

    grid-row-gap: 6rem;
    grid-template:
      "links sns"
      "copyright .";
  }
`;

export const Copyright = styled.span`
  color: #676767;
  font-size: 1.6rem;

  font-family: Arial;

  ${onMobile} {
    grid-area: copyright;
  }
`;

export const FooterLinks = styled.div`
  display: flex;

  padding-right: 1.8rem;

  column-gap: 3rem;

  ${onMobile} {
    grid-area: links;
  }
`;

export const FooterLink = styled.a`
  color: #cfcfcf;
  font-size: 1.6rem;

  font-family: Arial;
`;

export const SNS = styled.div`
  display: flex;

  height: 2rem;

  column-gap: 1.2rem;

  ${onMobile} {
    grid-area: sns;
  }
`;
