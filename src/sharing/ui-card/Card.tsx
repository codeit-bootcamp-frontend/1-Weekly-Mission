import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type CardProps = {
  children: React.ReactNode;
  onMouseOver: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
};

export const Card: React.FC<CardProps> = ({
  children,
  onMouseOver,
  onMouseLeave,
}) => {
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
