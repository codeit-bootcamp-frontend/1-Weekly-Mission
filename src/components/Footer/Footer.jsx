import { Link } from "react-router-dom"

import IMAGES from "../../assets/images.js"

import {
  FooterBox,
  FooterCopyrightSpan,
  FooterInnerBox,
  FooterLinksBox,
  FooterSnsBox,
  FooterSnsImage,
  FooterStyledLink,
} from "./styles.js"

const snsLinks = {
  facebook: "https://www.facebook.com/",
  twitter: "https://www.twitter.com/",
  youtube: "https://www.youtube.com/",
  instagram: "https://www.instagram.com/",
}
const FooterLink = ({ link, text }) => {
  return <FooterStyledLink to={link}>{text}</FooterStyledLink>
}

const SNSImageLink = ({ src, name }) => {
  return (
    <Link to={snsLinks[name]} target="_blank" rel="noopener noreferrer">
      <FooterSnsImage src={src} alt={name} height={20} />
    </Link>
  )
}

const Footer = () => {
  return (
    <FooterBox>
      <FooterInnerBox>
        <FooterCopyrightSpan>©codeit - 2023</FooterCopyrightSpan>
        <FooterLinksBox>
          <FooterLink link="/privacy.html" text="Privacy Policy" />
          <FooterLink link="/faq.html" text="FAQ" />
        </FooterLinksBox>
        <FooterSnsBox>
          <SNSImageLink src={IMAGES.facebook} name="facebook" />
          <SNSImageLink src={IMAGES.twitter} name="twitter" />
          <SNSImageLink src={IMAGES.youtube} name="youtube" />
          <SNSImageLink src={IMAGES.instagram} name="instagram" />
        </FooterSnsBox>
      </FooterInnerBox>
    </FooterBox>
  )
}

export default Footer
