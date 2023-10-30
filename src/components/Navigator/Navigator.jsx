import * as S from './Navigator.style';
import A11y from 'components/A11y';
import Button from 'components/Button';
import { useEffect } from 'react';
import { getUser } from 'utils/apiClient';
import useAsync from 'hooks/useAsync';
import LB_ICON from 'assets/icons/linkbrary.svg';

function Navigator({ isLoggedIn, userId }) {
  const [data, isLoading, loadingError, getUserAsync] = useAsync({
    asyncFunction: getUser,
    initialArgs: userId,
    skip: true,
  });

  useEffect(() => {
    if (isLoggedIn) {
      getUserAsync(userId);
    }
  }, []);

  const userInfo = data?.data[0];

  return (
    <S.GnbContainer>
      <S.GnbInner>
        <S.Logo href='/'>
          <img src={LB_ICON} alt='링크브러리 로고' />
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
          <S.Signin>
            <Button as='a' href='/'>
              로그인
            </Button>
          </S.Signin>
        )}
      </S.GnbInner>
    </S.GnbContainer>
  );
}

export default Navigator;
