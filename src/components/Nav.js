import '../styles/Nav.css';
import Button from './Button';
import logo from '../assets/images/logo.svg';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

const INIT_USER = {
  image_source: '',
  email: '',
};

const Account = ({ user }) => {
  return (
    <div className='user-account'>
      <img
        src={user.image_source}
        alt='프로필 사진'
        className='user-profile-image'
      />
      <div className='user-email'>{user.email}</div>
    </div>
  );
};

export default function Nav({ user = INIT_USER }) {
  console.log('user: ', user);
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
      <div className='nav-bar'>
        <img src={logo} alt='로고' className='nav-logo' />
        {user.email ? (
          <Account user={user} />
        ) : (
          <AuthButton type='로그인' className='nav-button' />
        )}
      </div>
    </Header>
  );
}
