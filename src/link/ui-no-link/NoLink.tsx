import styles from "./NoLink.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const NoLink = () => {
  return (
    <div className={cx("container")}>
      <span className={cx("message")}>저장된 링크가 없습니다</span>
    </div>
  );
};
