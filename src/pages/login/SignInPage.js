import React from 'react';
import '../../styles/global.css';
import './LoginPageStyle.css';
import { snsIconG, snsIconK } from '../../constants/globalImages';
import { eyeOffImg } from '../../constants/loginImages';
import FormHeader from '../../components/formHeader/FormHeader';

function SignInPage() {
  return (
    <>
      <div className="container">
        <FormHeader action="goToSignUp" />

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
          </form>
          <div id="signin-button" className="btn">
            로그인
          </div>
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
      <script type="module" src="addEvents.js" />
      <script type="module" src="signin.js" />
    </>
  );
}

export default SignInPage;
