import React from "react";
import styles from "./ModalContentTitle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ModalContentTitleProps = {
  children: React.ReactNode;
};

export const ModalContentTitle: React.FC<ModalContentTitleProps> = ({
  children,
}) => {
  return <h2 className={cx("title")}>{children}</h2>;
};
