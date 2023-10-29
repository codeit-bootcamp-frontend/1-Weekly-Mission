import React from 'react';
import { Link } from 'react-router-dom';
import { logoImg } from '../../constants/globalImages';

function FormHeader({ action }) {
  let actionMessage = '';
  let actionLinkText = '';

  if (action === 'goToSignUp') {
    actionMessage = '회원이 아니신가요?';
    actionLinkText = '회원 가입하기';
  }
  if (action === 'goToSignIn') {
    actionMessage = '이미 회원이신가요?';
    actionLinkText = '로그인 하기';
  }

  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <img src={logoImg} alt="Linkbrary 로고" />
        </Link>
      </div>
      <nav>
        <span>{actionMessage}</span>
        <Link className="nav-link" to="/sign-up">
          {actionLinkText}
        </Link>
      </nav>
    </header>
  );
}

export default FormHeader;
