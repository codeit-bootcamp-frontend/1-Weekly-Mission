import { useState } from "react";
import styles from "../styles/signin.module.css";
import classNames from "classnames/bind";
import Input from "../../components/input/Input";
const cx = classNames.bind(styles);

const INPUT_TYPE = {
  email: { type: "email", placeholder: "이메일을 입력해주세요." },
  password: { type: "password", placeholder: "비밀번호를 입력해주세요." },
};
export default function SignIn() {
  const [emailInput, setEmailInput] = useState("");



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
            <Input
              name={INPUT_TYPE.email.type}
              type={INPUT_TYPE.email.type}
              placeholder={INPUT_TYPE.email.placeholder}
            />

            <p className={cx("error")}></p>
          </div>
          <div className={cx("input-box")}>
            <label htmlFor="password">비밀번호</label>
            <div className={cx("password")}>
              <Input
                name={INPUT_TYPE.password.type}
                type={INPUT_TYPE.password.type}
                placeholder={INPUT_TYPE.password.placeholder}
              />

              <img
                className={cx("eye-Image")}
                src="images/signin/eye-off.svg"
              />
              <p className={cx("error")}></p>
            </div>
          </div>

          <button className={cx("login-button", "flex-center")} type="submit">
            로그인
          </button>
        </form>
      </div>

      <div className={cx("social-login")}>
        <span>소셜 로그인</span>
        <div className={cx("icons")}>
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
