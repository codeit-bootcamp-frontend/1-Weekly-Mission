import { ReactNode } from "react";
import styles from "./ModalContentDescription.module.scss";
import classNames from "classnames/bind";

interface ModalContentDescriptionProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const ModalContentDescription = ({ children }: ModalContentDescriptionProps) => {
  return <p className={cx("description")}>{children}</p>;
};
