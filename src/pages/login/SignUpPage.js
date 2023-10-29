import React from 'react';
import { snsIconG, snsIconK } from '../../constants/globalImages';
import { eyeOffImg } from '../../constants/loginImages';
import FormHeader from '../../components/formHeader/FormHeader';
import './LoginPage.css';

function SignUpPage() {
  return (
    <>
      <div className="container">
        <FormHeader action="goToSignIn" />
        <main className="main-login">
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
                src={eyeOffImg}
                alt="비밀번호 보이게하기(현재 보이지 않음)"
              />
            </div>
            <div className="form-item">
              <label htmlFor="passwordCheck">비밀번호 확인</label>
              <input id="passwordCheck" type="password" name="password" />
              <img
                className="hide-password-check"
                src={eyeOffImg}
                alt="비밀번호 보이게하기(현재 보이지 않음)"
              />
            </div>
          </form>
          <div id="signup-button" className="btn btn-sign-up">
            회원가입
          </div>
          <div className="sns">
            <span>다른 방식으로 가입하기</span>
            <div className="sns-icons-login">
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
