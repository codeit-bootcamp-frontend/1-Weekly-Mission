import { ReactNode } from "react";
import styles from "./SignUpLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type SignUpLayoutProps = {
  signTitle: ReactNode;
  emailInput: ReactNode;
  passwordInput: ReactNode;
  passwordCheckInput: ReactNode;
  loginButton: ReactNode;
  socialLogin: ReactNode;
};

export const SignUpLayout = ({
  signTitle,
  emailInput,
  passwordInput,
  passwordCheckInput,
  loginButton,
  socialLogin,
}: SignUpLayoutProps) => {
  return (
    <div className={cx("main")}>
      <div className={cx("container")}>
        {signTitle}
        <div className={cx("items")}>
          {emailInput}
          {passwordInput}
          {passwordCheckInput}
          {loginButton}
          {socialLogin}
        </div>
      </div>
    </div>
  );
};
