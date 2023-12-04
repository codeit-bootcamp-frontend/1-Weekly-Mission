import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import AddIcon from "./add.svg";
import { MouseEventHandler } from "react";
import Image from "next/image";

const cx = classNames.bind(styles);

type AddFolderButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const AddFolderButton = ({ onClick }: AddFolderButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <Image src={AddIcon} alt="추가 이미지" />
    </button>
  );
};
