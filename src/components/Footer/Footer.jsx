import { Link } from "react-router-dom"

import IMAGES from "../../assets/images.js"

import * as S from "./styles.js"

const snsLinks = {
  facebook: "https://www.facebook.com/",
  twitter: "https://www.twitter.com/",
  youtube: "https://www.youtube.com/",
  instagram: "https://www.instagram.com/",
}
const FooterLink = ({ link, text }) => {
  return <S.FooterStyledLink to={link}>{text}</S.FooterStyledLink>
}

const SNSImageLink = ({ src, name }) => {
  return (
    <Link to={snsLinks[name]} target="_blank" rel="noopener noreferrer">
      <S.FooterSnsImage src={src} alt={name} height={20} />
    </Link>
  )
}

const Footer = () => {
  return (
    <S.FooterBox>
      <S.FooterInnerBox>
        <S.FooterCopyrightSpan>©codeit - 2023</S.FooterCopyrightSpan>
        <S.FooterLinksBox>
          <FooterLink link="/privacy.html" text="Privacy Policy" />
          <FooterLink link="/faq.html" text="FAQ" />
        </S.FooterLinksBox>
        <S.FooterSnsBox>
          <SNSImageLink src={IMAGES.facebook} name="facebook" />
          <SNSImageLink src={IMAGES.twitter} name="twitter" />
          <SNSImageLink src={IMAGES.youtube} name="youtube" />
          <SNSImageLink src={IMAGES.instagram} name="instagram" />
        </S.FooterSnsBox>
      </S.FooterInnerBox>
    </S.FooterBox>
  )
}

export default Footer
