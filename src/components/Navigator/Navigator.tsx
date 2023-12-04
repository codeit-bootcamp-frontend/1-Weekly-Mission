import * as S from './Navigator.style';
import useRequest from '@/hooks/useRequest';
import A11y from '@/components/A11y';
import Button from '@/components/Button';
import { IconLinkbrary } from '@/public/svgs';

interface Props {
  isLoggedIn: boolean;
  userId: number;
  navRef?: React.RefObject<HTMLDivElement>;
}

interface UserInfo {
  data: {
    auth_id: string;
    created_at: string;
    email: string;
    id: number;
    image_source: string;
    name: string;
  }[];
}

function Navigator({ isLoggedIn, userId, navRef }: Props) {
  const { data } = useRequest<UserInfo>({
    skip: !isLoggedIn,
    options: {
      url: `/users/${userId}`,
      method: 'get',
    },
  });

  const userInfo = data?.data?.[0];

  return (
    <S.GnbContainer ref={navRef}>
      <S.GnbInner>
        <S.Logo href='/'>
          <IconLinkbrary />
          <A11y>Linkbrary - 링크브러리</A11y>
        </S.Logo>
        {isLoggedIn ? (
          <S.Profile>
            <S.ProfileImg
              src={userInfo?.image_source}
              alt='사용자 프로필 사진'
            />
            <S.ProfileEmail>{userInfo?.email}</S.ProfileEmail>
          </S.Profile>
        ) : (
          <S.Signin href='/signin'>
            <Button>로그인</Button>
          </S.Signin>
        )}
      </S.GnbInner>
    </S.GnbContainer>
  );
}

export default Navigator;
