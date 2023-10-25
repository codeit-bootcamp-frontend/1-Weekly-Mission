import '../styles/Nav.css';
import Button from './Button';
import logo from '../assets/images/logo.svg';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = styled.header`
  background: var(--linkbrary-bg, #f0f6ff);
  position: ${({ $isFixed }) => $isFixed};
  width: 100%;
  z-index: 2;
`;

const INIT_USER = {
  image_source: '',
  email: '',
};

const Account = ({ user = INIT_USER }) => {
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

export default function Nav({ user }) {
  const [isFixed, setIsFixed] = useState('fixed');
  const urlPath = useLocation().pathname;
  console.log(urlPath);
  useEffect(() => {
    if (urlPath === '/folder') {
      console.log('스태틱');
      setIsFixed('static');
    } else {
      console.log('픽스');
      setIsFixed('fixed');
    }
  }, [urlPath]);

  return (
    <Header className='header' $isFixed={isFixed}>
      <div className='nav-bar'>
        <img src={logo} alt='로고' className='nav-logo' />
        {user.email ? (
          <Account user={user} />
        ) : (
          <Button type='로그인' className='nav-button' />
        )}
      </div>
    </Header>
  );
}
