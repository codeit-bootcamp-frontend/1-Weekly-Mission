import React from "react";
import styles from "./CardContent.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type CardContentProps = {
  elapsedTime: string;
  description: string;
  createdAt: string;
  isHovered: boolean;
};

export const CardContent: React.FC<CardContentProps> = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
}) => {
  return (
    <div className={cx("container", { hovered: isHovered })}>
      <span className={cx("elapsed-time")}>{elapsedTime}</span>
      <p className={cx("description")}>{description}</p>
      <span className={cx("created-at")}>{createdAt}</span>
    </div>
  );
};
