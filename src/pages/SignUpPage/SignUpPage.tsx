import styles from "./SignUpPage.module.scss";
import { ReactComponent as LogoImg } from "src/assets/icons/logo.svg";
import SnsSign from "src/commons/components/SnsSign/SnsSign";
import { Link } from "react-router-dom";
import { ReactComponent as EyeOpen } from "src/assets/icons/eye-open.svg";
import { ReactComponent as EyeClose } from "src/assets/icons/eye-close.svg";
import { useState } from "react";

function SignUpPage() {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [eyeOpenRepeat, seteyeOpenRepeat] = useState(false);

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
            이미 회원이신가요?
            <span className={styles["signup-link"]}>
              <Link to="/signin">로그인 하기</Link>
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

            <div className={styles["psw-repeat-container"]}>
              <label htmlFor="psw-repeat">
                비밀번호 확인
                <input type="password" id="psw-repeat"></input>
                <button
                  id="eyeButton-repeat"
                  className={styles["eye-button-repeat"]}
                  type="button"
                  onClick={() => seteyeOpenRepeat(!eyeOpenRepeat)}
                >
                  {eyeOpenRepeat ? <EyeOpen /> : <EyeClose />}
                </button>
              </label>
            </div>

            <button className={styles["button"]}>회원가입</button>
          </form>
        </div>
        <SnsSign label="다른 방식으로 가입하기" />
      </div>
    </div>
  );
}

export default SignUpPage;
