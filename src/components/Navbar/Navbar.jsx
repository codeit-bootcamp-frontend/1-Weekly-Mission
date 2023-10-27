import { Link } from "react-router-dom"

import IMAGES from "../../assets/images.js"
import Button from "../Button/Button.jsx"

import * as S from "./styles.js"

const Logo = ({ link = "/", src, alt, height }) => {
  return (
    <Link to={link}>
      <S.NavLogoImage src={src} alt={alt} height={height} />
    </Link>
  )
}

const Profile = ({ items }) => {
  const { email, image_source } = items
  return (
    <S.ProfileBox>
      <S.ProfileImage src={image_source} alt="profile" />
      <S.ProfileCollapseParagraph>{email}</S.ProfileCollapseParagraph>
    </S.ProfileBox>
  )
}

const Navbar = ({ userData }) => {
  const data = userData[0]

  return (
    <S.NavBox>
      <S.NavInnerBox>
        <Logo link="/" src={IMAGES.logo} alt="Linkbrary" height={24} />
        {!data?.id ? (
          <Button link="/signin" size="short" text="로그인" />
        ) : (
          <Profile items={data} />
        )}
      </S.NavInnerBox>
    </S.NavBox>
  )
}

export default Navbar
