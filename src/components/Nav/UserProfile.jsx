import { useCallback, useEffect, useState } from 'react';
import useAsync from '../../hooks/useAsync';
import { getUserProfile } from '../../api/user';
import styled from 'styled-components';

const INIT_USER_PROFILE = {
  profileImageSource: '',
  email: '',
};

function UserProfile() {
  const [userProfile, setUserProfile] = useState(INIT_USER_PROFILE);
  const [isLoadingUserProfile, userProfileLoadingError, getUserProfileAsync] = useAsync(getUserProfile);

  const handleUserProfile = useCallback(
    async () => {
      const result = await getUserProfileAsync();
      if (!result) {
        return;
      }

      setUserProfile({ ...result });
    }, [getUserProfileAsync],
  );

  useEffect(() => {
    handleUserProfile();
  }, [handleUserProfile]);


  return (
    <UserProfileContainer>
      <img src={userProfile.profileImageSource} alt='이름' />
      <p>{userProfile.email}</p>
      {userProfileLoadingError?.message && <span>{userProfileLoadingError.message}</span>}
    </UserProfileContainer>
  );
}

export default UserProfile;

const UserProfileContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 70%;
  }

  p {
    display: none;

    @media (min-width: 768px) {
      display: inline-block;
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
`;

