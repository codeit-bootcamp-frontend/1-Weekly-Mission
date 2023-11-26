import styles from "./ModalContentDescription.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface ModalContentDescriptionProps {
  children: ReactNode;
}

export const ModalContentDescription = ({
  children,
}: ModalContentDescriptionProps) => {
  return <p className={cx("description")}>{children}</p>;
};
