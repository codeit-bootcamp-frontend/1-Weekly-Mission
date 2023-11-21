import styles from "./ModalContentButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const ModalContentButton = ({ children, onClick, themeColor = "blue" }) => {
  return (
    <button className={cx("button", themeColor)} onClick={onClick}>
      {children}
    </button>
  );
};
