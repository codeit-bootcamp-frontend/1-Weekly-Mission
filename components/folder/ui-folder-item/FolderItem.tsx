import { MouseEventHandler } from "react";
import styles from "./FolderItem.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { ImageWrapper } from "sharing/ui-image-wrapper";

const cx = classNames.bind(styles);

type FolderItemProps = {
  folderName: string;
  linkCount: number;
  isSelected?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const FolderItem = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}: FolderItemProps) => {
  return (
    <button
      className={cx("button", { selected: isSelected })}
      onClick={onClick}
    >
      <span className={cx("name", { selected: isSelected })}>{folderName}</span>
      <span className={cx("count")}>{linkCount}개 링크</span>
      {isSelected && (
        <ImageWrapper className={cx("check")}>
          <Image src="images/check.svg" alt="체크 아이콘" />
        </ImageWrapper>
      )}
    </button>
  );
};
