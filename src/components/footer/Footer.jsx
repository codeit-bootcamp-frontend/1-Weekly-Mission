import * as S from "./Footer.style";
import facebookLogo from "../../images/footer/facebook.svg";
import twitterLogo from "../../images/footer/twitter.svg";
import youtubeLogo from "../../images/footer/youtube.svg";
import instagramLogo from "../../images/footer/instagram.svg";
const Footer = () => {
  return (
    <S.Footer>
      <S.FooterCompany>©codeit - 2023</S.FooterCompany>

      <S.FooterSupport>
        <a href="/support/privacy">Privacy Policy</a>
        <a href="/support/faq">FAQ</a>
      </S.FooterSupport>

      <S.FooterSocial>
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
      </S.FooterSocial>
    </S.Footer>
  );
};

export default Footer;
