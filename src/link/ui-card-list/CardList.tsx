import { ForwardedRef, forwardRef } from "react";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

interface CardListProps {
  children?: React.ReactNode;
}

const cx = classNames.bind(styles);

export const CardList = forwardRef<HTMLDivElement, CardListProps>(({ children }, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={cx("container")}>
      {children}
    </div>
  );
});
