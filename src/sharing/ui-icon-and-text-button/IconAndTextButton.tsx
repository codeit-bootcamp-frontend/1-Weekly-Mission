import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";
import React from "react";

const cx = classNames.bind(styles);

interface IconAndTextButtonProps {
  iconSource: string;
  onClick: () => void;
  key?: string
}

export const IconAndTextButton = ({
  iconSource,
  onClick,
  key
}: IconAndTextButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <img className={cx("icon")} src={iconSource} alt={`${key} 아이콘`} />
      <span className={cx("text")}>{key}</span>
    </button>
  );
};
