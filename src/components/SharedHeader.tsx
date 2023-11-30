import favorites from '../asset/favorites.svg';
import { getData } from '../api';
import { useCallback, useState, useEffect } from 'react';
import * as N from './styled-component/NavStyledComponent';

interface UserState {
  id: number;
  name: string;
  profileImageSource: string;
}

export default function SharedHeader() {
  const [user, setUser] = useState<UserState>();

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
          <N.SharedNavSmileImg
            src={user?.profileImageSource}
            alt="profileImg"
          />
          <N.SharedNavDiv className="nav2-div">{user?.name}</N.SharedNavDiv>
        </N.SharedNavLogo>
        <div>
          <img src={favorites} alt="starImg" />
        </div>
      </N.SharedNavWrapper>
    </N.NavContainer>
  );
}
