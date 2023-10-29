import { Link } from "react-router-dom"

import IMAGES from "../../assets/images.js"
import LinkButton from "../Button/LinkButton.jsx"
import * as S from "./styles.js"

const Logo = ({ link = "/", src, alt, height }) => {
  return (
    <Link to={link}>
      <S.NavLogoImage src={src} alt={alt} height={height} />
    </Link>
  )
}

const Profile = ({ items }) => {
  // 기존 코드 - Sample 데이터 받을 때와 받는 데이터 객체 구조가 달라 if - else 문으로 처리
  // const { email, image_source } = items
  const email = items.email
  const image_source = items.profileImageSource
    ? items.profileImageSource
    : items.image_source

  return (
    <S.ProfileBox>
      <S.ProfileImage src={image_source} alt="profile" />
      <S.ProfileCollapseParagraph>{email}</S.ProfileCollapseParagraph>
    </S.ProfileBox>
  )
}

const Navbar = ({ userData, fixed }) => {
  const data = userData[0]

  let styledObject
  if (fixed) {
    styledObject = {
      position: "fixed",
      top: 0,
    }
  }

  return (
    <S.NavBox style={styledObject}>
      <S.NavInnerBox>
        <Logo link="/" src={IMAGES.logo} alt="Linkbrary" height={24} />
        {!data?.id ? (
          <LinkButton link="/signin" size="short" text="로그인" />
        ) : (
          <Profile items={data} />
        )}
      </S.NavInnerBox>
    </S.NavBox>
  )
}

export default Navbar
