import { ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";

import FacebookImage from "@/public/images/facebook.svg";
import TwitterImage from "@/public/images/twitter.svg";
import YoutubeImage from "@/public/images/youtube.svg";
import InstagramImage from "@/public/images/instagram.svg";
import { SNSLINKS } from "../../constants/constant";

interface FooterLinkProps {
  link: string;
  text: string;
}

interface SNSImageLinkProps {
  name: string;
  children: ReactNode;
}

const FooterLink = ({ link, text }: FooterLinkProps) => {
  return <StyledFooterStyledLink href={link}>{text}</StyledFooterStyledLink>;
};

const SNSImageLink = ({ name, children }: SNSImageLinkProps) => {
  return (
    <FooterSnsHref
      href={SNSLINKS[name]}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </FooterSnsHref>
  );
};

const Footer = () => {
  return (
    <StyledFooterBox>
      <StyledFooterInnerBox>
        <StyledFooterCopyrightSpan>©codeit - 2023</StyledFooterCopyrightSpan>
        <StyledFooterLinksBox>
          <FooterLink link="/privacy" text="Privacy Policy" />
          <FooterLink link="/faq" text="FAQ" />
        </StyledFooterLinksBox>
        <StyledFooterSnsBox>
          <SNSImageLink name="facebook">
            <FacebookImage />
          </SNSImageLink>
          <SNSImageLink name="twitter">
            <TwitterImage />
          </SNSImageLink>
          <SNSImageLink name="youtube">
            <YoutubeImage />
          </SNSImageLink>
          <SNSImageLink name="instagram">
            <InstagramImage />
          </SNSImageLink>
        </StyledFooterSnsBox>
      </StyledFooterInnerBox>
    </StyledFooterBox>
  );
};

export default Footer;

const StyledFooterBox = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  padding-top: 3.2rem;
  background-color: #111322;

  @media screen and (max-width: 767px) {
    padding: 3.2rem;
  }
`;

const StyledFooterInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 192rem;
  height: fit-content;
  padding: 0 10.4rem;

  @media screen and (max-width: 767px) {
    display: grid;
    grid-template:
      "footer-text sns"
      "copyright ."
      /18.1rem 14.5rem;
    row-gap: 6rem;
    padding: 0;
  }
`;

const StyledFooterCopyrightSpan = styled.span`
  color: var(--linkbrary-footer-copyright);
  font-family: Arial;
  font-size: 1.6rem;

  @media screen and (max-width: 767px) {
    grid-area: copyright;
  }
`;

const StyledFooterLinksBox = styled.div`
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;

  @media screen and (max-width: 767px) {
    grid-area: footer-text;
  }
`;

const StyledFooterStyledLink = styled(Link)`
  color: var(--linkbrary-footer-text);
  font-family: Arial;
  font-size: 1.6rem;
  position: relative;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: #ffffff;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

const StyledFooterSnsBox = styled.div`
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;

  @media screen and (max-width: 767px) {
    grid-area: sns;
  }
`;

const FooterSnsHref = styled.a`
  height: 2rem;
  &:hover {
    transform: scale(1.4);
    transition: transform 0.3s ease-in-out;
  }
`;
