import * as S from "@/components/footer/Footer.style";
import FacebookLogo from "@/images/footer/facebook.svg";
import InstagramLogo from "@/images/footer/instagram.svg";
import TwitterLogo from "@/images/footer/twitter.svg";
import YoutubeLogo from "@/images/footer/youtube.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <S.Footer>
      <S.FooterCompany>©codeit - 2023</S.FooterCompany>

      <S.FooterSupport>
        <Link href="/support/privacy">Privacy Policy</Link>
        <Link href="/support/faq">FAQ</Link>
      </S.FooterSupport>

      <S.FooterSocial>
        <Link href="https://facebook.com" target="_blank">
          <FacebookLogo />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <TwitterLogo />
        </Link>
        <Link href="https://youtube.com" target="_blank">
          <YoutubeLogo />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <InstagramLogo />
        </Link>
      </S.FooterSocial>
    </S.Footer>
  );
};

export default Footer;
