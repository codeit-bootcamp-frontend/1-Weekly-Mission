import { ReactNode } from "react";
import styles from "./ModalContentDescription.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ModalContentDescriptionProps = {
  children: ReactNode;
};

export const ModalContentDescription = ({ children }: ModalContentDescriptionProps) => {
  return <p className={cx("description")}>{children}</p>;
};
