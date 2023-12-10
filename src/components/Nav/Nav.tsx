import Profile from '@components/Profile';
import * as S from './Nav.style';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SampleUserProfile } from '@pages/shared';
import { UserProfile } from '@pages/folder';

interface Props {
  profile?: SampleUserProfile | UserProfile;
}

const Nav = ({ profile }: Props) => {
  const router = useRouter();

  return (
    <S.NavContainer $path={router.pathname}>
      <Link href='/'>
        <img src='/assets/images/logo.svg' alt='홈으로 연결된 Linkbrary 로고' />
      </Link>
      {profile ? (
        <Profile profile={profile} />
      ) : (
        <S.SignInButton href='/signin'>
          <span>로그인</span>
        </S.SignInButton>
      )}
    </S.NavContainer>
  );
};

export default Nav;
