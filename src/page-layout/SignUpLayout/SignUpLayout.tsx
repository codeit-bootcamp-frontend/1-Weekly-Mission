import { ReactNode } from "react";
import styles from "./SignUpLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type SignUpLayoutProps = {
  titleContainer: ReactNode;
  input: ReactNode;
  passwordInput: ReactNode;
  re_passwordInput: ReactNode;
  socialContainer: ReactNode;
};

export const SignUpLayout = ({
  titleContainer,
  input,
  passwordInput,
  re_passwordInput,
  socialContainer,
}: SignUpLayoutProps) => {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("logo_container")}>{titleContainer}</div>
          <form>
            <div className={cx("part")}>
              <label className={cx("label")} id="email">
                이메일
              </label>
              {input}
            </div>
            <div className={cx("part")}>
              <label className={cx("label")} id="password">
                비밀번호
              </label>
              {passwordInput}
            </div>
            <div className={cx("part")}>
              <label className={cx("label")} id="re_password">
                비밀번호 확인
              </label>
              {re_passwordInput}
            </div>
            <button type="submit" className={cx("button")}>
              회원가입
            </button>
          </form>
          <div className={cx("social_container")}>{socialContainer}</div>
        </div>
      </div>
    </>
  );
};
