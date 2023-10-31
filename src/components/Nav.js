import Button from './Button';
import logo from '../assets/images/logo.svg';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const INIT_USER = {
  image_source: '',
  email: '',
};

const Account = ({ user }) => {
  return (
    <Box className='user-account'>
      <Img
        src={user.image_source}
        alt='프로필 사진'
        className='user-profile-image'
      />
      <Email className='user-email'>{user.email}</Email>
    </Box>
  );
};

export default function Nav({ user = INIT_USER }) {
  const [isSticky, setIsSticky] = useState('sticky');
  const urlPath = useLocation().pathname;
  useEffect(() => {
    if (urlPath === '/folder') {
      setIsSticky('static');
    } else {
      setIsSticky('sticky');
    }
  }, [urlPath]);

  return (
    <Header className='header' $isSticky={isSticky}>
      <Container className='nav-bar'>
        <Link to='/'>
          <Logo src={logo} alt='로고' className='nav-logo' />
        </Link>
        {user.email ? (
          <Account user={user} />
        ) : (
          <AuthButton type='로그인' className='nav-button' />
        )}
      </Container>
    </Header>
  );
}

const Header = styled.header`
  background: var(--linkbrary-bg, #f0f6ff);
  position: ${({ $isSticky }) => $isSticky};
  width: 100%;
  z-index: 2;
`;

const AuthButton = styled(Button)`
  border-radius: 8px;
  width: 128px;
  padding: 16px 20px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 80px;
    padding: 10px 16px;
  }
`;

const Container = styled.div`
  padding: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 1;
  max-width: 1920px;
  margin: auto;
  height: 94px;
  @media (max-width: 1124px) {
    padding: 32px 32px;
    max-width: 800px;
    margin: auto;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Img = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 20px;
`;

const Email = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

const Logo = styled.img`
  @media (max-width: 767px) {
    width: 88.667px;
    height: 16px;
  }
`;
