import * as S from './Navigator.style';
import A11y from 'components/A11y';
import Button from 'components/Button';
import { useCallback, useEffect, useState } from 'react';
import { getUser } from 'utils/apiClient';
import LB_ICON from 'assets/icons/linkbrary.svg';

function Navigator() {
  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loadUser = useCallback(async () => {
    setIsLoggedIn(false);
    const user = await getUser();
    if (user) {
      setIsLoggedIn(true);
    }
    setUserInfo(user);
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

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
              src={userInfo.profileImageSource}
              alt='사용자 프로필 사진'
            />
            <S.ProfileEmail>{userInfo.email}</S.ProfileEmail>
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
