import Image from "next/image";
import styles from "./FolderInfo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type FolderInfoProps = {
  profileImage?: string;
  ownerName?: string;
  folderName?: string;
};

export const FolderInfo = ({
  profileImage = "",
  ownerName = "",
  folderName = "",
}: FolderInfoProps) => {
  return (
    <div className={cx("container")}>
      <div className={cx("profile")}>
        <Image
          fill
          alt="폴더 소유자 프로필 이미지"
          src={profileImage ? profileImage : ""}
        />
      </div>
      <span className={cx("owner")}>{ownerName}</span>
      <h2 className={cx("folder")}>{folderName}</h2>
    </div>
  );
};
