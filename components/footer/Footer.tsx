import * as S from "./Footer.style";
import FacebookLogo from "@/images/footer/facebook.svg";
import TwitterLogo from "@/images/footer/twitter.svg";
import YoutubeLogo from "@/images/footer/youtube.svg";
import InstagramLogo from "@/images/footer/instagram.svg";
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
          <FacebookLogo />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterLogo />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <YoutubeLogo />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramLogo />
        </a>
      </S.FooterSocial>
    </S.Footer>
  );
};

export default Footer;
