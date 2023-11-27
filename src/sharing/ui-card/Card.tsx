import { MouseEvent, ReactNode } from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";

interface CardProps {
  children: ReactNode;
  onMouseOver: (e: MouseEvent) => void;
  onMouseLeave: (e: MouseEvent) => void;
}

const cx = classNames.bind(styles);

export const Card = ({ children, onMouseOver, onMouseLeave }: CardProps) => {
  return (
    <div className={cx("container")} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};
