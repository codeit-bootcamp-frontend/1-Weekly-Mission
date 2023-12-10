import Link from "next/link";
import FacebookIcon from "@/public/assets/common/img_facebookIcon.png";
import YoutubeIcon from "@/public/assets/common/img_twitterIcon.png";
import InstagramIcon from "@/public/assets/common/img_instagramIcon.png";
import TwitterIcon from "@/public/assets/common/img_twitterIcon.png";
import Image from "next/image";
import {
  CenterItemContainer,
  FooterWrapper,
  SnsItemContainer,
} from "./footerStyled";

const SnsItemArr = [
  {
    href: "https://www.facebook.com/",
    src: FacebookIcon,
  },
  {
    href: "https://twitter.com/",
    src: TwitterIcon,
  },
  {
    href: "https://www.youtube.com/",
    src: YoutubeIcon,
  },
  {
    href: "https://www.instagram.com/",
    src: InstagramIcon,
  },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="contnetContainer">
        <div className="footerItem leftItem">©codeit - 2023</div>
        <CenterItemContainer>
          <Link className="footerItem" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="footerItem" href="/faq">
            FAQ
          </Link>
        </CenterItemContainer>
        <SnsItemContainer>
          {SnsItemArr.map((e, index) => {
            return (
              <Link href={e.href} target="_blank" key={index}>
                <Image src={e.src} alt="snsIcon" width="20" height="20" />
              </Link>
            );
          })}
        </SnsItemContainer>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
