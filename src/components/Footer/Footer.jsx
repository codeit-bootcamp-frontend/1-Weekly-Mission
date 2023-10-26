import facebookLogo from "images/sns/facebook.svg";
import twitterLogo from "images/sns/twitter.svg";
import youtubeLogo from "images/sns/youtube.svg";
import instagramLogo from "images/sns/instagram.svg";
import * as S from './Footer.style'

function Footer() {
  return (
    <>
      <S.FooterContainer>
        <S.FooterBox>
          <S.Copyright>©codeit - 2023</S.Copyright>
          <S.FooterLinks>
            <S.FooterLink href="/html/privacy.html">
              Privacy Policy
            </S.FooterLink>
            <S.FooterLink href="/html/faq.html">
              FAQ
            </S.FooterLink>
          </S.FooterLinks>
          <S.SNS>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="facebook 홈페이지로 연결된 facebook 로고" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="twitter 홈페이지로 연결된 twitter 로고" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src={youtubeLogo} alt="youtube 홈페이지로 연결된 youtube 로고" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="instagram 홈페이지로 연결된 instagram 로고" />
            </a>
          </S.SNS>
        </S.FooterBox>
      </S.FooterContainer>
    </>
  );
}

export default Footer;
