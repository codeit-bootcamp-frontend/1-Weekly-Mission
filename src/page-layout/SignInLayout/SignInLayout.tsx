import { ReactNode } from "react";
import styles from "./SignInLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type SignInLayoutProps = {
  signTitle: ReactNode;
  emailInput: ReactNode;
  passwordInput: ReactNode;
  loginButton: ReactNode;
  socialLogin: ReactNode;
};

export const SignInLayout = ({
  signTitle,
  emailInput,
  passwordInput,
  loginButton,
  socialLogin,
}: SignInLayoutProps) => {
  return (
    <div className={cx("main")}>
      <div className={cx("container")}>
        {signTitle}
        <div className={cx("items")}>
          {emailInput}
          {passwordInput}
          {loginButton}
          {socialLogin}
        </div>
      </div>
    </div>
  );
};
