import React from "react";
import styles from "./ModalContentDescription.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ModalContentDescriptionProps = {
  children: React.ReactNode;
};

export const ModalContentDescription: React.FC<
  ModalContentDescriptionProps
> = ({ children }) => {
  return <p className={cx("description")}>{children}</p>;
};
