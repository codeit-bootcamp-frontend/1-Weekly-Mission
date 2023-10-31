import React from 'react';
import { Link } from 'react-router-dom';
import { logoImg } from '../../constants/globalImages';
import './FormHeader.css';

function FormHeader() {
  const info = {
    '/sign-in': {
      actionMessage: '회원이 아니신가요?',
      actionLinkText: '회원 가입하기',
      actionLink: '/sign-up',
    },
    '/sign-up': {
      actionMessage: '이미 회원이신가요?',
      actionLinkText: '로그인 하기',
      actionLink: '/sign-in',
    },
  };

  const { actionMessage, actionLinkText, actionLink } = info[location.pathname];

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
