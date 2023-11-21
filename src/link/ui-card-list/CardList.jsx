import { forwardRef } from "react";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const CardList = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className={cx("container")}>
      {children}
    </div>
  );
});
