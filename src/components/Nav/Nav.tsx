import linkbraryLogo from 'images/logo.svg';
import { useEffect, useState } from 'react';
import Profile from 'components/Profile';
import * as S from './Nav.style';
import { useLocation } from 'react-router';
import useRequest from 'hooks/useRequest';

interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

interface User {
  data: Data[];
}

interface Data {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

function Nav() {
  const [profile, setProfile] = useState({});
  const [hasProfile, setHasProfile] = useState(false);
  const location = useLocation();
  const url = location.pathname === '/shared' ? '/sample/user' : '/users/1';
  const { fetch: fetchLoad } = useRequest({
    options: { url: url },
  });

  useEffect(() => {
    const loadProfile = async () => {
      const { data } = await fetchLoad();
      if (!data) {
        setHasProfile(false);
        return;
      }
      const typedData = data as SampleUser | User;
      if ('data' in typedData) {
        setProfile(
          location.pathname === '/shared' ? typedData : typedData.data[0]
        );
      } else {
        setProfile(typedData);
      }
      setHasProfile(true);
    };

    loadProfile();
  }, []);

  return (
    <S.NavContainer $path={location.pathname}>
      <a href='/'>
        <img src={linkbraryLogo} alt='홈으로 연결된 Linkbrary 로고' />
      </a>
      {hasProfile ? (
        <Profile data={profile} />
      ) : (
        <S.SignInButton href='signin.html'>
          <span>로그인</span>
        </S.SignInButton>
      )}
    </S.NavContainer>
  );
}

export default Nav;
