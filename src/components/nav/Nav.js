import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logoImg } from '../../constants/globalImages';
import './NavStyle.css';
import { getUser } from '../../api/api';

function Nav() {
  let accessToken = localStorage.getItem('accessToken');
  const [user, setUser] = useState({});

  const handleUserLoad = async () => {
    const userData = await getUser();
    setUser({ ...userData });
  };

  useEffect(() => {
    handleUserLoad();
  }, []);

  return (
    <div className="nav-container">
      <nav>
        <Link to="/">
          <img src={logoImg} alt="Linkbrary 로고" />
        </Link>
        {accessToken ? (
          <Link to="/sign-in">
            <div className="btn btn-login">로그인</div>
          </Link>
        ) : (
          <div className="user-profile">
            <img src={user.profileImageSource} alt="프로필 이미지" />
            <span>{user.email}</span>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Nav;
