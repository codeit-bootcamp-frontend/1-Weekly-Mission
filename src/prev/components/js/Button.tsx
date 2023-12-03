import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function StyledButton({ children }: any) {
  return (
    <>
      <button className={cx(".styled_button")}>{children}</button>
    </>
  );
}

export default StyledButton;
