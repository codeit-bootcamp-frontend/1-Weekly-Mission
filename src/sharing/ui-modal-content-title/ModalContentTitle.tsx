import styles from "./ModalContentTitle.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface ModalContentTitleProps {
  children: ReactNode;
}

export const ModalContentTitle = ({ children }: ModalContentTitleProps) => {
  return <h2 className={cx("title")}>{children}</h2>;
};
