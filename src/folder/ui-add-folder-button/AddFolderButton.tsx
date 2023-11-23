import React from "react";
import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as AddIcon } from "./add.svg";

const cx = classNames.bind(styles);

interface AddFolderButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const AddFolderButton = ({ onClick }: AddFolderButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <AddIcon className={cx("icon")} />
    </button>
  );
};
