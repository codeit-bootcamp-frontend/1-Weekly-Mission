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
  // 기존 코드 - Sample 데이터 받을 때와 받는 데이터 객체 구조가 달라 if - else 문으로 처리
  // const { email, image_source } = items
  console.log(items)
  let email, image_source
  if (items.profileImageSource) {
    image_source = items.profileImageSource
  } else {
    image_source = items.image_source
  }
  email = items.email
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
          <Button link="/signin" size="short" text="로그인" />
        ) : (
          <Profile items={data} />
        )}
      </S.NavInnerBox>
    </S.NavBox>
  )
}

export default Navbar
