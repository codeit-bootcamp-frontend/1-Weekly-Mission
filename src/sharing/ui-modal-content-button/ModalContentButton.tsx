import { ReactNode } from "react";
import styles from "./ModalContentButton.module.scss";
import classNames from "classnames/bind";

interface ModalContentButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  themeColor?: string;
}

const cx = classNames.bind(styles);

export const ModalContentButton = ({ children, onClick, themeColor = "blue" }: ModalContentButtonProps) => {
  return (
    <button className={cx("button", themeColor)} onClick={onClick}>
      {children}
    </button>
  );
};
