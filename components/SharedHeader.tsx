import { getData } from '../pages/api/api';
import { useCallback, useState, useEffect } from 'react';
import * as N from './styled-component/NavStyledComponent';
import Image from 'next/image';
import styled from 'styled-components';

interface UserState {
  id: number;
  name: string;
  profileImageSource: string;
}

const Div = styled.div`
  position: relative;
  width: 188px;
  height: 48px;
`;

const SmileDiv = styled.div`
  position: relative;
  width: 60;
  height: 60px;
`;

export default function SharedHeader() {
  const [user, setUser] = useState<UserState>({
    id: 1,
    name: '',
    profileImageSource: '',
  });

  const handleLoad = useCallback(async () => {
    const { folder } = await getData('sample/folder');
    setUser(folder.owner);
  }, []);
  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <N.NavContainer>
      <N.SharedNavWrapper>
        <N.SharedNavLogo>
          <SmileDiv>
            <Image
              src={user.profileImageSource}
              fill
              sizes="100%"
              alt="profileImg"
            />
          </SmileDiv>
          <N.SharedNavDiv className="nav2-div">{user?.name}</N.SharedNavDiv>
        </N.SharedNavLogo>
        <Div>
          <Image
            src="/favorites.svg"
            fill
            sizes="100%"
            alt="starImg"
            priority
          />
        </Div>
      </N.SharedNavWrapper>
    </N.NavContainer>
  );
}
