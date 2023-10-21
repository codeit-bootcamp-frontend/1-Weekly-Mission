import library from './img/linkbrary.svg';
import star from './img/star.svg';
import { useState, useEffect } from 'react';
import { getDatas, getUserData } from '../api';
import './Nav.css';
import LogIn from './LogIn';

export default function Nav() {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState([]);

  const handleLoad = async () => {
    const { folder } = await getDatas();
    const data = await getUserData();

    setUser(folder.owner);
    setLogin(data);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="nav1-container">
      <div className="nav1-wrapper">
        <div className="nav1-logo">
          <img className="nav1-libraryImg" src={library} />
        </div>
        <LogIn item={login} />
      </div>
      <div className="nav2-wrapper">
        <div className="nav2-logo">
          <img className="nav2-smileImg" src={user.profileImageSource} />
          <div className="nav2-div">{user.name}</div>
        </div>
        <div className="nav2-starDiv">
          <img className="nav2-starImg" src={star} />
        </div>
      </div>
    </div>
  );
}
