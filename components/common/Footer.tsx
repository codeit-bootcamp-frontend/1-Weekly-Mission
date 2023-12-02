import Link from "next/link";
import styled from "styled-components";
import FacebookIcon from "@/public/assets/common/img_facebookIcon.png";
import YoutubeIcon from "@/public/assets/common/img_twitterIcon.png";
import InstagramIcon from "@/public/assets/common/img_instagramIcon.png";
import TwitterIcon from "@/public/assets/common/img_twitterIcon.png";
import Image from "next/image";
import { device } from "@/styles/globalStyle";

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

const FooterWrapper = styled.footer`
  background: var(--black);
  width: 100%;
  display: flex;
  padding: 3.2rem 10.4rem 6.4rem;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;

  @media all and (${device.mobile}) {
    padding: 3.2rem;
  }

  .contnetContainer {
    height: 6.4rem;
    align-items: flex-start;
    max-width: 171.2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media all and (${device.mobile}) {
      height: 9.6rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .footerItem {
      font-family: Arial;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.6rem;
    }

    .leftItem {
      color: #676767;
      text-align: center;

      @media all and (${device.mobile}) {
        text-align: start;
        order: 3;
        align-self: flex-end;
      }
    }
  }
`;

const CenterItemContainer = styled.div`
  display: flex;
  gap: 3rem;

  .footerItem {
    color: #cfcfcf;
  }
`;

const SnsItemContainer = styled.div`
  display: flex;
  gap: 1.2rem;

  @media all and (${device.mobile}) {
    justify-content: flex-end;
  }

  Link {
    height: 2rem;

    img {
      cursor: pointer;
    }
  }
`;
