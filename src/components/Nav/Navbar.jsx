import UserProfile from '../UserProfile';
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import useAsync from '../../hooks/useAsync';
import { getUserProfile } from '../../api/api';

function Navbar() {
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
    <NavbarStyle>
      <img className='logo' src='/assets/images/logo.svg' alt='홈으로 연결된 Linkbrary 로고' />
      <UserProfile userProfile={userProfile} />
      {userProfileLoadingError?.message && <span>{userProfileLoadingError.message}</span>}
    </NavbarStyle>
  );
}

export default Navbar;

const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.3rem;
  padding: 1.8rem 3.2rem;

  @media (min-width: 768px) {
    height: 9.4rem;
    max-width: 86.3rem;
  }

  @media (min-width: 1024px) {
    height: 9.4rem;
    max-width: 192rem;
    padding: 0 20rem;
  }
`;
