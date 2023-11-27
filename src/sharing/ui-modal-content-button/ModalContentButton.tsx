import React from "react";
import styles from "./ModalContentButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ModalContentButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  themeColor?: string;
};

export const ModalContentButton: React.FC<ModalContentButtonProps> = ({
  children,
  onClick,
  themeColor = "blue",
}) => {
  return (
    <button className={cx("button", themeColor)} onClick={onClick}>
      {children}
    </button>
  );
};
