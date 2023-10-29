import React from 'react';
import { Link } from 'react-router-dom';
import { logoImg } from '../../constants/globalImages';
import './FormHeader.css';

function FormHeader({ action }) {
  let actionMessage = '';
  let actionLinkText = '';
  let actionLink = '';

  if (action === 'goToSignUp') {
    actionMessage = '회원이 아니신가요?';
    actionLinkText = '회원 가입하기';
    actionLink = '/sign-up';
  }
  if (action === 'goToSignIn') {
    actionMessage = '이미 회원이신가요?';
    actionLinkText = '로그인 하기';
    actionLink = '/sign-in';
  }

  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <img src={logoImg} alt="Linkbrary 로고" />
        </Link>
      </div>
      <div className="header-text">
        <span>{actionMessage}</span>
        <Link className="nav-link" to={actionLink}>
          {actionLinkText}
        </Link>
      </div>
    </header>
  );
}

export default FormHeader;
