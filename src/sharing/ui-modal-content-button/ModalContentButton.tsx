import styles from "./ModalContentButton.module.scss";
import classNames from "classnames/bind";
import { MouseEvent } from "react";

const cx = classNames.bind(styles);

interface ModalContentButtonProps {
  children: string;
  onClick?: (event: MouseEvent) => void;
  themeColor?: string;
}

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
