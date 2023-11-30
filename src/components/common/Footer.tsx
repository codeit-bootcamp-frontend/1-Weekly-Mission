import React from "react";
import facebookLogo from "../../assets/facebook.png";
import instagramLogo from "../../assets/instagram.png";
import twitterLogo from "../../assets/twitter.png";
import youtubeLogo from "../../assets/youtube.png";
import styled from "styled-components";
import colors from "../../style/colors";
import { device } from "../../style/device";
function SocialIcon({
  link,
  imageSource,
  altText,
}: {
  link: string;
  imageSource: string;
  altText: string;
}) {
  return (
    <a href={link}>
      <img src={imageSource} alt={altText} />
    </a>
  );
}

function Footer() {
  const socialLinks = [
    {
      id: 1,
      link: "https://www.facebook.com",
      imageSource: facebookLogo,
      altText: "Facebook",
    },
    {
      id: 2,
      link: "https://twitter.com",
      imageSource: twitterLogo,
      altText: "Twitter",
    },
    {
      id: 3,
      link: "https://www.youtube.com",
      imageSource: youtubeLogo,
      altText: "YouTube",
    },
    {
      id: 4,
      link: "https://www.instagram.com",
      imageSource: instagramLogo,
      altText: "Instagram",
    },
  ];

  return (
    <FooterContainer>
      <Frame>
        <FooterInfo>
          <Codeit2023>@codeit - 2023</Codeit2023>
          <ExtraInfo>
            <Link href="privacy.html">
              <span>Privacy Policy</span>
            </Link>
            <Link href="faq.html">
              <span>FAQ</span>
            </Link>
          </ExtraInfo>
          <SnsIcons>
            {socialLinks.map((socialLink) => (
              <SocialIcon
                key={socialLink.id}
                link={socialLink.link}
                imageSource={socialLink.imageSource}
                altText={socialLink.altText}
              />
            ))}
          </SnsIcons>
        </FooterInfo>
      </Frame>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  padding-top: 20px;
  background: ${colors.julgeBlack};
  @media ${device.mobile} {
    padding: 30px;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

const FooterInfo = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  font-family: Arial;
  font-size: 1rem;
  font-weight: 400;

  @media ${device.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 6em;
    flex-direction: column;
  }
`;

export const Codeit2023 = styled.div`
  color: #676767;
  text-align: center;
  grid-row: 2;
  grid-column: 1;
  @media ${device.mobile} {
    text-align: start;
  }
`;

const ExtraInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.875rem;
  grid-row: 1;
  grid-column: 1;
  justify-content: flex-start;
  word-break: keep-all;
  font-size: 17px;
  white-space: nowrap;
`;

const Link = styled.a`
  color: #cfcfcf;
  text-decoration: none;
`;

const SnsIcons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  grid-row: 1;
  justify-content: flex-end;
`;

export const SnsIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export default Footer;
