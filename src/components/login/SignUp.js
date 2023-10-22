import React from 'react';
import { LogoImg, SnsIconG, SnsIconK } from '../CommonImages';
import { EyeOffImg, EyeOffImg } from './Images';

function SignUp() {
  return (
    <>
      <div className="container">
        <header>
          <div className="header-logo">
            <a href="../..">
              <img src={LogoImg} alt="Linkbrary 로고" />
            </a>
          </div>
          <nav>
            <span>이미 회원이신가요?</span>
            <a className="nav-link" href="/pages/login/signin.html">
              로그인 하기
            </a>
          </nav>
        </header>

        <main>
          <form id="form">
            <div className="form-item">
              <label htmlFor="email">이메일</label>
              <input id="email" type="text" name="email" />
            </div>
            <div className="form-item">
              <label htmlFor="password">비밀번호</label>
              <input id="password" type="password" name="password" />
              <img
                className="hide-password"
                src={EyeOffImg}
                alt="비밀번호 보이게하기(현재 보이지 않음)"
              />
            </div>
            <div className="form-item">
              <label htmlFor="passwordCheck">비밀번호 확인</label>
              <input id="passwordCheck" type="password" name="password" />
              <img
                className="hide-password-check"
                src={EyeOffImg}
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
                <img src={SnsIconG} alt="구글 회원가입 바로가기" />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                <img src={SnsIconK} alt="카카오 회원가입 바로가기" />
              </a>
            </div>
          </div>
        </main>
      </div>
      <script type="module" src="addEvents.js"></script>
      <script type="module" src="signup.js"></script>
    </>
  );
}

export default SignUp;
