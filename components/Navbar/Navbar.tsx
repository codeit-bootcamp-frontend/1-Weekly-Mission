import Link from "next/link";
import styled from "styled-components";

import { mapNavbarData } from "../../utils/mapFetch";
import LogoSmallImage from "@/public/images/logo-small.svg";
import LinkButton from "../Button/LinkButton";

interface LogoProps {
  link: string;
  alt: string;
}

interface ProfileProps {
  items: {
    id: number;
    created_at?: string;
    name: string;
    image_source?: string;
    profileImageSource?: string;
    email: string;
    auth_id?: string;
  };
}

interface NavbarProps {
  userData: {
    id: number;
    created_at?: string;
    name: string;
    image_source?: string;
    profileImageSource?: string;
    email: string;
    auth_id?: string;
  };
  fixed: boolean;
}

type styledObjectType = object | undefined;

const Logo = ({ link = "/", alt }: LogoProps) => {
  return (
    <Link href={link}>
      <LogoSmallImage alt={alt} />
    </Link>
  );
};

const Profile = ({ items }: ProfileProps) => {
  const { email, image_source } = mapNavbarData(items);

  return (
    <StyledProfileBox>
      <StyledProfileImage src={image_source} alt="profile" />
      <StyledProfileCollapseParagraph>{email}</StyledProfileCollapseParagraph>
    </StyledProfileBox>
  );
};

const Navbar = ({ userData, fixed }: NavbarProps) => {
  let styledObject: styledObjectType;
  if (fixed) {
    styledObject = {
      position: "fixed",
      top: 0,
    };
  }

  return (
    <StyledNavBox style={styledObject}>
      <StyledNavInnerBox>
        <Logo link="/" alt="Linkbrary" />
        {!userData?.id ? (
          <LinkButton link="/signin" size="short" text="로그인" />
        ) : (
          <Profile items={userData} />
        )}
      </StyledNavInnerBox>
    </StyledNavBox>
  );
};

export default Navbar;

const StyledNavBox = styled.nav`
  position: relative;
  top: -9.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9.4rem;
  background-color: var(--linkbrary-bg);
  padding: 2rem 20rem;
  gap: 0.8rem;
  z-index: 2;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 0;
  }

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

const StyledNavInnerBox = styled.div`
  width: 152rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 79.9rem;
    padding: 0 min(3.2rem);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 min(3.2rem);
  }
`;

const StyledProfileBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledProfileImage = styled.img`
  width: 2.8rem;
  border-radius: 100%;
`;

const StyledProfileCollapseParagraph = styled.p`
  color: var(--linkbrary-gray-100, #373740);
  margin-left: 0.6rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
