import * as S from './Navigator.style';
import { Ally, Button } from 'styles/commons';
import { useCallback, useEffect, useState } from 'react';
import { getUser } from 'utils/apiClient';
import linkbraryIcon from 'assets/icons/linkbrary.svg';

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
          <img src={linkbraryIcon} alt='링크브러리 로고' />
          <Ally>Linkbrary - 링크브러리</Ally>
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
            <Button href='/'>로그인</Button>
          </S.Signin>
        )}
      </S.GnbInner>
    </S.GnbContainer>
  );
}

export default Navigator;
