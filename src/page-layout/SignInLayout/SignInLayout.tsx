import { ReactNode } from "react";
import styles from "./SignInLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type SignInLayoutProps = {
  titleContainer: ReactNode;
  input: ReactNode;
  passwordInput: ReactNode;
  socialContainer: ReactNode;
};

export const SignInLayout = ({
  titleContainer,
  input,
  passwordInput,
  socialContainer,
}: SignInLayoutProps) => {
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
            <button type="submit" className={cx("button")}>
              로그인
            </button>
          </form>
          <div className={cx("social_container")}>{socialContainer}</div>
        </div>
      </div>
    </>
  );
};
