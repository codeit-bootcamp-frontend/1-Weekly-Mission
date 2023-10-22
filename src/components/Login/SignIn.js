import React from 'react';
import '../../reset.css';
import '../../common_style.css';
import './style.css';
import { LogoImg } from '../CommonImages';
import { eyeOffImg, snsIconG, snsIconK } from './Images';

function SignIn() {
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
            <span>회원이 아니신가요?</span>
            <a className="nav-link" href="/pages/login/signup.html">
              회원 가입하기
            </a>
          </nav>
        </header>

        <main>
          <form>
            <div className="form-item">
              <label htmlFor="email">이메일</label>
              <input id="email" type="text" name="email" />
            </div>
            <div className="form-item">
              <label htmlFor="password">비밀번호</label>
              <input id="password" type="password" name="password" />
              <img
                className="eye"
                src={eyeOffImg}
                alt="비밀번호 보이게하기(현재 보이지 않음)"
              />
            </div>
          </form>
          <div className="btn">로그인</div>
          <div className="sns">
            <span>소셜 로그인</span>
            <div className="sns-icons">
              <a href="https://www.google.com/">
                <img src={snsIconG} alt="구글 로그인 바로가기" />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                <img src={snsIconK} alt="카카오 로그인 바로가기" />
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default SignIn;
