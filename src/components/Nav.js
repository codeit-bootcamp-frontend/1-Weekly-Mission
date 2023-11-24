import library from './img/linkbrary.svg';
import { useState } from 'react';
import { getData } from '../api';
import Profile from './Profile';
import * as N from './styled-component/NavStyledComponent';

export default function Nav() {
  const [login, setLogin] = useState([]);
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
  return (
    <N.NavContainer>
      <N.NavWrapper>
        <a href="/">
          <N.NavLibraryImg src={library} alt="libraryLogo" />
        </a>
        {login.id || login[0] ? (
          <Profile item={login} />
        ) : (
          <N.NavLoginButton href="/" onClick={handleLoad}>
            로그인
          </N.NavLoginButton>
        )}
      </N.NavWrapper>
    </N.NavContainer>
  );
}
