import styles from "./SignInPage.module.scss";
import { ReactComponent as LogoImg } from "src/assets/icons/logo.svg";
import SnsSign from "src/commons/components/SnsSign/SnsSign";
import { Link } from "react-router-dom";
import { ReactComponent as EyeOpen } from "src/assets/icons/eye-open.svg";
import { ReactComponent as EyeClose } from "src/assets/icons/eye-close.svg";
import { useState } from "react";

function SignInPage() {
  const [eyeOpen, setEyeOpen] = useState(false);

  return (
    <div className={styles["signin-page"]}>
      <div className={styles["signin-container"]}>
        <div className={styles["header"]}>
          <Link to="/">
            <div className={styles["logo"]}>
              <LogoImg width="210" />
            </div>
          </Link>
          <div className={styles["description"]}>
            회원이 아니신가요?
            <span className={styles["signup-link"]}>
              <Link to="/signup">회원 가입하기</Link>
            </span>
          </div>
        </div>

        <div className={styles["form"]}>
          <form>
            <div className={styles["email-container"]}>
              <label htmlFor="email">
                이메일
                <input type="text" id="email"></input>
              </label>
            </div>

            <div className={styles["psw-container"]}>
              <label htmlFor="psw">
                비밀번호
                <input type="password" id="psw"></input>
                <button
                  id="eyeButton"
                  className={styles["eye-button"]}
                  type="button"
                  onClick={() => setEyeOpen(!eyeOpen)}
                >
                  {eyeOpen ? <EyeOpen /> : <EyeClose />}
                </button>
              </label>
            </div>
            <button className={styles["button"]}>로그인</button>
          </form>
        </div>
        <SnsSign label="소셜 로그인" />
      </div>
    </div>
  );
}

export default SignInPage;
