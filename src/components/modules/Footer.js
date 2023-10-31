import React from "react";
import facebookLogo from "../../images/footer/facebook.svg";
import twitterLogo from "../../images/footer/twitter.svg";
import youtubeLogo from "../../images/footer/youtube.svg";
import instagramLogo from "../../images/footer/instagram.svg";
import styled from "styled-components";
import DeviceSizes from "../../utils/DeviceSizes";

const StyledFooter = styled.footer`
  display: flex;
  padding: 3.2rem 10.4rem 6.4rem;
  background: var(--the-julge-black);
  justify-content: space-between;
  ${DeviceSizes.mobile} {
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
  & span {
    color: #676767;
    font-family: Arial;
    font-size: 1.6rem;
    min-width: 10.5rem;
    grid-area: footer__company;
  }
`;

const FooterSupport = styled.div`
  display: flex;
  gap: 3rem;
  grid-area: footer__support;
  ${DeviceSizes.mobile} {
    grid-area: footer__support;
  }
  & a {
    color: #cfcfcf;
    font-family: Arial;
    font-size: 1.6rem;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1.2rem;
  min-width: 11.6rem;
  ${DeviceSizes.mobile} {
    grid-area: footer__social;
  }
  & a {
    color: #cfcfcf;
    font-family: Arial;
    font-size: 1.6rem;
  }
`;

const Footer = React.forwardRef((_, ref) => {
  return (
    <StyledFooter ref={ref}>
      <span>©codeit - 2023</span>

      <FooterSupport>
        <a href="/support/privacy">Privacy Policy</a>
        <a href="/support/faq">FAQ</a>
      </FooterSupport>

      <FooterSocial>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="페이스북 새창에서 열기" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="트위터 새창에서 열기" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtubeLogo} alt="유튜브 새창에서 열기" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="인스타그램 새창에서 열기" />
        </a>
      </FooterSocial>
    </StyledFooter>
  );
});

export default Footer;
