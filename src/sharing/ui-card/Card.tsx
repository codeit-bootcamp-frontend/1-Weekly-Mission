import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface CardProps {
  children: ReactNode;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

export const Card = ({ children, onMouseOver, onMouseLeave }: CardProps) => {
  return (
    <div
      className={cx("container")}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};
