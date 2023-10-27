import React from 'react';
import { Link } from 'react-router-dom';
import { logoImg, snsIconG, snsIconK } from '../../constants/globalImages';
import { eyeOffImg } from '../../constants/loginImages';

function SignUpPage() {
  return (
    <>
      <div className="container">
        <header>
          <div className="header-logo">
            <Link to="/">
              <img src={logoImg} alt="Linkbrary 로고" />
            </Link>
          </div>
          <nav>
            <span>이미 회원이신가요?</span>
            <Link className="nav-link" to="/sign-in">
              로그인 하기
            </Link>
          </nav>
        </header>

        <main>
          <form id="form">
            <div className="form-item">
              <label htmlFor="email">
                이메일
                <input id="email" type="text" name="email" />
              </label>
            </div>
            <div className="form-item">
              <label htmlFor="password">
                비밀번호
                <input id="password" type="password" name="password" />
              </label>

              <img
                className="hide-password"
                src={eyeOffImg}
                alt="비밀번호 보이게하기(현재 보이지 않음)"
              />
            </div>
            <div className="form-item">
              <label htmlFor="passwordCheck">
                비밀번호 확인
                <input id="passwordCheck" type="password" name="password" />
              </label>

              <img
                className="hide-password-check"
                src={eyeOffImg}
                alt="비밀번호 보이게하기(현재 보이지 않음)"
              />
            </div>
          </form>
          <div id="signup-button" className="btn">
            회원가입
          </div>
          <div className="sns">
            <span>다른 방식으로 가입하기</span>
            <div className="sns-icons">
              <a href="https://www.google.com/">
                <img src={snsIconG} alt="구글 회원가입 바로가기" />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                <img src={snsIconK} alt="카카오 회원가입 바로가기" />
              </a>
            </div>
          </div>
        </main>
      </div>
      <script type="module" src="addEvents.js" />
      <script type="module" src="signup.js" />
    </>
  );
}

export default SignUpPage;
