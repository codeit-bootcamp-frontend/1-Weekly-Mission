import { forwardRef, ReactNode, Ref } from "react";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const CardList = forwardRef(
  ({ children }: { children: ReactNode }, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className={cx("container")}>
        {children}
      </div>
    );
  }
);
