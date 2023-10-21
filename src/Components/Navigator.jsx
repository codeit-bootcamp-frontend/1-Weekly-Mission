import { useCallback, useEffect, useState } from 'react';
import { getUser } from '../api/apiClient';

import linkbraryIcon from '../assets/icons/linkbrary.svg';

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
    <header class='gnb'>
      <div class='gnb__inner'>
        <div class='gnb__logo'>
          <a href='/'>
            <img
              src={linkbraryIcon}
              alt='링크브러리 로고'
              class='gnb__logo-img'
            />
            <h1 class='a11y'>Linkbrary - 링크브러리</h1>
          </a>
        </div>
        {isLoggedIn || (
          <div class='gnb__signin'>
            <a href='/' class='button'>
              로그인
            </a>
          </div>
        )}
        {isLoggedIn && (
          <div className='gnb__profile'>
            <img
              src={userInfo.profileImageSource}
              alt='사용자 프로필 사진'
              className='gnb__profile-img'
            />
            <div className='gnb__profile-email'>{userInfo.email}</div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navigator;
