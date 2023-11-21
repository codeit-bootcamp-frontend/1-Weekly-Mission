import styles from "./ModalContentTitle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const ModalContentTitle = ({ children }) => {
  return <h2 className={cx("title")}>{children}</h2>;
};
