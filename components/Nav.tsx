import { useState, useEffect } from 'react';
import { getData } from '../pages/api/api';
import Profile from './Profile';
import * as N from '../style/styled-component/Nav/NavStyledComponent';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface LoginState {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
  created_at: string;
  image_source: string;
  auth_id: string;
}

export default function Nav() {
  const [login, setLogin] = useState<LoginState>();
  const router = useRouter();

  const url = router.pathname;
  const handleLoad = async () => {
    if (url === '/shared' || '/') {
      const data = await getData('sample/user');
      setLogin(data);
    } else if (url === '/folder') {
      const { data } = await getData('users/1');
      setLogin(data);
    }
  };

  useEffect(() => {
    setLogin(undefined);
  }, [url]);
  return (
    <N.NavContainer>
      <N.NavWrapper>
        <Link href="/">
          <N.NavLibraryImg>
            <Image src="/linkbrary.svg" fill priority alt="libraryLogo" />
          </N.NavLibraryImg>
        </Link>
        {login?.id ? (
          <Profile item={login} />
        ) : (
          <N.NavLoginButton onClick={handleLoad}>로그인</N.NavLoginButton>
        )}
      </N.NavWrapper>
    </N.NavContainer>
  );
}
