import library from './img/linkbrary.svg';
import { useState, useEffect } from 'react';
import { getData } from '../api';
import Profile from './Profile';
import * as N from './styled-component/NavStyledComponent';

export interface profileProps {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export default function Nav() {
  const [login, setLogin] = useState<profileProps>();

  const url = window.location.pathname;

  const handleLoad = async () => {
    if (url === '/shared') {
      const data = await getData('sample/user');
      setLogin(data);
    } else if (url === '/folder') {
      const { data } = await getData('users/1');
      setLogin(data);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <N.NavContainer>
      <N.NavWrapper>
        <a href="/">
          <N.NavLibraryImg src={library} alt="libraryLogo" />
        </a>
        {login?.id ? (
          <Profile item={login} />
        ) : (
          <N.NavLoginButton onClick={handleLoad}>로그인</N.NavLoginButton>
        )}
      </N.NavWrapper>
    </N.NavContainer>
  );
}
