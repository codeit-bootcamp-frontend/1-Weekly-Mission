import { ReactNode } from "react";
import styles from "./SigninLayout.module.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

type SigninLayoutProps = {
  idInput: ReactNode;
  pwInput: ReactNode;
};

export const SigninLayout = ({ idInput, pwInput }: SigninLayoutProps) => {
  return (
    <div className={cx("container")}>
      <div className={cx("items")}>
        {idInput}
        {pwInput}
      </div>
    </div>
  );
};
