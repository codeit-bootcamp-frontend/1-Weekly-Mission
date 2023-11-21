import styles from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Card = ({ children, onMouseOver, onMouseLeave }) => {
  return (
    <div className={cx("container")} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};
