import { useEffect, useState } from 'react';
import Profile from '@components/Profile';
import * as S from './Nav.style';
import useRequest from '@hooks/useRequest';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    profileImageSource: '',
    image_source: '',
  });
  const [hasProfile, setHasProfile] = useState(false);
  const router = useRouter();
  const url = router.pathname === '/shared' ? '/sample/user' : '/users/1';
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
        setProfile({
          name: typedData.data[0].name,
          email: typedData.data[0].email,
          profileImageSource: '',
          image_source: typedData.data[0].image_source,
        });
      } else {
        setProfile({
          name: typedData.name,
          email: typedData.email,
          profileImageSource: typedData.profileImageSource,
          image_source: '',
        });
      }
      setHasProfile(true);
    };

    loadProfile();
  }, []);

  return (
    <S.NavContainer $path={router.pathname}>
      <Link href='/'>
        <img src='/assets/images/logo.svg' alt='홈으로 연결된 Linkbrary 로고' />
      </Link>
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
