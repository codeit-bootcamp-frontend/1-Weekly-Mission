import { ReactNode } from "react";
import styles from "./ModalContentTitle.module.scss";
import classNames from "classnames/bind";
interface ModalContentDescriptionProps {
  children: ReactNode;
}
const cx = classNames.bind(styles);

export const ModalContentTitle = ({ children }: ModalContentDescriptionProps) => {
  return <h2 className={cx("title")}>{children}</h2>;
};
