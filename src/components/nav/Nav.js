import React from 'react';
import { Link } from 'react-router-dom';
import { logoImg } from '../../constants/globalImages';
import './NavStyle.css';

function Nav() {
  return (
    <div className="nav-container">
      <nav>
        <Link to="/">
          <img src={logoImg} alt="Linkbrary 로고" />
        </Link>
        <Link to="/sign-in">
          <div className="btn btn-login">로그인</div>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
