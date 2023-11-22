import React from "react";
import * as S from "./FooterStyle";

import facebookLogo from "../../assets/facebook.png";
import instagramLogo from "../../assets/instagram.png";
import twitterLogo from "../../assets/twitter.png";
import youtubeLogo from "../../assets/youtube.png";

function SocialIcon({ link, imageSource, altText }) {
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
    <S.FooterContainer>
      <S.Frame>
        <S.FooterInfo>
          <S.Codeit2023>@codeit - 2023</S.Codeit2023>
          <S.ExtraInfo>
            <S.Link href="privacy.html">
              <span>Privacy Policy</span>
            </S.Link>
            <S.Link href="faq.html">
              <span>FAQ</span>
            </S.Link>
          </S.ExtraInfo>
          <S.SnsIcons>
            {socialLinks.map((socialLink) => (
              <SocialIcon
                key={socialLink.id}
                link={socialLink.link}
                imageSource={socialLink.imageSource}
                altText={socialLink.altText}
              />
            ))}
          </S.SnsIcons>
        </S.FooterInfo>
      </S.Frame>
    </S.FooterContainer>
  );
}

export default Footer;
