import UserProfile from '../UserProfile';
import { useCallback, useEffect, useState } from 'react';
import useAsync from '../../hooks/useAsync';
import { getUserProfile } from '../../api/api';

function Nav() {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoadingUserProfile, userProfileLoadingError, getUserProfileAsync] = useAsync(getUserProfile);

  const handleUserProfile = useCallback(
    async () => {
      const result = await getUserProfileAsync();
      if (!result) {
        return;
      }

      const userProfile = { ...result };
      setUserProfile(userProfile);
    }, [getUserProfileAsync],
  );

  useEffect(() => {
    handleUserProfile();
  }, [handleUserProfile]);

  return (
    <nav>
      <div className='gnb'>
        <img className='logo' src='/assets/images/logo.svg' alt='홈으로 연결된 Linkbrary 로고' />
        <UserProfile userProfile={userProfile} />
        {userProfileLoadingError?.message && <span>{userProfileLoadingError.message}</span>}
      </div>
    </nav>
  );
}

export default Nav;
