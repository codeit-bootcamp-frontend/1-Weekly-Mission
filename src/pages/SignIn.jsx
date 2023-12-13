import { useState } from "react";
import styles from "../styles/signin.module.css";
import classNames from "classnames";
const cx = classNames.bind(styles);

export default function SignIn() {
  const [emailInput, setEmailInput] = useState("");

  console.log(emailInput);

  return (
    <main className={cx("signin-main")}>
      <div className={cx("logo-and-signup")}>
        <div className={cx("logo")}>
          <a href="/">
            <img src="images/signin/logo.svg" />
          </a>
        </div>
        <span>
          회원이 아니신가요? <a href="signup.html">회원 가입하기</a>
        </span>
      </div>

      <div className={cx("input-frame")}>
        <form>
          <div className={cx("input-box")}>
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              className={cx("flex-center")}
              name="email"
              type="email"
              onChange={(e) => setEmailInput(e.target.value)}
              defaultValue={emailInput}
            />
            <p className={cx("error")}></p>
          </div>
          <div className={cx("input-box")}>
            <label htmlFor="password">비밀번호</label>
            <div className="password">
              <input
                id="password"
                className="flex-center"
                name="password"
                type="password"
              />
              <img className="eye-Image" src="images/signin/eye-off.svg" />
              <p className="error"></p>
            </div>
          </div>

          <button className="login-button flex-center" type="submit">
            로그인
          </button>
        </form>
      </div>

      <div className="social-login">
        <span>소셜 로그인</span>
        <div className="icons">
          <a href="https://www.google.com/">
            <img src="images/signin/google.png" />
          </a>
          <a href="https://www.kakaocorp.com/page/">
            <img src="images/signin/kakaotalk.png" />
          </a>
        </div>
      </div>
    </main>
  );
}
