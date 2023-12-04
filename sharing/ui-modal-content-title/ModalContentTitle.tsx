import { ReactNode } from "react";
import styles from "./ModalContentTitle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ModalContentTitleProps = {
  children: ReactNode;
};

export const ModalContentTitle = ({ children }: ModalContentTitleProps) => {
  return <h2 className={cx("title")}>{children}</h2>;
};
