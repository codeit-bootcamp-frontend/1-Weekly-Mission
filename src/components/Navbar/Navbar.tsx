import React from 'react';
import { Link } from 'react-router-dom';

import IMAGES from '../../assets/images';
import LinkButton from '../Button/LinkButton';
import * as S from './styles';
import { mapNavbarData } from '../../utils/mapFetch';

interface LogoProps {
  link: string;
  src: string;
  alt: string;
  height: number;
}

interface ProfileProps {
  items: {
    id: number;
    created_at?: string;
    createdAt?: string;
    name: string;
    image_source?: string;
    profileImageSource?: string;
    email: string;
    auth_id: string;
  };
}

interface NavbarProps {
  userData: any;
  fixed: boolean;
}

type styledObjectType = object | undefined;

const Logo = ({ link = '/', src, alt, height }: LogoProps) => {
  return (
    <Link to={link}>
      <S.NavLogoImage src={src} alt={alt} height={height} />
    </Link>
  );
};

const Profile = ({ items }: ProfileProps) => {
  const { email, image_source } = mapNavbarData(items);

  return (
    <S.ProfileBox>
      <S.ProfileImage src={image_source} alt="profile" />
      <S.ProfileCollapseParagraph>{email}</S.ProfileCollapseParagraph>
    </S.ProfileBox>
  );
};

const Navbar = ({ userData, fixed }: NavbarProps) => {
  let styledObject: styledObjectType;
  if (fixed) {
    styledObject = {
      position: 'fixed',
      top: 0,
    };
  }

  return (
    <S.NavBox style={styledObject}>
      <S.NavInnerBox>
        <Logo link="/" src={IMAGES.logo} alt="Linkbrary" height={24} />
        {!userData?.id ? (
          <LinkButton link="/signin" size="short" text="로그인" />
        ) : (
          <Profile items={userData} />
        )}
      </S.NavInnerBox>
    </S.NavBox>
  );
};

export default Navbar;
