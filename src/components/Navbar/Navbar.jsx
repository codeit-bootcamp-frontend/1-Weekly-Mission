import { Link } from "react-router-dom"

import IMAGES from "../../assets/images.js"
import Button from "../Button/Button.jsx"

import {
  NavBox,
  NavInnerBox,
  NavLogoImage,
  ProfileBox,
  ProfileCollapseParagraph,
  ProfileImage,
} from "./styles.js"

const Logo = ({ link = "/", src, alt, height }) => {
  return (
    <Link to={link}>
      <NavLogoImage src={src} alt={alt} height={height} />
    </Link>
  )
}

const Profile = ({ items }) => {
  const { email, profileImageSource } = items
  return (
    <ProfileBox>
      <ProfileImage src={profileImageSource} alt="profile" />
      <ProfileCollapseParagraph>{email}</ProfileCollapseParagraph>
    </ProfileBox>
  )
}

const Navbar = ({ userData }) => {
  return (
    <NavBox>
      <NavInnerBox>
        <Logo link="/" src={IMAGES.logo} alt="Linkbrary" height={24} />
        {userData?.id ? (
          <Button size="short" link="/signin.html" text="로그인" />
        ) : (
          <Profile items={userData} />
        )}
      </NavInnerBox>
    </NavBox>
  )
}

export default Navbar
