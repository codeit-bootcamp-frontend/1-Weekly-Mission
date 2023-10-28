import star from './img/star.svg';
import { getSampleFolderDatas } from '../api';
import './css/Nav.css';
import { useCallback, useState, useEffect } from 'react';

export default function Header() {
  const [user, setUser] = useState([]);

  const handleLoad = useCallback(async () => {
    const { folder } = await getSampleFolderDatas();
    setUser(folder.owner);
  });

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div className="nav-container">
      <div className="nav2-wrapper">
        <div className="nav2-logo">
          <img
            className="nav2-smileImg"
            src={user.profileImageSource}
            alt="profileImg"
          />
          <div className="nav2-div">{user.name}</div>
        </div>
        <div className="nav2-starDiv">
          <img className="nav2-starImg" src={star} alt="starImg" />
        </div>
      </div>
    </div>
  );
}
