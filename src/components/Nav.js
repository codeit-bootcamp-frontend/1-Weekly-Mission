import Button from './common/Button';
import logo from '../assets/images/logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const INIT_USER = {
  image_source: '',
  email: '',
};

const Account = ({ user }) => {
  return (
    <Box>
      <Img src={user.image_source} alt='프로필 사진' />
      <Email>{user.email}</Email>
    </Box>
  );
};

export default function Nav({ user = INIT_USER, urlPath }) {
  const [isSticky, setIsSticky] = useState('sticky');

  useEffect(() => {
    console.log(urlPath);
    if (urlPath === '/folder') {
      setIsSticky('static');
    } else {
      setIsSticky('sticky');
    }
  }, [urlPath]);

  return (
    <Header $isSticky={isSticky}>
      <Container>
        <Link to='/'>
          <Logo src={logo} alt='로고' />
        </Link>
        {user.email ? <Account user={user} /> : <AuthButton type='로그인' />}
      </Container>
    </Header>
  );
}

const Header = styled.header`
  background: var(--linkbrary-bg, #f0f6ff);
  position: ${({ $isSticky }) => $isSticky};
  width: 100%;
  z-index: 2;
  top: 0;
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
