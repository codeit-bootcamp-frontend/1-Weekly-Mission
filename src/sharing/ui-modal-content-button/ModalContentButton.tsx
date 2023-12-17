import { MouseEventHandler, ReactNode } from "react";
import styles from "./ModalContentButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ModalContentButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  themeColor?: "blue" | "red";
};

export const ModalContentButton = ({
  children,
  onClick,
  themeColor = "blue",
}: ModalContentButtonProps) => {
  return (
    <button className={cx("button", themeColor)} onClick={onClick}>
      {children}
    </button>
  );
};
